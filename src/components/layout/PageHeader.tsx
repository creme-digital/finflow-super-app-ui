import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // right-side actions
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children, className }) => (
  <div className={`flex flex-row items-center justify-between pl-4 pr-4 pt-0 pb-0 ${className || ''}`}>
    <div>
      <h1 className="text-2xl font-semibold tracking-tight" style={{ fontSize: 24 }}>{title}</h1>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
    {children && (
      <div className="flex items-center gap-2">{children}</div>
    )}
  </div>
); 