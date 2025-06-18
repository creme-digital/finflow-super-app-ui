
import React from 'react';
import { NetCashSection } from '@/components/dashboard/NetCashSection';
import { MoneyFlowCard } from '@/components/dashboard/MoneyFlowCard';
import { IncomeExpenseCard } from '@/components/dashboard/IncomeExpenseCard';

export function CryptoPortfolio() {
  return (
    <div className="flex flex-col gap-6 h-full w-full">
      {/* Net Cash Section */}
      <NetCashSection />

      {/* Charts in single column layout */}
      <div className="flex flex-col gap-6 flex-1">
        <MoneyFlowCard />
        <IncomeExpenseCard />
      </div>
    </div>
  );
}
