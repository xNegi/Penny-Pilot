import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"

export default function PennyPilotCard () {
    return (
        <div className="h-30 flex items-center justify-center border-2 rounded-2xl shadow-sm border-gray-200 bg-violet-500 ">
            <h2 className="text-white font-bold text-2xl">Financial assist with Penny Pilot AI {<FontAwesomeIcon icon={faSquareArrowUpRight}/>} </h2>
        </div>
    )
}