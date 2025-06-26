
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Bell, Mail, BellOff, CreditCard, Smartphone, Globe, Shield, TrendingUp } from "lucide-react";

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
                <Label htmlFor="paymentReminders">Payment Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get reminders for upcoming payments and due dates.
                </p>
              </div>
              <Switch id="paymentReminders" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="budgetAlerts">Budget Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Notifications when you're approaching your budget limits.
                </p>
              </div>
              <Switch id="budgetAlerts" />
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
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailReports">Monthly Reports</Label>
                <p className="text-sm text-muted-foreground">
                  Get detailed monthly spending and income reports.
                </p>
              </div>
              <Switch id="emailReports" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailPromotions">Promotional Offers</Label>
                <p className="text-sm text-muted-foreground">
                  Receive special offers and promotional content.
                </p>
              </div>
              <Switch id="emailPromotions" />
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
            <Smartphone className="h-5 w-5" />
            SMS Notifications
          </CardTitle>
          <CardDescription>Configure SMS and text message notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="smsTransactions">Transaction Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get SMS alerts for transactions over $500.
                </p>
              </div>
              <Switch id="smsTransactions" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="smsSecurity">Security Codes</Label>
                <p className="text-sm text-muted-foreground">
                  Receive two-factor authentication codes via SMS.
                </p>
              </div>
              <Switch id="smsSecurity" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="smsPayments">Payment Confirmations</Label>
                <p className="text-sm text-muted-foreground">
                  Get SMS confirmations for successful payments.
                </p>
              </div>
              <Switch id="smsPayments" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            In-App Notifications
          </CardTitle>
          <CardDescription>Control notifications within the application.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="inAppAlerts">System Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Show important system messages and updates.
                </p>
              </div>
              <Switch id="inAppAlerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="inAppTips">Tips & Suggestions</Label>
                <p className="text-sm text-muted-foreground">
                  Display helpful tips and feature suggestions.
                </p>
              </div>
              <Switch id="inAppTips" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="inAppUpdates">Feature Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new features and improvements.
                </p>
              </div>
              <Switch id="inAppUpdates" />
            </div>
          </div>
        </CardContent>
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
