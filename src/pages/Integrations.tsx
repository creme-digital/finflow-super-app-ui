
import { Layout } from '@/components/layout/Layout';
import { IntegrationsDashboard } from '@/components/integrations/IntegrationsDashboard';

const Integrations = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Integrations</h1>
          <p className="text-muted-foreground">Connect your FinFlow account with third-party services.</p>
        </div>

        <IntegrationsDashboard />
      </div>
    </Layout>
  );
};

export default Integrations;
