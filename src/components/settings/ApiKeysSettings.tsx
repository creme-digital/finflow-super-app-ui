
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Key, Copy, Eye, EyeOff, Trash2, Plus } from 'lucide-react';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed: string;
}

export function ApiKeysSettings() {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: '1',
      name: 'Production API',
      key: 'pk_live_1234567890abcdef',
      createdAt: '2024-01-15',
      lastUsed: '2 hours ago'
    },
    {
      id: '2',
      name: 'Development API',
      key: 'pk_test_abcdef1234567890',
      createdAt: '2024-01-10',
      lastUsed: '1 day ago'
    }
  ]);
  
  const [newKeyName, setNewKeyName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());

  const handleCreateApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for the API key.",
        variant: "destructive",
      });
      return;
    }

    setIsCreating(true);
    
    // Simulate API call
    setTimeout(() => {
      const newKey: ApiKey = {
        id: Date.now().toString(),
        name: newKeyName,
        key: `pk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
        createdAt: new Date().toISOString().split('T')[0],
        lastUsed: 'Never'
      };
      
      setApiKeys([...apiKeys, newKey]);
      setNewKeyName('');
      setIsCreating(false);
      
      toast({
        title: "API Key Created",
        description: `API key "${newKeyName}" has been created successfully.`,
      });
    }, 1000);
  };

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "Copied",
      description: "API key copied to clipboard.",
    });
  };

  const handleDeleteKey = (id: string, name: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
    toast({
      title: "API Key Deleted",
      description: `API key "${name}" has been deleted.`,
    });
  };

  const toggleKeyVisibility = (id: string) => {
    const newVisibleKeys = new Set(visibleKeys);
    if (newVisibleKeys.has(id)) {
      newVisibleKeys.delete(id);
    } else {
      newVisibleKeys.add(id);
    }
    setVisibleKeys(newVisibleKeys);
  };

  const maskKey = (key: string) => {
    if (key.length <= 8) return key;
    return key.substring(0, 8) + '•'.repeat(key.length - 12) + key.substring(key.length - 4);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Create New API Key
          </CardTitle>
          <CardDescription>
            Create a new API key to access our services programmatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateApiKey} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="keyName">API Key Name</Label>
              <Input
                id="keyName"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Enter a descriptive name for your API key"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isCreating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isCreating ? "Creating..." : "Create API Key"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Your API Keys
          </CardTitle>
          <CardDescription>
            Manage your existing API keys. Keep them secure and never share them publicly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {apiKeys.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No API keys found. Create your first API key above.
            </p>
          ) : (
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{apiKey.name}</h4>
                      <p className="text-sm text-gray-500">
                        Created on {apiKey.createdAt} • Last used {apiKey.lastUsed}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteKey(apiKey.id, apiKey.name)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1 relative">
                      <Input
                        value={visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                        readOnly
                        className="font-mono text-sm pr-20"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleKeyVisibility(apiKey.id)}
                          className="h-6 w-6 p-0"
                        >
                          {visibleKeys.has(apiKey.id) ? 
                            <EyeOff className="w-3 h-3" /> : 
                            <Eye className="w-3 h-3" />
                          }
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleCopyKey(apiKey.key)}
                          className="h-6 w-6 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>
            Learn how to use your API keys in your applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Authentication</h4>
            <p className="text-sm text-gray-600 mb-2">
              Include your API key in the Authorization header:
            </p>
            <div className="bg-gray-100 rounded p-3 font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Example Request</h4>
            <div className="bg-gray-100 rounded p-3 font-mono text-sm">
              <div>curl -X GET \</div>
              <div className="ml-2">https://api.example.com/data \</div>
              <div className="ml-2">-H "Authorization: Bearer YOUR_API_KEY"</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
