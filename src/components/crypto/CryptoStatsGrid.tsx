
import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

export function CryptoStatsGrid() {
  const stats = [
    {
      title: 'Total Holdings',
      value: '$42,321.11',
      change: '+$2,156.75',
      changePercent: '+5.38%',
      icon: DollarSign,
      positive: true
    },
    {
      title: 'Top Performer',
      value: 'BTC',
      change: '+$1,250.00',
      changePercent: '+12.5%',
      icon: TrendingUp,
      positive: true
    },
    {
      title: 'Total Transactions',
      value: '47',
      change: '+8',
      changePercent: 'This month',
      icon: Activity,
      positive: true
    },
    {
      title: 'Biggest Loss',
      value: 'DOGE',
      change: '-$420.50',
      changePercent: '-8.2%',
      icon: TrendingDown,
      positive: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="overflow-hidden"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <stat.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{stat.title}</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className={`text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} ({stat.changePercent})
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
