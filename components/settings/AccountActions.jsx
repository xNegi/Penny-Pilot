"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faArrowRightFromBracket,
  faUserAltSlash,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/AuthContext";

export default function AccountAction() {
  const { logout } = useAuth();
  const router = useRouter();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleLogout = async () => {
  try {
    setLoggingOut(true);

    await logout();

    setShowLogoutModal(false);

    router.push("/auth/login");
  } catch (error) {
    console.error("Logout error:", error);
    alert("Something went wrong while logging out");
  } finally {
    setLoggingOut(false);
  }
};

  const deleteAccount = async () => {
    try {
      setDeleting(true);

      const response = await fetch("/api/auth/me", {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to delete account");
        return;
      }

      alert("Account deleted successfully");

      await logout();

      router.push("/auth/login");
    } catch (error) {
      console.error("Delete account error:", error);
      alert("Something went wrong while deleting your account");
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <SettingsCard
        title="Account Action"
        description="Other app configurations"
        icon={<FontAwesomeIcon icon={faUserGear} />}
      >
        {/* Logout */}
        <SettingRow
          icon={
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-red-600"
            />
          }
          title="Logout"
          subtitle="Sign out from your account"
          onClick={() => setShowLogoutModal(true)}
          right={
            <button>
              <FontAwesomeIcon icon={faAngleRight} className="text-red-600" />
            </button>
          }
        />

        {/* logout account */}
        {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-red-600" />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Log out your account?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              You will be signed out of your Penny Pilot account.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                disabled={loggingOut}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loggingOut ? "Logging out..." : "Log Out"}
              </button>
            </div>
          </div>
        </div>
      )}

        {/* Delete Account */}
        <SettingRow
          icon={
            <FontAwesomeIcon icon={faUserAltSlash} className="text-red-600" />
          }
          title={<p className="text-red-600">Delete Account</p>}
          subtitle="Permanently delete your account and data"
          onClick={() => setShowDeleteModal(true)}
          right={
            <button>
              <FontAwesomeIcon icon={faAngleRight} className="text-red-600" />
            </button>
          }
        />
      </SettingsCard>

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <FontAwesomeIcon icon={faUserAltSlash} className="text-red-600" />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Delete your account?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              This will permanently delete your account, transactions, and
              accounts. This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={deleting}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={deleteAccount}
                disabled={deleting}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
