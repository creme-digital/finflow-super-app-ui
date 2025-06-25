
import React from 'react';
import { Settings } from 'lucide-react';
import { NotificationsDropdown } from './NotificationsDropdown';
import { UserDropdown } from './UserDropdown';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between w-full bg-transparent px-4 py-4">
      <h1 className="text-[24px] font-semibold text-foreground" style={{fontFamily: 'Inter'}}>
        {title}
      </h1>
      
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <NotificationsDropdown />
        
        {/* Settings */}
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer hover:bg-white/20"
          style={{ 
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        >
          <Settings className="h-5 w-5 text-foreground" />
        </div>
        
        {/* User Dropdown */}
        <UserDropdown />
      </div>
    </header>
  );
}
