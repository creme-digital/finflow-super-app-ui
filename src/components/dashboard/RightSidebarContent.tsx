
import React from 'react';
import { TotalBalanceCard } from './TotalBalanceCard';
import { AllHoldings } from './AllHoldings';
import { StatsGrid } from './StatsGrid';
import { RecentTransactionsTable } from './RecentTransactionsTable';

export function RightSidebarContent() {
  return (
    <div className="space-y-6">
      <div 
        className="rounded-[24px]" 
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <TotalBalanceCard />
      </div>
      
      <div 
        className="rounded-[24px]" 
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <AllHoldings />
      </div>
      
      <div 
        className="rounded-[24px]" 
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <StatsGrid />
      </div>
      
      <div 
        className="rounded-[24px]" 
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <RecentTransactionsTable />
      </div>
    </div>
  );
}
