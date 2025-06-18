
import React from 'react';
import { TotalBalanceCard } from '@/components/dashboard/TotalBalanceCard';
import { AllHoldings } from '@/components/dashboard/AllHoldings';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { RecentTransactionsTable } from '@/components/dashboard/RecentTransactionsTable';
import { NetCashSection } from '@/components/dashboard/NetCashSection';
import { MoneyFlowCard } from '@/components/dashboard/MoneyFlowCard';
import { IncomeExpenseCard } from '@/components/dashboard/IncomeExpenseCard';

export function CryptoPortfolio() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full w-full">
      {/* Left side - Main Content (3/4 width) */}
      <div className="lg:col-span-3 h-full">
        <div className="flex flex-col gap-6 h-full w-full" style={{
          borderRadius: '24px'
        }}>
          
          {/* Net Cash Section */}
          <NetCashSection />

          {/* Charts in single column layout */}
          <div className="flex flex-col gap-6 flex-1">
            <MoneyFlowCard />
            <IncomeExpenseCard />
          </div>
        </div>
      </div>

      {/* Right side - Sidebar Content (1/4 width) */}
      <div className="lg:col-span-1 h-full">
        {/* Right sidebar content would go here */}
      </div>
    </div>
  );
}
