import { PRODUCTDATA } from "../../../mock/ActivitiesData";

export default function ProductsTable() {
  return (
    <>
      <div className="lg:col-span-8 bg-gray-50 rounded-2xl p-5 overflow-hidden">
        <h3 className="font-semibold text-gray-900 mb-4">
          Top Selling Products
        </h3>
        <div className="overflow-x-auto max-h-full w-full">
          <table className="w-full text-left text-xs sm:text-sm text-gray-600 min-w-125">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 font-normal text-gray-400">Name</th>
                <th className="pb-3 font-normal text-gray-400">Price</th>
                <th className="pb-3 font-normal text-gray-400">Quantity</th>
                <th className="pb-3 font-normal text-gray-400">Amount</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              {PRODUCTDATA.map((item, i) => (
                <tr
                  key={i}
                  className="group hover:bg-white transition-colors rounded-lg"
                >
                  <td className="py-3 pr-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-3 whitespace-nowrap">{item.price}</td>
                  <td className="py-3 whitespace-nowrap">{item.qty}</td>
                  <td className="py-3 whitespace-nowrap">{item.amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
