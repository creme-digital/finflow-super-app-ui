
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { DashboardContent } from '@/components/dashboard/DashboardContent';
import { RightSidebarContent } from '@/components/dashboard/RightSidebarContent';

const DashboardPage = () => {
  return (
    <Layout 
      title="Dashboard" 
      showRightSidebar={true}
      mainContent={<DashboardContent />}
      rightSidebarContent={<RightSidebarContent />}
    >
      <div className="flex flex-col h-full w-full">
        {/* Empty content area - ready for future items */}
      </div>
    </Layout>
  );
};

export default DashboardPage;
