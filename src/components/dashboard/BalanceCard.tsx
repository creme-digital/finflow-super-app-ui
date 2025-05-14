import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface BalanceCardProps {
  title: string;
  balance: string;
  change?: string;
  positive?: boolean;
  className?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
}

export function BalanceCard({
  title,
  balance,
  change,
  positive = true,
  className,
  children,
  icon: Icon,
}: BalanceCardProps) {
  // Split change into percentage and label if possible
  let percent = '';
  let label = '';
  if (change) {
    const match = change.match(/([+-]?\d+\.?\d*%?)(.*)/);
    if (match) {
      percent = match[1].trim();
      label = match[2].trim();
    } else {
      percent = change;
    }
  }
  return (
    <Card className={cn('card-shadow overflow-hidden', className)}>
      <CardHeader className="pb-3 card-gradient rounded-t-lg">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4" />}
          <CardTitle className="text-sm font-medium">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-bold">{balance}</div>
            {percent && (
              <span className={cn(
                'text-sm font-semibold',
                positive ? 'text-fintech-success' : 'text-fintech-error'
              )}>
                {percent}
              </span>
            )}
          </div>
          {label && (
            <div className="text-sm text-muted-foreground mt-1">{label}</div>
          )}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
