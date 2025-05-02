
import { Layout } from '@/components/layout/Layout';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        
        <SettingsTabs />
      </div>
    </Layout>
  );
};

export default Settings;
