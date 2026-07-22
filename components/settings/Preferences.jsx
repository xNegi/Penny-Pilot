import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  fa
} from "@fortawesome/free-regular-svg-icons";

export default function Preferences() {
  return (
    <SettingsCard
      title="Preferences"
      description="Customize your app"
      icon={<FontAwesomeIcon icon={faGear}/>}
    >
      <p>Theme</p>
      <p>Notifications</p>
      <p>Privacy</p>
    </SettingsCard>
  );
}