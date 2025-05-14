import { Layout } from '@/components/layout/Layout';
import { PayrollDashboard } from '@/components/payroll/PayrollDashboard';
import { Button } from '@/components/ui/button';
import { UserPlus, BadgeDollarSign } from 'lucide-react';
import React, { useState } from 'react';
import { AddEmployeeModal } from '@/components/payroll/AddEmployeeModal';

const Payroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Payroll Management</h1>
            <p className="text-muted-foreground">Manage employees, pay schedules, and process payroll.</p>
          </div>
          <div className="flex flex-row gap-2">
            <Button onClick={() => setIsModalOpen(true)}>
              <UserPlus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
            <Button>
              <BadgeDollarSign className="mr-2 h-4 w-4" />
              Run Payroll
            </Button>
          </div>
        </div>
        <PayrollDashboard />
        <AddEmployeeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </Layout>
  );
};

export default Payroll;
