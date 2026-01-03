import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DATA } from "../../mock/ActivitiesData";

// Transformation Logic
// To create the visual where the lighter bar sits on top to form the "Total Projection",
// we split the data into "Actual" (bottom) and "Remaining" (top).
const PROCESSED_DATA = DATA.map((item) => ({
  ...item,
  remaining: item.projection - item.actual,
}));

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any;
  label?: any;
}) => {
  if (active && payload && payload.length) {
    // payload[0] is Actual, payload[1] is Remaining
    const actual = payload[0].value as number;
    const remaining = payload[1].value as number;
    const totalProjection = actual + remaining;

    return (
      <div className="bg-gray-900 text-white text-xs rounded-lg p-2 shadow-xl">
        <p className="font-semibold mb-1">{label}</p>
        <div className="flex justify-between gap-4">
          <span className="text-gray-300">Actual:</span>
          <span className="font-mono">{actual}M</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-gray-300">Target:</span>
          <span className="font-mono">{totalProjection}M</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function ProjectionsChart() {
  return (
    <div className="bg-[#F7F9FB] md:p-6 rounded-4xl w-full h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-6">
        Projections vs Actuals
      </h2>

      <div className="flex-1 w-full min-h-45">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={PROCESSED_DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={24}
          >
            <CartesianGrid
              vertical={false}
              stroke="#E5E7EB"
              strokeDasharray="0"
            />

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
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              content={<CustomTooltip />}
            />

            {/* 
               Stacking Logic: 
               We stack "Actual" and "Remaining" to equal the total Height.
            */}

            <Bar
              dataKey="actual"
              stackId="a"
              fill="#A8C5DA"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="remaining"
              stackId="a"
              fill="#DDE5ED"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
