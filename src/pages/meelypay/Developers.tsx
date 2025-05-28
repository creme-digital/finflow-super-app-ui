import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Code, Terminal, Book, Key, Globe, Settings, FileText, MessageSquare } from 'lucide-react';

export default function MeelyPayDevelopers() {
  const apiEndpoints = [
    {
      name: 'Create Payment',
      method: 'POST',
      path: '/api/v1/payments',
      description: 'Create a new payment transaction'
    },
    {
      name: 'Get Payment',
      method: 'GET',
      path: '/api/v1/payments/{id}',
      description: 'Retrieve payment details'
    },
    {
      name: 'List Payments',
      method: 'GET',
      path: '/api/v1/payments',
      description: 'List all payments'
    },
    {
      name: 'Refund Payment',
      method: 'POST',
      path: '/api/v1/payments/{id}/refund',
      description: 'Refund a payment'
    }
  ];

  const webhooks = [
    {
      name: 'payment.succeeded',
      description: 'Triggered when a payment is successful',
      status: 'active'
    },
    {
      name: 'payment.failed',
      description: 'Triggered when a payment fails',
      status: 'active'
    },
    {
      name: 'refund.processed',
      description: 'Triggered when a refund is processed',
      status: 'active'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Developers</h1>
          <p className="text-muted-foreground mt-1">
            API documentation and developer tools.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Version</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">v1.0.0</div>
              <p className="text-xs text-muted-foreground">
                Stable Release
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Keys</CardTitle>
              <Key className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Active</div>
              <p className="text-xs text-muted-foreground">
                Last created 2 days ago
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Webhooks</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 Active</div>
              <p className="text-xs text-muted-foreground">
                98% delivery rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SDKs</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4 Available</div>
              <p className="text-xs text-muted-foreground">
                Node.js, Python, Ruby, PHP
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="api" className="space-y-4">
          <TabsList>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="sdks">SDKs</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="api" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search API endpoints..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Docs
                </Button>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  New API Key
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {apiEndpoints.map((endpoint) => (
                <Card key={endpoint.name}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{endpoint.name}</h3>
                          <Badge variant="outline">{endpoint.method}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {endpoint.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Terminal className="h-4 w-4 mr-1" />
                            {endpoint.path}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Code className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Webhook Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {webhooks.map((webhook) => (
                      <div key={webhook.name} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{webhook.name}</h4>
                          <p className="text-sm text-muted-foreground">{webhook.description}</p>
                        </div>
                        <Badge variant="outline">{webhook.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webhook Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Webhook URL</Label>
                      <Input placeholder="https://your-domain.com/webhook" />
                    </div>
                    <div className="space-y-2">
                      <Label>Secret Key</Label>
                      <Input type="password" placeholder="Enter secret key" />
                    </div>
                    <div className="space-y-2">
                      <Label>Events</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select events" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Events</SelectItem>
                          <SelectItem value="payment">Payment Events</SelectItem>
                          <SelectItem value="refund">Refund Events</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Save Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sdks" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Available SDKs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Node.js</h4>
                        <p className="text-sm text-muted-foreground">v2.0.0</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Python</h4>
                        <p className="text-sm text-muted-foreground">v1.5.0</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Ruby</h4>
                        <p className="text-sm text-muted-foreground">v1.3.0</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">PHP</h4>
                        <p className="text-sm text-muted-foreground">v1.2.0</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Start</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Installation</h4>
                      <pre className="bg-muted p-2 rounded-md text-sm">
                        npm install @meelypay/sdk
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Configuration</h4>
                      <pre className="bg-muted p-2 rounded-md text-sm">
                        const meely = new MeelyPay('your_api_key');
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Example Usage</h4>
                      <pre className="bg-muted p-2 rounded-md text-sm">
                        {`const payment = await meely.payments.create({
  amount: 1000,
  currency: 'usd'
});`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>API Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Endpoint</Label>
                      <Input placeholder="/api/v1/payments" />
                    </div>
                    <div className="space-y-2">
                      <Label>Method</Label>
                      <Select defaultValue="GET">
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GET">GET</SelectItem>
                          <SelectItem value="POST">POST</SelectItem>
                          <SelectItem value="PUT">PUT</SelectItem>
                          <SelectItem value="DELETE">DELETE</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Request Body</Label>
                      <Input placeholder="Enter JSON request body" />
                    </div>
                    <Button className="w-full">Send Request</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webhook Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Event Type</Label>
                      <Select defaultValue="payment.succeeded">
                        <SelectTrigger>
                          <SelectValue placeholder="Select event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="payment.succeeded">Payment Succeeded</SelectItem>
                          <SelectItem value="payment.failed">Payment Failed</SelectItem>
                          <SelectItem value="refund.processed">Refund Processed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Test Data</Label>
                      <Input placeholder="Enter test data" />
                    </div>
                    <Button className="w-full">Send Test Webhook</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
} 