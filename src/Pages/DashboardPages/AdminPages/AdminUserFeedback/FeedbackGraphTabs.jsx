import { useEffect, useState } from "react";
import FeedbackGraph from "./FeedbackGraph";
import axiosSecure from "../../../../api";


const FeedbackGraphTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [totalReviews, setTotalReviews] = useState([]);
    const [avgRating, setAvgRating] = useState([]);
    const [totalAverageRating, setTotalAverageRating] = useState(0);

    const getMonth = (dateString) => {
        const [year, month] = dateString.split('-');
        const date = new Date(year, month - 1);
        const monthName = date.toLocaleString('default', { month: 'short' });
        return monthName;
    }

    useEffect(() => {
        axiosSecure.get('/total-reviews')
            .then(res => {
                const newArray = Object.keys(res.data).map(key => ({
                    name: key,
                    month: getMonth(key),
                    dataY: res.data[key].length
                }));
                newArray.sort((a, b) => {
                    const [aYear, aMonth] = a.name.split('-').map(Number);
                    const [bYear, bMonth] = b.name.split('-').map(Number);

                    if (aYear !== bYear) {
                        return aYear - bYear;
                    }

                    return aMonth - bMonth;
                });

                setTotalReviews(newArray);
            })
    }, []);

    const totalReviewsSum = totalReviews.reduce((total, item) => {
        return total + item.dataY;
    }, 0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    useEffect(() => {
        axiosSecure.get('/avg-rating-per-month')
            .then(res => {

                const values = Object.values(res.data);
                const total = values.reduce((acc, val) => acc + val, 0);
                const totalAverage = total / values.length;

                const newArray = Object.keys(res.data).map(key => ({
                    name: key,
                    month: getMonth(key),
                    dataY: res.data[key].toFixed(2)
                }));

                newArray.sort((a, b) => {
                    const [aYear, aMonth] = a.name.split('-').map(Number);
                    const [bYear, bMonth] = b.name.split('-').map(Number);

                    if (aYear !== bYear) {
                        return aYear - bYear;
                    }

                    return aMonth - bMonth;
                });

                setAvgRating(newArray);
                setTotalAverageRating(totalAverage)
            })
    }, [])

    const dates = new Date(1702523815436);
    console.log('new', dates);

    return (
        <div className="container mx-auto bg-white my-8">
            <div className="flex">
                <button
                    className={`p-8 w-96 border-blue-200 hover:bg-gray-50 ${activeTab === 1 ? 'text-blue-500 border-2 bg-[#eef1f8]' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    <p className="font-bold tracking-wide mb-2">Average Rating</p>
                    <h1 className="text-6xl font-bold tracking-wide">{totalAverageRating.toFixed(2)}</h1>
                </button>
                <button
                    className={`p-8 w-96 border-blue-200 hover:bg-gray-50 ${activeTab === 2 ? 'text-blue-500 border-2 bg-[#eef1f8]' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    <p className="font-bold tracking-wide mb-2">Total Reviews</p>
                    <h1 className="text-6xl font-bold tracking-wide">{totalReviewsSum}</h1>
                </button>
            </div>
            <div>
                <FeedbackGraph />
                {activeTab === 1 && (
                    <div className="pt-20 p-4 h-[500px] bg-white">
                        <FeedbackGraph data={avgRating} />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="pt-20 p-4 h-[500px] bg-white">
                        <FeedbackGraph data={totalReviews} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeedbackGraphTabs