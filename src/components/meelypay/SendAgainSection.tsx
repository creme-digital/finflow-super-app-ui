
import React from 'react';
import { SendAgainUserCard } from './SendAgainUserCard';

const sendAgainUsers = [
  {
    id: '1',
    name: 'Kathy Pacheco',
    avatar: '/placeholder.svg',
    initials: 'KP'
  },
  {
    id: '2',
    name: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg',
    initials: 'KM'
  },
  {
    id: '3',
    name: 'Corina McCoy',
    avatar: '/placeholder.svg',
    initials: 'CM'
  },
  {
    id: '4',
    name: 'Stephanie Nicol',
    avatar: '/placeholder.svg',
    initials: 'SN'
  }
];

export function SendAgainSection() {
  return (
    <div 
      className="rounded-[24px] p-6"
      style={{ 
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.2)'
      }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-4">Send Again</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sendAgainUsers.map((user) => (
          <SendAgainUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
