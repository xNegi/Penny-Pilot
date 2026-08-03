import { HiOutlineDotsVertical } from "react-icons/hi";

export default function AccountCard({ account }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-2xl">
          {account.icon}
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">{account.title}</h2>

            {account.badge && (
              <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-medium text-violet-700">
                {account.badge}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-500">{account.subtitle}</p>

          <p className="mt-1 text-sm font-medium">{account.details}</p>
        </div>
      </div>

      <button className="rounded-lg p-2 hover:bg-gray-100">
        <HiOutlineDotsVertical size={20} />
      </button>
    </div>
  );
}
