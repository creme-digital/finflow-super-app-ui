
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
  onSendClick?: (userName: string) => void;
}

export function SendAgainUserCard({ user, onSendClick }: SendAgainUserCardProps) {
  const handleClick = () => {
    onSendClick?.(user.name);
  };

  return (
    <div 
      className="flex flex-col items-center gap-2 p-4 cursor-pointer transition-colors hover:bg-muted/20"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
      onClick={handleClick}
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
