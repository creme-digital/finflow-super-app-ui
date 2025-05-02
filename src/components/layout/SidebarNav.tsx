
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  ArrowRightLeft,
  ReceiptText,
  FileText,
  Bitcoin,
  Award,
  Layers,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Accounts', href: '/accounts', icon: Wallet },
  { title: 'Cards', href: '/cards', icon: CreditCard },
  { title: 'Transfers', href: '/transfers', icon: ArrowRightLeft },
  { title: 'Expenses', href: '/expenses', icon: ReceiptText },
  { title: 'Accounting', href: '/accounting', icon: FileText },
  { title: 'Payroll', href: '/payroll', icon: FileText },
  { title: 'Taxes', href: '/taxes', icon: FileText },
  { title: 'Payments', href: '/payments', icon: CreditCard },
  { title: 'Crypto', href: '/crypto', icon: Bitcoin },
  { title: 'Rewards', href: '/rewards', icon: Award },
  { title: 'Integrations', href: '/integrations', icon: Layers },
  { title: 'Settings', href: '/settings', icon: Settings },
];

interface SidebarNavProps {
  className?: string;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export function SidebarNav({ className, expanded, setExpanded }: SidebarNavProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        'bg-sidebar fixed top-0 left-0 bottom-0 z-30 flex flex-col transition-all duration-300',
        expanded ? 'w-64' : 'w-16',
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn('flex items-center gap-2', !expanded && 'hidden')}>
          <div className="w-8 h-8 rounded-md bg-fintech-purple flex items-center justify-center text-white font-bold">
            F
          </div>
          <span className="text-lg font-semibold text-white">FinFlow</span>
        </div>
        {!expanded && (
          <div className="w-8 h-8 mx-auto rounded-md bg-fintech-purple flex items-center justify-center text-white font-bold">
            F
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex flex-col p-2 space-y-1 overflow-y-auto flex-1">
        {expanded ? (
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full"
          >
            <div className="mb-1 px-2 flex items-center justify-between">
              <h2 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                Fintech
              </h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  {isOpen ? (
                    <ChevronUp className="h-3 w-3 text-sidebar-foreground/70" />
                  ) : (
                    <ChevronDown className="h-3 w-3 text-sidebar-foreground/70" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors',
                    window.location.pathname === item.href && 'bg-sidebar-accent'
                  )}
                >
                  <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          // Compact mode - just show icons
          <div className="flex flex-col items-center space-y-1">
            <div className="w-full text-center py-2">
              <span className="text-[10px] text-sidebar-foreground/60 uppercase tracking-wider">F</span>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center justify-center w-10 h-10 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors',
                  window.location.pathname === item.href && 'bg-sidebar-accent'
                )}
                title={item.title}
              >
                <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className={cn('p-4 border-t border-sidebar-border mt-auto', !expanded && 'p-2')}>
        <div className={cn('flex items-center gap-3', !expanded && 'justify-center')}>
          <div className="w-8 h-8 rounded-full bg-fintech-light-purple flex items-center justify-center text-white font-medium">
            U
          </div>
          {expanded && (
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">User Name</p>
              <p className="text-xs text-sidebar-foreground/70">user@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
