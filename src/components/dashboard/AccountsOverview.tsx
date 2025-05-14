import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

// Custom SVG or icon for account type
const iconMap: Record<string, React.ReactNode> = {
  Personal: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#3972B7" fillOpacity="0.12"/>
      <path d="M13 25L21 13C21.5523 12.1846 22.4477 12.1846 23 13L27 19C27.5523 19.8154 27.1846 20.8154 26.25 21.25L14.75 26.75C13.8154 27.1846 13.4477 26.1846 14 25.75L13 25Z" fill="#3972B7"/>
    </svg>
  ),
  Savings: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#E1B800" fillOpacity="0.12"/>
      <path d="M13 25L21 13C21.5523 12.1846 22.4477 12.1846 23 13L27 19C27.5523 19.8154 27.1846 20.8154 26.25 21.25L14.75 26.75C13.8154 27.1846 13.4477 26.1846 14 25.75L13 25Z" fill="#E1B800"/>
    </svg>
  ),
  Credit: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#E14B4B" fillOpacity="0.12"/>
      <path d="M13 25L21 13C21.5523 12.1846 22.4477 12.1846 23 13L27 19C27.5523 19.8154 27.1846 20.8154 26.25 21.25L14.75 26.75C13.8154 27.1846 13.4477 26.1846 14 25.75L13 25Z" fill="#E14B4B"/>
    </svg>
  ),
};

const accounts = [
  {
    id: '1',
    name: 'Personal',
    balance: '$4,522.25',
    type: 'Checking',
    number: '8815',
    icon: 'Personal',
  },
  {
    id: '2',
    name: 'Savings',
    balance: '$8,458.22',
    type: 'Savings',
    number: '1179',
    icon: 'Savings',
  },
  {
    id: '3',
    name: 'Credit',
    balance: '$1,858.58',
    type: 'Credit',
    number: '9718',
    icon: 'Credit',
  },
];

interface AccountsOverviewProps {
  className?: string;
}

export function AccountsOverview({ className }: AccountsOverviewProps) {
  return (
    <Card className={cn('card-shadow h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Accounts Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center py-3 px-0 gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">{iconMap[account.name]}</div>
              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="text-lg font-medium text-gray-900">{account.name}</div>
                <div className="text-sm text-muted-foreground font-medium">
                  {account.type} <span className="mx-1">•</span>••{account.number}
                </div>
              </div>
              {/* Balance */}
              <div className="flex flex-col items-end min-w-[110px]">
                <span className="font-medium text-lg text-gray-900">{account.balance}</span>
                {/* Chevron */}
                <ChevronRight className="w-5 h-5 text-gray-300 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
