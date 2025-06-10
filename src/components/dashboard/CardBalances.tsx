
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { User, Building, TrendingUp, Bitcoin, CreditCard } from 'lucide-react';

const cardBalances = [
  {
    id: '1',
    name: 'Personal Account',
    balance: '$24,580.50',
    change: '+2.1%',
    positive: true,
    icon: User,
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'Business Account',
    balance: '$58,420.75',
    change: '+5.8%',
    positive: true,
    icon: Building,
    color: 'bg-green-500',
  },
  {
    id: '3',
    name: 'Stocks',
    balance: '$12,850.25',
    change: '-1.2%',
    positive: false,
    icon: TrendingUp,
    color: 'bg-purple-500',
  },
  {
    id: '4',
    name: 'Crypto',
    balance: '$4,248.50',
    change: '+12.4%',
    positive: true,
    icon: Bitcoin,
    color: 'bg-orange-500',
  },
  {
    id: '5',
    name: 'Payment Processing',
    balance: '$4,300.00',
    change: '+3.2%',
    positive: true,
    icon: CreditCard,
    color: 'bg-indigo-500',
  },
];

interface CardBalancesProps {
  className?: string;
}

export function CardBalances({ className }: CardBalancesProps) {
  return (
    <Card className={cn('card-shadow', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Account Balances</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {cardBalances.map((account) => (
            <div key={account.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn('p-2 rounded-lg', account.color)}>
                  <account.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">{account.name}</span>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold">{account.balance}</div>
                <div className={cn(
                  'text-sm font-medium',
                  account.positive ? 'text-green-600' : 'text-red-600'
                )}>
                  {account.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
