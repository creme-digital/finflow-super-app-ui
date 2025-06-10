
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { SettingsNavigation } from './SettingsNavigation';

export function SettingsMainContent() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'password';
  const { toast } = useToast();
  
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
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

  const renderPasswordContent = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Change password</h2>
        <p className="text-gray-600 mb-6">
          Remember not to store your password in your email or cloud and don't share it with anyone
        </p>
      </div>

      <form onSubmit={handlePasswordChange} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="oldPassword">Old password</Label>
            <div className="relative">
              <Input
                id="oldPassword"
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter old password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showOldPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm new password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isLoading ? "Updating..." : "Change Password"}
        </Button>
      </form>
    </div>
  );

  const renderNotificationsContent = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <p className="text-gray-600 mb-6">
          Manage your notification preferences
        </p>
      </div>
      <p className="text-gray-500">Notification settings coming soon...</p>
    </div>
  );

  const renderApiKeysContent = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">API keys</h2>
        <p className="text-gray-600 mb-6">
          Manage your API keys and integrations
        </p>
      </div>
      <p className="text-gray-500">API keys management coming soon...</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'password':
        return renderPasswordContent();
      case 'notifications':
        return renderNotificationsContent();
      case 'api-keys':
        return renderApiKeysContent();
      default:
        return renderPasswordContent();
    }
  };

  return (
    <div className="flex gap-6 w-full h-full">
      {/* Left Navigation */}
      <div className="w-64 flex-shrink-0">
        <div
          className="rounded-[24px] p-6 h-full"
          style={{ 
            background: 'rgba(255, 255, 255, 0.64)',
            border: '1px solid #FFFFFF'
          }}
        >
          <h3 className="text-lg font-semibold mb-6">Settings</h3>
          <SettingsNavigation activeTab={activeTab} />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}
