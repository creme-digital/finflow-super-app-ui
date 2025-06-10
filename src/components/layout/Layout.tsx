
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SidebarNav />
      <main
        className={cn(
          'min-h-screen transition-all duration-300',
          isMobile ? 'ml-0' : 'ml-16'
        )}
      >
        <Header title={title} />
        
        {/* Modern flex layout with improved spacing */}
        <div className="flex flex-row gap-8 p-6 h-[calc(100vh-120px)]">
          {/* Main content area - modern glass effect */}
          <div 
            className={cn(
              "glass-effect rounded-3xl p-8 transition-all duration-300 modern-shadow-lg",
              showRightSidebar ? "flex-1 min-w-[70%]" : "flex-1"
            )}
          >
            {mainContent}
          </div>

          {/* Right Sidebar - Clean container */}
          {showRightSidebar && (
            <div className="w-[30%] min-w-[320px]">
              <ScrollArea className="h-full w-full">
                <div className="w-full h-full">
                  {rightSidebarContent}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
        
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
