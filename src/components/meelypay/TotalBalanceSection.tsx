import React, { useState } from 'react';
import { Wallet, Send, ArrowDownLeft, CreditCard, Banknote, Phone, UtilityPole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/contexts/CurrencyContext';
import { SendDialog } from '@/components/dashboard/SendDialog';
import { ReceiveDialog } from '@/components/dashboard/ReceiveDialog';
import { AddCardDialog } from '@/components/cards/AddCardDialog';

export function TotalBalanceSection() {
  const { formatAmount } = useCurrency();
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [receiveDialogOpen, setReceiveDialogOpen] = useState(false);
  const [addCardDialogOpen, setAddCardDialogOpen] = useState(false);

  const buttonStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
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

      <div className="grid grid-cols-3 gap-3 mt-6">
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
          onClick={() => setSendDialogOpen(true)}
        >
          <Send className="w-5 h-5" />
          <span className="text-xs">Send</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
          onClick={() => setReceiveDialogOpen(true)}
        >
          <ArrowDownLeft className="w-5 h-5" />
          <span className="text-xs">Receive</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
          onClick={() => setAddCardDialogOpen(true)}
        >
          <CreditCard className="w-5 h-5" />
          <span className="text-xs">Add Card</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
        >
          <Banknote className="w-5 h-5" />
          <span className="text-xs">Pay to Bank</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs">Pay Phone</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex flex-col gap-2 h-auto p-3 hover:bg-muted/50"
          style={buttonStyle}
        >
          <UtilityPole className="w-5 h-5" />
          <span className="text-xs">Utility</span>
        </Button>
      </div>

      {/* Send Dialog */}
      <SendDialog 
        open={sendDialogOpen}
        onOpenChange={setSendDialogOpen}
      />

      {/* Receive Dialog */}
      <ReceiveDialog 
        open={receiveDialogOpen}
        onOpenChange={setReceiveDialogOpen}
      />

      {/* Add Card Dialog */}
      <AddCardDialog 
        open={addCardDialogOpen}
        onOpenChange={setAddCardDialogOpen}
      />
    </div>
  );
}
