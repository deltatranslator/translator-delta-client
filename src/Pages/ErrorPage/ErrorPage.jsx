import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-start">
            <div className="w-96 min-h-56 shadow-md p-2 mt-48 rounded-md">
                <div className="w-full">
                    <img src="/public/img/error_img/floating_letters.gif" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-lg font-medium tracking-wider pt-2">Lost in translation again?</h1>
                    <Link to='/' className="btn btn-ghost">Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage