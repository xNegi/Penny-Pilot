import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGlobe,
  faCalendarDays,
  faTrashCan,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function AppSetting() {
  return (
    <SettingsCard
      title="App Settings"
      description="Other app configurations"
      icon={<FontAwesomeIcon icon={faGear} />}
    >
      <SettingRow
        icon={<FontAwesomeIcon icon={faGlobe} />}
        title="Currency"
        subtitle="Choose your default currency"
        right="INR"
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faCalendarDays} />}
        title="Date Format"
        subtitle="Select your preferred date format"
        right="DD/MM/YYYY"
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faTrashCan} />}
        title="Clear Cache"
        subtitle="Free up some space"
        right={
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        }
      />
    </SettingsCard>
  );
}
