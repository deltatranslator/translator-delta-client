import { createPortal } from "react-dom";

import { FaRegFaceAngry, FaRegFaceFrown, FaRegFaceMeh, FaRegFaceSmileBeam, FaRegFaceLaughBeam } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const FeedbackModal = ({ open, close }) => {

    const iconStyles = 'text-3xl text-slate-700 w-12 h-12 flex justify-center items-center rounded-full hover:bg-yellow-300 hover:bg-opacity-50 cursor-pointer transition ease-in-out duration-300';

    if (!open) return null;

    return createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-700 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50"></div>
            <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-10 z-50 rounded-md">
                <div className="flex items-center justify-end relative">
                    <div className="absolute cursor-pointer w-12 h-12 hover:bg-orange-300 hover:bg-opacity-80 flex items-center justify-center rounded-full transition ease-in-out duration-500 mt-8">
                        <RxCross1 onClick={close} className="text-2xl" />
                    </div>
                </div>
                <div className="p-2 flex flex-col justify-center items-start">
                    <div className="mb-6 p-2 flex flex-col gap-2 items-start justify-center">
                        <h3 className="text-2xl font-bold tracking-widest mb-4 -mt-3">Give Feedback</h3>
                        <p className="font-medium">What do you think of our website?</p>
                        <ul className="flex gap-4 ml-2">
                            <li className={iconStyles}><FaRegFaceAngry /></li>
                            <li className={iconStyles}><FaRegFaceFrown /></li>
                            <li className={iconStyles}><FaRegFaceMeh /></li>
                            <li className={iconStyles}><FaRegFaceSmileBeam /></li>
                            <li className={iconStyles}><FaRegFaceLaughBeam /></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center p-2 gap-2">
                        <p className="font-medium">Would you like to share your thoughts?</p>
                        <textarea className="w-full dark:bg-slate-200 dark:text-slate-700 dark:border-none text-lg font-normal text-gray-800 border-[1px] focus:outline-none focus:border-[1px] focus:border-gray-300 border-gray-300 shadow-sm rounded-lg p-4 resize-none" name="" id="" cols="45" rows="6"></textarea>
                    </div>
                    <div className="footer pl-8 pr-4 flex justify-around -mb-2 mt-4">
                        <button onClick={close} className="btn btn-ghost w-1/2 flex justify-center items-center hover:bg-orange-300">Send</button>
                        <button onClick={close} className="btn btn-ghost w-1/2 flex justify-center items-center">Cancel</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default FeedbackModal