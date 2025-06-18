
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
import { Calendar, CreditCard, DollarSign, Hash, User, Receipt, Building } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface TransactionData {
  id: string;
  date: string;
  toFrom: {
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
  transaction: TransactionData | null;
}

export function TransactionDrawer({ open, onOpenChange, transaction }: TransactionDrawerProps) {
  if (!transaction) return null;

  // Calculate transaction fee (2.5% of amount)
  const transactionFee = transaction.amount * 0.025;
  
  // Calculate total spend for the month (mock calculation - in real app would come from API)
  const totalMonthlySpend = 12847.52;
  
  // Check if method is invoice-related
  const isInvoiceMethod = transaction.method.toLowerCase().includes('invoice');

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
          {/* Person Information with Logo */}
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={transaction.toFrom.avatar} alt={transaction.toFrom.name} />
              <AvatarFallback className="text-lg">
                {transaction.toFrom.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{transaction.toFrom.name}</h3>
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
                <p className="text-xl font-semibold">{formatCurrency(transaction.amount)}</p>
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
              <Building className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Account</p>
                <p className="font-medium">{transaction.account}</p>
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
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Payment Method</p>
                <Badge variant="outline">{transaction.method}</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Transaction Fee</p>
                <p className="font-medium">{formatCurrency(transactionFee)}</p>
              </div>
            </div>

            {isInvoiceMethod && (
              <div className="flex items-center space-x-3">
                <Receipt className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Invoice</p>
                  <p className="font-medium">INV-{transaction.id}</p>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Total Spend This Month</p>
                <p className="font-medium">{formatCurrency(totalMonthlySpend)}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Status */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Status</p>
              <Badge className="bg-green-500">Completed</Badge>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
