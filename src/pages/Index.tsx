
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoneyFlowChart } from '@/components/dashboard/MoneyFlowChart';
import { BalanceChart } from '@/components/dashboard/BalanceChart';
import { MoneyInOutChart } from '@/components/dashboard/MoneyInOutChart';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Users, 
  Clock, 
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Send,
  Repeat
} from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const DashboardPage = () => {
  const { formatAmount } = useCurrency();

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back! Here's an overview of your finances."
        />
        
        {/* Top Row - Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Cash This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{formatAmount(19600)}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Money In</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatAmount(32400)}</div>
              <p className="text-xs text-muted-foreground">+2.3% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Money Out</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatAmount(12800)}</div>
              <p className="text-xs text-muted-foreground">+4.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MoneyInOutChart />
          </div>
          <div className="lg:col-span-1">
            <MoneyFlowChart />
          </div>
          <div className="lg:col-span-1">
            <BalanceChart />
          </div>
        </div>

        {/* Total Balance with Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="text-3xl font-bold mb-1">{formatAmount(104400)}</div>
                <p className="text-sm text-muted-foreground">Across all accounts</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">
                  <ArrowDown className="h-4 w-4 mr-2" />
                  Deposit
                </Button>
                <Button size="sm" variant="outline">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
                <Button size="sm" variant="outline">
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Receive
                </Button>
                <Button size="sm" variant="outline">
                  <Repeat className="h-4 w-4 mr-2" />
                  Transfer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Balances */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Card Balances</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Personal Account</div>
                <div className="text-xl font-bold">{formatAmount(24500)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Business Account</div>
                <div className="text-xl font-bold">{formatAmount(57384)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Stocks</div>
                <div className="text-xl font-bold">{formatAmount(15200)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Crypto</div>
                <div className="text-xl font-bold">{formatAmount(8450)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Payment Processing</div>
                <div className="text-xl font-bold">{formatAmount(3200)}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cards</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Active cards</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Awaiting processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </div>
    </Layout>
  );
};

export default DashboardPage;
