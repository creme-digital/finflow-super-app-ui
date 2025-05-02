
import { Layout } from '@/components/layout/Layout';
import { SettingsTabs } from '@/components/settings/SettingsTabs';
import { useIsMobile } from '@/hooks/use-mobile';

const Settings = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="text-sm md:text-base text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        
        <SettingsTabs />
      </div>
    </Layout>
  );
};

export default Settings;
