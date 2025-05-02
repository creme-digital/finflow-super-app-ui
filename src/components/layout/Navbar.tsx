
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Moon,
  Search,
  UserRound,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  sidebarExpanded: boolean;
}

export function Navbar({ sidebarExpanded }: NavbarProps) {
  return (
    <header className={`h-16 fixed right-0 top-0 z-20 border-b border-border bg-background transition-all duration-300 ${sidebarExpanded ? 'left-64' : 'left-16'}`}>
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="pl-9 w-full max-w-xs bg-secondary/50 border-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Moon className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full bg-fintech-light-gray">
              <UserRound className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
