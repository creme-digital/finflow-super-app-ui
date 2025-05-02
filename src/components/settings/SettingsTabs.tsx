
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { BillingSettings } from "@/components/settings/BillingSettings";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2 md:gap-0">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
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
