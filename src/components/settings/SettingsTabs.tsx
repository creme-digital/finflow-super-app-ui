
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { BillingSettings } from "@/components/settings/BillingSettings";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SettingsTabs() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs defaultValue="profile" value={activeTab} onValueChange={handleTabChange}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-0">
          <TabsTrigger value="profile" className="text-sm md:text-base">Profile</TabsTrigger>
          <TabsTrigger value="security" className="text-sm md:text-base">Security</TabsTrigger>
          <TabsTrigger value="notifications" className="text-sm md:text-base">Notifications</TabsTrigger>
          <TabsTrigger value="billing" className="text-sm md:text-base">Billing</TabsTrigger>
        </TabsList>
      </motion.div>
      
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <TabsContent value="profile" className="space-y-6">
              <ProfileSettings />
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <SecuritySettings />
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6">
              <NotificationSettings />
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-6">
              <BillingSettings />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
