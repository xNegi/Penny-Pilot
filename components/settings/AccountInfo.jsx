import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";

export default function AccountInfo() {
  return (
    <SettingsCard
      title="Account Information"
      description="View and manage your account details"
      icon={<FontAwesomeIcon icon={faUser} />}
    >
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-4 py-4 px-2">
          <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-semibold text-xl">
            AN
          </div>

          <div>
            <p className="font-semibold ">Aryan Negi</p>
            <p className="text-sm text-gray-500">aryan@gmail.com</p>
          </div>
        </div>
        <button className="border border-violet-600 text-violet-600 font-semibold text-sm rounded-2xl p-2">
          Edit Profile
        </button>
      </div>

      <SettingRow
        icon={<FontAwesomeIcon icon={faCalendar} />}
        title="Member Since"
        right="July 2026"
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        title="Email"
        right="aryan@gmail.com"
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faPhone} />}
        title="Phone"
        right="+91 9876543210"
      />
    </SettingsCard>
  );
}
