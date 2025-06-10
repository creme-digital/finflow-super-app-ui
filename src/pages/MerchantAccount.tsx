
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Building2, CreditCard, TrendingUp } from 'lucide-react';

const MerchantAccount = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Merchant Account"
          subtitle="Manage your merchant services and payment processing setup."
        >
          <Button variant="default" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Terminal
          </Button>
        </PageHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,432.10</div>
              <p className="text-xs text-muted-foreground">
                +15.2% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transaction Fee</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.9%</div>
              <p className="text-xs text-muted-foreground">
                + $0.30 per transaction
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.2%</div>
              <p className="text-xs text-muted-foreground">
                Above industry average
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Terminals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Terminal 001</p>
                    <p className="text-sm text-muted-foreground">Main Counter</p>
                  </div>
                  <span className="text-green-600 text-sm">Online</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Terminal 002</p>
                    <p className="text-sm text-muted-foreground">Drive Through</p>
                  </div>
                  <span className="text-green-600 text-sm">Online</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Mobile Reader</p>
                    <p className="text-sm text-muted-foreground">Portable</p>
                  </div>
                  <span className="text-yellow-600 text-sm">Charging</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Merchant ID</span>
                  <span className="font-medium">MER-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account Status</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Settlement</span>
                  <span className="font-medium">Next Day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk Level</span>
                  <span className="text-green-600 font-medium">Low</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MerchantAccount;
