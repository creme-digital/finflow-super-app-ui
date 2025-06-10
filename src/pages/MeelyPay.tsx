
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, DollarSign, CreditCard, TrendingUp } from 'lucide-react';

const MeelyPay = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Meely Pay"
          subtitle="Process payments, manage transactions, and handle payment processing."
        >
          <Button variant="default" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Payment
          </Button>
        </PageHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Processed</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$124,543.21</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.7%</div>
              <p className="text-xs text-muted-foreground">
                +0.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Credit Cards</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bank Transfers</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Digital Wallets</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Payment from John Doe</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                  <span className="text-green-600 font-medium">+$150.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Refund to Jane Smith</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                  <span className="text-red-600 font-medium">-$89.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Payment from Acme Corp</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                  <span className="text-green-600 font-medium">+$2,500.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MeelyPay;
