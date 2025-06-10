
import { Layout } from '@/components/layout/Layout';
import { SettingsMainContent } from '@/components/settings/SettingsMainContent';
import { SettingsLeftSidebar } from '@/components/settings/SettingsLeftSidebar';

const Settings = () => {
  return (
    <Layout
      title="Settings"
      showRightSidebar={true}
      mainContent={<SettingsMainContent />}
      rightSidebarContent={<SettingsLeftSidebar />}
    />
  );
};

export default Settings;
