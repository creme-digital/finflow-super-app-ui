
import React from 'react';
import { NetCashSection } from './NetCashSection';
import { MoneyFlowCard } from './MoneyFlowCard';
import { IncomeExpenseCard } from './IncomeExpenseCard';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-4 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Top Main Card items: transparent background, flex-col, 12px spacing, hug content */}
      <NetCashSection />

      {/* Card money flow: flex-col, 16px border radius, hug content */}
      <MoneyFlowCard />

      {/* Card balance: flex-col, 16px border radius, hug content */}
      <IncomeExpenseCard />
    </div>
  );
}
