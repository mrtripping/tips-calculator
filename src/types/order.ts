export interface SavedOrder {
  id: string;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
  tip: number;
  total: number;
  date: string;
}