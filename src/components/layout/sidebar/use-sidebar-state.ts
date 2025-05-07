
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseSidebarStateResult {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  isMobile: boolean;
  openCategories: Record<string, boolean>;
  toggleCategory: (category: string) => void;
}

export const useSidebarState = (): UseSidebarStateResult => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Track open/closed state of each category
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Fintech: true
  });

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, [isMobile]);

  // Close mobile sidebar when changing routes
  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [window.location.pathname, isMobile]);

  // Open mobile sidebar when expanded is set to true on mobile
  useEffect(() => {
    if (isMobile && expanded) {
      setMobileOpen(true);
    }
  }, [expanded, isMobile]);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return {
    expanded,
    setExpanded,
    mobileOpen,
    setMobileOpen,
    isMobile,
    openCategories,
    toggleCategory
  };
};
