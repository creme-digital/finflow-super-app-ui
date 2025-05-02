
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { BanknoteIcon, ArrowRightIcon } from 'lucide-react';
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
    <Card className={cn('card-shadow overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <BanknoteIcon className="h-5 w-5 text-primary" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Account Details</h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="py-2 pl-0">Account Number</TableCell>
                  <TableCell className="py-2 font-medium">{account.accountNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-2 pl-0">Routing Number</TableCell>
                  <TableCell className="py-2 font-medium">{account.routingNumber}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
            <div className="space-y-2">
              {account.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-1 text-sm border-b border-border last:border-0">
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
      <CardFooter className="bg-muted/10 pt-2">
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
