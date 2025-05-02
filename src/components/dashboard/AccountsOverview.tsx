
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MoreVertical } from 'lucide-react';

type Account = {
  id: string;
  name: string;
  balance: string;
  change: string;
  positive: boolean;
  type: string;
};

const accounts: Account[] = [
  {
    id: '1',
    name: 'Main Account',
    balance: '$24,500',
    change: '3.2%',
    positive: true,
    type: 'Checking',
  },
  {
    id: '2',
    name: 'Savings',
    balance: '$74,200',
    change: '1.8%',
    positive: true,
    type: 'Savings',
  },
  {
    id: '3',
    name: 'Business Expense',
    balance: '$5,700',
    change: '0.5%',
    positive: false,
    type: 'Business',
  },
];

interface AccountsOverviewProps {
  className?: string;
}

export function AccountsOverview({ className }: AccountsOverviewProps) {
  return (
    <Card className={cn('card-shadow card-gradient h-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Accounts Overview</CardTitle>
        <button className="hover:bg-muted p-1 rounded-full">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{account.name}</p>
                  <p className="text-xs text-muted-foreground">{account.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{account.balance}</p>
                  <p className={cn(
                    'text-xs',
                    account.positive ? 'text-fintech-success' : 'text-fintech-error'
                  )}>
                    {account.positive ? '+' : '-'}{account.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
