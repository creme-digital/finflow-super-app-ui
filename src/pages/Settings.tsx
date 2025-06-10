
import { Layout } from '@/components/layout/Layout';
import { SettingsMainContent } from '@/components/settings/SettingsMainContent';

const Settings = () => {
  return (
    <Layout
      title="Settings"
      showRightSidebar={false}
      mainContent={<SettingsMainContent />}
    />
  );
};

export default Settings;
