import { useState } from "react"
import FeedbackModal from "./FeedbackModal"

const FeedbackButton = () => {

    const [isOpen, setIsOpen] = useState()

    return (
        <div className="mr-36">
            <button onClick={() => setIsOpen(true)} className="btn btn-ghost hover:bg-orange-200">Send Feedback</button>
            <FeedbackModal open={isOpen} close={() => setIsOpen(false)}></FeedbackModal>
        </div>
    )
}

export default FeedbackButton