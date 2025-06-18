
import React, { useState } from 'react';
import { NetCashSection } from '@/components/dashboard/NetCashSection';
import { MoneyFlowCard } from '@/components/dashboard/MoneyFlowCard';
import { IncomeExpenseCard } from '@/components/dashboard/IncomeExpenseCard';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Filter, Download, Eye, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { TransactionDrawer } from '@/components/transactions/TransactionDrawer';

export function CryptoPortfolio() {
  const [filters, setFilters] = useState({
    account: [] as string[],
    method: [] as string[]
  });
  const [selectedTransaction, setSelectedTransaction] = useState<typeof cryptoTransactions[0] | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Crypto-specific transactions data
  const cryptoTransactions = [
    {
      id: '3001',
      date: '24/05/2024',
      toFrom: { name: 'Binance Exchange', avatar: '/placeholder.svg' },
      amount: 2150.75,
      account: 'BTC Wallet',
      method: 'Crypto Purchase'
    },
    {
      id: '3002',
      date: '24/05/2024',
      toFrom: { name: 'Coinbase Pro', avatar: '/placeholder.svg' },
      amount: -890.50,
      account: 'ETH Wallet',
      method: 'Crypto Sale'
    },
    {
      id: '3003',
      date: '23/05/2024',
      toFrom: { name: 'Kraken Exchange', avatar: '/placeholder.svg' },
      amount: 1750.25,
      account: 'ADA Wallet',
      method: 'Staking Rewards'
    },
    {
      id: '3004',
      date: '23/05/2024',
      toFrom: { name: 'DeFi Protocol', avatar: '/placeholder.svg' },
      amount: 345.80,
      account: 'USDT Wallet',
      method: 'Yield Farming'
    },
    {
      id: '3005',
      date: '22/05/2024',
      toFrom: { name: 'Uniswap DEX', avatar: '/placeholder.svg' },
      amount: -567.90,
      account: 'SOL Wallet',
      method: 'Token Swap'
    },
    {
      id: '3006',
      date: '22/05/2024',
      toFrom: { name: 'FTX Exchange', avatar: '/placeholder.svg' },
      amount: 2890.40,
      account: 'BNB Wallet',
      method: 'Crypto Purchase'
    },
    {
      id: '3007',
      date: '21/05/2024',
      toFrom: { name: 'Mining Pool', avatar: '/placeholder.svg' },
      amount: 125.60,
      account: 'BTC Wallet',
      method: 'Mining Rewards'
    },
    {
      id: '3008',
      date: '21/05/2024',
      toFrom: { name: 'P2P Exchange', avatar: '/placeholder.svg' },
      amount: -1200.00,
      account: 'USDC Wallet',
      method: 'P2P Transfer'
    }
  ];

  // Filter transactions based on applied filters
  const filteredTransactions = cryptoTransactions.filter(transaction => {
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

  const handleViewTransaction = (transaction: typeof cryptoTransactions[0]) => {
    setSelectedTransaction(transaction);
    setDrawerOpen(true);
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="flex flex-col gap-6 h-full w-full">
      {/* Net Cash Section */}
      <NetCashSection />

      {/* Charts in single column layout */}
      <div className="flex flex-col gap-6 flex-1">
        <MoneyFlowCard />
        <IncomeExpenseCard />

        {/* Crypto Transactions Section */}
        <div className="space-y-4">
          {/* Filters */}
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
                    checked={filters.account.includes('BTC Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'BTC Wallet', checked)}
                  >
                    BTC Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('ETH Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'ETH Wallet', checked)}
                  >
                    ETH Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('ADA Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'ADA Wallet', checked)}
                  >
                    ADA Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('USDT Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'USDT Wallet', checked)}
                  >
                    USDT Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('SOL Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'SOL Wallet', checked)}
                  >
                    SOL Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('BNB Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'BNB Wallet', checked)}
                  >
                    BNB Wallet
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('USDC Wallet')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'USDC Wallet', checked)}
                  >
                    USDC Wallet
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Method</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Crypto Purchase')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Crypto Purchase', checked)}
                  >
                    Crypto Purchase
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Crypto Sale')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Crypto Sale', checked)}
                  >
                    Crypto Sale
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Staking Rewards')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Staking Rewards', checked)}
                  >
                    Staking Rewards
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Yield Farming')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Yield Farming', checked)}
                  >
                    Yield Farming
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Token Swap')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Token Swap', checked)}
                  >
                    Token Swap
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('Mining Rewards')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'Mining Rewards', checked)}
                  >
                    Mining Rewards
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.method.includes('P2P Transfer')}
                    onCheckedChange={(checked) => handleFilterChange('method', 'P2P Transfer', checked)}
                  >
                    P2P Transfer
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

          <TransactionDrawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            transaction={selectedTransaction}
          />
        </div>
      </div>
    </div>
  );
}
