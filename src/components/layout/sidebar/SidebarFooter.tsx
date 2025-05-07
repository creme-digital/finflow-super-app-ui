
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarFooterProps {
  expanded: boolean;
  isMobile: boolean;
}

export const SidebarFooter = ({ expanded, isMobile }: SidebarFooterProps) => {
  return (
    <div className={cn('p-4 border-t border-sidebar-border mt-auto', !expanded && !isMobile && 'p-2')}>
      <div className={cn('flex items-center gap-3', !expanded && !isMobile && 'justify-center')}>
        <div className="w-8 h-8 rounded-full bg-fintech-light-purple flex items-center justify-center text-white font-medium">
          U
        </div>
        {(expanded || isMobile) && (
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">User Name</p>
            <p className="text-xs text-sidebar-foreground/70">user@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
};
