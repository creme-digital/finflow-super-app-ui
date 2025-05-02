
import { Layout } from '@/components/layout/Layout';
import { SettingsTabs } from '@/components/settings/SettingsTabs';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Settings = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="text-sm md:text-base text-muted-foreground">Manage your account settings and preferences.</p>
        </motion.div>
        
        <SettingsTabs />
      </div>
    </Layout>
  );
};

export default Settings;
