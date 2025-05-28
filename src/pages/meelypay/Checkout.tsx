import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2, ShoppingCart, CreditCard, Globe } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function MeelyPayCheckout() {
  const { formatAmount } = useCurrency();

  const checkoutMetrics = [
    {
      title: 'Total Sales',
      value: formatAmount(2500000),
      change: '+12%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.5%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Average Order',
      value: formatAmount(125),
      change: '+8%',
      trend: 'up',
      icon: ShoppingCart
    },
    {
      title: 'Failed Checkouts',
      value: '15',
      change: '-3',
      trend: 'down',
      icon: AlertCircle
    }
  ];

  const checkouts = [
    {
      id: 'CHK-001',
      customer: 'John Smith',
      amount: 150.00,
      currency: 'USD',
      status: 'completed',
      method: 'credit_card',
      date: '2024-03-15',
      items: 3
    },
    {
      id: 'CHK-002',
      customer: 'Sarah Johnson',
      amount: 75.50,
      currency: 'EUR',
      status: 'pending',
      method: 'paypal',
      date: '2024-03-16',
      items: 1
    },
    {
      id: 'CHK-003',
      customer: 'Michael Brown',
      amount: 200.00,
      currency: 'GBP',
      status: 'failed',
      method: 'credit_card',
      date: '2024-03-14',
      items: 2
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
          <p className="text-muted-foreground mt-1">
            Manage checkout processes and payment flows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {checkoutMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : metric.trend === 'down' ? (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  ) : null}
                  <span className={metric.trend === 'up' ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'}>
                    {metric.change}
                  </span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Checkouts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search checkouts..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  New Checkout
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {checkouts.map((checkout) => (
                <Card key={checkout.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{checkout.customer}</h3>
                          <Badge variant="outline">{checkout.method}</Badge>
                          <Badge variant={checkout.status === 'completed' ? 'default' : checkout.status === 'pending' ? 'secondary' : 'destructive'}>
                            {checkout.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Items: {checkout.items}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {formatAmount(checkout.amount)} {checkout.currency}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {checkout.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <Button variant="ghost" size="icon">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Credit Card</h4>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">PayPal</h4>
                        <p className="text-sm text-muted-foreground">Express Checkout</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Apple Pay</h4>
                        <p className="text-sm text-muted-foreground">Mobile Payments</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Checkout Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Default Currency</Label>
                      <Select defaultValue="USD">
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD - US Dollar</SelectItem>
                          <SelectItem value="EUR">EUR - Euro</SelectItem>
                          <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Checkout Flow</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select flow" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="express">Express</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Tax Settings</Label>
                      <Select defaultValue="automatic">
                        <SelectTrigger>
                          <SelectValue placeholder="Select tax settings" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automatic">Automatic</SelectItem>
                          <SelectItem value="manual">Manual</SelectItem>
                          <SelectItem value="disabled">Disabled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="failed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Failed Checkouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {checkouts.filter(c => c.status === 'failed').map((checkout) => (
                      <div key={checkout.id} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{checkout.customer}</h4>
                          <p className="text-sm text-muted-foreground">
                            {formatAmount(checkout.amount)} {checkout.currency} • {checkout.date}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Retry
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Invalid Card</h4>
                        <p className="text-sm text-muted-foreground">CHK-003 • 2024-03-14</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Insufficient Funds</h4>
                        <p className="text-sm text-muted-foreground">CHK-002 • 2024-03-13</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Network Error</h4>
                        <p className="text-sm text-muted-foreground">CHK-001 • 2024-03-12</p>
                      </div>
                      <Badge variant="outline">Warning</Badge>
                    </div>
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