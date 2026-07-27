import SettingHeader from "@/components/settings/SettingsHeader";
import AccountInfo from "@/components/settings/AccountInfo";
import Preferences from "@/components/settings/Preferences";
import AppSetting from "@/components/settings/AppSettings";
import AccountAction from "@/components/settings/AccountActions";


export default function Page() {
    return (
        <div className="flex flex-col gap-4 my-2 mx-4">
            <SettingHeader/>
            <AccountInfo/>
            <Preferences/>
            <AppSetting/>
            <AccountAction/>
        </div>
    );
}