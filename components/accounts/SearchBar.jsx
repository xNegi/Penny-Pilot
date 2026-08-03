import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="relative">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search accounts..."
        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-violet-500"
      />
    </div>
  );
}
