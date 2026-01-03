import {
  CalendarIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { formatRelativeTime } from "../../utils/formatDate";
import type { Order, OrderStatus } from "../../types/OrderList.types";

export const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const styles = {
    "In Progress": "text-purple-600 before:bg-purple-600",
    Complete: "text-green-500 before:bg-green-500",
    Pending: "text-blue-400 before:bg-blue-400",
    Approved: "text-yellow-500 before:bg-yellow-500",
    Rejected: "text-gray-400 before:bg-gray-400",
  };

  return (
    <span
      className={`relative pl-4 text-sm font-medium ${styles[status]} before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full`}
    >
      {status}
    </span>
  );
};

export default function DesktopOrderRow({
  order,
  index,
}: {
  order: Order;
  index: number;
}) {
  return (
    <>
      <tr
        className="group hover:bg-gray-50 border-b border-gray-50 last:border-none opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
        style={{ animationDelay: `${index * 0.03}s` }}
      >
        <td className="p-4">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </td>
        <td className="p-4 text-gray-600 font-mono text-xs">{order.id}</td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <img
              src={order.user.avatar}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">{order.user.name}</span>
          </div>
        </td>
        <td className="p-4 text-gray-600">{order.project}</td>
        <td className="p-4 text-gray-600 max-w-50 truncate">{order.address}</td>
        <td className="p-4 text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-3.5 h-3.5 text-gray-400" />
            {formatRelativeTime(order.timestamp)}
          </div>
        </td>
        <td className="p-4">
          <StatusBadge status={order.status} />
        </td>
        <td className="p-4 text-right">
          <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity">
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
