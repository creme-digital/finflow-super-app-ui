
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarHeaderProps {
  expanded: boolean;
  isMobile: boolean;
  setExpanded: (expanded: boolean) => void;
  setMobileOpen?: (open: boolean) => void;
}

export const SidebarHeader = ({ 
  expanded, 
  isMobile, 
  setExpanded,
  setMobileOpen
}: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
      <div className={cn('flex items-center gap-2', !expanded && !isMobile && 'hidden')}>
        <span className="text-white font-extralight tracking-wide text-3xl">meely</span>
      </div>
      
      {!expanded && !isMobile && (
        <div className="w-8 h-8 mx-auto rounded-md bg-fintech-purple flex items-center justify-center text-white font-bold">
          F
        </div>
      )}
      
      {isMobile ? (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setMobileOpen && setMobileOpen(false)} 
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <X className="h-4 w-4" />
        </Button>
      ) : (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setExpanded(!expanded)} 
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      )}
    </div>
  );
};
