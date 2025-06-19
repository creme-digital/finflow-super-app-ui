
import React from 'react';
import { CryptoNetCashSection } from './CryptoNetCashSection';
import { CryptoMoneyFlowCard } from './CryptoMoneyFlowCard';
import { CryptoIncomeExpenseCard } from './CryptoIncomeExpenseCard';

export function CryptoDashboardContent() {
  return (
    <div className="flex flex-col gap-6 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Net Cash Section */}
      <CryptoNetCashSection />

      {/* Charts in single column layout */}
      <div className="flex flex-col gap-6">
        <CryptoMoneyFlowCard />
        <CryptoIncomeExpenseCard />
      </div>
    </div>
  );
}
