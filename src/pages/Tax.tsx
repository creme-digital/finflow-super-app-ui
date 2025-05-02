
import { Layout } from '@/components/layout/Layout';
import { TaxDashboard } from '@/components/tax/TaxDashboard';

const Tax = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Tax Estimation</h1>
          <p className="text-muted-foreground">Track tax estimates, deadlines, and download necessary forms.</p>
        </div>
        <TaxDashboard />
      </div>
    </Layout>
  );
};

export default Tax;
