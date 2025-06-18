
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft, ArrowLeftRight, Plus } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export function CryptoSidebarContent() {
  const { formatAmount } = useCurrency();

  // Sample crypto portfolio value
  const totalCryptoValue = 12847.92;

  // Sample recent crypto transactions
  const recentTransactions = [
    {
      id: '1',
      type: 'buy',
      crypto: 'BTC',
      amount: '0.15 BTC',
      value: 9750.00,
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'swap',
      crypto: 'ETH → BTC',
      amount: '2.5 ETH',
      value: 8625.00,
      date: '2024-03-14',
      status: 'completed'
    },
    {
      id: '3',
      type: 'receive',
      crypto: 'ETH',
      amount: '1.2 ETH',
      value: 4140.00,
      date: '2024-03-13',
      status: 'completed'
    },
    {
      id: '4',
      type: 'send',
      crypto: 'BTC',
      amount: '0.05 BTC',
      value: 3250.00,
      date: '2024-03-12',
      status: 'pending'
    },
    {
      id: '5',
      type: 'buy',
      crypto: 'ADA',
      amount: '1000 ADA',
      value: 487.00,
      date: '2024-03-11',
      status: 'completed'
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <Plus className="w-4 h-4 text-green-600" />;
      case 'send':
        return <ArrowUpRight className="w-4 h-4 text-red-600" />;
      case 'receive':
        return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
      case 'swap':
        return <ArrowLeftRight className="w-4 h-4 text-blue-600" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'buy':
      case 'receive':
        return 'text-green-600';
      case 'send':
        return 'text-red-600';
      case 'swap':
        return 'text-blue-600';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Total Crypto Amount Card */}
      <Card className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
        <CardHeader>
          <CardTitle className="text-lg">Total Crypto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold">{formatAmount(totalCryptoValue)}</div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" className="h-8 text-xs">
              <Plus className="w-3 h-3 mr-1" />
              Buy
            </Button>
            <Button size="sm" variant="secondary" className="h-8 text-xs">
              <ArrowLeftRight className="w-3 h-3 mr-1" />
              Swap
            </Button>
            <Button size="sm" variant="secondary" className="h-8 text-xs">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              Send
            </Button>
            <Button size="sm" variant="secondary" className="h-8 text-xs">
              <ArrowDownLeft className="w-3 h-3 mr-1" />
              Receive
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Latest Crypto Transactions */}
      <Card className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
        <CardHeader>
          <CardTitle className="text-lg">Latest Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-white/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  {getTransactionIcon(transaction.type)}
                </div>
                <div>
                  <div className="font-medium text-sm capitalize">{transaction.type}</div>
                  <div className="text-xs text-muted-foreground">{transaction.crypto}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium text-sm ${getTransactionColor(transaction.type)}`}>
                  {transaction.type === 'send' ? '-' : '+'}{formatAmount(transaction.value)}
                </div>
                <div className="flex items-center gap-1">
                  <Badge 
                    variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
