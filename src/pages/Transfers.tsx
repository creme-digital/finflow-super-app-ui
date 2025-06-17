import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, ChevronDown, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/layout/PageHeader';
import { TransferDialog } from '@/components/dashboard/TransferDialog';
import { TransactionDrawer } from '@/components/accounts/TransactionDrawer';

// Sample transfer data
const transfersData = [{
  id: '1',
  date: '23/05/2024',
  method: 'ACH Transfer',
  from: {
    name: 'James Hall',
    avatar: '/placeholder.svg'
  },
  account: 'Ops / Payroll',
  to: {
    name: 'James Hall',
    avatar: '/placeholder.svg'
  },
  amount: '$8,657.41'
}, {
  id: '2',
  date: '23/05/2024',
  method: 'Wire Transfer',
  from: {
    name: 'Rhonda Rhodes',
    avatar: '/placeholder.svg'
  },
  account: 'Credit account',
  to: {
    name: 'Rhonda Rhodes',
    avatar: '/placeholder.svg'
  },
  amount: '$342.07'
}, {
  id: '3',
  date: '23/05/2024',
  method: 'international',
  from: {
    name: 'Kathy Pacheco',
    avatar: '/placeholder.svg'
  },
  account: 'AP',
  to: {
    name: 'Kathy Pacheco',
    avatar: '/placeholder.svg'
  },
  amount: '$1,486.52'
}, {
  id: '4',
  date: '23/05/2024',
  method: 'ACH Transfer',
  from: {
    name: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg'
  },
  account: 'Ops / Payroll',
  to: {
    name: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg'
  },
  amount: '$5,653.56'
}, {
  id: '5',
  date: '23/05/2024',
  method: 'Wire Transfer',
  from: {
    name: 'Corina McCoy',
    avatar: '/placeholder.svg'
  },
  account: 'Credit account',
  to: {
    name: 'Corina McCoy',
    avatar: '/placeholder.svg'
  },
  amount: '$1,595.71'
}, {
  id: '6',
  date: '23/05/2024',
  method: 'international',
  from: {
    name: 'Iva Ryan',
    avatar: '/placeholder.svg'
  },
  account: 'AP',
  to: {
    name: 'Iva Ryan',
    avatar: '/placeholder.svg'
  },
  amount: '$7,738.89'
}, {
  id: '7',
  date: '23/05/2024',
  method: 'international',
  from: {
    name: 'Stephanie Nicol',
    avatar: '/placeholder.svg'
  },
  account: 'Ops / Payroll',
  to: {
    name: 'Stephanie Nicol',
    avatar: '/placeholder.svg'
  },
  amount: '$8,650.33'
}, {
  id: '8',
  date: '23/05/2024',
  method: 'ACH Transfer',
  from: {
    name: 'Alex Buckmaster',
    avatar: '/placeholder.svg'
  },
  account: 'Ops / Payroll',
  to: {
    name: 'Alex Buckmaster',
    avatar: '/placeholder.svg'
  },
  amount: '$1,207.52'
}, {
  id: '9',
  date: '23/05/2024',
  method: 'Wire Transfer',
  from: {
    name: 'Patricia Sanders',
    avatar: '/placeholder.svg'
  },
  account: 'Credit account',
  to: {
    name: 'Patricia Sanders',
    avatar: '/placeholder.svg'
  },
  amount: '$376.96'
}, {
  id: '10',
  date: '23/05/2024',
  method: 'international',
  from: {
    name: 'Katie Sims',
    avatar: '/placeholder.svg'
  },
  account: 'AP',
  to: {
    name: 'Katie Sims',
    avatar: '/placeholder.svg'
  },
  amount: '$7,727.07'
}];

