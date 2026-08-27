"use client";

import { useAuth } from "@/context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";

export default function AccountInfo() {
  const { user, loading } = useAuth();

   if (loading) {
    return (
      <SettingsCard
        title="Account Information"
        description="View and manage your account details"
        icon={<FontAwesomeIcon icon={faUser} />}
      >
        <p className="p-4 text-gray-500">
          Loading account information...
        </p>
      </SettingsCard>
    );
  }

  if (!user) {
    return (
      <SettingsCard
        title="Account Information"
        description="View and manage your account details"
        icon={<FontAwesomeIcon icon={faUser} />}
      >
        <p className="p-4 text-red-500">Unable to load account information.</p>
      </SettingsCard>
    );
  }

  return (
    <SettingsCard
      title="Account Information"
      description="View and manage your account details"
      icon={<FontAwesomeIcon icon={faUser} />}
    >
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-4 py-4 px-2">
          <div className="w-14 h-14 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-semibold text-xl">
             {user.fullName
              ?.split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div>
            <p className="font-semibold ">{user.fullName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <button onClick={ () => alert("Feature not available yet")} className="border border-violet-600 text-violet-600 hover:bg-violet-200 transition font-semibold text-sm rounded-2xl p-2">
          Edit Profile
        </button>
      </div>

      <SettingRow
        icon={<FontAwesomeIcon icon={faCalendar} />}
        title="Member Since"
        right={new Date(user.createdAt).toLocaleDateString("en-US",{
          month:"long",
          year:"numeric",
        })}
      />

      <SettingRow
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        title="Email"
        right={user.email}
      />
      <SettingRow
        icon={<FontAwesomeIcon icon={faPhone} />}
        title="Phone"
        right={user.mobileNumber}
      />
    </SettingsCard>
  );
}
