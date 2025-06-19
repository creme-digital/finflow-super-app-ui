
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface CryptoTransaction {
  id: string;
  date: string;
  type: 'buy' | 'sell' | 'transfer';
  asset: string;
  amount: string;
  price: string;
  total: string;
  status: 'completed' | 'pending' | 'failed';
}

const cryptoTransactions: CryptoTransaction[] = [
  {
    id: 'CTX-001',
    date: '2024-06-15',
    type: 'buy',
    asset: 'Bitcoin (BTC)',
    amount: '0.25',
    price: '$65,400.00',
    total: '$16,350.00',
    status: 'completed'
  },
  {
    id: 'CTX-002',
    date: '2024-06-14',
    type: 'sell',
    asset: 'Ethereum (ETH)',
    amount: '2.5',
    price: '$3,200.00',
    total: '$8,000.00',
    status: 'completed'
  },
  {
    id: 'CTX-003',
    date: '2024-06-13',
    type: 'buy',
    asset: 'Solana (SOL)',
    amount: '50',
    price: '$156.42',
    total: '$7,821.00',
    status: 'completed'
  },
  {
    id: 'CTX-004',
    date: '2024-06-12',
    type: 'transfer',
    asset: 'Bitcoin (BTC)',
    amount: '0.1',
    price: '$64,800.00',
    total: '$6,480.00',
    status: 'pending'
  },
  {
    id: 'CTX-005',
    date: '2024-06-11',
    type: 'buy',
    asset: 'Cardano (ADA)',
    amount: '1000',
    price: '$0.487',
    total: '$487.00',
    status: 'completed'
  },
  {
    id: 'CTX-006',
    date: '2024-06-10',
    type: 'sell',
    asset: 'Polygon (MATIC)',
    amount: '500',
    price: '$0.85',
    total: '$425.00',
    status: 'completed'
  },
  {
    id: 'CTX-007',
    date: '2024-06-09',
    type: 'buy',
    asset: 'Chainlink (LINK)',
    amount: '25',
    price: '$14.78',
    total: '$369.50',
    status: 'failed'
  },
  {
    id: 'CTX-008',
    date: '2024-06-08',
    type: 'buy',
    asset: 'Ethereum (ETH)',
    amount: '1.2',
    price: '$3,150.00',
    total: '$3,780.00',
    status: 'completed'
  }
];

export function CryptoTransactionsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <ArrowDown className="w-4 h-4 text-green-500" />;
      case 'sell':
        return <ArrowUp className="w-4 h-4 text-red-500" />;
      case 'transfer':
        return <ArrowUp className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

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
            <TableHead className="text-muted-foreground font-medium">ID</TableHead>
            <TableHead className="text-muted-foreground font-medium">Date</TableHead>
            <TableHead className="text-muted-foreground font-medium">Type</TableHead>
            <TableHead className="text-muted-foreground font-medium">Asset</TableHead>
            <TableHead className="text-muted-foreground font-medium">Amount</TableHead>
            <TableHead className="text-muted-foreground font-medium">Price</TableHead>
            <TableHead className="text-muted-foreground font-medium">Total</TableHead>
            <TableHead className="text-muted-foreground font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cryptoTransactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-b border-border last:border-0">
              <TableCell className="text-foreground font-medium">{transaction.id}</TableCell>
              <TableCell className="text-foreground">{new Date(transaction.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getTypeIcon(transaction.type)}
                  <span className="capitalize text-foreground">{transaction.type}</span>
                </div>
              </TableCell>
              <TableCell className="text-foreground font-medium">{transaction.asset}</TableCell>
              <TableCell className="text-foreground">{transaction.amount}</TableCell>
              <TableCell className="text-foreground">{transaction.price}</TableCell>
              <TableCell className={`text-foreground font-medium ${
                transaction.type === 'sell' ? 'text-green-500' : 
                transaction.type === 'buy' ? 'text-red-500' : 'text-foreground'
              }`}>
                {transaction.type === 'sell' ? '+' : transaction.type === 'buy' ? '-' : ''}{transaction.total}
              </TableCell>
              <TableCell>{getStatusBadge(transaction.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
