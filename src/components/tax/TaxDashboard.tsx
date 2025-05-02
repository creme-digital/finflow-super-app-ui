
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, Download, FileText } from 'lucide-react';
import { TaxEstimatesTab } from './TaxEstimatesTab';
import { TaxDeadlinesTab } from './TaxDeadlinesTab';
import { TaxFormsTab } from './TaxFormsTab';

export const TaxDashboard = () => {
  const [activeTab, setActiveTab] = useState('estimates');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Estimated Taxes</CardTitle>
            <CardDescription>Current year estimate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">Based on YTD income</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Next Deadline</CardTitle>
            <CardDescription>Estimated tax payment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Jun 15, 2025</div>
            <p className="text-xs text-muted-foreground">Q2 estimated payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>YTD Payments</CardTitle>
            <CardDescription>Tax payments made</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$3,125</div>
            <p className="text-xs text-muted-foreground">25% of annual estimate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="estimates" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="estimates">Tax Estimates</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="forms">Tax Forms</TabsTrigger>
        </TabsList>
        <TabsContent value="estimates" className="mt-6">
          <TaxEstimatesTab />
        </TabsContent>
        <TabsContent value="deadlines" className="mt-6">
          <TaxDeadlinesTab />
        </TabsContent>
        <TabsContent value="forms" className="mt-6">
          <TaxFormsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
