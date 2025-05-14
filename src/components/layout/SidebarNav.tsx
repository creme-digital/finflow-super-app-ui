import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { SidebarContent } from './sidebar/SidebarContent';
import { useSidebarState } from './sidebar/use-sidebar-state';

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
  const { 
    mobileOpen, 
    setMobileOpen, 
    isMobile, 
    openCategories, 
    toggleCategory 
  } = useSidebarState();

  // Mobile view uses Sheet component for slide-in effect
  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 w-[280px] border-r border-sidebar-border bg-sidebar">
          <div className="flex flex-col h-full">
            <SidebarContent
              expanded={expanded}
              isMobile={isMobile}
              setExpanded={setExpanded}
              setMobileOpen={setMobileOpen}
              openCategories={openCategories}
              toggleCategory={toggleCategory}
            />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop view
  return (
    <div className={cn(
      'bg-sidebar fixed top-0 left-0 bottom-0 z-30 flex flex-col transition-all duration-300 border-r border-sidebar-border',
      expanded ? 'w-64' : 'w-16',
      className
    )}>
      <SidebarContent
        expanded={expanded}
        isMobile={isMobile}
        setExpanded={setExpanded}
        setMobileOpen={setMobileOpen}
        openCategories={openCategories}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
