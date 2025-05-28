import { Layout } from '@/components/layout/Layout';
import { SettingsTabs } from '@/components/settings/SettingsTabs';
import { CurrencySelector } from '@/components/settings/CurrencySelector';
import { useIsMobile } from '@/hooks/use-mobile';

const Settings = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account settings and preferences.</p>
        </div>
        
        <div className="grid gap-6">
          <SettingsTabs />
          <CurrencySelector />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
