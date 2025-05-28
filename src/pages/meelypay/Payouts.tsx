import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2, ArrowUpRight, ArrowDownLeft, Repeat } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function MeelyPayPayouts() {
  const { formatAmount } = useCurrency();

  const payoutMetrics = [
    {
      title: 'Total Payouts',
      value: formatAmount(1500000),
      change: '+15%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Pending Payouts',
      value: formatAmount(250000),
      change: '-5%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Success Rate',
      value: '98.5%',
      change: '+0.5%',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Failed Payouts',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: AlertCircle
    }
  ];

  const payouts = [
    {
      id: 'POT-001',
      recipient: 'John Smith',
      amount: 5000.00,
      currency: 'USD',
      status: 'completed',
      type: 'bank_transfer',
      date: '2024-03-15',
      reference: 'INV-2024-001'
    },
    {
      id: 'POT-002',
      recipient: 'Sarah Johnson',
      amount: 2500.00,
      currency: 'EUR',
      status: 'pending',
      type: 'wire_transfer',
      date: '2024-03-16',
      reference: 'INV-2024-002'
    },
    {
      id: 'POT-003',
      recipient: 'Michael Brown',
      amount: 7500.00,
      currency: 'GBP',
      status: 'failed',
      type: 'bank_transfer',
      date: '2024-03-14',
      reference: 'INV-2024-003'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Payouts</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track payouts to recipients.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {payoutMetrics.map((metric) => (
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
            <TabsTrigger value="recent">Recent Payouts</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="failed">Failed</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search payouts..." className="pl-8" />
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
                  New Payout
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {payouts.map((payout) => (
                <Card key={payout.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{payout.recipient}</h3>
                          <Badge variant="outline">{payout.type}</Badge>
                          <Badge variant={payout.status === 'completed' ? 'default' : payout.status === 'pending' ? 'secondary' : 'destructive'}>
                            {payout.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reference: {payout.reference}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {formatAmount(payout.amount)} {payout.currency}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {payout.date}
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

          <TabsContent value="scheduled" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Weekly Payroll</h4>
                        <p className="text-sm text-muted-foreground">Every Friday • 15 employees</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Monthly Contractors</h4>
                        <p className="text-sm text-muted-foreground">1st of month • 8 contractors</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Quarterly Bonuses</h4>
                        <p className="text-sm text-muted-foreground">Last day of quarter • All employees</p>
                      </div>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule New Payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Frequency</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Recipients</Label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select recipients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Employees</SelectItem>
                          <SelectItem value="contractors">Contractors Only</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Amount</Label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                    <Button className="w-full">Schedule Payout</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="failed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Failed Payouts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payouts.filter(p => p.status === 'failed').map((payout) => (
                      <div key={payout.id} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{payout.recipient}</h4>
                          <p className="text-sm text-muted-foreground">
                            {formatAmount(payout.amount)} {payout.currency} • {payout.date}
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
                        <h4 className="font-medium">Invalid Bank Account</h4>
                        <p className="text-sm text-muted-foreground">POT-003 • 2024-03-14</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Insufficient Funds</h4>
                        <p className="text-sm text-muted-foreground">POT-002 • 2024-03-13</p>
                      </div>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Network Error</h4>
                        <p className="text-sm text-muted-foreground">POT-001 • 2024-03-12</p>
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