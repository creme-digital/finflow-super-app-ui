
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const favoriteStocks = [
  {
    symbol: 'Amas',
    company: 'Adobe',
    logo: '🅰️',
    color: 'bg-black',
    price: '$ 201,01',
    change: '- 201,01',
    isPositive: false
  },
  {
    symbol: 'Adobe',
    company: 'Adobe',
    logo: '🅰️',
    color: 'bg-red-500',
    price: '$ 201,01',
    change: '- 201,01',
    isPositive: false
  },
  {
    symbol: 'Amplit',
    company: 'Amplit',
    logo: '🅰️',
    color: 'bg-blue-500',
    price: '$ 201,01',
    change: '- 201,01',
    isPositive: false
  },
  {
    symbol: 'Airbnb',
    company: 'Airbnb',
    logo: '🏠',
    color: 'bg-pink-500',
    price: '$ 201,01',
    change: '- 201,01',
    isPositive: false
  },
  {
    symbol: 'Adobe',
    company: 'Adobe',
    logo: '🅰️',
    color: 'bg-red-500',
    price: '$ 201,01',
    change: '- 201,01',
    isPositive: false
  }
];

export function MyFavoritesSection() {
  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <div className="overflow-hidden" style={glassCardStyle}>
      <CardHeader style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-lg font-semibold">My Favorite</CardTitle>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            See All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent style={{ background: 'rgba(255, 255, 255, 0.4)' }} className="space-y-3">
        {favoriteStocks.map((stock, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${stock.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
                {stock.logo}
              </div>
              <div>
                <div className="font-medium text-sm">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground">{stock.company}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-sm">{stock.price}</div>
              <div className="text-xs text-red-600 flex items-center gap-1">
                {stock.change} ▼
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
}
