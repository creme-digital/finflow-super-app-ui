import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft, ArrowLeftRight, Plus, Wallet } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { BuyCryptoModal } from './BuyCryptoModal';
import { SendCryptoModal } from './SendCryptoModal';
import { CryptoReceiveModal } from './CryptoReceiveModal';

export function CryptoRightPanel() {
  const { formatAmount } = useCurrency();
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

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

  const buttonStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <div className="space-y-6">
      {/* Total Crypto Card - matching TotalBalance design exactly */}
      <div 
        className="rounded-[24px] p-6"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Total Crypto</span>
        </div>
        
        <div className="mb-2">
          <div className="text-3xl font-bold text-foreground">{formatAmount(totalCryptoValue)}</div>
          <div className="text-sm text-green-600 flex items-center gap-1">
            <span>↑ {changePercent}% (+{formatAmount(changeAmount)})</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
            onClick={() => setIsBuyModalOpen(true)}
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs">Buy</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
            onClick={() => setIsSwapModalOpen(true)}
          >
            <ArrowLeftRight className="w-5 h-5" />
            <span className="text-xs">Swap</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
            onClick={() => setIsSendModalOpen(true)}
          >
            <ArrowUpRight className="w-5 h-5" />
            <span className="text-xs">Send</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
            onClick={() => setIsReceiveModalOpen(true)}
          >
            <ArrowDownLeft className="w-5 h-5" />
            <span className="text-xs">Receive</span>
          </Button>
        </div>
      </div>

      {/* All Activity Section Header */}
      <div className="text-muted-foreground text-sm font-medium">All Activity</div>

      {/* Latest Crypto Transactions - matching dashboard activity design */}
      <div className="space-y-3">
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className="overflow-hidden" style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <div className="font-medium capitalize">{transaction.type === 'swap' ? 'Crypto Swap' : `${transaction.type} Crypto`}</div>
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
            </div>
          </div>
        ))}
      </div>

      {/* Buy Crypto Modal */}
      <BuyCryptoModal 
        open={isBuyModalOpen}
        onOpenChange={setIsBuyModalOpen}
        initialTab="buy"
      />

      {/* Swap Modal - same modal but with convert tab */}
      <BuyCryptoModal 
        open={isSwapModalOpen}
        onOpenChange={setIsSwapModalOpen}
        initialTab="convert"
      />

      {/* Send Crypto Modal */}
      <SendCryptoModal 
        open={isSendModalOpen}
        onOpenChange={setIsSendModalOpen}
      />

      {/* Receive Crypto Modal */}
      <CryptoReceiveModal 
        open={isReceiveModalOpen}
        onOpenChange={setIsReceiveModalOpen}
      />
    </div>
  );
}
