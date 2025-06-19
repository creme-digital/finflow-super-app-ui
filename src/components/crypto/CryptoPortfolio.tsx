
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Filter, Download, Eye, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { TransactionDrawer } from '@/components/transactions/TransactionDrawer';
import { CryptoNetCashSection } from '@/components/crypto/CryptoNetCashSection';
import { CryptoStatsGrid } from '@/components/crypto/CryptoStatsGrid';
import { CryptoTransactionsTable } from '@/components/crypto/CryptoTransactionsTable';

export function CryptoPortfolio() {
  const [filters, setFilters] = useState({
    account: [] as string[],
    method: [] as string[]
  });
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleViewTransaction = (transaction: any) => {
    setSelectedTransaction(transaction);
    setDrawerOpen(true);
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="flex flex-col gap-6 h-full w-full">
      {/* Net Cash Section - Crypto specific */}
      <CryptoNetCashSection />

      {/* Stats Overview Section - Crypto specific */}
      <CryptoStatsGrid />

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
        <CryptoTransactionsTable 
          filters={filters}
          onViewTransaction={handleViewTransaction}
        />

        <TransactionDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          transaction={selectedTransaction}
        />
      </div>
    </div>
  );
}
