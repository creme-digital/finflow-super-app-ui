
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookkeepingTab } from '@/components/accounting/BookkeepingTab';
import { InvoicingTab } from '@/components/accounting/InvoicingTab';
import { ReportsTab } from '@/components/accounting/ReportsTab';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Accounting = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Accounting</h2>
          <p className="text-muted-foreground">
            Manage your financial records, create invoices, and generate reports.
          </p>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Financial Management</CardTitle>
            <CardDescription>
              Track transactions, generate invoices, and view financial reports all in one place.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="bookkeeping" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="bookkeeping">Bookkeeping</TabsTrigger>
                <TabsTrigger value="invoicing">Invoicing</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="bookkeeping" className="space-y-4">
                <BookkeepingTab />
              </TabsContent>
              <TabsContent value="invoicing" className="space-y-4">
                <InvoicingTab />
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <ReportsTab />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Accounting;
