
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SendAgainUser {
  id: string;
  name: string;
  avatar: string;
  initials: string;
}

interface SendAgainUserCardProps {
  user: SendAgainUser;
  onClick?: () => void;
}

export function SendAgainUserCard({ user, onClick }: SendAgainUserCardProps) {
  return (
    <div 
      className="flex flex-col items-center gap-2 p-4 rounded-lg transition-colors cursor-pointer"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.2)'
      }}
      onClick={onClick}
    >
      <Avatar className="w-16 h-16">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
          {user.initials}
        </AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium text-center text-foreground">{user.name}</p>
    </div>
  );
}
