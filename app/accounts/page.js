"use client";

import { useEffect, useState } from "react";

import AccountCard from "@/components/accounts/AccountCard";
import AccountStats from "@/components/accounts/AccountStats";
import AddAccount from "@/components/accounts/AddAccount";
import SearchBar from "@/components/accounts/SearchBar";
import AccountHeader from "@/components/accounts/AccountHeader";
import DemoDataModal from "@/components/cards/DemoDataModal";
import { useAuth } from "@/context/AuthContext";

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const [editAccount, setEditAccount] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const fetchAccounts = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/accounts", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch accounts");
      }

      setAccounts(data.accounts || []);
    } catch (error) {
      console.error("Fetch accounts error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authLoading) return;

    if (user) {
      fetchAccounts();
    } else {
      setAccounts([]);
      setLoading(false);
    }
  }, [user, authLoading]);

  if (authLoading) {
    return (
      <div className="flex min-h-[125px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
      </div>
    );
  }

  const handleDeleteAccount = async (account) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${account.accountName}?`,
    );

    if (!confirmed) return;

    try {
      const response = await fetch("/api/accounts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          accountId: account._id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete account");
      }

      setAccounts((prev) =>
        prev.filter((item) => item._id !== account._id),
      );
    } catch (error) {
      console.error("Delete account error:", error);
    }
  };

  return (
    <div className="my-1 mx-2 flex min-h-[calc(100vh-22px)] flex-col gap-3">
      {/* Header */}
      <AccountHeader
        onAddAccount={() => {
          if (!user) {
            setShowDemoModal(true);
            return;
          }

          setShowAddAccount(true);
        }}
      />

      {/* Demo Modal */}
      {showDemoModal && (
        <DemoDataModal onClose={() => setShowDemoModal(false)} />
      )}

      {/* Add/Edit Account Modal */}
      {showAddAccount && (
        <AddAccount
          editAccount={editAccount}
          onClose={() => {
            setShowAddAccount(false);
            setEditAccount(null);
          }}
          onAddAccount={(account) => {
            setAccounts((prev) => {
              const exists = prev.some(
                (item) => item._id === account._id,
              );

              if (exists) {
                return prev.map((item) =>
                  item._id === account._id ? account : item,
                );
              }

              return [account, ...prev];
            });
          }}
        />
      )}

      {/* Search */}
      <SearchBar />

      {/* Stats */}
      <AccountStats accounts={accounts} />

      {/* Account List */}
      <div className="space-y-4">
        {loading ? (
          <p className="mt-20 text-center text-gray-500 sm:mt-40">
            Loading accounts...
          </p>
        ) : accounts.length === 0 ? (
          <p className="mt-20 text-center text-gray-500 sm:mt-40">
            No accounts added yet.
          </p>
        ) : (
          accounts.map((account) => (
            <AccountCard
              key={account._id}
              account={account}
              onEdit={(account) => {
                setEditAccount(account);
                setShowAddAccount(true);
              }}
              onDelete={handleDeleteAccount}
            />
          ))
        )}
      </div>
    </div>
  );
}