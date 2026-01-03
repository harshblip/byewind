import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Activities from "./components/Activities";
import Contacts from "./components/Contacts";
import Notifications from "./components/Notifications";

export default function RightPanel({
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

      <aside
        className={clsx(
          "fixed inset-y-0 right-0 z-30 h-full border-l border-gray-200 bg-white transition-transform duration-300 ease-in-out",
          "w-full md:w-auto",
          "md:relative md:translate-x-0",
          isOpen 
            ? "translate-x-0 md:opacity-100" 
            : "translate-x-full md:w-0 md:opacity-0 md:overflow-hidden md:border-none"
        )}
      >
        <div
          className={clsx(
            "flex flex-col space-y-8 h-full overflow-y-auto p-8 w-full md:w-80 relative",
            !isOpen && "md:hidden" // Optimization: hide content from DOM/Access tree when closed on desktop
          )}
        >
          {/* Mobile Close Button */}
          <button 
            onClick={onClose}
            className="md:hidden absolute top-6 right-6 p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <style>{`
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          `}</style>

          <Notifications />
          <Activities />
          <Contacts />
        </div>
      </aside>
    </>
  );
}