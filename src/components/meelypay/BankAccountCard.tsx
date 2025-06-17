
import React from 'react';
import { Building } from 'lucide-react';

interface BankAccount {
  id: string;
  name: string;
  type: string;
  accountNumber: string;
  balance: string;
}

interface BankAccountCardProps {
  account: BankAccount;
  onClick?: (account: BankAccount) => void;
}

export function BankAccountCard({ account, onClick }: BankAccountCardProps) {
  const handleClick = () => {
    onClick?.(account);
  };

  return (
    <div 
      className="flex items-center justify-between p-3 cursor-pointer transition-colors hover:bg-muted/20"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Building className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{account.name}</p>
          <p className="text-xs text-muted-foreground">{account.type} {account.accountNumber}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-muted-foreground">Balance:</p>
        <p className="text-sm font-semibold text-foreground">{account.balance}</p>
      </div>
    </div>
  );
}
