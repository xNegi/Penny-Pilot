"use client"

import { HiPencilSquare } from "react-icons/hi2";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp , faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export default function BalanceCard() {

  const [balance, setBalance] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newBalance, setNewBalance] = useState("")

  const handleEdit = () => {
    setNewBalance(balance.toString())
    setIsEditing(true);
  }

   const handleSave = () => {
    const amount = Number(newBalance);

    if (isNaN(amount) || amount < 0) return;

    setBalance(amount);
    setIsEditing(false);
  };

    return (
      <>
      <div className="relative overflow-hidden h-28 flex flex-col justify-center p-4 text-white bg-[#8963f1] rounded-2xl">
        <Image
          src="/images/pigpilot.png"
          alt="Pig"
          width={500}
          height={500}
          className="absolute right-0 bottom-0 h-full w-auto opacity-80 mask-l-from-50% mask-image:linear-gradient(to_left,white,transparent)"
        />

        <div className="relative z-10">
          <p>Total Balance</p>
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl font-bold">
              ₹{balance.toFixed(2)}
            </h2>

            <button
              onClick={handleEdit} 
              className="flex gap-2 items-center border rounded-lg hover:text-purple-900 px-2">
                Edit 
                <HiPencilSquare size={25} />
            </button>
          </div>
          <div className="flex items-center text-sm">
            <FontAwesomeIcon icon={faSortUp} className="text-green-500 mt-2" />
            <span className="text-green-500">0.00% since last month</span>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800">
              Edit Balance
            </h2>

            <input
              type="number"
              value={newBalance}
              onChange={(e) => setNewBalance(e.target.value)}
              placeholder="Enter balance"
              className="w-full mt-4 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    );
}