import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, CreditCard, DollarSign, Hash, User } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  person: {
    name: string;
    avatar: string;
  };
  amount: number;
  account: string;
  method: string;
}

interface TransactionDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction: Transaction | null;
}

export function TransactionDrawer({ open, onOpenChange, transaction }: TransactionDrawerProps) {
  if (!transaction) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Transaction Details</SheetTitle>
          <SheetDescription>
            View detailed information about this transaction
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Person Information */}
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={transaction.person.avatar} alt={transaction.person.name} />
              <AvatarFallback className="text-lg">
                {transaction.person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{transaction.person.name}</h3>
              <p className="text-sm text-muted-foreground">Transaction Recipient</p>
            </div>
          </div>

          <Separator />

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-xl font-semibold">${transaction.amount.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Hash className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Transaction ID</p>
                <p className="font-medium">{transaction.id}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{transaction.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Account</p>
                <p className="font-medium">{transaction.account}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <Badge variant="outline">{transaction.method}</Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Status and Additional Info */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Status</p>
              <Badge className="bg-green-500">Completed</Badge>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Description</p>
              <p className="text-sm">Payment transaction processed successfully</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
