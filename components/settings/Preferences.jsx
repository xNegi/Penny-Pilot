import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faPalette,
  faBell,
  faUserShield,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Preferences() {
  return (
    <SettingsCard
      title="Preferences"
      description="Customize your app"
      icon={<FontAwesomeIcon icon={faSliders} />}
    >
      <SettingRow
        icon={<FontAwesomeIcon icon={faPalette} />}
        title="Theme"
        subtitle="Choose your preferred theme"
        right={
          <div className="flex gap-2">
            <button>Dark</button>
            <button>Light</button>
          </div>
        }
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faBell} />}
        title="Notification"
        subtitle="Manage your notification prefrence"
        right={
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        }
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faUserShield} />}
        title="Privacy"
        subtitle="Manage your privacy settings"
        right={
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        }
      />
    </SettingsCard>
  );
}
