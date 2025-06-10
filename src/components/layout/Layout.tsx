
import React from 'react';
import { SidebarNav } from './SidebarNav';
import { Header } from './Header';
import { useSidebarState } from './sidebar/use-sidebar-state';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function Layout({ children, title = "Dashboard" }: LayoutProps) {
  const { expanded, isMobile } = useSidebarState();

  return (
    <div className="min-h-screen bg-[#F8F8FA]">
      <SidebarNav />
      <main
        className={cn(
          'min-h-screen transition-all duration-300',
          expanded ? 'ml-64' : 'ml-16',
          isMobile ? 'ml-0' : ''
        )}
      >
        <Header title={title} />
        <div className="px-6 pb-6">
          {children}
        </div>
      </main>
    </div>
  );
}
