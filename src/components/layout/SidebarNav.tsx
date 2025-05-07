import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Wallet, CreditCard, ArrowRightLeft, ReceiptText, FileText, Bitcoin, Award, Layers, Settings, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, CalendarCheck, DollarSign, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';

// Define the navigation item type
type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

// Define a category type with its navigation items
type NavCategory = {
  title: string;
  items: NavItem[];
};
interface SidebarNavProps {
  className?: string;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}
export function SidebarNav({
  className,
  expanded,
  setExpanded
}: SidebarNavProps) {
  // Track open/closed state of each category
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Fintech: true
  });
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar when changing routes
  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [window.location.pathname, isMobile]);
  useEffect(() => {
    if (isMobile && expanded) {
      setMobileOpen(true);
    }
  }, [expanded, isMobile]);
  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Create navigation categories
  const navCategories: NavCategory[] = [{
    title: 'Fintech',
    items: [{
      title: 'Dashboard',
      href: '/',
      icon: LayoutDashboard
    }, {
      title: 'Accounts',
      href: '/accounts',
      icon: Wallet
    }, {
      title: 'Cards',
      href: '/cards',
      icon: CreditCard
    }, {
      title: 'Transfers',
      href: '/transfers',
      icon: ArrowRightLeft
    }, {
      title: 'Payments',
      href: '/payments',
      icon: DollarSign
    }, {
      title: 'Expenses',
      href: '/expenses',
      icon: ReceiptText
    }, {
      title: 'Accounting',
      href: '/accounting',
      icon: FileText
    }, {
      title: 'Payroll',
      href: '/payroll',
      icon: FileText
    }, {
      title: 'Tax',
      href: '/tax',
      icon: CalendarCheck
    }, {
      title: 'Crypto',
      href: '/crypto',
      icon: Bitcoin
    }, {
      title: 'Rewards',
      href: '/rewards',
      icon: Award
    }, {
      title: 'Integrations',
      href: '/integrations',
      icon: Layers
    }, {
      title: 'Settings',
      href: '/settings',
      icon: Settings
    }]
  }
  // Additional categories can be added here
  ];
  const SidebarContent = () => <>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn('flex items-center gap-2', !expanded && !isMobile && 'hidden')}>
          
          <span className="text-white font-thin text-3xl">meely</span>
        </div>
        {!expanded && !isMobile && <div className="w-8 h-8 mx-auto rounded-md bg-fintech-purple flex items-center justify-center text-white font-bold">
            F
          </div>}
        {isMobile ? <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} className="text-sidebar-foreground hover:bg-sidebar-accent">
            <X className="h-4 w-4" />
          </Button> : <Button variant="ghost" size="icon" onClick={() => setExpanded(!expanded)} className="text-sidebar-foreground hover:bg-sidebar-accent">
            {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>}
      </div>

      <div className="flex flex-col p-2 space-y-1 overflow-y-auto flex-1">
        {expanded || isMobile ?
      // Expanded sidebar with categories and accordions
      <div className="w-full">
            {navCategories.map(category => <div key={category.title} className="mb-2">
                <Collapsible open={openCategories[category.title]} onOpenChange={() => toggleCategory(category.title)} className="w-full">
                  <div className="mb-1 px-2 flex items-center justify-between">
                    <h2 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                      {category.title}
                    </h2>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        {openCategories[category.title] ? <ChevronUp className="h-3 w-3 text-sidebar-foreground/70" /> : <ChevronDown className="h-3 w-3 text-sidebar-foreground/70" />}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent>
                    {category.items.map(item => <Link key={item.href} to={item.href} className={cn('flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors', window.location.pathname === item.href && 'bg-sidebar-accent')} onClick={() => isMobile && setMobileOpen(false)}>
                        <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
                        <span>{item.title}</span>
                      </Link>)}
                  </CollapsibleContent>
                </Collapsible>
              </div>)}
          </div> :
      // Compact mode - just show category indicators and icons
      <div className="flex flex-col items-center space-y-4">
            {navCategories.map(category => <div key={category.title} className="w-full flex flex-col items-center">
                <div className="w-full text-center py-2">
                  <span className="text-[10px] text-sidebar-foreground/60 uppercase tracking-wider">
                    {category.title.charAt(0)}
                  </span>
                </div>
                {category.items.map(item => <Link key={item.href} to={item.href} className={cn('flex items-center justify-center w-10 h-10 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors', window.location.pathname === item.href && 'bg-sidebar-accent')} title={item.title}>
                    <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
                  </Link>)}
              </div>)}
          </div>}
      </div>

      <div className={cn('p-4 border-t border-sidebar-border mt-auto', !expanded && !isMobile && 'p-2')}>
        <div className={cn('flex items-center gap-3', !expanded && !isMobile && 'justify-center')}>
          <div className="w-8 h-8 rounded-full bg-fintech-light-purple flex items-center justify-center text-white font-medium">
            U
          </div>
          {(expanded || isMobile) && <div>
              <p className="text-sm font-medium text-sidebar-foreground">User Name</p>
              <p className="text-xs text-sidebar-foreground/70">user@example.com</p>
            </div>}
        </div>
      </div>
    </>;

  // Mobile view uses Sheet component for slide-in effect
  if (isMobile) {
    return <>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="p-0 w-[280px] border-r bg-sidebar">
            <div className="flex flex-col h-full">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </>;
  }

  // Desktop view
  return <div className={cn('bg-sidebar fixed top-0 left-0 bottom-0 z-30 flex flex-col transition-all duration-300', expanded ? 'w-64' : 'w-16', className)}>
      <SidebarContent />
    </div>;
}