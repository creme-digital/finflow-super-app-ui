
import React, { useState } from 'react';
import { SendAgainUserCard } from './SendAgainUserCard';
import { SendDialog } from '@/components/dashboard/SendDialog';

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
  const [sendDialogOpen, setSendDialogOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState('');

  const handleUserSendClick = (userName: string) => {
    setSelectedUserName(userName);
    setSendDialogOpen(true);
  };

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
        <h3 className="text-lg font-semibold text-foreground mb-4">Send Again</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sendAgainUsers.map((user) => (
            <SendAgainUserCard 
              key={user.id} 
              user={user} 
              onSendClick={handleUserSendClick}
            />
          ))}
        </div>
      </div>

      <SendDialog 
        open={sendDialogOpen}
        onOpenChange={setSendDialogOpen}
        prefilledRecipientName={selectedUserName}
      />
    </div>
  );
}
