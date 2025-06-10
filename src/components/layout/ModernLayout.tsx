
import React, { useState } from 'react';
import { ModernSidebar } from './ModernSidebar';
import { cn } from '@/lib/utils';

interface ModernLayoutProps {
  children: React.ReactNode;
}

export function ModernLayout({ children }: ModernLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ModernSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <main className={cn(
        "transition-all duration-300 ease-in-out",
        "pt-4 pr-4 pb-4",
        sidebarOpen ? "pl-72" : "pl-24"
      )}>
        <div className="h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
