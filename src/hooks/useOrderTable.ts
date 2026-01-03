import { useState, useMemo } from "react";
import { type Order, type FilterState } from "../types/OrderList.types";

export const useOrderTable = (data: Order[], itemsPerPage = 10) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    status: "",
    project: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order;
    direction: "asc" | "desc";
  } | null>(null);

  const processedData = useMemo(() => {
    let result = [...data];

    // 1. Search (Global)
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.user.name.toLowerCase().includes(lowerQuery) ||
          item.id.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Filters (Specific)
    if (filters.status) {
      result = result.filter((item) => item.status === filters.status);
    }
    if (filters.project) {
      result = result.filter((item) => item.project === filters.project);
    }

    // 3. Sort
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue =
          sortConfig.key === "user" ? a.user.name : a[sortConfig.key];
        const bValue =
          sortConfig.key === "user" ? b.user.name : b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchQuery, filters, sortConfig]);

  // 4. Pagination (Applied on the filtered/sorted result)
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedData.slice(start, start + itemsPerPage);
  }, [processedData, currentPage, itemsPerPage]);

  const requestSort = (key: keyof Order) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  return {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilter,
    sortConfig,
    requestSort,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    totalItems: processedData.length,
  };
};
