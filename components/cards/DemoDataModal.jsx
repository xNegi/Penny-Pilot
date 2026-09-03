"use client";

import { useRouter } from "next/navigation";

export default function DemoDataModal({ onClose }) {
  const router = useRouter();

  const handleLogin = () => {
    onClose();
    router.push("/auth/login");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-xl font-bold text-gray-900">
          Create your own transactions
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          You're currently exploring Penny Pilot with demo data.
          Log in or create an account to start adding and managing
          your own transactions.
        </p>

        <div className="flex justify-end gap-3 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleLogin}
            className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
          >
            Login / Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}