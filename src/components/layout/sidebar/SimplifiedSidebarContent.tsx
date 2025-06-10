
import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainNavigation, settingsNav } from '@/config/navigation-data';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SimplifiedSidebarContentProps {
  expanded: boolean;
}

export function SimplifiedSidebarContent({ expanded }: SimplifiedSidebarContentProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-2 py-2 space-y-1">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-center w-10 h-10 rounded-xl transition-colors',
                  isActive
                    ? 'text-white'
                    : 'text-foreground border border-white',
                  !expanded && 'mx-auto'
                )
              }
              style={({ isActive }) => 
                isActive 
                  ? { backgroundColor: '#292EE9' }
                  : { 
                      background: 'rgba(255, 255, 255, 0.64)',
                      border: '1px solid #FFFFFF'
                    }
              }
            >
              <item.icon className="h-5 w-5" />
            </NavLink>
          ))}
        </nav>
        
        {/* Settings section at the bottom */}
        <div className="px-2 py-2 border-t space-y-1">
          {settingsNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center justify-center w-10 h-10 rounded-xl transition-colors',
                  isActive
                    ? 'text-white'
                    : 'text-foreground border border-white',
                  !expanded && 'mx-auto'
                )
              }
              style={({ isActive }) => 
                isActive 
                  ? { backgroundColor: '#292EE9' }
                  : { 
                      background: 'rgba(255, 255, 255, 0.64)',
                      border: '1px solid #FFFFFF'
                    }
              }
            >
              <item.icon className="h-5 w-5" />
            </NavLink>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
