import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function RecentTransactions() {
    return (
         <div className="h-90 w-full rounded-3xl bg-white p-6 border-2 border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold">Recent Transaction <FontAwesomeIcon icon={faAngleDown} className='text-gray-400'> </FontAwesomeIcon></h2>

            <div className="mt-6">
                <ul>
                    <div className="flex justify-between">
                        <li className="text-lg font-semibold">
                            Starbucks
                            <div className="flex gap-4 mb-2 ">
                                <p className="text-sm text-gray-500"> May 24, 2026</p>
        {/* category */}        <p className="text-sm text-gray-500">Food</p>
                            </div>
                        </li>
                        <p className="text-lg font-semibold text-red-500">-$2.64</p>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 mt-2">
                    <li className="text-lg font-semibold">
                        Uber
                        <div className="flex gap-4 mb-2">
                            <p className="text-sm text-gray-500"> May 24, 2026</p>
                            <p className="text-sm text-gray-500">Travel/Transportation</p>
                        </div>
                    </li>
                     <p className="text-lg font-semibold text-red-500">-$5.24</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-300 mt-2">
                    <li className="text-lg font-semibold">
                        Shopping
                        <div className="flex gap-4 mb-2">
                            <p className="text-sm text-gray-500"> May 24, 2026</p>
                            <p className="text-sm text-gray-500">Clothes</p>
                        </div>
                    </li>
                    <p className="text-lg font-semibold text-red-500">-$15.74</p>
                    </div>

                    <div className="flex justify-between border-t border-gray-300 mt-2">
                    <li className="text-lg font-semibold">
                        Salary Deposit
                        <div className="flex gap-4 mb-2">
                            <p className="text-sm text-gray-500"> May 24, 2026</p>
                            <p className="text-sm text-gray-500">Income</p>
                        </div>
                    </li>
                     <p className="text-lg font-semibold text-green-500">+$200.24</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}