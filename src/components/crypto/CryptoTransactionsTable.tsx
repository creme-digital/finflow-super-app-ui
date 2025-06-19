
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Eye } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface CryptoTransactionsTableProps {
  filters: {
    account: string[];
    method: string[];
  };
  onViewTransaction: (transaction: any) => void;
}

export function CryptoTransactionsTable({ filters, onViewTransaction }: CryptoTransactionsTableProps) {
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

  return (
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
                  onClick={() => onViewTransaction(transaction)}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
