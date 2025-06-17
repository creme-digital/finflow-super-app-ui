
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface BankAccount {
  id: string;
  name: string;
  type: string;
  accountNumber: string;
  balance: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'incoming' | 'outgoing';
  reference: string;
}

interface BankTransactionsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  account: BankAccount | null;
}

// Sample transaction data for each account
const accountTransactions: Record<string, Transaction[]> = {
  '1': [
    { id: 'TXN-001', date: '2024-06-15', description: 'Direct Deposit - Salary', amount: 3500.00, type: 'incoming', reference: 'DD-2024-15' },
    { id: 'TXN-002', date: '2024-06-14', description: 'ATM Withdrawal', amount: -200.00, type: 'outgoing', reference: 'ATM-001' },
    { id: 'TXN-003', date: '2024-06-13', description: 'Online Purchase - Amazon', amount: -89.99, type: 'outgoing', reference: 'AMZ-123' },
    { id: 'TXN-004', date: '2024-06-12', description: 'Wire Transfer Received', amount: 1500.00, type: 'incoming', reference: 'WIR-456' },
  ],
  '2': [
    { id: 'TXN-005', date: '2024-06-15', description: 'Interest Payment', amount: 125.50, type: 'incoming', reference: 'INT-2024' },
    { id: 'TXN-006', date: '2024-06-10', description: 'Transfer to Checking', amount: -1000.00, type: 'outgoing', reference: 'TRF-789' },
    { id: 'TXN-007', date: '2024-06-05', description: 'Deposit', amount: 2500.00, type: 'incoming', reference: 'DEP-101' },
  ],
  '3': [
    { id: 'TXN-008', date: '2024-06-15', description: 'Bill Payment - Utilities', amount: -156.78, type: 'outgoing', reference: 'BILL-001' },
    { id: 'TXN-009', date: '2024-06-14', description: 'Payroll Deposit', amount: 4200.00, type: 'incoming', reference: 'PAY-2024' },
    { id: 'TXN-010', date: '2024-06-13', description: 'Credit Card Payment', amount: -850.00, type: 'outgoing', reference: 'CC-PAY' },
  ],
  '4': [
    { id: 'TXN-011', date: '2024-06-15', description: 'Business Income', amount: 15000.00, type: 'incoming', reference: 'BIZ-001' },
    { id: 'TXN-012', date: '2024-06-12', description: 'Office Rent', amount: -2500.00, type: 'outgoing', reference: 'RENT-06' },
    { id: 'TXN-013', date: '2024-06-10', description: 'Equipment Purchase', amount: -3200.00, type: 'outgoing', reference: 'EQP-456' },
  ],
  '5': [
    { id: 'TXN-014', date: '2024-06-15', description: 'Investment Dividend', amount: 890.25, type: 'incoming', reference: 'DIV-2024' },
    { id: 'TXN-015', date: '2024-06-13', description: 'Online Shopping', amount: -245.50, type: 'outgoing', reference: 'SHOP-789' },
  ],
  '6': [
    { id: 'TXN-016', date: '2024-06-15', description: 'Freelance Payment', amount: 2800.00, type: 'incoming', reference: 'FREE-001' },
    { id: 'TXN-017', date: '2024-06-14', description: 'Insurance Premium', amount: -450.00, type: 'outgoing', reference: 'INS-2024' },
    { id: 'TXN-018', date: '2024-06-12', description: 'Investment Transfer', amount: -1200.00, type: 'outgoing', reference: 'INV-TRF' },
  ]
};

export function BankTransactionsDrawer({ open, onOpenChange, account }: BankTransactionsDrawerProps) {
  if (!account) return null;

  const transactions = accountTransactions[account.id] || [];

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-[600px] sm:max-w-[600px] p-0 border-0 flex flex-col gap-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-left">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {account.name} - {account.type}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Account {account.accountNumber} • Balance: {account.balance}
              </p>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {transactions.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No transactions found for this account.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Description</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Reference</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">Amount</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-b border-border last:border-0">
                    <TableCell className="text-foreground">
                      {formatDate(transaction.date)}
                    </TableCell>
                    <TableCell className="text-foreground font-medium">
                      {transaction.description}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {transaction.reference}
                    </TableCell>
                    <TableCell className={`text-right font-medium ${
                      transaction.type === 'incoming' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'incoming' ? '+' : '-'}{formatAmount(transaction.amount)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {transaction.type === 'incoming' ? (
                          <ArrowDownLeft className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-sm text-muted-foreground capitalize">
                          {transaction.type}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
