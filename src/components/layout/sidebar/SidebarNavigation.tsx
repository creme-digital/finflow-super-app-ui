
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { navCategories, NavCategory } from './navigation-data';

interface SidebarNavigationProps {
  expanded: boolean;
  isMobile: boolean;
  openCategories: Record<string, boolean>;
  toggleCategory: (category: string) => void;
  setMobileOpen?: (open: boolean) => void;
}

export const SidebarNavigation = ({ 
  expanded, 
  isMobile, 
  openCategories, 
  toggleCategory,
  setMobileOpen
}: SidebarNavigationProps) => {
  if (expanded || isMobile) {
    return (
      <div className="w-full">
        {navCategories.map((category) => (
          <CategoryExpanded 
            key={category.title} 
            category={category} 
            openCategories={openCategories} 
            toggleCategory={toggleCategory} 
            isMobile={isMobile}
            setMobileOpen={setMobileOpen}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center space-y-4">
        {navCategories.map((category) => (
          <CategoryCompact key={category.title} category={category} />
        ))}
      </div>
    );
  }
};

const CategoryExpanded = ({ 
  category, 
  openCategories, 
  toggleCategory, 
  isMobile,
  setMobileOpen
}: { 
  category: NavCategory; 
  openCategories: Record<string, boolean>; 
  toggleCategory: (category: string) => void;
  isMobile: boolean;
  setMobileOpen?: (open: boolean) => void;
}) => {
  return (
    <div key={category.title} className="mb-2">
      <Collapsible 
        open={openCategories[category.title]} 
        onOpenChange={() => toggleCategory(category.title)} 
        className="w-full"
      >
        <div className="mb-1 px-2 flex items-center justify-between">
          <h2 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
            {category.title}
          </h2>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              {openCategories[category.title] ? (
                <ChevronUp className="h-3 w-3 text-sidebar-foreground/70" />
              ) : (
                <ChevronDown className="h-3 w-3 text-sidebar-foreground/70" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          {category.items.map(item => (
            <Link 
              key={item.href} 
              to={item.href} 
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors',
                window.location.pathname === item.href && 'bg-sidebar-accent'
              )} 
              onClick={() => isMobile && setMobileOpen && setMobileOpen(false)}
            >
              <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
              <span>{item.title}</span>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const CategoryCompact = ({ category }: { category: NavCategory }) => {
  return (
    <div key={category.title} className="w-full flex flex-col items-center">
      <div className="w-full text-center py-2">
        <span className="text-[10px] text-sidebar-foreground/60 uppercase tracking-wider">
          {category.title.charAt(0)}
        </span>
      </div>
      {category.items.map(item => (
        <Link 
          key={item.href} 
          to={item.href} 
          className={cn(
            'flex items-center justify-center w-10 h-10 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors',
            window.location.pathname === item.href && 'bg-sidebar-accent'
          )} 
          title={item.title}
        >
          <item.icon className="w-5 h-5 text-sidebar-foreground/70 group-hover:text-sidebar-foreground" />
        </Link>
      ))}
    </div>
  );
};
