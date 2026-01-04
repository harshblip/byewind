import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useOrderTable } from "../../../hooks/useOrderTable";
import { MOCK_DATA } from "../../../mock/OrderListData";
import DesktopOrderRow from "../../../components/Orders/DesktopOrderRow";
import MobileOrderCard from "../../../components/Orders/MobileOrderCard";
import ListFeatureBar from "../components/ListFeatureBar";

export default function OrderList() {
  const {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilter,
    requestSort,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData: orders,
    totalItems,
  } = useOrderTable(MOCK_DATA, 10);

  return (
    <div className="p-4 md:p-8 bg-white dark:bg-black/80 dark:text-white min-h-screen font-sans text-gray-800 animate-[fadeIn_0.6s_ease-out_forwards]">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <h1 className="text-xl md:text-2xl font-semibold mb-6">Order List</h1>

      <ListFeatureBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        updateFilter={updateFilter}
        requestSort={requestSort}
      />

      {/* 1. DESKTOP VIEW (Table) */}
      <div className="hidden md:block bg-white dark:bg-black/80 dark:text-white rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-black/80 dark:text-white">
              <th className="p-4 w-12">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th
                onClick={() => requestSort("id")}
                className="p-4 cursor-pointer hover:text-gray-600"
              >
                Order ID
              </th>
              <th
                onClick={() => requestSort("user")}
                className="p-4 cursor-pointer hover:text-gray-600"
              >
                User
              </th>
              <th className="p-4">Project</th>
              <th className="p-4">Address</th>
              <th
                onClick={() => requestSort("timestamp")}
                className="p-4 cursor-pointer hover:text-gray-600"
              >
                Date
              </th>
              <th className="p-4">Status</th>
              <th className="p-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <DesktopOrderRow key={order.id} order={order} index={index} />
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-400">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 2. MOBILE VIEW (Cards) */}
      <div className="md:hidden">
        {orders.length > 0 ? (
          orders.map((order) => (
            <MobileOrderCard key={order.id} order={order} />
          ))
        ) : (
          <div className="p-8 text-center text-gray-400 bg-white rounded-xl border border-gray-200">
            No orders found.
          </div>
        )}
      </div>

      <div className="mt-4 md:mt-0 md:p-4 md:border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-white md:bg-transparent p-4 rounded-xl md:rounded-none border md:border-0 shadow-sm md:shadow-none">
        <span className="text-xs text-gray-400">
          Showing {orders.length} of {totalItems} results
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-black/80 dark:text-gray-300 rounded-lg text-gray-400 disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Simple Pagination for Mobile to save space */}
          <div className="flex md:hidden text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </div>

          {/* Full Pagination for Desktop */}
          <div className="hidden md:flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-gray-100 dark:bg-[#1C1C1C] dark:text-white text-gray-700"
                      : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-black/80 dark:text-gray-300 rounded-lg text-gray-400 disabled:opacity-50"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
