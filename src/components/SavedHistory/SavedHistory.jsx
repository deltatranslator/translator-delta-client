import { RiHistoryFill } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";

const SavedHistory = () => {
    return (
        <div className="container mx-auto flex justify-center items-center gap-8 md:gap-20 my-20">
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border-2 rounded-full cursor-pointer">
                    <RiHistoryFill size={32} className="text-gray-500 font-bold" />
                </div>
                <p className="text-sm tracking-wide font-medium text-gray-500">History</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border-2 rounded-full cursor-pointer">
                    <IoStar size={32} className="text-gray-600 font-bold" />
                </div>
                <p className="text-sm tracking-wide font-medium text-gray-500">Saved</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center border-2 rounded-full cursor-pointer">
                    <HiMiniUserGroup size={36} className="text-gray-600 font-bold" />
                </div>
                <p className="text-sm tracking-wide font-medium text-gray-500">Contribute</p>
            </div>
        </div>
    );
};

export default SavedHistory;