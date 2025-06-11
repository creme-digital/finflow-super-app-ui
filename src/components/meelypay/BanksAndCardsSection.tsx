
import React from 'react';
import { BankAccountCard } from './BankAccountCard';

const banksAndCards = [
  {
    id: '1',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••0009',
    balance: '$5,612'
  },
  {
    id: '2',
    name: 'DIME Community Bank',
    type: 'Saving',
    accountNumber: '••••••0009',
    balance: '$566,712'
  },
  {
    id: '3',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••0549',
    balance: '$566,712'
  },
  {
    id: '4',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••2309',
    balance: '$170,000'
  },
  {
    id: '5',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••9909',
    balance: '$566,712'
  },
  {
    id: '6',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••34569',
    balance: '$566,712'
  }
];

export function BanksAndCardsSection() {
  return (
    <div 
      className="rounded-[24px] p-6"
      style={{ 
        background: 'rgba(255, 255, 255, 0.64)',
        border: '1px solid rgba(255, 255, 255, 0.8)'
      }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">Banks and Cards</h3>
      <div className="space-y-4">
        {banksAndCards.map((item) => (
          <BankAccountCard key={item.id} account={item} />
        ))}
      </div>
    </div>
  );
}
