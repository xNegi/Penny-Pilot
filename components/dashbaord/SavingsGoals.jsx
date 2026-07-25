import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts , faPlane , faBurger ,faHouseFlag ,faCarSide} from '@fortawesome/free-solid-svg-icons';

export default function SavingsGoals() {
    return (
         <div className="h-90 w-full rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold">Saving Goals</h2>
            <p className="mb-6 text-sm text-gray-500">"A penny saved is a penny earned."</p>

            <div className="flex flex-col gap-7">
         
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faPlane} className="fa-2x rounded-3xl p-2 text-white bg-blue-300"/>
                    <p className="text-lg font-semibold">
                        Dream Vacation
                    </p>
                </div>
                
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCarSide} className="fa-2x rounded-3xl p-2 text-red-600 bg-fuchsia-200"/>
                    <p className="text-lg font-semibold">Buy Car</p>
                </div>

                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faHouseFlag} className="fa-2x rounded-3xl p-2 text-emerald-600 bg-gray-300"/>
                    <p className="text-lg font-semibold">Buy a house</p>
                </div>

            </div>
        </div>
    )
}