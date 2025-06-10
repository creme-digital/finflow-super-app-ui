import { Layout } from '@/components/layout/Layout';
import { PayrollDashboard } from '@/components/payroll/PayrollDashboard';
import { Button } from '@/components/ui/button';
import { UserPlus, BadgeDollarSign } from 'lucide-react';
import React, { useState } from 'react';
import { AddEmployeeModal } from '@/components/payroll/AddEmployeeModal';
import { PageHeader } from '@/components/layout/PageHeader';

const Payroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <PageHeader
        title="Payroll"
        subtitle="Manage employees, pay schedules, and process payroll."
        className="mb-6"
      >
        <div className="flex flex-row gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
          <Button variant="default">
            <BadgeDollarSign className="mr-2 h-4 w-4" />
            Run Payroll
          </Button>
        </div>
      </PageHeader>
      <div className="p-0">
        <PayrollDashboard />
        <AddEmployeeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </Layout>
  );
};

export default Payroll;
