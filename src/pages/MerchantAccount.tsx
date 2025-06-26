import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, Download, ArrowRight, MoreHorizontal, Wallet } from 'lucide-react';
import { CreateMerchantAccountDialog } from '@/components/merchant/CreateMerchantAccountDialog';

const MerchantAccountMainContent = () => {
  const [activeTab, setActiveTab] = useState('payment-history');
  const [filters, setFilters] = useState({
    status: [] as string[],
    account: [] as string[],
    method: [] as string[]
  });

  // Mock account data
  const accounts = [{
    name: 'Tech Gadget',
    type: 'Account',
    balance: '$96,223.92',
    accountNumber: '******2137',
    routingNumber: '01938128',
    icon: '🛍️'
  }, {
    name: 'CosMake',
    type: 'Account',
    balance: '$62,223.92',
    accountNumber: '******2137',
    routingNumber: '01938128',
    icon: '💄'
  }, {
    name: 'CosMake',
    type: 'Account',
    balance: '$62,223.92',
    accountNumber: '******2137',
    routingNumber: '01938128',
    icon: '💄'
  }];

  // Mock payment history data with enhanced data for filtering
  const paymentHistory = [{
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
  }];

  // Filter payment history based on applied filters
  const filteredPaymentHistory = paymentHistory.filter(payment => {
    const statusMatch = filters.status.length === 0 || filters.status.includes(payment.status);
    const accountMatch = filters.account.length === 0 || filters.account.includes(payment.account);
    const methodMatch = filters.method.length === 0 || filters.method.includes(payment.method);
    return statusMatch && accountMatch && methodMatch;
  });
  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked ? [...prev[filterType], value] : prev[filterType].filter(item => item !== value)
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
      {/* Header with Tab and Action Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-foreground">Merchant Account</h1>
        <CreateMerchantAccountDialog />
      </div>

      {/* Tab Navigation with glass effect */}
      

      {/* Account Cards with consistent glass styling matching /accounting */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => <div key={index} className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
            <CardContent className="p-6">
              {/* Header section with icon and account info */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{account.name}</h3>
                    <p className="text-sm text-muted-foreground">{account.type}</p>
                  </div>
                </div>
              </div>

              {/* Balance section */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-foreground mb-1">{account.balance}</div>
                <div className="text-sm text-muted-foreground">Current Balance</div>
              </div>

              {/* Account Details section */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Account Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Account Number</span>
                    <span className="text-sm font-medium text-foreground">{account.accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Routing Number</span>
                    <span className="text-sm font-medium text-foreground">{account.routingNumber}</span>
                  </div>
                </div>
              </div>

              {/* View Details button */}
              <Button variant="outline" className="w-full justify-between text-sm font-medium">
                View Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </div>)}
      </div>

      {/* Filters - matching /accounting page styling exactly */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="rounded-full relative gap-2">
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                  {activeFiltersCount}
                </Badge>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-white">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={filters.status.includes('Received')} onCheckedChange={checked => handleFilterChange('status', 'Received', checked)}>
              Received
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filters.status.includes('Pending')} onCheckedChange={checked => handleFilterChange('status', 'Pending', checked)}>
              Pending
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filters.status.includes('Failed')} onCheckedChange={checked => handleFilterChange('status', 'Failed', checked)}>
              Failed
            </DropdownMenuCheckboxItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Filter by Account</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={filters.account.includes('CosMake')} onCheckedChange={checked => handleFilterChange('account', 'CosMake', checked)}>
              CosMake
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filters.account.includes('Tech gadget')} onCheckedChange={checked => handleFilterChange('account', 'Tech gadget', checked)}>
              Tech gadget
            </DropdownMenuCheckboxItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Filter by Method</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={filters.method.includes('ACH')} onCheckedChange={checked => handleFilterChange('method', 'ACH', checked)}>
              ACH
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filters.method.includes('Wire')} onCheckedChange={checked => handleFilterChange('method', 'Wire', checked)}>
              Wire
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={filters.method.includes('Card')} onCheckedChange={checked => handleFilterChange('method', 'Card', checked)}>
              Card
            </DropdownMenuCheckboxItem>
            
            {activeFiltersCount > 0 && <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={clearAllFilters} className="text-red-600">
                  Clear all filters
                </DropdownMenuItem>
              </>}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <span className="text-sm text-muted-foreground">
          {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
        </span>
      </div>

      {/* Export button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div></div>
        
      </div>

      {/* Payment History Table with glass effect */}
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
            {filteredPaymentHistory.map((item, index) => <TableRow key={index} className="border-b last:border-b-0">
                <TableCell className="font-medium">{item.date}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell className="font-medium">{item.amount}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={item.status === 'Received' ? "bg-green-100 text-green-700 hover:bg-green-100" : item.status === 'Pending' ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" : item.status === 'Failed' ? "bg-red-100 text-red-700 hover:bg-red-100" : "bg-gray-100 text-gray-700 hover:bg-gray-100"}>
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
    </div>;
};

const MerchantAccount = () => {
  return <Layout title="Merchant Account" showRightSidebar={false} mainContent={<MerchantAccountMainContent />} />;
};

export default MerchantAccount;
