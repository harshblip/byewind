import {
  ChartPieIcon,
  ShoppingBagIcon,
  FolderIcon,
  BookOpenIcon,
  UserIcon,
  RectangleStackIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftIcon,
  CakeIcon,
} from "@heroicons/react/24/outline";

export interface NavItem {
  label: string;
  path?: string;
  icon?: React.ElementType;
  children?: NavItem[]; // Recursive structure for sub-menus
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export const SIDEBAR_DATA: NavSection[] = [
  {
    title: "Dashboards",
    items: [
      {
        label: "Default",
        path: "/default",
        icon: ChartPieIcon,
        children: [
          { label: "orders", path: "/default/orders", icon: CakeIcon },
        ],
      },
      { label: "eCommerce", path: "/ecommerce", icon: ShoppingBagIcon },
      { label: "Projects", icon: FolderIcon },
      { label: "Online Courses", icon: BookOpenIcon },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: UserIcon,
        children: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      { label: "Account", icon: RectangleStackIcon, children: [] }, // Example of expandable
      { label: "Corporate", icon: UserGroupIcon },
      { label: "Blog", icon: BookOpenIcon },
      { label: "Social", icon: ChatBubbleOvalLeftIcon },
    ],
  },
];
