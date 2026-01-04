import { BugAntIcon, UserIcon, SignalIcon } from "@heroicons/react/24/outline";
import { type NotificationType } from "../../../types/Activities.types";
import { NOTIFICATIONS } from "../../../mock/ActivitiesData";
import { formatRelativeTime } from "../../../utils/formatDate";

const NotificationIcon = ({ type }: { type: NotificationType }) => {
  const styles = {
    bug: { icon: BugAntIcon, bg: "bg-blue-100", text: "text-gray-900" },
    user: { icon: UserIcon, bg: "bg-blue-100", text: "text-gray-900" },
    subscription: {
      icon: SignalIcon,
      bg: "bg-blue-100",
      text: "text-gray-900",
    },
  };

  const { icon: Icon, bg, text } = styles[type];

  return (
    <div
      className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center shrink-0`}
    >
      <Icon className={`w-4 h-4 ${text}`} />
    </div>
  );
};

export default function Notifications() {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 dark:bg-[#1C1C1C] dark:text-white mb-4">
          Notifications
        </h3>
        <div className="space-y-4">
          {NOTIFICATIONS.map((item) => (
            <div key={item.id} className="flex gap-3 group">
              <NotificationIcon type={item.type} />
              <div className="flex flex-col">
                <span
                  className="text-sm text-gray-800 dark:bg-[#1C1C1C] dark:text-white line-clamp-1"
                  title={item.message}
                >
                  {item.message}
                </span>
                <span className="text-xs text-gray-400">
                  {formatRelativeTime(item.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
