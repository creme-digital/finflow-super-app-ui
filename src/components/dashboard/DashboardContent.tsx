
import React from 'react';
import { NetCashSection } from './NetCashSection';
import { MoneyFlowCard } from './MoneyFlowCard';
import { IncomeExpenseCard } from './IncomeExpenseCard';
import { BalanceGraphCard } from './BalanceGraphCard';
import { TotalBalanceCard } from './TotalBalanceCard';
import { CardBalancesSection } from './CardBalancesSection';
import { StatsOverviewSection } from './StatsOverviewSection';
import { RecentTransactionsTable } from './RecentTransactionsTable';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-6 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Net Cash Section */}
      <NetCashSection />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MoneyFlowCard />
        <BalanceGraphCard />
      </div>

      {/* Balance and Income/Expense Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TotalBalanceCard />
        <IncomeExpenseCard />
      </div>

      {/* Card Balances Section */}
      <CardBalancesSection />

      {/* Stats Overview */}
      <StatsOverviewSection />

      {/* Recent Transactions */}
      <RecentTransactionsTable />
    </div>
  );
}
