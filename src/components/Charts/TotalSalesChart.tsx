import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Updated colors to match the dark mode screenshot
const DATA = [
  { name: "Direct", value: 300.56, color: "#95A4FC" },   // Purple
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" }, // Pastel Green
  { name: "Sponsored", value: 154.02, color: "#C6C7F8" }, // Lavender
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },     // Pastel Blue
];

export default function TotalSalesChart() {
  return (
    <div className="bg-[#F7F9FB] p-6 dark:bg-[#1C1C1C] rounded-4xl w-full h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Total Sales</h2>

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
              paddingAngle={0} 
              dataKey="value"
              cornerRadius={10} 
              stroke="none"
            >
              {DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number | undefined) => `$${value}`}
              contentStyle={{
                backgroundColor: "#1F2937", // Dark background for tooltip
                borderColor: "#374151",
                color: "#F9FAFB",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
              itemStyle={{ color: "#F9FAFB" }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Floating Center Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
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
              {/* Added dark mode text colors */}
              <span className="text-sm text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition-colors">
                {item.name}
              </span>
            </div>
            {/* Added dark mode text colors */}
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}