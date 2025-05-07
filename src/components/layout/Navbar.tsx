
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Moon,
  Search,
  UserRound,
  Menu,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  sidebarExpanded: boolean;
  onToggleSidebar: () => void;
}

export function Navbar({ sidebarExpanded, onToggleSidebar }: NavbarProps) {
  const isMobile = useIsMobile();

  return (
    <header className={`h-16 fixed right-0 top-0 z-20 border-b border-border bg-background transition-all duration-300 ${sidebarExpanded && !isMobile ? 'left-64' : 'left-0 md:left-16'} w-full`}>
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          )}
          <div className="flex items-center">
            <span className="text-lg font-medium mr-4">meely</span>
          </div>
          <div className="relative w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 w-full max-w-xs bg-secondary/50 border-none"
            />
          </div>
          {/* Mobile search button */}
          {isMobile && (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
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
