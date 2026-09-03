import SettingHeader from "@/components/settings/SettingsHeader";
import AccountInfo from "@/components/settings/AccountInfo";
import Preferences from "@/components/settings/Preferences";
import AppSetting from "@/components/settings/AppSettings";
import AccountAction from "@/components/settings/AccountActions";


export default function Page() {
    return (
        <div className="flex flex-col gap-3 my-1 mx-2">
            <SettingHeader/>
            <AccountInfo/>
            <Preferences/>
            <AppSetting/>
            <AccountAction/>
        </div>
    );
}