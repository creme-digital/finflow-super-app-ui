
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { BillingSettings } from "@/components/settings/BillingSettings";
import { useIsMobile } from "@/hooks/use-mobile";

export function SettingsTabs() {
  const isMobile = useIsMobile();

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-0">
        <TabsTrigger value="profile" className="text-sm md:text-base">Profile</TabsTrigger>
        <TabsTrigger value="security" className="text-sm md:text-base">Security</TabsTrigger>
        <TabsTrigger value="notifications" className="text-sm md:text-base">Notifications</TabsTrigger>
        <TabsTrigger value="billing" className="text-sm md:text-base">Billing</TabsTrigger>
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
