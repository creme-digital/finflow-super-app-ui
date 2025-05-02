
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Shield, Lock, User } from "lucide-react";

export function SecuritySettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully.",
      });
    }, 1000);
  };
  
  const handleToggleTwoFA = () => {
    const newState = !twoFAEnabled;
    setTwoFAEnabled(newState);
    
    toast({
      title: newState ? "Two-factor authentication enabled" : "Two-factor authentication disabled",
      description: newState 
        ? "Your account is now more secure." 
        : "Two-factor authentication has been disabled.",
    });
  };
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>Update your password for enhanced security.</CardDescription>
        </CardHeader>
        <form onSubmit={handlePasswordUpdate}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Two-Factor Authentication
          </CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="twoFA">Enable Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Receive a verification code on your phone when signing in.
              </p>
            </div>
            <Switch
              id="twoFA"
              checked={twoFAEnabled}
              onCheckedChange={handleToggleTwoFA}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Login Sessions
          </CardTitle>
          <CardDescription>Manage your active login sessions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Session</p>
                <p className="text-sm text-muted-foreground">
                  MacBook Pro • San Francisco, CA • Active Now
                </p>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Current
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">iPhone 13</p>
                <p className="text-sm text-muted-foreground">
                  iOS 16 • New York, NY • Last active 2 hours ago
                </p>
              </div>
              <Button variant="outline" size="sm">Sign Out</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Sign Out All Other Devices</Button>
        </CardFooter>
      </Card>
    </>
  );
}
