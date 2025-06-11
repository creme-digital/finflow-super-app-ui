
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
      className="overflow-hidden"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Banks and Cards</h3>
        <div className="space-y-4">
          {banksAndCards.map((item) => (
            <BankAccountCard key={item.id} account={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
