
import React from 'react';
import { Wallet, Send, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/contexts/CurrencyContext';

export function TotalBalanceCard() {
  const { formatAmount } = useCurrency();

  return (
    <div className="rounded-[16px] p-6 bg-white/80 border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)]">
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
        <Button variant="ghost" className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50">
          <Wallet className="w-5 h-5" />
          <span className="text-xs">Deposit</span>
        </Button>
        <Button variant="ghost" className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50">
          <Send className="w-5 h-5" />
          <span className="text-xs">Send</span>
        </Button>
        <Button variant="ghost" className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50">
          <ArrowDownLeft className="w-5 h-5" />
          <span className="text-xs">Receive</span>
        </Button>
        <Button variant="ghost" className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50">
          <ArrowUpRight className="w-5 h-5" />
          <span className="text-xs">Transfer</span>
        </Button>
      </div>
    </div>
  );
}
