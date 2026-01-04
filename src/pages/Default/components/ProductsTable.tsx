import { PRODUCTDATA } from "../../../mock/ActivitiesData";

export default function ProductsTable() {
  return (
    <>
      <div className="lg:col-span-8 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl p-8 overflow-hidden">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 mt-4">
          Top Selling Products
        </h3>
        <div className="overflow-x-auto max-h-full w-full mt-6">
          <table className="w-full text-left text-xs sm:text-sm text-gray-600 min-w-125">
            <thead>
              <tr className="border-b border-gray-200 dark:border-slate-600 mb-4">
                <th className="pb-3 font-normal text-gray-400 dark:text-slate-500">Name</th>
                <th className="pb-3 font-normal text-gray-400 dark:text-slate-500">Price</th>
                <th className="pb-3 font-normal text-gray-400 dark:text-slate-500">Quantity</th>
                <th className="pb-3 font-normal text-gray-400 dark:text-slate-500">Amount</th>
              </tr>
            </thead>
            <tbody className="space-y-0">
              {PRODUCTDATA.map((item, i) => (
                <tr
                  key={i}
                  className="group hover:bg-white dark:hover:bg-black/20 transition-colors rounded-lg"
                >
                  <td className="py-4 pr-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-4 whitespace-nowrap dark:text-white">{item.price}</td>
                  <td className="py-4 whitespace-nowrap dark:text-white">{item.qty}</td>
                  <td className="py-4 whitespace-nowrap dark:text-white">{item.amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
