import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp , faSortDown } from '@fortawesome/free-solid-svg-icons';

export default function BalanceCard() {
    return (
      <div className="relative overflow-hidden h-28 flex flex-col justify-center p-4 text-white bg-[#8963f1] rounded-2xl">
        <Image
          src="/images/pigpilot.png"
          alt="Pig"
          width={500}
          height={500}
          className="absolute right-0 bottom-0 h-full w-auto opacity-80 mask-l-from-50% mask-image:linear-gradient(to_left,white,transparent)"
        />

        <div className="relative z-10">
          <p>Total Balance</p>
          <h2 className="text-2xl font-bold">$20.00</h2>
          <div className="flex items-center text-sm">
            <FontAwesomeIcon icon={faSortUp} className="text-green-500 mt-2" />
            <span className="text-green-500">+2.00% since last month</span>
          </div>
        </div>
      </div>
    );
}