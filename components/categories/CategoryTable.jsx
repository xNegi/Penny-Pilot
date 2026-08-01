"use client";

import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const categories = [
  {
    id: 1,
    icon: "🍔",
    name: "Food",
    type: "Expense",
    color: "bg-orange-500",
  },
  {
    id: 2,
    icon: "💰",
    name: "Salary",
    type: "Income",
    color: "bg-green-500",
  },
  {
    id: 3,
    icon: "🚗",
    name: "Fuel",
    type: "Expense",
    color: "bg-red-500",
  },
  {
    id: 4,
    icon: "🛍️",
    name: "Shopping",
    type: "Expense",
    color: "bg-purple-500",
  },
];

export default function CategoryTable(){
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-gray-500 text-sm">
            Manage your income and expense categories.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-2xl font-medium transition">
          <FaPlus />
          Add Category
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search categories..."
            className="w-full border rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <select className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500">
          <option className="text-gray-500 text-sm" >All</option>
          <option className="text-gray-500 text-sm" >Income</option>
          <option className="text-gray-500 text-sm">Expense</option>
        </select>   
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto rounded-xl border-2 border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4 text-violet-700">Icon</th>
              <th className="p-4 text-violet-700">Category</th>
              <th className="p-4 text-violet-700">Type</th>
              <th className="p-4 text-violet-700">Color</th>
              <th className="p-4 text-violet-700 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-t  border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="p-4 text-2xl">{category.icon}</td>

                <td className="pl-8 font-medium">{category.name}</td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      category.type === "Income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {category.type}
                  </span>
                </td>

                <td className="pl-7">
                  <div
                    className={`w-6 h-6 px-2 py-1 rounded-full ${category.color}`}
                  ></div>
                </td>

                <td className="pl-4">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-gray-200 transition">
                      <FaEdit className="text-blue-600" />
                    </button>

                    <button className="p-2 rounded-lg hover:bg-red-100 transition">
                      <FaTrash className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
    