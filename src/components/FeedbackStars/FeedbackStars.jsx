import { LiaStarHalfSolid } from "react-icons/lia";
import { LiaStarSolid } from "react-icons/lia";

const FeedbackStars = ({ rating }) => {

    const rate = Math.floor(rating);
    console.log('rate: ', rate);
    const ratingArray = Array.from({ length: rate }, (_, index) => index + 1);

    return (
        <div className="max-w-md mx-auto">
            <div className="flex">
                {
                    ratingArray.map((element, idx) => {
                        return <LiaStarSolid size={24} className='text-yellow-500 mr-1' key={idx} />
                    })
                }
                {
                    rating > rate ? <LiaStarHalfSolid size={24} className='text-yellow-500 mr-1' /> : ''
                }
                <p className="text-base text-gray-600">({rating})</p>
            </div>
        </div>
    );
};

export default FeedbackStars;
