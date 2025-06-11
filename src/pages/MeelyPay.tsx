
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { TotalBalanceSection } from '@/components/meelypay/TotalBalanceSection';
import { SendAgainSection } from '@/components/meelypay/SendAgainSection';
import { TotalStatsSection } from '@/components/meelypay/TotalStatsSection';
import { BanksAndCardsSection } from '@/components/meelypay/BanksAndCardsSection';

const MeelyPay = () => {
  return (
    <Layout
      title="Meely Pay"
      showRightSidebar={false}
      mainContent={
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <TotalBalanceSection />
            <SendAgainSection />
            <TotalStatsSection />
          </div>

          {/* Right Section - Banks and Cards */}
          <div className="lg:col-span-1">
            <BanksAndCardsSection />
          </div>
        </div>
      }
    />
  );
};

export default MeelyPay;
