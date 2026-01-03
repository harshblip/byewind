import { useLocation } from "react-router-dom";
import {
  Bars3Icon,
  StarIcon,
  MagnifyingGlassIcon,
  SunIcon,
  ClockIcon,
  BellIcon,
  QueueListIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";

const formatSegment = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function Header({
  onToggleSidebar,
  onToggleRightPanel,
}: {
  onToggleSidebar: () => void;
  onToggleRightPanel: () => void;
}) {
  const location = useLocation();

  const pathSegments: string[] = location.pathname.split("/").filter((x) => x);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        <button className="text-gray-400 hover:text-yellow-500 transition-colors">
          <StarIcon className="h-6 w-6" />
        </button>

        <nav className="flex items-center text-sm font-medium text-gray-500">
          <span className="hover:text-gray-900 transition-colors cursor-pointer">
            Dashboards
          </span>

          <span className="mx-2 text-gray-300">/</span>

          {pathSegments.length === 0 ? (
            <span className="text-gray-900"></span>
          ) : (
            <div className="flex items-center">
              {pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;

                return (
                  <div key={segment} className="flex items-center">
                    <span
                      className={
                        isLast
                          ? "text-gray-900"
                          : "hover:text-gray-900 transition-colors cursor-pointer"
                      }
                    >
                      {formatSegment(segment)}
                    </span>

                    {!isLast && <span className="mx-2 text-gray-300">/</span>}
                  </div>
                );
              })}
            </div>
          )}
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex relative group">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-48 rounded-lg bg-gray-100 pl-10 pr-12 text-sm text-gray-700 placeholder-gray-400 outline-none focus:bg-white focus:ring-2 focus:ring-black/5 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-sans">
            ⌘/
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>

          <button className="hover:text-gray-900 transition-colors hover:bg-gray-100 p-1.5 rounded-full">
            <ClockIcon className="h-6 w-6" />
          </button>

          <button className="relative hover:text-gray-900 transition-colors hover:bg-gray-100 p-1.5 rounded-full">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
          </button>

          <button
            onClick={onToggleRightPanel}
            className="hover:text-gray-900 transition-colors hover:bg-gray-100 p-1.5 rounded-full"
          >
            <QueueListIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
