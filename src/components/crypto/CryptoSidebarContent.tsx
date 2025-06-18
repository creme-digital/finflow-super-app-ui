
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
  const changePercent = 10.5;
  const changeAmount = 908.00;

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
      {/* Total Crypto Amount Card - matching /index page design */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Total Crypto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-black">{formatAmount(totalCryptoValue)}</div>
            <div className="text-green-600 text-sm font-medium">
              ↗ {changePercent}% (+{formatAmount(changeAmount)})
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button size="sm" className="h-16 flex flex-col gap-1 text-xs bg-white text-black border hover:bg-gray-50" variant="outline">
              <Plus className="w-5 h-5" />
              Buy
            </Button>
            <Button size="sm" className="h-16 flex flex-col gap-1 text-xs bg-white text-black border hover:bg-gray-50" variant="outline">
              <ArrowUpRight className="w-5 h-5" />
              Send
            </Button>
            <Button size="sm" className="h-16 flex flex-col gap-1 text-xs bg-white text-black border hover:bg-gray-50" variant="outline">
              <ArrowDownLeft className="w-5 h-5" />
              Receive
            </Button>
            <Button size="sm" className="h-16 flex flex-col gap-1 text-xs bg-white text-black border hover:bg-gray-50" variant="outline">
              <ArrowLeftRight className="w-5 h-5" />
              Transfer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* All Activity Section Header */}
      <div className="text-muted-foreground text-sm font-medium">All Activity</div>

      {/* Latest Crypto Transactions - matching /index page list design */}
      <div className="space-y-3">
        {recentTransactions.map((transaction) => (
          <Card key={transaction.id} className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <div className="font-medium text-black capitalize">{transaction.type === 'swap' ? 'Crypto Swap' : `${transaction.type} Crypto`}</div>
                    <div className="text-sm text-muted-foreground">{transaction.crypto}</div>
                    <div className="text-blue-600 text-sm cursor-pointer hover:underline">
                      View Transaction
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-muted-foreground text-sm">Balance:</div>
                  <div className={`font-medium ${getTransactionColor(transaction.type)}`}>
                    {transaction.type === 'send' ? '-' : '+'}{formatAmount(transaction.value)}
                  </div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    {transaction.status === 'completed' ? (
                      <span className="text-green-600 text-sm">↗ 2.55</span>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        {transaction.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
