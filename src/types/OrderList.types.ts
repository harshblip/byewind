export type OrderStatus =
  | "In Progress"
  | "Complete"
  | "Pending"
  | "Approved"
  | "Rejected";

export interface User {
  name: string;
  avatar: string;
}

export interface Order {
  id: string;
  user: User;
  project: string;
  address: string;
  timestamp: number;
  status: OrderStatus;
}

export interface FilterState {
  status: string;
  project: string;
}
