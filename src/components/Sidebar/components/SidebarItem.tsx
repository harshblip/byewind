import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx"; // or generic template literals
import type { NavItem } from "../../../mock/navConfig";

interface SidebarItemProps {
  item: NavItem;
  depth?: number; // To handle indentation for nested items
}

const SidebarItem = ({ item, depth = 0 }: SidebarItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = item.path ? location.pathname === item.path : false;

  const hasChildren = item.children && item.children.length > 0;

  function isChildren(child: any): boolean {
    if (item.children?.includes(child)) {
      return true;
    }
    return false;
  }

  const handleClick = () => {
    if (hasChildren) {
      if (item.path) navigate(item.path);
      setIsOpen(!isOpen);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const paddingLeft = depth > 0 ? `${depth * 1.5 + 1}rem` : "0.75rem";

  return (
    <div className="mb-1">
      <button
        onClick={handleClick}
        className={clsx(
          "group relative flex w-full items-center gap-3 rounded-lg py-2 text-sm font-medium transition-all duration-200 hover:cursor-pointer",
          isActive
            ? "bg-gray-100 text-gray-900"
            : "text-gray-500 hover:bg-gray-200"
        )}
        style={{ paddingLeft }}
      >
        {!isChildren(item) && (
          <ChevronRightIcon
            className={clsx(
              "mr-2 h-4 w-4 text-gray-400 transition-transform duration-200",
              isOpen && "rotate-90"
            )}
          />
        )}
        {isActive && depth === 0 && (
          <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-md bg-black" />
        )}

        {item.icon && (
          <item.icon
            className={clsx(
              "h-5 w-5",
              isActive
                ? "text-black"
                : "text-gray-400 group-hover:text-gray-600"
            )}
          />
        )}

        <span className="flex-1 text-left">{item.label}</span>
      </button>

      <div
        className={clsx(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => (
              <SidebarItem
                key={child.label}
                item={child}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
