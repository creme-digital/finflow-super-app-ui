
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CreditCard,
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Menu,
  Receipt,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarNavProps {
  className?: string;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { title: 'Dashboard', path: '/', icon: LayoutDashboard },
  { title: 'Accounts', path: '/accounts', icon: Wallet },
  { title: 'Cards', path: '/cards', icon: CreditCard },
  { title: 'Transfers', path: '/transfers', icon: ArrowLeftRight },
  { title: 'Expenses', path: '/expenses', icon: Receipt },
  { title: 'Accounting', path: '/accounting', icon: BookOpen }
];

export function SidebarNav({ className, expanded, setExpanded }: SidebarNavProps) {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 h-screen border-r border-border bg-background transition-all duration-300",
        expanded ? "w-64" : "w-16",
        className
      )}
    >
      <div className="flex h-16 items-center justify-center border-b border-border transition-all duration-300">
        <span className={`text-xl font-semibold ${expanded ? 'block' : 'hidden'}`}>
          FinTech
        </span>
      </div>
      <div className="flex h-[calc(100vh-64px)] flex-col justify-between p-3">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link to={item.path} key={item.path}>
                <div
                  className={cn(
                    "group relative flex cursor-pointer items-center rounded-md px-3 py-2 text-base font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  onMouseEnter={() => expanded || setHoveredItem(item.title)}
                  onMouseLeave={() => expanded || setHoveredItem(null)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`ml-3 ${expanded ? 'block' : 'hidden'}`}>{item.title}</span>
                  {!expanded && hoveredItem === item.title && (
                    <div className="absolute left-14 z-50 rounded-md bg-popover px-3 py-2 text-sm font-medium shadow-md">
                      {item.title}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <Button
          variant="ghost"
          className="justify-center"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}