export default function Transfers() {
  const [filters, setFilters] = useState({
    method: [] as string[],
    account: [] as string[],
    date: [] as string[]
  });
  const [transferDialogOpen, setTransferDialogOpen] = useState(false);
  const [transactionDrawerOpen, setTransactionDrawerOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  // Filter transfers based on applied filters
  const filteredTransfers = transfersData.filter(transfer => {
    const methodMatch = filters.method.length === 0 || filters.method.includes(transfer.method);
    const accountMatch = filters.account.length === 0 || filters.account.includes(transfer.account);
    const dateMatch = filters.date.length === 0 || filters.date.includes(transfer.date);
    return methodMatch && accountMatch && dateMatch;
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked ? [...prev[filterType], value] : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      method: [],
      account: [],
      date: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.method.length + filters.account.length + filters.date.length;
  };

  const handleTransactionClick = (transfer: any) => {
    // Convert transfer data to transaction format expected by TransactionDrawer
    const transaction = {
      id: transfer.id,
      date: transfer.date,
      person: transfer.from,
      amount: parseFloat(transfer.amount.replace('$', '').replace(',', '')),
      account: transfer.account,
      method: transfer.method
    };
    setSelectedTransaction(transaction);
    setTransactionDrawerOpen(true);
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Layout 
      title="Transfer" 
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader title="Transfer">
            <Button onClick={() => setTransferDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Transfer
            </Button>
          </PageHeader>

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
                <DropdownMenuLabel>Filter by Method</DropdownMenuLabel>
                <DropdownMenuCheckboxItem 
                  checked={filters.method.includes('ACH Transfer')} 
                  onCheckedChange={(checked) => handleFilterChange('method', 'ACH Transfer', checked)}
                >
                  ACH Transfer
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                  checked={filters.method.includes('Wire Transfer')} 
                  onCheckedChange={(checked) => handleFilterChange('method', 'Wire Transfer', checked)}
                >
                  Wire Transfer
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                  checked={filters.method.includes('international')} 
                  onCheckedChange={(checked) => handleFilterChange('method', 'international', checked)}
                >
                  International
                </DropdownMenuCheckboxItem>
                
                <DropdownMenuSeparator />
                
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
              {activeFiltersCount > 0 
                ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` 
                : 'No filters applied'
              }
            </span>
          </div>

          {/* Transfers Table */}
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
                <TableRow className="border-b border-border">
                  <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Method</TableHead>
                  <TableHead className="text-muted-foreground font-medium">From</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Account</TableHead>
                  <TableHead className="text-muted-foreground font-medium">To</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Amount</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransfers.map((transfer) => (
                  <TableRow 
                    key={transfer.id} 
                    className="border-b border-border/50 cursor-pointer hover:bg-muted/50"
                    onClick={() => handleTransactionClick(transfer)}
                  >
                    <TableCell className="text-foreground">
                      {transfer.date}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "font-normal",
                          transfer.method === 'ACH Transfer' && "bg-blue-50 text-blue-700 hover:bg-blue-50",
                          transfer.method === 'Wire Transfer' && "bg-green-50 text-green-700 hover:bg-green-50",
                          transfer.method === 'international' && "bg-purple-50 text-purple-700 hover:bg-purple-50"
                        )}
                      >
                        {transfer.method}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transfer.from.avatar} alt={transfer.from.name} />
                          <AvatarFallback className="text-xs">
                            {transfer.from.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-foreground font-medium">{transfer.from.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {transfer.account}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transfer.to.avatar} alt={transfer.to.name} />
                          <AvatarFallback className="text-xs">
                            {transfer.to.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-foreground font-medium">{transfer.to.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground font-medium">
                      {transfer.amount}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle more actions here if needed
                        }}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Transfer Dialog */}
          <TransferDialog 
            open={transferDialogOpen}
            onOpenChange={setTransferDialogOpen}
          />

          {/* Transaction Drawer */}
          <TransactionDrawer
            open={transactionDrawerOpen}
            onOpenChange={setTransactionDrawerOpen}
            transaction={selectedTransaction}
          />
        </div>
      } 
    />
  );
}

// ... keep existing code (TransferData interface)

export interface TransferData {
  sourceAccount: string;
  destinationAccount: string;
  amount: string;
  memo: string;
  recipientName: string;
  recipientEmail: string;
  routingNumber?: string;
  accountNumber?: string;
  bankName?: string;
  swiftCode?: string;
  country?: string;
}
