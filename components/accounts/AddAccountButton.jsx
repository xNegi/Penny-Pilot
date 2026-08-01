import { FaPlus } from "react-icons/fa6";

export default function AddAccountButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700 transition">
      <FaPlus />
      Add Account
    </button>
  );
}