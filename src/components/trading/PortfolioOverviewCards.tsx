
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const portfolioStocks = [
  {
    symbol: 'Adobe',
    company: 'Adobe',
    logo: '🅰️',
    color: 'bg-red-500',
    totalShare: '+ 201,01',
    totalReturn: '$ 201,01',
    isPositive: true,
    chartData: [20, 25, 30, 28, 35, 40, 38, 45, 50, 55]
  },
  {
    symbol: 'Anima',
    company: 'Anima',
    logo: '🎨',
    color: 'bg-orange-500',
    totalShare: '+ 201,01',
    totalReturn: '$ 201,01',
    isPositive: true,
    chartData: [30, 20, 25, 15, 20, 35, 30, 25, 20, 30]
  },
  {
    symbol: 'Amplitude',
    company: 'Amplitude',
    logo: '🅰️',
    color: 'bg-blue-500',
    totalShare: '+ 201,01',
    totalReturn: '$ 201,01',
    isPositive: true,
    chartData: [25, 30, 35, 40, 45, 50, 48, 52, 55, 60]
  },
  {
    symbol: 'Airbnb',
    company: 'Airbnb',
    logo: '🏠',
    color: 'bg-pink-500',
    totalShare: '+ 201,01',
    totalReturn: '$ 201,01',
    isPositive: true,
    chartData: [40, 35, 30, 25, 20, 15, 20, 25, 30, 25]
  }
];

const MiniChart = ({ data, isPositive }: { data: number[], isPositive: boolean }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-16 h-8">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke={isPositive ? "#10b981" : "#ef4444"}
          strokeWidth="2"
          points={points}
        />
      </svg>
    </div>
  );
};

export function PortfolioOverviewCards() {
  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {portfolioStocks.map((stock, index) => (
          <div key={index} className="overflow-hidden h-[140px] w-[280px] md:w-[300px] flex-shrink-0" style={glassCardStyle}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 ${stock.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
                  {stock.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base truncate">{stock.symbol}</div>
                  <div className="text-xs text-muted-foreground truncate">{stock.company}</div>
                </div>
                <MiniChart data={stock.chartData} isPositive={stock.isPositive} />
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Total Share</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-green-600">{stock.totalShare}</span>
                    {stock.isPositive ? (
                      <TrendingUp className="w-3 h-3 text-green-600" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-600" />
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Total Return</span>
                  <span className="text-sm font-semibold">{stock.totalReturn}</span>
                </div>
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
}
