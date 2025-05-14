
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarCheck, DollarSign } from 'lucide-react';

export function PayoutSchedule() {
  // Sample data for upcoming payouts
  const payouts = [
    { id: 1, recipient: 'Monthly Contractors', amount: 3250.00, date: 'May 15, 2025', status: 'scheduled' },
    { id: 2, recipient: 'Office Supplies Inc.', amount: 850.75, date: 'May 18, 2025', status: 'scheduled' },
    { id: 3, recipient: 'Utility Services', amount: 425.50, date: 'May 20, 2025', status: 'pending' },
    { id: 4, recipient: 'Marketing Team', amount: 1200.00, date: 'May 25, 2025', status: 'pending' },
    { id: 5, recipient: 'Software Licenses', amount: 575.25, date: 'May 31, 2025', status: 'pending' },
  ];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Payout Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payouts.map((payout) => (
            <div key={payout.id} className="flex items-center justify-between border-b pb-2 last:border-0">
              <div>
                <p className="text-base font-medium">{payout.recipient}</p>
                <p className="text-xs text-muted-foreground">{payout.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium">${payout.amount.toFixed(2)}</span>
                <Badge variant={payout.status === 'scheduled' ? 'default' : 'outline'}>
                  {payout.status === 'scheduled' ? 'Scheduled' : 'Pending'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
