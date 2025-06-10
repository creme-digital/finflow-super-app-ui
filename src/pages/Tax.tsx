
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { TaxDashboard } from '@/components/tax/TaxDashboard';

const Tax = () => {
  return (
    <Layout
      title="Tax"
      mainContent={<TaxDashboard />}
    />
  );
};

export default Tax;
