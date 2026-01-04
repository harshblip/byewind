import clsx from "clsx";
import { SIDEBAR_DATA } from "../../mock/navConfig";
import SidebarItem from "./components/SidebarItem";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-black/20 z-20 md:hidden transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-30 h-full border-r dark:border-none border-gray-200 bg-white transition-transform duration-300 ease-in-out",
          "w-64",
          "dark:bg-black/80 dark:text-white",
          "md:relative md:translate-x-0",
          isOpen
            ? "translate-x-0 md:w-64 md:opacity-100"
            : "-translate-x-full md:w-0 md:opacity-0 md:overflow-hidden md:border-none"
        )}
      >
        <div
          className={clsx(
            "flex flex-col space-y-8 h-full overflow-y-auto p-8 w-64",
            !isOpen && "md:hidden"
          )}
        >
          <div className="flex items-center space-x-2">
            <img src="/logo.png" className="w-8 h-8 rounded-full" alt="Logo" />
            <h3 className="mt-2 font-medium">ByeWind</h3>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 items-center">
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                Favourites
              </button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                Recently
              </button>
            </div>
            <div className="flex flex-col mt-2">
              <button className="hover:bg-gray-100 rounded-md flex text-sm items-center space-x-4 p-2 transition-colors">
                <div className="bg-gray-300 rounded-full w-2 h-2"></div>
                <p>Overview</p>
              </button>
              <button className="hover:bg-gray-100 rounded-md flex text-sm items-center space-x-4 p-2 transition-colors">
                <div className="bg-gray-300 rounded-full w-2 h-2"></div>
                <p>Projects</p>
              </button>
            </div>
          </div>

          {SIDEBAR_DATA.map((section, index) => (
            <div key={index} className="mb-2">
              {section.title && (
                <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark">
                  {section.title}
                </h3>
              )}

              <nav className="space-y-1">
                {section.items.map((item) => (
                  <SidebarItem key={item.label} item={item} />
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
