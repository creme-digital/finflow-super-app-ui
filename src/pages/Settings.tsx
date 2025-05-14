import { Layout } from '@/components/layout/Layout';
import { SettingsTabs } from '@/components/settings/SettingsTabs';
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
        
        <SettingsTabs />
      </div>
    </Layout>
  );
};

export default Settings;
