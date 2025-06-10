
import React from 'react';
import { Building, TrendingUp, Wallet } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const holdings = [
  {
    id: 1,
    name: 'Personal Account',
    description: 'For daily personal use',
    balance: 5612,
    change: 2.55,
    positive: true,
    action: 'View Transaction',
    icon: Building,
    iconBg: 'bg-blue-100'
  },
  {
    id: 2,
    name: 'Business Account',
    description: 'Company-related transactions',
    balance: 566712,
    change: 2.55,
    positive: false,
    action: 'Download Statement',
    icon: Building,
    iconBg: 'bg-purple-100'
  },
  {
    id: 3,
    name: 'Stocks',
    description: 'Investment Performance',
    balance: 566712,
    change: 2.55,
    positive: true,
    action: 'View Portfolio',
    icon: TrendingUp,
    iconBg: 'bg-blue-100'
  },
  {
    id: 4,
    name: 'Crypto',
    description: 'Wallet & Exchange Summary',
    balance: 170000,
    change: null,
    btc: '2.5 BTC ≈',
    action: 'Swap',
    icon: Building,
    iconBg: 'bg-blue-100'
  },
  {
    id: 5,
    name: 'Payment Processing',
    description: 'Investment Performance',
    balance: 566712,
    change: null,
    status: 'Pending',
    action: 'View Settlement',
    icon: Building,
    iconBg: 'bg-blue-100'
  }
];

export function AllHoldings() {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground">All Activity</h3>
      
      <div className="space-y-3">
        {holdings.map((holding) => {
          const IconComponent = holding.icon;
          return (
            <div
              key={holding.id}
              className="rounded-[16px] p-4 bg-white/80 border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-xl ${holding.iconBg}`}>
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{holding.name}</h4>
                    <p className="text-sm text-muted-foreground">{holding.description}</p>
                    <button className="text-sm text-blue-600 hover:underline mt-1">
                      {holding.action}
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Balance:</div>
                  <div className="font-medium text-foreground">
                    {holding.btc && (
                      <div className="text-sm text-muted-foreground">{holding.btc}</div>
                    )}
                    {formatAmount(holding.balance)}
                  </div>
                  {holding.change !== null && (
                    <div className={`text-sm ${holding.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {holding.positive ? '↗' : '↘'} {holding.change}
                    </div>
                  )}
                  {holding.status && (
                    <div className="text-sm text-orange-600">{holding.status}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
