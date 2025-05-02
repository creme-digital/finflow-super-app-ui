
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Integration } from '@/components/integrations/types';

interface IntegrationCardProps {
  integration: Integration;
}

export function IntegrationCard({ integration }: IntegrationCardProps) {
  const { toast } = useToast();
  const [isEnabled, setIsEnabled] = useState(integration.connected);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    toast({
      title: !isEnabled ? `${integration.name} enabled` : `${integration.name} disabled`,
      description: !isEnabled ? "The integration has been enabled." : "The integration has been disabled."
    });
  };

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsEnabled(true);
      toast({
        title: `Connected to ${integration.name}`,
        description: "Your account has been successfully connected.",
      });
    }, 1500);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-md flex items-center justify-center bg-muted">
              <integration.icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg">{integration.name}</CardTitle>
            </div>
          </div>
          <div className="flex items-center">
            {integration.popular && (
              <Badge variant="secondary" className="mr-2">Popular</Badge>
            )}
            <Switch 
              id={`integration-switch-${integration.id}`} 
              checked={isEnabled} 
              onCheckedChange={handleToggle}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="line-clamp-2 h-10">
          {integration.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant={integration.connected ? "outline" : "default"} 
          className="w-full" 
          onClick={handleConnect}
          disabled={isConnecting}
        >
          {integration.connected ? "Reconnect" : (isConnecting ? "Connecting..." : "Connect")}
        </Button>
      </CardFooter>
    </Card>
  );
}
