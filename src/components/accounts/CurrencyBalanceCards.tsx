
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px'
          }}
        >
          {/* Card header */}
          <div className="p-3 flex flex-row justify-between items-center" style={{
            background: 'rgba(255, 255, 255, 0.8)'
          }}>
            <div className="flex items-center gap-2">
              <span className="text-lg">{currency.flag}</span>
              <span className="text-black text-sm font-medium" style={{
                fontFamily: 'Inter'
              }}>
                {currency.currency}
              </span>
            </div>
          </div>
          
          {/* Card content */}
          <div className="p-3">
            <div className="text-2xl font-bold text-foreground">
              {currency.symbol}{currency.balance.toLocaleString()}
            </div>
          </div>
        </div>
      ))}
      
      {/* Add New Balance Card */}
      <div 
        className="flex flex-col overflow-hidden cursor-pointer hover:bg-muted/50 transition-colors" 
        style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px'
        }}
      >
        <div className="p-3 flex flex-row justify-between items-center" style={{
          background: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span className="text-black text-sm font-medium" style={{
              fontFamily: 'Inter'
            }}>
              Add Account
            </span>
          </div>
        </div>
        
        <div className="p-3 flex flex-col items-center justify-center h-full min-h-[80px]">
          <Button variant="ghost" className="flex flex-col gap-2 h-auto p-0">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-6 h-6 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">Add another account</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
