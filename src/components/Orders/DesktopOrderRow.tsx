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
        className="group hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-50 dark:border-gray-700 last:border-none opacity-0 transition animate-[fadeIn_0.3s_ease-out_forwards]"
        style={{ animationDelay: `${index * 0.03}s` }}
      >
        <td className="p-4">
          <input
            type="checkbox"
            className="
            peer relative appearance-none shrink-0 w-5 h-5 border rounded-md mt-1
            border-gray-600 bg-gray-700/30
            checked:bg-purple-300 checked:border-purple-300
            /* The Checkmark Icon (Encoded SVG) */
            checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%3E%3Cpath%20d%3D%22M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%22%2F%3E%3C%2Fsvg%3E')]
            checked:bg-center checked:bg-no-repeat
            
            cursor-pointer transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-purple-500/50
          "
          />
        </td>
        <td className="p-4 text-gray-600 dark:text-white font-mono text-xs">
          {order.id}
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <img
              src={order.user.avatar}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700 dark:text-white">
              {order.user.name}
            </span>
          </div>
        </td>
        <td className="p-4 text-gray-600 dark:text-white">{order.project}</td>
        <td className="p-4 text-gray-600 max-w-50 truncate dark:text-white">
          {order.address}
        </td>
        <td className="p-4 text-gray-600 dark:text-white">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-3.5 h-3.5 text-gray-400 dark:text-white" />
            {formatRelativeTime(order.timestamp)}
          </div>
        </td>
        <td className="p-4">
          <StatusBadge status={order.status} />
        </td>
        <td className="p-4 text-right">
          <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity dark:text-white">
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
