
import React from 'react';
import { SidebarNav } from './SidebarNav';
import { Header } from './Header';
import { useSidebarState } from './sidebar/use-sidebar-state';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showRightSidebar?: boolean;
  rightSidebarContent?: React.ReactNode;
}

export function Layout({ children, title = "Dashboard", showRightSidebar = false, rightSidebarContent }: LayoutProps) {
  const { expanded, isMobile } = useSidebarState();
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = React.useState(false);

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
              showRightSidebar && !rightSidebarCollapsed ? "flex-1 min-w-[70%]" : "flex-1"
            )}
            style={{ 
              background: 'rgba(255, 255, 255, 0.64)',
              border: '1px solid #FFFFFF'
            }}
          >
            {/* Empty main items area */}
          </div>

          {/* Collapsible Right Sidebar */}
          {showRightSidebar && (
            <div 
              className={cn(
                "rounded-[24px] transition-all duration-300 relative",
                rightSidebarCollapsed ? "w-12" : "w-[30%] min-w-[300px]"
              )}
              style={{ 
                background: 'rgba(255, 255, 255, 0.64)',
                border: '1px solid #FFFFFF'
              }}
            >
              {/* Collapse/Expand Button */}
              <button
                onClick={() => setRightSidebarCollapsed(!rightSidebarCollapsed)}
                className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white transition-colors flex items-center justify-center shadow-sm"
              >
                {rightSidebarCollapsed ? (
                  <ChevronLeft className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {/* Scrollable Content */}
              {!rightSidebarCollapsed && (
                <ScrollArea className="h-full w-full">
                  <div className="p-6 pt-16">
                    {rightSidebarContent || (
                      <div className="text-center text-muted-foreground">
                        Right sidebar content
                      </div>
                    )}
                  </div>
                </ScrollArea>
              )}
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
