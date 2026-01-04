import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../hooks/useTheme";

const DATA = [
  { name: "Jan", current: 10, previous: 15 },
  { name: "Feb", current: 15, previous: 10 },
  { name: "Mar", current: 18, previous: 12 },
  { name: "Apr", current: 12, previous: 18 },
  { name: "May", current: 15, previous: 20 },
  { name: "Jun", current: 25, previous: 20 },
];

export default function RevenueChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="bg-[#F7F9FB] dark:bg-[#1C1C1C] md:p-6 rounded-4xl w-full h-full flex flex-col">
      <div className="flex flex-wrap items-center gap-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white border-r border-gray-300 pr-6">
          Revenue
        </h2>

        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-400 dark:text-white"></span>
          <span className="text-gray-600 dark:text-white">Current Week</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            $58,211
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-[#A8C5DA] dark:text-white"></span>
          <span className="text-gray-600 dark:text-white">Previous Week</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            $68,768
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-62.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#E5E7EB" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />

            <Line
              type="monotone"
              dataKey="current"
              stroke={isDark ? "#caf0f8" : "#1F2937"}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#1F2937",
                stroke: isDark ? "#caf0f8" : "FFF",
                strokeWidth: 2,
              }}
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke={isDark ? "#9f86c0" : "#A8C5DA"}
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
