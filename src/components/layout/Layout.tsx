
import React from 'react';
import { SidebarNav } from './SidebarNav';
import { Header } from './Header';
import { useSidebarState } from './sidebar/use-sidebar-state';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showRightSidebar?: boolean;
  rightSidebarContent?: React.ReactNode;
  mainContent?: React.ReactNode;
}

export function Layout({ children, title = "Dashboard", showRightSidebar = false, rightSidebarContent, mainContent }: LayoutProps) {
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
        <div className="flex flex-row gap-6 p-4 h-[calc(100vh-120px)]">
          {/* Main items div - at least 70% width, styled like inactive nav cards */}
          <div 
            className={cn(
              "rounded-[24px] p-6 transition-all duration-300",
              showRightSidebar ? "flex-1 min-w-[70%]" : "flex-1"
            )}
            style={{ 
              background: 'rgba(255, 255, 255, 0.64)',
              border: '1px solid #FFFFFF'
            }}
          >
            {mainContent}
          </div>

          {/* Right Sidebar - Simple Container */}
          {showRightSidebar && (
            <div className="w-[30%] min-w-[300px]">
              <ScrollArea className="h-full w-full">
                <div className="w-full h-full">
                  {rightSidebarContent}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
        
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}
