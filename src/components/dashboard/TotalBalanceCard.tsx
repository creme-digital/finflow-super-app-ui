
import React, { useState } from 'react';
import { Wallet, Send, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/contexts/CurrencyContext';
import { DepositDialog } from './DepositDialog';

export function TotalBalanceCard() {
  const { formatAmount } = useCurrency();
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);

  const buttonStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  const handleDepositClick = () => {
    setIsDepositDialogOpen(true);
  };

  return (
    <>
      <div 
        className="rounded-[24px] p-6"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Total Balance</span>
        </div>
        
        <div className="mb-2">
          <div className="text-3xl font-bold text-foreground">{formatAmount(23569)}</div>
          <div className="text-sm text-green-600 flex items-center gap-1">
            <span>↑ 10.5% (+{formatAmount(908)})</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-6">
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
            onClick={handleDepositClick}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs">Deposit</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
          >
            <Send className="w-5 h-5" />
            <span className="text-xs">Send</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
          >
            <ArrowDownLeft className="w-5 h-5" />
            <span className="text-xs">Receive</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
            style={buttonStyle}
          >
            <ArrowUpRight className="w-5 h-5" />
            <span className="text-xs">Transfer</span>
          </Button>
        </div>
      </div>

      <DepositDialog 
        open={isDepositDialogOpen} 
        onOpenChange={setIsDepositDialogOpen} 
      />
    </>
  );
}
