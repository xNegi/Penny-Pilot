import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faHouseFlag,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";

export default function SavingsGoals() {
  return (
    <div className="responsive-card">
      <h2 className="text-lg font-semibold">Saving Goals</h2>

      <p className="mb-6 text-sm text-gray-500">
        "A penny saved is a penny earned."
      </p>

      <div className="flex flex-col gap-5 sm:gap-7">
        <div className="flex items-center gap-3 sm:gap-4">
          <FontAwesomeIcon
            icon={faPlane}
            className="rounded-3xl bg-blue-300 p-2 text-white text-xl sm:text-2xl"
          />
          <p className="text-base font-semibold sm:text-lg">
            Dream Vacation
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <FontAwesomeIcon
            icon={faCarSide}
            className="rounded-3xl bg-fuchsia-200 p-2 text-red-600 text-xl sm:text-2xl"
          />
          <p className="text-base font-semibold sm:text-lg">
            Buy Car
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <FontAwesomeIcon
            icon={faHouseFlag}
            className="rounded-3xl bg-gray-300 p-2 text-emerald-600 text-xl sm:text-2xl"
          />
          <p className="text-base font-semibold sm:text-lg">
            Buy a house
          </p>
        </div>
      </div>
    </div>
  );
}