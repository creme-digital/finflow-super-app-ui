import React from 'react';
import { SidebarNav } from './SidebarNav';
import { useSidebarState } from './sidebar/use-sidebar-state';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { expanded, isMobile } = useSidebarState();

  return (
    <div className="min-h-screen bg-[#F8F8FA]">
      <SidebarNav />
      <main
        className={cn(
          'min-h-screen transition-all duration-300 p-6',
          expanded ? 'ml-64' : 'ml-16',
          isMobile ? 'ml-0' : ''
        )}
      >
        {children}
      </main>
    </div>
  );
}
