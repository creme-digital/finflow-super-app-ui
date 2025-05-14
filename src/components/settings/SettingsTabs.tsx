import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { BillingSettings } from "@/components/settings/BillingSettings";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export function SettingsTabs() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs defaultValue="profile" value={activeTab} onValueChange={handleTabChange}>
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-0">
        <TabsTrigger value="profile" className="text-sm">Profile</TabsTrigger>
        <TabsTrigger value="security" className="text-sm">Security</TabsTrigger>
        <TabsTrigger value="notifications" className="text-sm">Notifications</TabsTrigger>
        <TabsTrigger value="billing" className="text-sm">Billing</TabsTrigger>
      </TabsList>
      
      <div className="mt-6">
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
      </div>
    </Tabs>
  );
}
