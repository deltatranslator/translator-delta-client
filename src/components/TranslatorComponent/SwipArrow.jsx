import { GoArrowSwitch } from "react-icons/go";

const SwipArrow = () => {
    return (
        <div className="absolute flex justify-center items-center w-10 h-10 hover:bg-gray-200 cursor-pointer rounded-full mt-2">
            <GoArrowSwitch size={20} />
        </div>
    );
};

export default SwipArrow;