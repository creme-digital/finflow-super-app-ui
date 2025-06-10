
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
          isMobile ? 'ml-0' : 'ml-16'
        )}
      >
        <Header title={title} />
        
        {/* New flex-row div with 24px spacing */}
        <div className="flex flex-row gap-6 p-4">
          {/* Main items div - at least 70% width, styled like inactive nav cards */}
          <div 
            className="flex-1 min-w-[70%] rounded-[24px] p-6"
            style={{ 
              background: 'rgba(255, 255, 255, 0.64)',
              border: '1px solid #FFFFFF'
            }}
          >
            {/* Empty main items area */}
          </div>
        </div>
        
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
