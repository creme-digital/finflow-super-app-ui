
export interface Expense {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  receipt: string | null;
}
