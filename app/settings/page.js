import SettingHeader from "@/components/settings/SettingsHeader";
import AccountInfo from "@/components/settings/AccountInfo";
import Preferences from "@/components/settings/Preferences";


export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-4 mx-8">
            <SettingHeader/>
            <AccountInfo/>
            <Preferences/>
        </div>
    );
}