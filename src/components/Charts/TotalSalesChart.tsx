import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DATA = [
  { name: "Direct", value: 300.56, color: "#1F2937" },
  { name: "Affiliate", value: 135.18, color: "#C4EBC6" },
  { name: "Sponsored", value: 154.02, color: "#97A8F3" },
  { name: "E-mail", value: 48.96, color: "#BDE3F8" },
];

export default function TotalSalesChart() {
  return (
    <div className="bg-[#F7F9FB] p-6 rounded-4xl w-full h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Total Sales</h2>

      {/* Chart Container */}
      <div className="relative h-50 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0} // No gap between, controlled by visual design
              dataKey="value"
              cornerRadius={10} // Makes the ends rounded
              stroke="none"
            >
              {DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number | undefined) => `$${value}`}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Floating Center Label (The "38.6%" Badge) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
            38.6%
          </div>
        </div>
      </div>

      {/* Custom Legend */}
      <div className="space-y-4">
        {DATA.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
