
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  Users, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ModernSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '/accounts', icon: CreditCard, label: 'Accounts' },
  { href: '/overview', icon: TrendingUp, label: 'Overview' },
  { href: '/accounting', icon: FileText, label: 'Accounting' },
  { href: '/meelypay/dashboard', icon: Users, label: 'MeelyPay' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function ModernSidebar({ isOpen, onToggle }: ModernSidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-4 top-4 bottom-4 z-50 transition-all duration-300 ease-in-out",
        "bg-sidebar rounded-2xl floating-shadow",
        isOpen ? "w-64" : "w-16"
      )}>
        <div className="flex flex-col h-full p-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className={cn(
              "flex items-center gap-3 transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0"
            )}>
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-sidebar-foreground">Meely</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="w-8 h-8 hover:bg-sidebar-accent"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                    "hover:bg-sidebar-accent text-sidebar-foreground",
                    isActive && "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm",
                    !isOpen && "justify-center"
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className={cn(
                  "font-medium transition-opacity duration-200",
                  isOpen ? "opacity-100" : "opacity-0 w-0"
                )}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
