import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ui/ThemeProvider';
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between px-3 py-4 bg-background">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center">
          <span className="text-white text-[16px] font-bold" style={{fontFamily: 'Inter'}}>M</span>
        </div>
        <span className="text-foreground text-[14px] font-medium tracking-[-0.02em]" style={{fontFamily: 'Inter'}}>Meely</span>
      </div>
      <ThemeToggle />
    </div>
  );
};
