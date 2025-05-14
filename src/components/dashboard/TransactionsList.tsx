import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight, CreditCard, Wallet, Repeat } from 'lucide-react';
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
    name: 'Send money',
    date: 'Paypal',
    amount: '+82.6',
    type: 'in',
    category: 'USD',
  },
  {
    id: '2',
    name: "Mac'D",
    date: 'Wallet',
    amount: '+270.69',
    type: 'in',
    category: 'USD',
  },
  {
    id: '3',
    name: 'Refund',
    date: 'Transfer',
    amount: '+637.91',
    type: 'in',
    category: 'USD',
  },
  {
    id: '4',
    name: 'Ordered Food',
    date: 'Credit Card',
    amount: '-838.71',
    type: 'out',
    category: 'USD',
  },
  {
    id: '5',
    name: 'Starbucks',
    date: 'Wallet',
    amount: '+203.33',
    type: 'in',
    category: 'USD',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Paypal: <Wallet className="w-6 h-6 text-[#FFFFFF]" />,
  Wallet: <Wallet className="w-6 h-6 text-[#FFFFFF]" />,
  Transfer: <Repeat className="w-6 h-6 text-[#FFFFFF]" />,
  'Credit Card': <CreditCard className="w-6 h-6 text-[#FFFFFF]" />,
  Mastercard: <CreditCard className="w-6 h-6 text-[#FFFFFF]" />,
};
const bgMap: Record<string, string> = {
  Paypal: 'bg-[#FF8A54]/100',
  Wallet: 'bg-[#63B5F9]/100',
  Transfer: 'bg-[#7FD286]/100',
  'Credit Card': 'bg-[#E1C168]/100',
  Mastercard: 'bg-[#F7E0A0]/100',
};

interface TransactionsListProps {
  className?: string;
}

export function TransactionsList({ className }: TransactionsListProps) {
  return (
    <Card className={cn('card-shadow h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center py-2 px-2 gap-4 rounded-xl transition-colors"
            >
              {/* Icon/avatar */}
              <div className={cn(
                "flex items-center justify-center rounded-xl w-12 h-12",
                bgMap[transaction.date] || "bg-gray-100"
              )}>
                {iconMap[transaction.date] || <Wallet className="w-6 h-6 text-white-100" />}
              </div>
              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground font-medium">{transaction.date}</div>
                <div className="text-base font-semibold truncate">{transaction.name}</div>
              </div>
              {/* Amount */}
              <div className="flex flex-col items-end min-w-[90px]">
                <span className={cn(
                  "font-semibold text-base",
                  transaction.type === 'in' ? "text-fintech-success" : "text-fintech-error"
                )}>
                  {transaction.amount}
                </span>
                <span className="text-xs text-muted-foreground">{transaction.category}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
