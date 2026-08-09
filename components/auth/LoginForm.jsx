import { FaPiggyBank } from "react-icons/fa6";

export default function LoginForm() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-gray-100/30 border border-gray-300 rounded-2xl shadow-sm p-4">
            <div className="flex items-center justify-center gap-4">
                <div>
                    <FaPiggyBank size={50} className="text-violet-700" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Penny Pilot</h1>
                    <p className="text-gray-500 text-sm">Track. Save. Grow.</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pl-6 ">
                <h2 className="text-2xl font-bold"> Welcome Back!</h2>
                <p className="text-gray-500 text-sm">Login to continue managing your finances</p>
            </div>


        </div>
    )
}