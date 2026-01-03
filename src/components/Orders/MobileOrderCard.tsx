import {
  CalendarIcon,
  EllipsisHorizontalIcon,
  FolderIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import type { Order } from "../../types/OrderList.types";
import { StatusBadge } from "./DesktopOrderRow";
import { formatRelativeTime } from "../../utils/formatDate";

export default function MobileOrderCard({ order }: { order: Order }) {
  return (
    <>
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4 animate-[fadeIn_0.5s_ease-out_forwards]">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <img
              src={order.user.avatar}
              alt=""
              className="w-10 h-10 rounded-full border border-gray-100"
            />
            <div>
              <h4 className="font-medium text-gray-900">{order.user.name}</h4>
              <span className="text-xs text-gray-500">{order.id}</span>
            </div>
          </div>
          <StatusBadge status={order.status} />
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FolderIcon className="w-4 h-4 text-gray-400" />
            <span className="truncate">{order.project}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPinIcon className="w-4 h-4 text-gray-400" />
            <span className="truncate">{order.address}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <CalendarIcon className="w-3.5 h-3.5" />
            {formatRelativeTime(order.timestamp)}
          </div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg">
            <EllipsisHorizontalIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
