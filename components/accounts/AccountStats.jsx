export default function AccountStats({ accounts }) {
  const totalAccounts = accounts.length;

  const primaryBank =
    accounts.find((account) => account.accountType === "bank")
      ?.accountName || "No bank account";

  const connectedUPI = accounts.filter(
    (account) => account.accountType === "wallet"
  ).length;

  return (
    <div className="grid gap-5 md:grid-cols-3">

      {/* Total Accounts */}
      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">
          Total Accounts
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalAccounts}
        </h2>
      </div>

      {/* Primary Bank */}
      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">
          Primary Bank
        </p>

        <h2 className="mt-2 text-xl font-semibold">
          {primaryBank}
        </h2>
      </div>

      {/* Connected UPI */}
      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">
          Connected UPI
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {connectedUPI}
        </h2>
      </div>

    </div>
  );
}
