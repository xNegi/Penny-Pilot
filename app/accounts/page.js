import AccountCard from "@/components/accounts/AccountCard";
import AccountStats from "@/components/accounts/AccountStats";
import AddAccountButton from "@/components/accounts/AddAccountButton";
import SearchBar from "@/components/accounts/SearchBar";

import { accounts } from "@/data/accounts";

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-4 my-2 mx-4 ">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Accounts</h1>
          <p className="text-gray-500 font-sm">
            Manage all your payment methods in one place.
          </p>
        </div>
        <AddAccountButton />
      </div>
      <SearchBar />
      <AccountStats />
      <div className="space-y-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
}
