
import { Layout } from '@/components/layout/Layout';
import React from 'react';
import { PayrollDashboard } from '@/components/payroll/PayrollDashboard';

const Payroll = () => {
  return (
    <Layout
      mainContent={<PayrollDashboard />}
    />
  );
};

export default Payroll;
