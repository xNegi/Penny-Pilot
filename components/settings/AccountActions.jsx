import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faArrowRightFromBracket,
  faUserAltSlash,
  faAngleRight, 
} from "@fortawesome/free-solid-svg-icons";

export default function AccountAction() {
  return (
    <SettingsCard
      title="Account Action"
      description="Other app configurations"
      icon={<FontAwesomeIcon icon={faUserGear} />}
    >
      <SettingRow
        icon={<FontAwesomeIcon icon={faArrowRightFromBracket} className="text-red-600" />}
        title="Logout"
        subtitle="Sign out form your account"
        right={
          <button>
            <FontAwesomeIcon icon={faAngleRight} className="text-red-600"/>
          </button>
        }
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faUserAltSlash}  className="text-red-600"/>}
        title={<p className="text-red-600"> Delete Account</p>}
        subtitle="Permanently delete your account and data"
        right={
          <button>
            <FontAwesomeIcon icon={faAngleRight} className="text-red-600" />
          </button>
        }
      />
    </SettingsCard>
  );
}
