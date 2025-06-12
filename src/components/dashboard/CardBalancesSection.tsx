
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, User, TrendingUp, Coins, CreditCard } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const balanceCards = [
  {
    title: 'Personal Account',
    balance: 15420.50,
    icon: User,
    color: 'bg-blue-500'
  },
  {
    title: 'Business Account',
    balance: 42180.75,
    icon: Building,
    color: 'bg-green-500'
  },
  {
    title: 'Stocks',
    balance: 8950.30,
    icon: TrendingUp,
    color: 'bg-purple-500'
  },
  {
    title: 'Crypto',
    balance: 12340.89,
    icon: Coins,
    color: 'bg-orange-500'
  },
  {
    title: 'Payment Processing',
    balance: 5670.25,
    icon: CreditCard,
    color: 'bg-red-500'
  }
];

export function CardBalancesSection() {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Card Balances</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {balanceCards.map((card) => (
          <Card key={card.title} className="overflow-hidden" style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full ${card.color} flex items-center justify-center`}>
                  <card.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">{card.title}</div>
              </div>
              <div className="text-xl font-bold">{formatAmount(card.balance)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
