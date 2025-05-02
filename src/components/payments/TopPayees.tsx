
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

export function TopPayees() {
  // Sample data for top payees
  const payees = [
    { id: 1, name: 'Acme Corporation', amount: 2430.50, percentage: 75, avatar: 'A' },
    { id: 2, name: 'Tech Solutions Inc.', amount: 1825.75, percentage: 60, avatar: 'T' },
    { id: 3, name: 'Globex Services', amount: 1247.00, percentage: 45, avatar: 'G' },
    { id: 4, name: 'Widget Co.', amount: 985.25, percentage: 35, avatar: 'W' },
    { id: 5, name: 'ABC Suppliers', amount: 750.00, percentage: 25, avatar: 'A' },
  ];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Top Payees</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {payees.map((payee) => (
          <div key={payee.id} className="flex items-center space-x-4">
            <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
              <div className="text-xs font-medium">{payee.avatar}</div>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{payee.name}</p>
                <p className="text-sm font-medium">${payee.amount.toFixed(2)}</p>
              </div>
              <Progress value={payee.percentage} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
