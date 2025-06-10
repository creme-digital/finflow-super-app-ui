
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrency } from '@/contexts/CurrencyContext';

const transactions = [
  {
    id: 1,
    name: 'James Hall',
    avatar: '/placeholder.svg',
    amount: 8657.41
  },
  {
    id: 2,
    name: 'Rhonda Rhodes',
    avatar: '/placeholder.svg',
    amount: 342.07
  },
  {
    id: 3,
    name: 'Kathy Pacheco',
    avatar: '/placeholder.svg',
    amount: 1486.52
  },
  {
    id: 4,
    name: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg',
    amount: 5653.56
  },
  {
    id: 5,
    name: 'Corina McCoy',
    avatar: '/placeholder.svg',
    amount: 1595.71
  },
  {
    id: 6,
    name: 'Corina McCoy',
    avatar: '/placeholder.svg',
    amount: 1595.71
  }
];

export function RecentTransactionsTable() {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground">Recent Transaction</h3>
      
      <div 
        className="rounded-[24px] overflow-hidden"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <div className="p-4 border-b border-border">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm font-medium text-muted-foreground">To/From</div>
            <div className="text-sm font-medium text-muted-foreground text-right">Amount</div>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={transaction.avatar} alt={transaction.name} />
                    <AvatarFallback>
                      {transaction.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-foreground">{transaction.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-foreground">
                    {formatAmount(transaction.amount)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
