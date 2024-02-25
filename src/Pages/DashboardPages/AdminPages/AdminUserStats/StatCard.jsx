import { IoMdMail } from "react-icons/io";
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const StatCard = () => {
    // primary color: #ed7966
    // secondary color: #303179
    return (
        <Tilt className="flex-1" options={defaultOptions} style={{ height: 165, width: 250 }}>
            <div className="w-full bg-blue-100 px-8 py-6 m-4 shadow-lg rounded-md hover:bg-[#303179] hover:text-white transition-all duration-300 hover:bg-opacity-70 backdrop-filter hover:backdrop-blur-sm">
                <div className="flex gap-20 justify-start items-center">
                    <div>
                        <h3 className="font-bold text-3xl mb-2">12,361</h3>
                        <p className="ml-1 tracking-wider">Emails Sent</p>
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-300">
                        <IoMdMail size={28} className="mx-1 shadow-lg" />
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default StatCard