import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function SettingsHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="text-gray-500">
          Manage your preference and account settings.
        </p>
      </div>
    </header>
  );
}