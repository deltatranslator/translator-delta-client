import { useState } from "react";
import FeedbackGraph from "./FeedbackGraph";


const FeedbackGraphTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="container mx-auto bg-white my-8">
            <div className="flex">
                <button
                    className={`p-8 w-96 border-blue-200 hover:bg-gray-50 ${activeTab === 1 ? 'text-blue-500 border-2 bg-[#eef1f8]' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    <p className="font-bold tracking-wide mb-2">Average Rating</p>
                    <h1 className="text-6xl font-bold tracking-wide">4.88</h1>
                </button>
                <button
                    className={`p-8 w-96 border-blue-200 hover:bg-gray-50 ${activeTab === 2 ? 'text-blue-500 border-2 bg-[#eef1f8]' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    <p className="font-bold tracking-wide mb-2">Total Reviews</p>
                    <h1 className="text-6xl font-bold tracking-wide">210</h1>
                </button>
            </div>
            <div>
                <FeedbackGraph />
                {activeTab === 1 && (
                    <div className="pt-20 p-4 h-[500px] bg-white">
                        <FeedbackGraph />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="pt-20 p-4 h-[500px] bg-white">
                        <FeedbackGraph />
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeedbackGraphTabs