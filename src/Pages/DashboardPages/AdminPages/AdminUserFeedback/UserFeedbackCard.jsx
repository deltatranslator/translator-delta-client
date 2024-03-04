

const UserFeedbackCard = ({ feedback, idx }) => {
    return (
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-4">
            <div className="collapse-title text-base md:text-xl font-medium">
                {feedback.userEmail}
            </div>
            <div className="collapse-content flex flex-col items-start gap-2">
                {feedback?.feedbackMessage?.map((feedback, idx) =>
                    <div key={idx} className="flex justify-center items-center gap-2">
                        <p className="font-medium">{idx + 1}.</p>
                        <p className="font-medium bg-orange-50 flex justify-start p-2 rounded-md">
                            {feedback}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserFeedbackCard