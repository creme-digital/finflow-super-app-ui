import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { BanknoteIcon, ArrowRightIcon, CreditCard, History } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type Activity = {
  id: string;
  date: string;
  description: string;
  amount: string;
};

type Account = {
  id: string;
  name: string;
  type: string;
  balance: string;
  accountNumber: string;
  routingNumber: string;
  recentActivity: Activity[];
};

interface AccountCardProps {
  account: Account;
  className?: string;
}

export function AccountCard({ account, className }: AccountCardProps) {
  const isPositive = (amount: string) => amount.startsWith('+');

  return (
    <Card className={cn('card-shadow card-gradient overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between bg-muted/30">
        <div className="flex items-center gap-3">
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill="#3972B7" fillOpacity="0.12"/>
              <path d="M13 25L21 13C21.5523 12.1846 22.4477 12.1846 23 13L27 19C27.5523 19.8154 27.1846 20.8154 26.25 21.25L14.75 26.75C13.8154 27.1846 13.4477 26.1846 14 25.75L13 25Z" fill="#3972B7"/>
            </svg>
          </div>
          <div>
            <CardTitle className="text-lg">{account.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{account.type}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{account.balance}</div>
          <p className="text-xs text-muted-foreground">Current Balance</p>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Account Details Section */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Account Details</h3>
            </div>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-2 pl-0 text-muted-foreground">Account Number</TableCell>
                  <TableCell className="py-2 font-medium">{account.accountNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-2 pl-0 text-muted-foreground">Routing Number</TableCell>
                  <TableCell className="py-2 font-medium">{account.routingNumber}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Recent Activity Section */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-4">
              <History className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {account.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-1 text-sm">
                  <div>
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{new Date(activity.date).toLocaleDateString()}</p>
                  </div>
                  <div className={cn(
                    'font-medium',
                    isPositive(activity.amount) ? 'text-fintech-success' : 'text-fintech-error'
                  )}>
                    {activity.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" className="ml-auto" asChild>
          <Link to={`/accounts/${account.id}`}>
            View Details
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
