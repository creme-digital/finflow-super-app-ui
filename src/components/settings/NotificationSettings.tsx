
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Bell, Mail, BellOff, CreditCard } from "lucide-react";

export function NotificationSettings() {
  const { toast } = useToast();
  
  const handleSaveChanges = () => {
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been saved successfully.",
    });
  };
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Push Notifications
          </CardTitle>
          <CardDescription>Configure how you receive push notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="transactionAlerts">Transaction Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications for all transactions above $100.
                </p>
              </div>
              <Switch id="transactionAlerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="securityAlerts">Security Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about security issues and suspicious activities.
                </p>
              </div>
              <Switch id="securityAlerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="accountUpdates">Account Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about changes to your account.
                </p>
              </div>
              <Switch id="accountUpdates" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketingNotifications">Marketing Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive promotions, offers, and newsletter updates.
                </p>
              </div>
              <Switch id="marketingNotifications" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Notifications
          </CardTitle>
          <CardDescription>Manage your email notification preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailTransactions">Transaction Receipts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email receipts for all transactions.
                </p>
              </div>
              <Switch id="emailTransactions" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailStatements">Monthly Statements</Label>
                <p className="text-sm text-muted-foreground">
                  Receive monthly account statements via email.
                </p>
              </div>
              <Switch id="emailStatements" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNewsletters">Newsletters</Label>
                <p className="text-sm text-muted-foreground">
                  Receive our weekly newsletter with financial tips and updates.
                </p>
              </div>
              <Switch id="emailNewsletters" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BellOff className="h-5 w-5" />
            Do Not Disturb
          </CardTitle>
          <CardDescription>Configure quiet hours when you don't want to be disturbed.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="quietHours">Enable Quiet Hours</Label>
              <p className="text-sm text-muted-foreground">
                Silence notifications during specified hours.
              </p>
            </div>
            <Switch id="quietHours" />
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startTime">Start Time</Label>
              <Input id="startTime" type="time" defaultValue="22:00" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endTime">End Time</Label>
              <Input id="endTime" type="time" defaultValue="07:00" disabled />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// We need to add this import at the top
import { Input } from "@/components/ui/input";
