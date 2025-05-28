import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '@/config/navigation-data';
import { cn } from '@/lib/utils';
import { settingsNav } from '@/config/navigation-data';

interface SidebarContentProps {
  items: NavItem[];
  expanded: boolean;
  openCategories: string[];
  toggleCategory: (category: string) => void;
}

export function SidebarContent({ items, expanded, openCategories, toggleCategory }: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      <nav className="flex-1 px-2 py-2 space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-white shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(221,221,228,0.25)] text-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                !expanded && 'justify-center'
              )
            }
          >
            <item.icon className={cn('h-5 w-5', expanded ? 'mr-2' : '')} />
            {expanded && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>
      
      {/* Settings section at the bottom */}
      <div className="px-2 py-2 border-t">
        <nav className="space-y-1">
          {settingsNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'bg-white shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(221,221,228,0.25)] text-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  !expanded && 'justify-center'
                )
              }
            >
              <item.icon className={cn('h-5 w-5', expanded ? 'mr-2' : '')} />
              {expanded && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
