
import React from 'react';
import { MoneyFlowCard } from './MoneyFlowCard';
import { IncomeExpenseCard } from './IncomeExpenseCard';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-6 min-h-full" style={{
      borderRadius: '24px'
    }}>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MoneyFlowCard />
        <IncomeExpenseCard />
      </div>
    </div>
  );
}
