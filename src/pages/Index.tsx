
import React from 'react';
import { Layout } from '@/components/layout/Layout';

const DashboardPage = () => {
  return (
    <Layout 
      title="Dashboard" 
      showRightSidebar={true}
      rightSidebarContent={
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Stats</h3>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-sm font-medium">Total Balance</p>
              <p className="text-lg font-bold">$12,450.00</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-sm font-medium">Recent Transactions</p>
              <p className="text-lg font-bold">23</p>
            </div>
          </div>
        </div>
      }
    >
      <div className="flex flex-col h-full w-full">
        {/* Empty content area - ready for future items */}
      </div>
    </Layout>
  );
};

export default DashboardPage;
