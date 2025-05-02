
import { Layout } from '@/components/layout/Layout';
import { PayrollDashboard } from '@/components/payroll/PayrollDashboard';

const Payroll = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Payroll Management</h1>
          <p className="text-muted-foreground">Manage employees, pay schedules, and process payroll.</p>
        </div>
        <PayrollDashboard />
      </div>
    </Layout>
  );
};

export default Payroll;
