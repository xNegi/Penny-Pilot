"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function ComingSoon() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-1 w-full items-center justify-center rounded-2xl border-2 border-gray-200 shadow-sm p-6">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-semibold">Coming Soon! 🚀</h2>

          <div className="text-sm text-gray-500">
            <p>We're working hard to bring this feature to Penny Pilot.</p>
            <p>It'll be available in a future update.</p>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="rounded-2xl border border-gray-200 p-2 font-semibold text-violet-700 shadow-sm transition hover:bg-gray-50"
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="mr-2 text-violet-700"
          />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}