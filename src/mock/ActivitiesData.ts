// sidebarData.ts
import {
  type NotificationItem,
  type ActivityItem,
  type ContactItem,
  type MapItem,
  type ChartData,
  type ProductItem,
} from "../types/Activities.types";

const NOW = Date.now();
const MIN = 60000;
const HOUR = 3600000;

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "bug",
    message: "You have a bug that needs...",
    timestamp: NOW,
  },
  {
    id: "2",
    type: "user",
    message: "New user registered",
    timestamp: NOW - 59 * MIN,
  },
  {
    id: "3",
    type: "bug",
    message: "You have a bug that needs...",
    timestamp: NOW - 12 * HOUR,
  },
  {
    id: "4",
    type: "subscription",
    message: "Andi Lane subscribed to you",
    timestamp: NOW - 24 * HOUR,
  }, // Simulating "Today, 11:59 AM"
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "1",
    user: { name: "User 1", avatar: "https://i.pravatar.cc/150?u=8" },
    action: "You have a bug that needs...",
    timestamp: NOW,
  },
  {
    id: "2",
    user: { name: "User 2", avatar: "https://i.pravatar.cc/150?u=9" },
    action: "Released a new version",
    timestamp: NOW - 59 * MIN,
  },
  {
    id: "3",
    user: { name: "User 3", avatar: "https://i.pravatar.cc/150?u=10" },
    action: "Submitted a bug",
    timestamp: NOW - 12 * HOUR,
  },
  {
    id: "4",
    user: { name: "User 4", avatar: "https://i.pravatar.cc/150?u=11" },
    action: "Modified A data in Page X",
    timestamp: NOW - 24 * HOUR,
  },
  {
    id: "5",
    user: { name: "User 5", avatar: "https://i.pravatar.cc/150?u=12" },
    action: "Deleted a page in Project X",
    timestamp: NOW - 48 * HOUR,
  },
];

export const CONTACTS: ContactItem[] = [
  { id: "1", name: "Natali Craig", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "Drew Cano", avatar: "https://i.pravatar.cc/150?u=3" },
  { id: "3", name: "Orlando Diggs", avatar: "https://i.pravatar.cc/150?u=4" },
  { id: "4", name: "Andi Lane", avatar: "https://i.pravatar.cc/150?u=5" },
  { id: "5", name: "Kate Morrison", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: "6", name: "Koray Okumus", avatar: "https://i.pravatar.cc/150?u=20" },
];

export const MAPDATA: MapItem[] = [
  { name: "New York", val: "72K", width: "w-3/4" },
  { name: "San Francisco", val: "39K", width: "w-1/2" },
  { name: "Sydney", val: "25K", width: "w-1/4" },
  { name: "Singapore", val: "61K", width: "w-2/3" },
];

export const DATA: ChartData[] = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 21, projection: 26 },
  { name: "Mar", actual: 18, projection: 22 },
  { name: "Apr", actual: 23, projection: 28 },
  { name: "May", actual: 16, projection: 19 },
  { name: "Jun", actual: 21, projection: 26 },
];

export const PRODUCTDATA: ProductItem[] = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    qty: 82,
    amt: "$6,518",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    qty: 37,
    amt: "$4,754",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    qty: 64,
    amt: "$2,559",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    qty: 184,
    amt: "$3,680",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    qty: 64,
    amt: "$1,965",
  },
];
