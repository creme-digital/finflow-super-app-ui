
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCurrency } from '@/contexts/CurrencyContext';

const transactions = [
  {
    id: '1',
    description: 'Salary Payment',
    amount: 3200,
    type: 'income',
    date: '2025-06-08',
    status: 'completed'
  },
  {
    id: '2',
    description: 'Office Rent',
    amount: -1800,
    type: 'expense',
    date: '2025-06-07',
    status: 'completed'
  },
  {
    id: '3',
    description: 'Client Payment',
    amount: 5500,
    type: 'income',
    date: '2025-06-06',
    status: 'completed'
  },
  {
    id: '4',
    description: 'Software Subscription',
    amount: -99,
    type: 'expense',
    date: '2025-06-05',
    status: 'pending'
  },
  {
    id: '5',
    description: 'Investment Return',
    amount: 850,
    type: 'income',
    date: '2025-06-04',
    status: 'completed'
  }
];

export function RecentTransactions() {
  const { formatAmount } = useCurrency();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex-1">
                <div className="font-medium">{transaction.description}</div>
                <div className="text-sm text-muted-foreground">{transaction.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                  {transaction.status}
                </Badge>
                <div className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}{formatAmount(Math.abs(transaction.amount))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
