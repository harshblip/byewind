import {
  ArrowsUpDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MOCK_DATA } from "../../../mock/OrderListData";
import { useState } from "react";
import type { FilterState, Order } from "../../../types/OrderList.types";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filters: FilterState;
  updateFilter: (key: keyof FilterState, value: string) => void;
  requestSort: (key: keyof Order) => void;
}

export default function ListFeatureBar({
  searchQuery,
  setSearchQuery,
  filters,
  updateFilter,
  requestSort,
}: Props) {
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique projects for dropdown
  const projectOptions = Array.from(new Set(MOCK_DATA.map((o) => o.project)));
  return (
    <>
      <div className="bg-[#F7F9FB] p-2 rounded-xl mb-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button className="p-2 bg-white md:bg-transparent border border-gray-200 md:border-transparent hover:bg-gray-200 rounded-lg transition-colors text-gray-600 shrink-0">
              <PlusIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-colors border shrink-0 ${
                showFilters
                  ? "bg-white border-gray-300 text-blue-600"
                  : "bg-white md:bg-transparent border-gray-200 md:border-transparent hover:bg-gray-200 text-gray-600"
              }`}
            >
              <FunnelIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => requestSort("timestamp")}
              className="p-2 bg-white md:bg-transparent border border-gray-200 md:border-transparent hover:bg-gray-200 rounded-lg transition-colors text-gray-600 shrink-0"
            >
              <ArrowsUpDownIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
            />
          </div>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm animate-[fadeIn_0.2s_ease-out_forwards]">
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Project
              </label>
              <select
                className="bg-gray-50 border border-gray-200 text-sm rounded-md p-2 w-full md:min-w-37.5 outline-none focus:ring-1 focus:ring-blue-200"
                value={filters.project}
                onChange={(e) => updateFilter("project", e.target.value)}
              >
                <option value="">All Projects</option>
                {projectOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Status
              </label>
              <select
                className="bg-gray-50 border border-gray-200 text-sm rounded-md p-2 w-full md:min-w-37.5 outline-none focus:ring-1 focus:ring-blue-200"
                value={filters.status}
                onChange={(e) => updateFilter("status", e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {(filters.project || filters.status) && (
              <button
                onClick={() => {
                  updateFilter("project", "");
                  updateFilter("status", "");
                }}
                className="self-end mb-1 text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <XMarkIcon className="w-4 h-4" /> Clear
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
