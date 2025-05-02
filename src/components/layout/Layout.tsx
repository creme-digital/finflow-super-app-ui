
import React, { useState } from 'react';
import { SidebarNav } from './SidebarNav';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav 
        className=""
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
      />
      <Navbar sidebarExpanded={sidebarExpanded} />
      <main className={`pt-16 transition-all duration-300 ${sidebarExpanded ? 'ml-64' : 'ml-16'}`}>
        <div className="container py-6 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
