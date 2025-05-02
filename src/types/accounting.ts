
export interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  status: 'Reconciled' | 'Pending';
}

export interface Invoice {
  id: string;
  client: string;
  date: Date;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export interface FinancialReport {
  id: string;
  name: string;
  type: 'Financial' | 'Operational' | 'Tax';
}
