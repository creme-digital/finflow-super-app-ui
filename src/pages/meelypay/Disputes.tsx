import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2, Shield, FileText, MessageSquare } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function MeelyPayDisputes() {
  const { formatAmount } = useCurrency();

  const disputeMetrics = [
    {
      title: 'Open Disputes',
      value: '12',
      change: '-3',
      trend: 'down',
      icon: AlertCircle
    },
    {
      title: 'Resolved This Month',
      value: '28',
      change: '+5',
      trend: 'up',
      icon: TrendingUp
    },
    {
      title: 'Average Resolution',
      value: '4.2 days',
      change: '-0.5',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Win Rate',
      value: '85%',
      change: '+2%',
      trend: 'up',
      icon: Shield
    }
  ];

  const disputes = [
    {
      id: 'DSP-001',
      customer: 'John Smith',
      amount: 150.00,
      currency: 'USD',
      status: 'open',
      type: 'chargeback',
      date: '2024-03-15',
      reason: 'Product not received'
    },
    {
      id: 'DSP-002',
      customer: 'Sarah Johnson',
      amount: 75.50,
      currency: 'EUR',
      status: 'under_review',
      type: 'refund',
      date: '2024-03-16',
      reason: 'Service not as described'
    },
    {
      id: 'DSP-003',
      customer: 'Michael Brown',
      amount: 200.00,
      currency: 'GBP',
      status: 'resolved',
      type: 'chargeback',
      date: '2024-03-14',
      reason: 'Duplicate charge'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Disputes</h1>
          <p className="text-muted-foreground mt-1">
            Manage payment disputes and chargebacks.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {disputeMetrics.map((metric) => (
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

        <Tabs defaultValue="active" className="space-y-4">
          <TabsList>
            <TabsTrigger value="active">Active Disputes</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
            <TabsTrigger value="evidence">Evidence</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search disputes..." className="pl-8" />
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
                  New Dispute
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {disputes.filter(d => d.status !== 'resolved').map((dispute) => (
                <Card key={dispute.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{dispute.customer}</h3>
                          <Badge variant="outline">{dispute.type}</Badge>
                          <Badge variant={dispute.status === 'open' ? 'destructive' : 'secondary'}>
                            {dispute.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reason: {dispute.reason}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {formatAmount(dispute.amount)} {dispute.currency}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {dispute.date}
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

          <TabsContent value="resolved" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search resolved disputes..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {disputes.filter(d => d.status === 'resolved').map((dispute) => (
                <Card key={dispute.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{dispute.customer}</h3>
                          <Badge variant="outline">{dispute.type}</Badge>
                          <Badge variant="default">Resolved</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Reason: {dispute.reason}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {formatAmount(dispute.amount)} {dispute.currency}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {dispute.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evidence" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Evidence Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Required Documents</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Proof of delivery or service</li>
                        <li>Communication records</li>
                        <li>Transaction details</li>
                        <li>Product/service description</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Best Practices</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Submit evidence within 7 days</li>
                        <li>Include all relevant documentation</li>
                        <li>Provide clear explanations</li>
                        <li>Keep communication professional</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">DSP-001</h4>
                        <p className="text-sm text-muted-foreground">Tracking number, delivery confirmation</p>
                      </div>
                      <Badge variant="outline">Submitted</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">DSP-002</h4>
                        <p className="text-sm text-muted-foreground">Service agreement, communication logs</p>
                      </div>
                      <Badge variant="outline">Submitted</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">DSP-003</h4>
                        <p className="text-sm text-muted-foreground">Transaction history, refund proof</p>
                      </div>
                      <Badge variant="outline">Submitted</Badge>
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