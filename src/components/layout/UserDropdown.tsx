
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronDown, User, Settings, LogOut, CreditCard, Bell } from 'lucide-react';

export function UserDropdown() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div 
          className="flex items-center gap-2 px-3 py-2 rounded-full transition-colors cursor-pointer hover:bg-white/20"
          style={{ 
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.8)'
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
      </PopoverTrigger>
      
      <PopoverContent 
        align="end" 
        className="w-64 p-0 mr-4"
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
        }}
      >
        {/* User Info Header */}
        <div className="p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">John Doe</h4>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto px-3 py-3 hover:bg-white/20"
          >
            <User className="h-4 w-4" />
            <span>Profile Settings</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto px-3 py-3 hover:bg-white/20"
          >
            <CreditCard className="h-4 w-4" />
            <span>Billing & Plans</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto px-3 py-3 hover:bg-white/20"
          >
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto px-3 py-3 hover:bg-white/20"
          >
            <Settings className="h-4 w-4" />
            <span>Account Settings</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-white/20">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-auto px-3 py-3 hover:bg-white/20 text-red-600 hover:text-red-700"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
