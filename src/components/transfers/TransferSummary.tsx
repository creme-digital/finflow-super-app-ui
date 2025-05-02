
import React from 'react';
import { TransferData } from '@/pages/Transfers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';

// Sample account data for lookup
const sampleAccounts = [
  {
    id: 'pa-1',
    name: 'Main Checking',
    type: 'Personal',
    accountNumber: '****3456',
  },
  {
    id: 'pa-2',
    name: 'Savings',
    type: 'Personal',
    accountNumber: '****7890',
  },
  {
    id: 'ba-1',
    name: 'Business Checking',
    type: 'Business',
    accountNumber: '****4321',
  },
];

interface TransferSummaryProps {
  data: TransferData;
  transferType: 'ach' | 'wire' | 'international';
}

export function TransferSummary({ data, transferType }: TransferSummaryProps) {
  // Find source account details
  const sourceAccount = sampleAccounts.find(account => account.id === data.sourceAccount);
  
  // Get transfer type label
  const getTransferTypeLabel = () => {
    switch (transferType) {
      case 'ach': return 'ACH Transfer';
      case 'wire': return 'Wire Transfer';
      case 'international': return 'International Wire';
      default: return 'Transfer';
    }
  };

  // Format fees based on transfer type
  const getFee = () => {
    switch (transferType) {
      case 'ach': return '$0.00';
      case 'wire': return '$25.00';
      case 'international': return '$45.00';
      default: return '$0.00';
    }
  };

  // Calculate total with fees
  const calculateTotal = () => {
    const amount = parseFloat(data.amount) || 0;
    const feeAmount = transferType === 'ach' ? 0 : transferType === 'wire' ? 25 : 45;
    return formatCurrency(amount + feeAmount);
  };

  return (
    <Card className="border bg-muted/10">
      <CardHeader>
        <CardTitle>Transfer Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Transfer Type</p>
              <p className="font-medium">{getTransferTypeLabel()}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">From Account</p>
              <p className="font-medium">{sourceAccount?.name || 'Unknown Account'}</p>
              <p className="text-sm text-muted-foreground">{sourceAccount?.accountNumber || ''}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">To</p>
              <p className="font-medium">{data.recipientName}</p>
              {data.accountNumber && (
                <p className="text-sm text-muted-foreground">
                  Account: ••••{data.accountNumber.slice(-4)}
                </p>
              )}
              {data.bankName && (
                <p className="text-sm text-muted-foreground">{data.bankName}</p>
              )}
              {data.country && transferType === 'international' && (
                <p className="text-sm text-muted-foreground">{data.country}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Amount</p>
              <p className="font-medium">{formatCurrency(parseFloat(data.amount) || 0)}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground">Fee</p>
              <p className="font-medium">{getFee()}</p>
            </div>
            
            <div className="pt-2 border-t">
              <p className="text-sm font-medium text-muted-foreground">Total</p>
              <p className="text-lg font-bold">{calculateTotal()}</p>
            </div>
            
            {data.memo && (
              <div className="pt-2">
                <p className="text-sm font-medium text-muted-foreground">Memo</p>
                <p className="text-sm">{data.memo}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
