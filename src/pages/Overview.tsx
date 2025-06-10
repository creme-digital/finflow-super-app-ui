
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { RightSidebarContent } from '@/components/dashboard/RightSidebarContent';
import { OverviewContent } from '@/components/overview/OverviewContent';

const Overview = () => {
  return (
    <Layout
      title="Overview"
      showRightSidebar={true}
      rightSidebarContent={<RightSidebarContent />}
      mainContent={<OverviewContent />}
    >
    </Layout>
  );
};

export default Overview;
