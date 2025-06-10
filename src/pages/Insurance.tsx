
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Insurance = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Insurance"
          subtitle="Manage your business insurance policies and coverage."
        >
          <Button variant="default" size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Policy
          </Button>
        </PageHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                All policies current
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Premium</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,247.50</div>
              <p className="text-xs text-muted-foreground">
                Due in 15 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Coverage Amount</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.5M</div>
              <p className="text-xs text-muted-foreground">
                Total coverage
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">General Liability</p>
                    <p className="text-sm text-muted-foreground">Policy #GL-2024-001</p>
                  </div>
                  <span className="text-green-600 text-sm">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Professional Liability</p>
                    <p className="text-sm text-muted-foreground">Policy #PL-2024-002</p>
                  </div>
                  <span className="text-green-600 text-sm">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">Cyber Liability</p>
                    <p className="text-sm text-muted-foreground">Policy #CL-2024-003</p>
                  </div>
                  <span className="text-green-600 text-sm">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Claims</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Shield className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>No recent claims</p>
                  <p className="text-sm">Your business is well protected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Insurance;
