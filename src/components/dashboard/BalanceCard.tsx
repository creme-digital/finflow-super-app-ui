
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BalanceCardProps {
  title: string;
  balance: string;
  change?: string;
  positive?: boolean;
  className?: string;
}

export function BalanceCard({
  title,
  balance,
  change,
  positive = true,
  className,
}: BalanceCardProps) {
  return (
    <Card className={cn('card-shadow card-gradient overflow-hidden', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{balance}</div>
          {change && (
            <div className={cn(
              'text-sm flex items-center gap-1 mt-1',
              positive ? 'text-fintech-success' : 'text-fintech-error'
            )}>
              <span>{positive ? '+' : ''}{change}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
