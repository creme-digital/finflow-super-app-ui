
import React, { useState, useEffect } from 'react';
import { SidebarNav } from './SidebarNav';
import { Navbar } from './Navbar';
import { useIsMobile } from '@/hooks/use-mobile';
import { PageTransition } from '@/components/animations/PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarExpanded(false);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav 
        className=""
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
      />
      <Navbar 
        sidebarExpanded={sidebarExpanded} 
        onToggleSidebar={() => setSidebarExpanded(prev => !prev)}
      />
      <main className={`pt-16 transition-all duration-300 ${sidebarExpanded && !isMobile ? 'ml-64' : 'ml-0 md:ml-16'}`}>
        <div className="container py-6 mx-auto px-4 md:px-6">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </main>
    </div>
  );
}
