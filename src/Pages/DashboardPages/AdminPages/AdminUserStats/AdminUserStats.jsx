import LanguageChart from "./LanguageChart"
import MonthlyUsersChart from "./MonthlyUsersChart"
import TopLanguages from "./TopLanguages"
import StatCard from "./statCard"


const AdminUserStats = () => {
    return (
        <div>
            <div className="container mx-auto mt-20">
                <h1 className="font-bold text-4xl tracking-widest mb-2 text-gray-800">DASHBOARD</h1>
                <p className="font-medium tracking-widest text-gray-600">Welcome to your dashboard</p>
            </div>
            {/* wrapper */}
            <div className="flex flex-col">
                <div className="flex justify-center gap-10 px-16 container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 my-10 py-12 rounded-lg">
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                </div>
                <div className="container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 mb-10 py-8 px-8 rounded-lg">
                    <div className="mb-8">
                        <h1 className="font-bold text-white text-2xl tracking-wider">Most Used Languages</h1>
                    </div>
                    <div className="flex mx-10 gap-8">
                        <div className="h-[400px] w-4/5 bg-blue-50 my-4 rounded-lg p-8">
                            <LanguageChart />
                        </div>
                        <div className="h-[400px] w-1/5 bg-blue-50 my-4 rounded-lg p-8">
                            <TopLanguages />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-transparent mr-32 mb-10 py-8 px-8 rounded-lg">
                    <div className="mb-8">
                        <h1 className="font-bold text-white text-2xl tracking-wider">Monthly Users</h1>
                    </div>
                    <div className="h-[400px] bg-orange-50 my-4 rounded-lg p-8 mx-10">
                        <MonthlyUsersChart />
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AdminUserStats