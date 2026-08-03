export default function AccountStats() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">Total Accounts</p>

        <h2 className="mt-2 text-3xl font-bold">4</h2>
      </div>

      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">Primary Bank</p>

        <h2 className="mt-2 text-xl font-semibold">HDFC Bank</h2>
      </div>

      <div className="rounded-2xl border border-gray-300 bg-white p-5">
        <p className="text-sm text-gray-500">Connected UPI</p>

        <h2 className="mt-2 text-3xl font-bold">1</h2>
      </div>
    </div>
  );
}
