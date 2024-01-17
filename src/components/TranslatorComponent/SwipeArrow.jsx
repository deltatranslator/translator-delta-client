import { GoArrowSwitch } from "react-icons/go";

const SwipeArrow = () => {
    return (
        <div className="mb-5 lg:mb-0 lg:mt-2 flex justify-center">
            <div className="absolute flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full">
                <GoArrowSwitch size={20} className="transform rotate-90 lg:rotate-0" />
            </div>
        </div>
    );
};

export default SwipeArrow;