import { Layout } from '@/components/layout/Layout';
import { TaxDashboard } from '@/components/tax/TaxDashboard';
import { PageHeader } from '@/components/layout/PageHeader';

const Tax = () => {
  return (
    <Layout>
      <PageHeader
        title="Tax"
        subtitle="Track tax estimates, deadlines, and download necessary forms."
        className="mb-6"
      />
      <div className="p-0">
        <TaxDashboard />
      </div>
    </Layout>
  );
};

export default Tax;
