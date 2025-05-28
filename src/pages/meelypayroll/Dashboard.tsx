import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Users, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const MeelyPayrollDashboard = () => {
  const { formatAmount } = useCurrency();

  const payrollMetrics = [
    {
      title: 'Total Employees',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Monthly Payroll',
      value: formatAmount(1250000),
      change: '+5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Pending Approvals',
      value: '23',
      change: '-8%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Compliance Alerts',
      value: '5',
      change: '-25%',
      trend: 'down',
      icon: AlertCircle
    }
  ];

  const recentPayrolls = [
    {
      id: 'PAY-001',
      date: '2024-03-15',
      employees: 156,
      amount: 1250000,
      status: 'completed',
      type: 'monthly'
    },
    {
      id: 'PAY-002',
      date: '2024-03-01',
      employees: 12,
      amount: 85000,
      status: 'completed',
      type: 'bonus'
    },
    {
      id: 'PAY-003',
      date: '2024-02-15',
      employees: 144,
      amount: 1150000,
      status: 'completed',
      type: 'monthly'
    }
  ];

  const upcomingPayrolls = [
    {
      id: 'PAY-004',
      date: '2024-03-31',
      employees: 156,
      amount: 1250000,
      status: 'scheduled',
      type: 'monthly'
    },
    {
      id: 'PAY-005',
      date: '2024-04-15',
      employees: 156,
      amount: 1250000,
      status: 'scheduled',
      type: 'monthly'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Payroll Dashboard</h1>
          <Button>Run Payroll</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,500</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Off Requests</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Pending approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Payrolls</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Payrolls</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search payrolls..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <Button className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            <div className="grid gap-4">
              {recentPayrolls.map((payroll) => (
                <Card key={payroll.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{payroll.id}</h3>
                          <Badge variant="outline">{payroll.type}</Badge>
                          <Badge variant="secondary">{payroll.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {payroll.employees} employees • {formatAmount(payroll.amount)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {payroll.date}
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search upcoming payrolls..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <Button className="w-full md:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Payroll
              </Button>
            </div>

            <div className="grid gap-4">
              {upcomingPayrolls.map((payroll) => (
                <Card key={payroll.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{payroll.id}</h3>
                          <Badge variant="outline">{payroll.type}</Badge>
                          <Badge variant="secondary">{payroll.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {payroll.employees} employees • {formatAmount(payroll.amount)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {payroll.date}
                        </div>
                        <Button variant="outline" size="sm">
                          Edit Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payroll Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Monthly Payroll Summary</h4>
                        <p className="text-sm text-muted-foreground">Last 12 months</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tax Reports</h4>
                        <p className="text-sm text-muted-foreground">Q1 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Employee Earnings</h4>
                        <p className="text-sm text-muted-foreground">March 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Labor Law Compliance</h4>
                        <p className="text-sm text-muted-foreground">Updated monthly</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Benefits Compliance</h4>
                        <p className="text-sm text-muted-foreground">Updated quarterly</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tax Compliance</h4>
                        <p className="text-sm text-muted-foreground">Updated annually</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
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
};

export default MeelyPayrollDashboard; 