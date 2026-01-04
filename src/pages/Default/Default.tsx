import ProjectionsChart from "../../components/Charts/BarChart";
import RevenueByLocation from "../../components/Charts/RevenueByLocation";
import RevenueChart from "../../components/Charts/RevenueChart";
import TotalSalesChart from "../../components/Charts/TotalSalesChart";
import ProductsTable from "./components/ProductsTable";
import StatCard from "./components/StatCard";

export default function Default() {
  return (
    <div className="p-4 md:p-6 bg-white dark:bg-black/80 min-h-screen font-sans text-slate-800 animate-[fadeIn_0.6s_ease-out_forwards]">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        eCommerce
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <StatCard
            title="Customers"
            value="3,781"
            percentage="+11.01%"
            trend="up"
            bgColor="bg-blue-50"
            darkColor="bg-[#E3F5FF]"
          />
          <StatCard
            title="Orders"
            value="1,219"
            percentage="-0.03%"
            trend="down"
            bgColor="bg-gray-50"
            darkColor="bg-[#1C1C1C]"
            darkText="text-white"
          />
          <StatCard
            title="Revenue"
            value="$695"
            percentage="+15.03%"
            trend="up"
            bgColor="bg-gray-50"
            darkColor="bg-[#1C1C1C]"
            darkText="text-white"
          />
          <StatCard
            title="Growth"
            value="30.1%"
            percentage="+6.08%"
            trend="up"
            bgColor="bg-purple-50"
            darkColor="bg-[#E5ECF6]"
          />
        </div>

        <div className="lg:col-span-6 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
          <ProjectionsChart />
        </div>

        <div className="lg:col-span-8 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl p-5">
          <RevenueChart />
        </div>

        <div className="lg:col-span-4 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl p-2 flex flex-col">
          <RevenueByLocation />
        </div>

        <ProductsTable />

        <div className="lg:col-span-4 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl p-5 flex flex-col min-h-75">
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
}
