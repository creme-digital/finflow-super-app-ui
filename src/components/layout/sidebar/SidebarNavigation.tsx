import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavItem } from '@/config/navigation-data';

interface SidebarNavigationProps {
  items: NavItem[];
  expanded: boolean;
  openCategories: Record<string, boolean>;
  toggleCategory: (category: string) => void;
}

export function SidebarNavigation({
  items,
  expanded,
  openCategories,
  toggleCategory,
}: SidebarNavigationProps) {
  const location = useLocation();

  const navItemClass = (href: string) => {
    const isSelected = location.pathname === href;
    return cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
      isSelected
        ? 'bg-card text-card-foreground'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    );
  };

  return (
    <nav className="grid gap-1 px-2">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={navItemClass(item.href)}
        >
          <item.icon className="h-4 w-4" />
          {expanded && <span>{item.title}</span>}
        </Link>
      ))}
    </nav>
  );
}
