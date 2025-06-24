
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, Download, MoreHorizontal } from 'lucide-react';

const SubscriptionsMainContent = () => {
  const [filters, setFilters] = useState({
    status: [] as string[],
    account: [] as string[],
    method: [] as string[]
  });

  // Mock subscription data based on the screenshot
  const subscriptionData = [{
    date: 'May 2, 2025 9:25 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$8,657.41',
    status: 'Received',
    method: 'ACH'
  }, {
    date: 'May 5, 2025 2:22 pm',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$342.07',
    status: 'Received',
    method: 'Wire'
  }, {
    date: 'May 5, 2025 7:00 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$1,486.52',
    status: 'Pending',
    method: 'Card'
  }, {
    date: 'May 17, 2025 8:13 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$5,653.56',
    status: 'Received',
    method: 'ACH'
  }, {
    date: 'May 18, 2025 4:23 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$1,595.71',
    status: 'Failed',
    method: 'Wire'
  }, {
    date: 'May 15, 2025 11:42 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$7,738.89',
    status: 'Received',
    method: 'ACH'
  }, {
    date: 'May 14, 2025 12:40 pm',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$8,650.33',
    status: 'Received',
    method: 'Card'
  }, {
    date: 'May 28, 2025 8:44 am',
    account: 'CosMake',
    productName: 'Gadget',
    amount: '$1,207.52',
    status: 'Received',
    method: 'Card'
  }, {
    date: 'May 6, 2025 11:47 am',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$376.96',
    status: 'Pending',
    method: 'Wire'
  }, {
    date: 'May 14, 2025 7:12 pm',
    account: 'Tech gadget',
    productName: 'Gadget',
    amount: '$7,727.07',
    status: 'Failed',
    method: 'ACH'
  }];

  // Filter subscription data based on applied filters
  const filteredSubscriptionData = subscriptionData.filter(subscription => {
    const statusMatch = filters.status.length === 0 || filters.status.includes(subscription.status);
    const accountMatch = filters.account.length === 0 || filters.account.includes(subscription.account);
    const methodMatch = filters.method.length === 0 || filters.method.includes(subscription.method);
    return statusMatch && accountMatch && methodMatch;
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      status: [],
      account: [],
      method: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.status.length + filters.account.length + filters.method.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

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
          {/* Filters - matching /accounting page styling exactly */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-full relative gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Received')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Received', checked)}
                >
                  Received
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Pending')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Pending', checked)}
                >
                  Pending
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Failed')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Failed', checked)}
                >
                  Failed
                </DropdownMenuCheckboxItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel>Filter by Account</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.account.includes('CosMake')}
                  onCheckedChange={(checked) => handleFilterChange('account', 'CosMake', checked)}
                >
                  CosMake
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.account.includes('Tech gadget')}
                  onCheckedChange={(checked) => handleFilterChange('account', 'Tech gadget', checked)}
                >
                  Tech gadget
                </DropdownMenuCheckboxItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel>Filter by Method</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.method.includes('ACH')}
                  onCheckedChange={(checked) => handleFilterChange('method', 'ACH', checked)}
                >
                  ACH
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.method.includes('Wire')}
                  onCheckedChange={(checked) => handleFilterChange('method', 'Wire', checked)}
                >
                  Wire
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.method.includes('Card')}
                  onCheckedChange={(checked) => handleFilterChange('method', 'Card', checked)}
                >
                  Card
                </DropdownMenuCheckboxItem>
                
                {activeFiltersCount > 0 && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={clearAllFilters} className="text-red-600">
                      Clear all filters
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <span className="text-sm text-muted-foreground">
              {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
            </span>
          </div>

          {/* Export Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div></div>
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
                  <TableHead className="text-left font-medium">Method</TableHead>
                  <TableHead className="text-left font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscriptionData.map((item, index) => <TableRow key={index} className="border-b last:border-b-0">
                    <TableCell className="font-medium">{item.date}</TableCell>
                    <TableCell>{item.account}</TableCell>
                    <TableCell>{item.productName}</TableCell>
                    <TableCell className="font-medium">{item.amount}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={
                        item.status === 'Received' ? "bg-green-100 text-green-700 hover:bg-green-100" :
                        item.status === 'Pending' ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" :
                        item.status === 'Failed' ? "bg-red-100 text-red-700 hover:bg-red-100" :
                        "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.method}</TableCell>
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
