
import React from 'react';
import { TotalBalanceCard } from './TotalBalanceCard';
import { AllHoldings } from './AllHoldings';
import { StatsGrid } from './StatsGrid';
import { RecentTransactionsTable } from './RecentTransactionsTable';

export function RightSidebarContent() {
  return (
    <div className="space-y-6">
      <TotalBalanceCard />
      <AllHoldings />
      <StatsGrid />
      <RecentTransactionsTable />
    </div>
  );
}
