
import React from 'react';
import { Wallet, TrendingUp } from 'lucide-react';
import { ActionButtonsGrid } from './ActionButtonsGrid';

export function TotalBalanceSection() {
  return (
    <div 
      className="rounded-[24px] p-6"
      style={{ 
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.4)'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Total Balance</span>
      </div>
      
      <div className="mb-6">
        <div className="flex items-end gap-3">
          <div className="text-4xl font-bold text-foreground">$23,569.00</div>
          <div className="flex items-center gap-1 text-green-600 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">10.5% (+$908)</span>
          </div>
        </div>
      </div>

      <ActionButtonsGrid />
    </div>
  );
}
