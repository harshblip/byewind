export type NotificationType = "bug" | "user" | "subscription";

export interface NotificationItem {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: number;
}

export interface ActivityItem {
  id: string;
  user: { name: string; avatar: string };
  action: string;
  timestamp: number;
}

export interface ContactItem {
  id: string;
  name: string;
  avatar: string;
}

export interface MapItem {
  name: string;
  val: string;
  width: string;
}

export interface ChartData {
  name: string;
  actual: number;
  projection: number;
}

export interface ProductItem {
  name: string;
  price: string;
  qty: number;
  amt: string;
}
