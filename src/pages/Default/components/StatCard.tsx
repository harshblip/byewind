import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  trend: "up" | "down";
  bgColor: string;
}

export default function StatCard({
  title,
  value,
  percentage,
  trend,
  bgColor,
}: StatCardProps) {
  return (
    <>
      <div
        className={`${bgColor} rounded-2xl p-5 flex flex-col justify-between h-36 w-full transition-transform hover:-translate-y-1 duration-300`}
      >
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div>
          <div className="flex flex-wrap items-end gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              {value}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${
                trend === "up"
                  ? "text-green-700 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {percentage}
              {trend === "up" ? (
                <ArrowTrendingUpIcon className="w-3 h-3" />
              ) : (
                <ArrowTrendingDownIcon className="w-3 h-3" />
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
