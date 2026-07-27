"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"


export default function ComingSoon (){
    const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

    return (
        <div className="w-full flex flex-1 flex-col gap-6 items-center justify-center border-2 rounded-2xl shadow-sm border-gray-200">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">Coming Soon! 🚀</h2>
                <div className="text-sm text-gray-500">
                    <p>We're working hard to bring this feature to Penny Pilot.</p>
                    <p>It'll be available in a future update.</p>
                </div>
            </div>
            <div>
                <button onClick={handleClick}
                className="border border-gray-200 p-2 rounded-2xl shadow-sm text-violet-700 font-semibold ">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-violet-700"/> 
                    Back to Dashbaord
                    </button>
            </div>
        </div>
    )
}