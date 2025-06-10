
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-primary',
  className
}: MetricCardProps) {
  return (
    <div className={cn('metric-card', className)}>
      <div className="flex items-center justify-between">
        <div className={cn('icon-wrapper', iconColor === 'text-primary' && 'bg-primary/10')}>
          <Icon className={cn('w-5 h-5', iconColor)} />
        </div>
        {change && (
          <span className={cn(
            'metric-change px-2 py-1 rounded-full',
            changeType === 'positive' && 'text-green-600 bg-green-50',
            changeType === 'negative' && 'text-red-600 bg-red-50',
            changeType === 'neutral' && 'text-muted-foreground bg-muted'
          )}>
            {change}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="metric-value">{value}</p>
        <p className="metric-label">{title}</p>
      </div>
    </div>
  );
}
