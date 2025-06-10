
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Users, DollarSign, TrendingUp } from 'lucide-react';

const Subscriptions = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Subscriptions"
          subtitle="Manage recurring subscriptions and subscription-based revenue."
        >
          <Button variant="default" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Subscription
          </Button>
        </PageHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">
                +180 this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$23,500.00</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4%</div>
              <p className="text-xs text-muted-foreground">
                -0.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Revenue Per User</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10.00</div>
              <p className="text-xs text-muted-foreground">
                +$0.50 from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Basic Plan</p>
                    <p className="text-sm text-muted-foreground">$9.99/month</p>
                  </div>
                  <span className="text-sm">1,250 subscribers</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Pro Plan</p>
                    <p className="text-sm text-muted-foreground">$19.99/month</p>
                  </div>
                  <span className="text-sm">850 subscribers</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Enterprise Plan</p>
                    <p className="text-sm text-muted-foreground">$49.99/month</p>
                  </div>
                  <span className="text-sm">250 subscribers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">New subscription</p>
                    <p className="text-xs text-muted-foreground">John Doe - Pro Plan</p>
                  </div>
                  <span className="text-green-600 text-sm">+$19.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Subscription cancelled</p>
                    <p className="text-xs text-muted-foreground">Jane Smith - Basic Plan</p>
                  </div>
                  <span className="text-red-600 text-sm">-$9.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Plan upgrade</p>
                    <p className="text-xs text-muted-foreground">Bob Wilson - Basic to Pro</p>
                  </div>
                  <span className="text-green-600 text-sm">+$10.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Subscriptions;
