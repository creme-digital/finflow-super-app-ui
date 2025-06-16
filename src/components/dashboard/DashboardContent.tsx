
import React from 'react';
import { NetCashSection } from './NetCashSection';
import { MoneyFlowCard } from './MoneyFlowCard';
import { IncomeExpenseCard } from './IncomeExpenseCard';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-6 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Net Cash Section */}
      <NetCashSection />

      {/* Charts in single column layout */}
      <div className="flex flex-col gap-6">
        <MoneyFlowCard />
        <IncomeExpenseCard />
      </div>
    </div>
  );
}
