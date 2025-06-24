
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, Download, ArrowRight, MoreHorizontal, Wallet } from 'lucide-react';

const MerchantAccountMainContent = () => {
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

  return (
    <div className="space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Merchant Account</h1>
          <p className="text-sm text-gray-600">Manage your merchant accounts and payment history</p>
        </div>
        <Button className="h-10 px-4 text-sm font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Create Merchant Account
        </Button>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <Card key={index} className="h-fit">
            <CardContent className="p-6">
              {/* Header section with icon and account info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{account.name}</h3>
                    <p className="text-sm text-gray-600">{account.type}</p>
                  </div>
                </div>
              </div>

              {/* Balance section */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">{account.balance}</div>
                <div className="text-sm text-gray-600">Current Balance</div>
              </div>

              {/* Account Details section */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Account Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Account Number</span>
                    <span className="text-sm font-medium text-gray-900">{account.accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Routing Number</span>
                    <span className="text-sm font-medium text-gray-900">{account.routingNumber}</span>
                  </div>
                </div>
              </div>

              {/* View Details button */}
              <Button variant="outline" className="w-full justify-between text-sm font-medium h-10">
                View Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment History Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Payment History</h2>
            <p className="text-sm text-gray-600">Track all your payment transactions</p>
          </div>
          <Button variant="outline" className="h-10 px-4 text-sm font-medium">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-10 px-4 text-sm font-medium border-gray-200 relative">
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel className="text-sm font-medium">Filter by Status</DropdownMenuLabel>
              <DropdownMenuCheckboxItem 
                checked={filters.status.includes('Received')} 
                onCheckedChange={(checked) => handleFilterChange('status', 'Received', checked)}
                className="text-sm"
              >
                Received
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem 
                checked={filters.status.includes('Pending')} 
                onCheckedChange={(checked) => handleFilterChange('status', 'Pending', checked)}
                className="text-sm"
              >
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem 
                checked={filters.status.includes('Failed')} 
                onCheckedChange={(checked) => handleFilterChange('status', 'Failed', checked)}
                className="text-sm"
              >
                Failed
              </DropdownMenuCheckboxItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuLabel className="text-sm font-medium">Filter by Account</DropdownMenuLabel>
              <DropdownMenuCheckboxItem 
                checked={filters.account.includes('CosMake')} 
                onCheckedChange={(checked) => handleFilterChange('account', 'CosMake', checked)}
                className="text-sm"
              >
                CosMake
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem 
                checked={filters.account.includes('Tech gadget')} 
                onCheckedChange={(checked) => handleFilterChange('account', 'Tech gadget', checked)}
                className="text-sm"
              >
                Tech gadget
              </DropdownMenuCheckboxItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuLabel className="text-sm font-medium">Filter by Method</DropdownMenuLabel>
              <DropdownMenuCheckboxItem 
                checked={filters.method.includes('ACH')} 
                onCheckedChange={(checked) => handleFilterChange('method', 'ACH', checked)}
                className="text-sm"
              >
                ACH
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem 
                checked={filters.method.includes('Wire')} 
                onCheckedChange={(checked) => handleFilterChange('method', 'Wire', checked)}
                className="text-sm"
              >
                Wire
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem 
                checked={filters.method.includes('Card')} 
                onCheckedChange={(checked) => handleFilterChange('method', 'Card', checked)}
                className="text-sm"
              >
                Card
              </DropdownMenuCheckboxItem>
              
              {activeFiltersCount > 0 && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={clearAllFilters} className="text-red-600 text-sm">
                    Clear all filters
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {activeFiltersCount > 0 && (
            <span className="text-sm text-gray-600">
              {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} applied
            </span>
          )}
        </div>

        {/* Payment History Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-100">
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Date</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Account</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Product Name</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Amount</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Status</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Method</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 text-sm">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPaymentHistory.map((item, index) => (
                  <TableRow key={index} className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900 py-4 px-6 text-sm">{item.date}</TableCell>
                    <TableCell className="text-gray-700 py-4 px-6 text-sm">{item.account}</TableCell>
                    <TableCell className="text-gray-700 py-4 px-6 text-sm">{item.productName}</TableCell>
                    <TableCell className="font-semibold text-gray-900 py-4 px-6 text-sm">{item.amount}</TableCell>
                    <TableCell className="py-4 px-6">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-medium px-2.5 py-1 ${
                          item.status === 'Received' 
                            ? "bg-green-100 text-green-700 hover:bg-green-100" 
                            : item.status === 'Pending' 
                            ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" 
                            : item.status === 'Failed' 
                            ? "bg-red-100 text-red-700 hover:bg-red-100" 
                            : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-700 py-4 px-6 text-sm">{item.method}</TableCell>
                    <TableCell className="py-4 px-6">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const MerchantAccount = () => {
  return (
    <Layout 
      title="Merchant Account" 
      showRightSidebar={false} 
      mainContent={<MerchantAccountMainContent />} 
    />
  );
};

export default MerchantAccount;
