
import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { SimplifiedSidebarContent } from './sidebar/SimplifiedSidebarContent';
import { useSidebarState } from './sidebar/use-sidebar-state';

export function SidebarNav() {
  const { expanded, mobileOpen, setMobileOpen, isMobile } = useSidebarState();

  if (isMobile) {
    return (
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="p-0 bg-[#F8F8FA]">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 px-4 py-4">
              <div className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center">
                <span className="text-white text-[16px] font-bold" style={{fontFamily: 'Inter'}}>M</span>
              </div>
              <span className="text-foreground text-[14px] font-medium tracking-[-0.02em]" style={{fontFamily: 'Inter'}}>Meely</span>
            </div>
            <SimplifiedSidebarContent expanded={true} />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className={`fixed left-0 top-0 z-30 h-screen bg-[#F8F8FA] transition-all duration-300 ${expanded ? 'w-64' : 'w-16'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 px-4 py-4">
          <div className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center">
            <span className="text-white text-[16px] font-bold" style={{fontFamily: 'Inter'}}>M</span>
          </div>
          {expanded && (
            <span className="text-foreground text-[14px] font-medium tracking-[-0.02em]" style={{fontFamily: 'Inter'}}>Meely</span>
          )}
        </div>
        <SimplifiedSidebarContent expanded={expanded} />
      </div>
    </aside>
  );
}
