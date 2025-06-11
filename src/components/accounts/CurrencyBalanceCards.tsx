
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const currencyData = [
  {
    currency: 'USD',
    flag: '🇺🇸',
    balance: 4857,
    symbol: '$'
  },
  {
    currency: 'GBP',
    flag: '🇬🇧',
    balance: 4857,
    symbol: '£'
  },
  {
    currency: 'AUD',
    flag: '🇦🇺',
    balance: 4857,
    symbol: 'A$'
  },
  {
    currency: 'CAD',
    flag: '🇨🇦',
    balance: 4857,
    symbol: 'C$'
  }
];

export function CurrencyBalanceCards() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {currencyData.map((currency) => (
        <div 
          key={currency.currency} 
          className="flex flex-col overflow-hidden" 
          style={{
            border: '1px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{currency.flag}</span>
              <span className="text-sm font-medium text-foreground">{currency.currency}</span>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {currency.symbol}{currency.balance.toLocaleString()}
            </div>
          </CardContent>
        </div>
      ))}
      
      {/* Add New Balance Card */}
      <div 
        className="flex flex-col overflow-hidden cursor-pointer hover:bg-muted/50 transition-colors" 
        style={{
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[120px]">
          <Button variant="ghost" className="flex flex-col gap-2 h-auto p-0">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">Add another account</span>
          </Button>
        </CardContent>
      </div>
    </div>
  );
}
