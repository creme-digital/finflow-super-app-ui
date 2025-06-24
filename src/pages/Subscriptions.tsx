import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, Download, MoreHorizontal } from 'lucide-react';
const SubscriptionsMainContent = () => {
  // Mock subscription data based on the screenshot
  const subscriptionData = [{
    date: 'May 2, 2025 9:25 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$8,657.41',
    status: 'Received'
  }, {
    date: 'May 5, 2025 2:22 pm',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$342.07',
    status: 'Received'
  }, {
    date: 'May 5, 2025 7:00 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$1,486.52',
    status: 'Received'
  }, {
    date: 'May 17, 2025 8:13 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$5,653.56',
    status: 'Received'
  }, {
    date: 'May 18, 2025 4:23 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$1,595.71',
    status: 'Received'
  }, {
    date: 'May 15, 2025 11:42 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$7,738.89',
    status: 'Received'
  }, {
    date: 'May 14, 2025 12:40 pm',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$8,650.33',
    status: 'Received'
  }, {
    date: 'May 28, 2025 8:44 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$1,207.52',
    status: 'Received'
  }, {
    date: 'May 6, 2025 11:47 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$376.96',
    status: 'Received'
  }, {
    date: 'May 14, 2025 7:12 pm',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$7,727.07',
    status: 'Received'
  }];
  return <div className="space-y-6">
      {/* Header with consistent styling */}
      <PageHeader title="Subscription" children={<div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              View All
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Subscription
            </Button>
          </div>} />

      {/* Tabs with Accounts page styling */}
      <Tabs defaultValue="all" className="w-full">
        

        <TabsContent value="all" className="space-y-6">
          {/* Filters and Export */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>

          {/* Subscription Table with glass effect */}
          <div className="overflow-hidden" style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
            <Table>
              <TableHeader>
                <TableRow className="border-b">
                  <TableHead className="text-left font-medium">Date</TableHead>
                  <TableHead className="text-left font-medium">Account</TableHead>
                  <TableHead className="text-left font-medium">Product Name</TableHead>
                  <TableHead className="text-left font-medium">Amount</TableHead>
                  <TableHead className="text-left font-medium">Status</TableHead>
                  <TableHead className="text-left font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptionData.map((item, index) => <TableRow key={index} className="border-b last:border-b-0">
                    <TableCell className="font-medium">{item.date}</TableCell>
                    <TableCell>{item.account}</TableCell>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell className="font-medium">{item.amount}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
const Subscriptions = () => {
  return <Layout title="Subscription" showRightSidebar={false} mainContent={<SubscriptionsMainContent />} />;
};
export default Subscriptions;