
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: string;
  type: 'in' | 'out';
  category: string;
};

const transactions: Transaction[] = [
  {
    id: '1',
    name: 'Shopify',
    date: 'Today',
    amount: '$2,400.00',
    type: 'in',
    category: 'Sales',
  },
  {
    id: '2',
    name: 'AWS',
    date: 'Yesterday',
    amount: '$1,200.00',
    type: 'out',
    category: 'Services',
  },
  {
    id: '3',
    name: 'Stripe Payout',
    date: '2 days ago',
    amount: '$4,500.00',
    type: 'in',
    category: 'Sales',
  },
  {
    id: '4',
    name: 'Office Supplies',
    date: '3 days ago',
    amount: '$350.00',
    type: 'out',
    category: 'Expenses',
  },
  {
    id: '5',
    name: 'Advertising',
    date: '4 days ago',
    amount: '$800.00',
    type: 'out',
    category: 'Marketing',
  },
];

interface TransactionsListProps {
  className?: string;
}

export function TransactionsList({ className }: TransactionsListProps) {
  return (
    <Card className={cn('card-shadow card-gradient h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  transaction.type === 'in' ? 'bg-fintech-success/10' : 'bg-fintech-error/10'
                )}>
                  {transaction.type === 'in' ? (
                    <ArrowDownLeft className={cn('w-5 h-5 text-fintech-success')} />
                  ) : (
                    <ArrowUpRight className={cn('w-5 h-5 text-fintech-error')} />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn(
                  'font-medium',
                  transaction.type === 'in' ? 'text-fintech-success' : 'text-fintech-error'
                )}>
                  {transaction.type === 'in' ? '+' : '-'}{transaction.amount}
                </p>
                <p className="text-xs text-muted-foreground">{transaction.category}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
