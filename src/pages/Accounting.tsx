
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookkeepingTab } from '@/components/accounting/BookkeepingTab';
import { InvoicingTab } from '@/components/accounting/InvoicingTab';
import { ReportsTab } from '@/components/accounting/ReportsTab';

const Accounting = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Accounting</h1>
        <p className="text-muted-foreground">
          Manage your business finances, invoices, and generate financial reports.
        </p>
        
        <Card className="mt-4">
          <CardContent className="pt-6">
            <Tabs defaultValue="bookkeeping" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-3">
                <TabsTrigger value="bookkeeping">Bookkeeping</TabsTrigger>
                <TabsTrigger value="invoicing">Invoicing</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="bookkeeping">
                <BookkeepingTab />
              </TabsContent>
              <TabsContent value="invoicing">
                <InvoicingTab />
              </TabsContent>
              <TabsContent value="reports">
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
