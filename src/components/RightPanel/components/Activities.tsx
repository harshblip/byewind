import { ACTIVITIES } from "../../../mock/ActivitiesData";
import { formatRelativeTime } from "../../../utils/formatDate";

export default function Activities() {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 dark:bg-[#1C1C1C] dark:text-white mb-4">Activities</h3>
        <div className="space-y-0">
          {ACTIVITIES.map((activity, index) => {
            const isLast = index === ACTIVITIES.length - 1;
            return (
              <div key={activity.id} className="flex gap-3 relative pb-4">
                {!isLast && (
                  <div
                    className="absolute left-4 top-8 bottom-0 w-px bg-gray-200"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 shrink-0">
                  <img
                    src={activity.user.avatar}
                    alt={activity.user.name}
                    className="w-8 h-8 rounded-full object-cover border border-white"
                  />
                </div>

                <div className="flex flex-col pt-1">
                  <span className="text-sm text-gray-800 dark:bg-[#1C1C1C] dark:text-white line-clamp-1">
                    {activity.action}
                  </span>
                  <span className="text-xs text-gray-400">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
