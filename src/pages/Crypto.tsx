import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { CryptoPortfolio } from '@/components/crypto/CryptoPortfolio';

const Crypto = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Crypto Portfolio"
          subtitle="Manage your cryptocurrency portfolio and track your digital assets."
        />
        <CryptoPortfolio />
      </div>
    </Layout>
  );
};

export default Crypto;
