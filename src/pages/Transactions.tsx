import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter, Download, MoreHorizontal, Plus, Eye } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { AddTransactionDialog } from '@/components/transactions/AddTransactionDialog';
import { TransactionDrawer } from '@/components/transactions/TransactionDrawer';

const Transactions = () => {
  const [filters, setFilters] = useState({
    account: [] as string[],
    method: [] as string[]
  });
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<typeof transactions[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const transactions = [
    {
      id: '2110',
      date: '23/05/2024',
      toFrom: { name: 'James Hall', avatar: '/placeholder.svg' },
      amount: 8657.41,
      account: 'Ops / Payroll',
      method: 'Request or Invoice Payment'
    },
    {
      id: '2109',
      date: '23/05/2024',
      toFrom: { name: 'Rhonda Rhodes', avatar: '/placeholder.svg' },
      amount: 342.07,
      account: 'Credit account',
      method: 'Aluna T. ••7840'
    },
    {
      id: '2980',
      date: '23/05/2024',
      toFrom: { name: 'Kathy Pacheco', avatar: '/placeholder.svg' },
      amount: 1486.52,
      account: 'AP',
      method: 'Transfer'
    },
    {
      id: '1098',
      date: '23/05/2024',
      toFrom: { name: 'Kimberly Mastrangelo', avatar: '/placeholder.svg' },
      amount: 5653.56,
      account: 'Ops / Payroll',
      method: 'Intl. Wire'
    },
    {
      id: '1456',
      date: '23/05/2024',
      toFrom: { name: 'Corina McCoy', avatar: '/placeholder.svg' },
      amount: 1595.71,
      account: 'Credit account',
      method: 'Landon S. ••5555'
    },
    {
      id: '1567',
      date: '23/05/2024',
      toFrom: { name: 'Iva Ryan', avatar: '/placeholder.svg' },
      amount: 7738.89,
      account: 'AP',
      method: 'Request or Invoice Payment'
    },
    {
      id: '1234',
      date: '23/05/2024',
      toFrom: { name: 'Stephanie Nicol', avatar: '/placeholder.svg' },
      amount: 8650.33,
      account: 'Ops / Payroll',
      method: 'Aluna T. ••7840'
    },
    {
      id: '1324',
      date: '23/05/2024',
      toFrom: { name: 'Alex Buckmaster', avatar: '/placeholder.svg' },
      amount: 1207.52,
      account: 'Ops / Payroll',
      method: 'Transfer'
    },
    {
      id: '1643',
      date: '23/05/2024',
      toFrom: { name: 'Patricia Sanders', avatar: '/placeholder.svg' },
      amount: 376.96,
      account: 'Credit account',
      method: 'Intl. Wire'
    },
  ];

  // Filter transactions based on applied filters
  const filteredTransactions = transactions.filter(transaction => {
    const accountMatch = filters.account.length === 0 || filters.account.includes(transaction.account);
    const methodMatch = filters.method.length === 0 || filters.method.includes(transaction.method);
    return accountMatch && methodMatch;
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
      account: [],
      method: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.account.length + filters.method.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

  // Generate bar chart data for visualization
  const chartBars = Array.from({ length: 15 }, (_, i) => ({
    height: Math.random() * 60 + 20,
    isHighlight: i === 10 // Highlight one bar
  }));

  return (
    <Layout
      title="Transactions"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader title="Transactions">
            <Button onClick={() => setIsAddTransactionOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Transaction
            </Button>
          </PageHeader>

          {/* Filters - matching Cards page styling */}
          <div className="flex items-center justify-between">
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
                  <DropdownMenuLabel>Filter by Account</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('Ops / Payroll')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'Ops / Payroll', checked)}
                  >
                    Ops / Payroll
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('Credit account')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'Credit account', checked)}
                  >
                    Credit account
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('AP')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'AP', checked)}
                  >
                    AP
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Method</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Request or Invoice Payment')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Request or Invoice Payment', checked)}
                  >
                    Request or Invoice Payment
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Transfer')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Transfer', checked)}
                  >
                    Transfer
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Intl. Wire')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Intl. Wire', checked)}
                  >
                    Intl. Wire
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Aluna T. ••7840')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Aluna T. ••7840', checked)}
                  >
                    Aluna T. ••7840
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Landon S. ••5555')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Landon S. ••5555', checked)}
                  >
                    Landon S. ••5555
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
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>

          {/* Net Cash Summary Card */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Net cash this month</p>
                <h2 className="text-4xl font-bold text-foreground">-$72,321.11</h2>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <span className="text-sm text-muted-foreground">Money in</span>
                  <span className="text-sm font-medium text-green-600">$310,704.49</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                  <span className="text-sm text-muted-foreground">Money out</span>
                  <span className="text-sm font-medium text-red-600">-$383,025.60</span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end gap-1 h-20">
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${
                      bar.isHighlight ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    style={{ height: `${bar.height}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </div>

          {/* Transactions Table */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="font-medium text-muted-foreground">Date ↕</TableHead>
                  <TableHead className="font-medium text-muted-foreground">To/From</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Account</TableHead>
                  <TableHead className="font-medium text-muted-foreground">ID</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Method</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-b border-border last:border-0">
                    <TableCell className="font-medium text-foreground py-4">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transaction.toFrom.avatar} alt={transaction.toFrom.name} />
                          <AvatarFallback className="text-xs bg-muted">
                            {transaction.toFrom.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-foreground">{transaction.toFrom.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-foreground py-4">
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.account}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.id}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.method}
                    </TableCell>
                    <TableCell className="py-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => handleViewTransaction(transaction)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <AddTransactionDialog 
            open={isAddTransactionOpen} 
            onOpenChange={setIsAddTransactionOpen} 
          />

          <TransactionDrawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            transaction={selectedTransaction}
          />
        </div>
      }
    />
  );
};

export default Transactions;
