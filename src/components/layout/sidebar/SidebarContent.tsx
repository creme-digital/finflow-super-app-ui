
import React from 'react';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';

interface SidebarContentProps {
  expanded: boolean;
  isMobile: boolean;
  setExpanded: (expanded: boolean) => void;
  setMobileOpen: (open: boolean) => void;
  openCategories: Record<string, boolean>;
  toggleCategory: (category: string) => void;
}

export const SidebarContent = ({
  expanded,
  isMobile,
  setExpanded,
  setMobileOpen,
  openCategories,
  toggleCategory
}: SidebarContentProps) => {
  return (
    <>
      <SidebarHeader 
        expanded={expanded} 
        isMobile={isMobile} 
        setExpanded={setExpanded}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-col p-2 space-y-1 overflow-y-auto flex-1">
        <SidebarNavigation
          expanded={expanded}
          isMobile={isMobile}
          openCategories={openCategories}
          toggleCategory={toggleCategory}
          setMobileOpen={setMobileOpen}
        />
      </div>

      <SidebarFooter 
        expanded={expanded} 
        isMobile={isMobile}
      />
    </>
  );
};
