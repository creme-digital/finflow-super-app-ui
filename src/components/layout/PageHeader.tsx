
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // right-side actions
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children, className }) => (
  <div className={`flex justify-between items-center ${className || ''}`}>
    <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
    {children && (
      <div className="flex items-center gap-2">{children}</div>
    )}
    {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
  </div>
);
