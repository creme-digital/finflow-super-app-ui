import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Bell,
  Moon,
  Search,
  UserRound,
  Menu,
  Plus,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  sidebarExpanded: boolean;
  onToggleSidebar: () => void;
}

function getBreadcrumbName(pathname: string) {
  // Simple mapping, can be extended
  if (pathname === '/' || pathname === '') return 'Dashboard';
  const parts = pathname.split('/').filter(Boolean);
  return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' / ');
}

export function Navbar({ sidebarExpanded, onToggleSidebar }: NavbarProps) {
  const isMobile = useIsMobile();
  const location = useLocation();
  const breadcrumb = getBreadcrumbName(location.pathname);

  return (
    <header className={`h-16 fixed right-0 top-0 z-20 border-b border-border bg-background transition-all duration-300 ${sidebarExpanded && !isMobile ? 'left-64' : 'left-0 md:left-16'} `}>
      <div className="flex items-center justify-between h-full px-4 md:px-10">
        {/* Breadcrumb on the left */}
        <div className="flex items-center gap-2 min-w-0">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          )}
          <span className="text-base font-medium truncate text-gray-700" title={breadcrumb}>{breadcrumb}</span>
        </div>

        {/* Right row: search, notifications, add account */}
        <div className="flex items-center gap-2">
          <div className="relative max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search..." 
              className="pl-9 max-w-xs bg-secondary/50 border-none"
            />
          </div>
          {/* Mobile search button */}
          {isMobile && (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-1" /> Add Account
          </Button>
        </div>
      </div>
    </header>
  );
}
