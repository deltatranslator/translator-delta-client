import FeedbackStars from "../../../../components/FeedbackStars/FeedbackStars"


const FeedbackCard = ({ feedback, idx }) => {
    const convertDate = (timestamp) => {
        const date = new Date(timestamp).toLocaleString();
        return date;
    }
    console.log(feedback?.satisfaction);
    return (
        <div tabIndex={0} className="collapse collapse-plus my-4 border-b-[1px] rounded-none">
            <div className="collapse-title text-base md:text-xl font-medium">
                <div className="flex gap-4">
                    <div>
                        <div className="w-12 h-12 flex justify-center items-center overflow-hidden rounded-full">
                            <img src={feedback?.profile} alt="" />
                        </div>
                    </div>
                    <div>
                        <FeedbackStars rating={feedback?.avgSatisfaction.toFixed(1)} />
                        <h1 className="font-bold tracking-wide">{feedback?.userName}</h1>
                        <p className="text-sm text-gray-700">{feedback?.userEmail}</p>
                    </div>
                </div>
            </div>
            <div className="collapse-content flex flex-col items-start gap-2">
                {feedback?.feedbackMessage?.map((feedback, idx) =>
                    <div key={idx} className="flex gap-4">
                        <p className="font-bold">{idx + 1}.</p>
                        <div className="">
                            <p><span className="font-bold">Date:</span> {convertDate(feedback?.feedbackDate)}</p>
                            <p className="px-2 py-4 bg-gray-50 font-medium text-gray-600">
                                {feedback?.feedbackMessageContent}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeedbackCard