
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, ChevronDown, Download, MoreHorizontal, Info } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const summaryData = [
  {
    label: 'Total Open',
    value: 2000,
    subtitle: '12 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
  {
    label: 'Overdue invoices',
    value: 182,
    subtitle: '5 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
  {
    label: 'paid invoices',
    value: 928,
    subtitle: '7 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
];

const invoicesData = [
  {
    date: '23/05/2024',
    status: 'Overdue',
    customer: 'James Hall',
    amount: 8657.41,
    invoiceNo: '2110',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Overdue',
    customer: 'Rhonda Rhodes',
    amount: 342.07,
    invoiceNo: '2109',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Kathy Pacheco',
    amount: 1486.52,
    invoiceNo: '2980',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Kimberly Mastrangelo',
    amount: 5653.56,
    invoiceNo: '1098',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Corina McCoy',
    amount: 1595.71,
    invoiceNo: '1456',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Iva Ryan',
    amount: 7738.89,
    invoiceNo: '1567',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Stephanie Nicol',
    amount: 8650.33,
    invoiceNo: '1234',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Alex Buckmaster',
    amount: 1207.52,
    invoiceNo: '1324',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Processing',
    customer: 'Patricia Sanders',
    amount: 376.96,
    invoiceNo: '1643',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Canceled',
    customer: 'Katie Sims',
    amount: 7727.07,
    invoiceNo: '1759',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
];

const statusStyles = {
  'Overdue': { bg: '#FEF2F2', color: '#991B1B' },
  'Not due yet': { bg: '#EFF6FF', color: '#1E40AF' },
  'Paid': { bg: '#F0FDF4', color: '#166534' },
  'Processing': { bg: '#FEF3C7', color: '#92400E' },
  'Canceled': { bg: '#F3F4F6', color: '#374151' },
};

const Accounting = () => {
  const [filters, setFilters] = useState({
    status: [] as string[],
    customer: [] as string[],
    recurring: [] as string[]
  });

  // Filter invoices based on applied filters
  const filteredInvoices = invoicesData.filter(invoice => {
    const statusMatch = filters.status.length === 0 || filters.status.includes(invoice.status);
    const customerMatch = filters.customer.length === 0 || filters.customer.includes(invoice.customer);
    const recurringMatch = filters.recurring.length === 0 || filters.recurring.includes(invoice.recurring);
    return statusMatch && customerMatch && recurringMatch;
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
      customer: [],
      recurring: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.status.length + filters.customer.length + filters.recurring.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Layout
      title="Accounting"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-foreground">Accounting Details</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export All
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Invoice
              </Button>
            </div>
          </div>

          {/* Filters - matching Cards page styling */}
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
                  checked={filters.status.includes('Overdue')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Overdue', checked)}
                >
                  Overdue
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Not due yet')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Not due yet', checked)}
                >
                  Not due yet
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Paid')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Paid', checked)}
                >
                  Paid
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Processing')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Processing', checked)}
                >
                  Processing
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status.includes('Canceled')}
                  onCheckedChange={(checked) => handleFilterChange('status', 'Canceled', checked)}
                >
                  Canceled
                </DropdownMenuCheckboxItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel>Filter by Customer</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.customer.includes('James Hall')}
                  onCheckedChange={(checked) => handleFilterChange('customer', 'James Hall', checked)}
                >
                  James Hall
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.customer.includes('Rhonda Rhodes')}
                  onCheckedChange={(checked) => handleFilterChange('customer', 'Rhonda Rhodes', checked)}
                >
                  Rhonda Rhodes
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.customer.includes('Kathy Pacheco')}
                  onCheckedChange={(checked) => handleFilterChange('customer', 'Kathy Pacheco', checked)}
                >
                  Kathy Pacheco
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.customer.includes('Kimberly Mastrangelo')}
                  onCheckedChange={(checked) => handleFilterChange('customer', 'Kimberly Mastrangelo', checked)}
                >
                  Kimberly Mastrangelo
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.customer.includes('Corina McCoy')}
                  onCheckedChange={(checked) => handleFilterChange('customer', 'Corina McCoy', checked)}
                >
                  Corina McCoy
                </DropdownMenuCheckboxItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel>Filter by Recurring</DropdownMenuLabel>
                <DropdownMenuCheckboxItem
                  checked={filters.recurring.includes('Monthly')}
                  onCheckedChange={(checked) => handleFilterChange('recurring', 'Monthly', checked)}
                >
                  Monthly
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.recurring.includes('Weekly')}
                  onCheckedChange={(checked) => handleFilterChange('recurring', 'Weekly', checked)}
                >
                  Weekly
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.recurring.includes('One Time')}
                  onCheckedChange={(checked) => handleFilterChange('recurring', 'One Time', checked)}
                >
                  One Time
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

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryData.map((item, i) => (
              <div
                key={i}
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
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    ${item.value < 1000 ? item.value : `${(item.value / 1000).toFixed(0)}k`}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Invoices Table */}
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
                  <TableHead className="w-12 p-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </TableHead>
                  <TableHead className="font-medium text-muted-foreground">Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Status</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Customer</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Invoice No.</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Invoice Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Recurring</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInvoices.map((invoice, i) => (
                  <TableRow key={i} className="border-b border-border last:border-0">
                    <TableCell className="p-4">
                      <input type="checkbox" className="w-4 h-4" />
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {invoice.date}
                    </TableCell>
                    <TableCell>
                      <Badge
                        style={{
                          backgroundColor: statusStyles[invoice.status]?.bg,
                          color: statusStyles[invoice.status]?.color,
                          borderRadius: 6,
                          fontWeight: 500,
                          fontSize: 12,
                          padding: '4px 8px',
                        }}
                        className="hover:bg-current"
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {invoice.customer}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {formatCurrency(invoice.amount)}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.invoiceNo}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.invoiceDate}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.recurring}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      }
    />
  );
};

export default Accounting;
