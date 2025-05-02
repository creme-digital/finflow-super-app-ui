
import React from 'react';
import { cn } from '@/lib/utils';

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: string;
  type: 'purchase' | 'refund' | 'payment';
}

// Sample transaction data
const sampleTransactions: Record<string, Transaction[]> = {
  '1': [
    {
      id: 't1',
      date: '2025-04-30T10:24:00',
      description: 'Amazon.com',
      category: 'Shopping',
      amount: '-$42.99',
      type: 'purchase'
    },
    {
      id: 't2',
      date: '2025-04-29T14:32:00',
      description: 'Starbucks Coffee',
      category: 'Dining',
      amount: '-$5.75',
      type: 'purchase'
    },
    {
      id: 't3',
      date: '2025-04-28T19:12:00',
      description: 'Netflix Subscription',
      category: 'Entertainment',
      amount: '-$14.99',
      type: 'purchase'
    },
    {
      id: 't4',
      date: '2025-04-27T08:45:00',
      description: 'Order Refund',
      category: 'Shopping',
      amount: '+$29.99',
      type: 'refund'
    }
  ],
  '2': [
    {
      id: 't5',
      date: '2025-04-30T09:18:00',
      description: 'Office Supplies Inc',
      category: 'Office',
      amount: '-$127.52',
      type: 'purchase'
    },
    {
      id: 't6',
      date: '2025-04-29T12:05:00',
      description: 'Client Lunch - ABC Corp',
      category: 'Dining',
      amount: '-$84.37',
      type: 'purchase'
    },
    {
      id: 't7',
      date: '2025-04-28T16:30:00',
      description: 'Software License',
      category: 'Software',
      amount: '-$299.00',
      type: 'purchase'
    },
    {
      id: 't8',
      date: '2025-04-25T11:15:00',
      description: 'Payment Thank You',
      category: 'Payment',
      amount: '+$1,000.00',
      type: 'payment'
    }
  ],
  '3': [
    {
      id: 't9',
      date: '2025-04-30T15:42:00',
      description: 'Etsy.com',
      category: 'Shopping',
      amount: '-$32.50',
      type: 'purchase'
    },
    {
      id: 't10',
      date: '2025-04-28T18:23:00',
      description: 'Digital Subscription',
      category: 'Entertainment',
      amount: '-$9.99',
      type: 'purchase'
    }
  ],
  '4': [
    {
      id: 't11',
      date: '2025-04-30T10:12:00',
      description: 'Business Travel - Flight',
      category: 'Travel',
      amount: '-$425.00',
      type: 'purchase'
    },
    {
      id: 't12',
      date: '2025-04-29T09:45:00',
      description: 'Hotel Accommodation',
      category: 'Travel',
      amount: '-$289.50',
      type: 'purchase'
    },
    {
      id: 't13',
      date: '2025-04-28T20:17:00',
      description: 'Conference Registration',
      category: 'Business',
      amount: '-$350.00',
      type: 'purchase'
    }
  ]
};

interface TransactionListProps {
  cardId: string;
}

export function TransactionList({ cardId }: TransactionListProps) {
  const transactions = sampleTransactions[cardId] || [];
  
  if (transactions.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        No recent transactions found for this card.
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <div className="divide-y">
      {transactions.map((transaction) => (
        <div 
          key={transaction.id} 
          className="px-4 py-3 hover:bg-muted/50 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{transaction.description}</p>
              <div className="text-xs text-muted-foreground flex gap-2 items-center">
                <span>{formatDate(transaction.date)}</span>
                <span>•</span>
                <span>{formatTime(transaction.date)}</span>
                <span>•</span>
                <span>{transaction.category}</span>
              </div>
            </div>
            <span className={cn(
              'font-medium',
              transaction.type === 'purchase' ? 'text-fintech-error' : 'text-fintech-success'
            )}>
              {transaction.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
