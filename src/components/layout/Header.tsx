
import React from 'react';
import { Bell, Settings, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer"
          style={{ 
            background: 'rgba(255, 255, 255, 0.64)',
            border: '1px solid #FFFFFF'
          }}
        >
          <Bell className="h-5 w-5 text-foreground" />
        </div>
        
        {/* Settings */}
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer"
          style={{ 
            background: 'rgba(255, 255, 255, 0.64)',
            border: '1px solid #FFFFFF'
          }}
        >
          <Settings className="h-5 w-5 text-foreground" />
        </div>
        
        {/* Profile Card */}
        <div 
          className="flex items-center gap-2 px-3 py-2 rounded-full transition-colors cursor-pointer"
          style={{ 
            background: 'rgba(255, 255, 255, 0.64)',
            border: '1px solid #FFFFFF'
          }}
        >
          <Avatar className="w-6 h-6">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-foreground" style={{fontFamily: 'Inter'}}>
            John Doe
          </span>
          <ChevronDown className="h-4 w-4 text-foreground" />
        </div>
      </div>
    </header>
  );
}
