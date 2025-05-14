
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowUp, 
  ArrowDown, 
  Wallet, 
  CreditCard
} from 'lucide-react';
import { TopPayees } from './TopPayees';
import { PayoutSchedule } from './PayoutSchedule';

export function PaymentsDashboard() {
  // Sample metrics data
  const metrics = {
    totalSent: '$12,450.75',
    totalReceived: '$8,923.40',
    volumeProcessed: '$21,374.15',
    pendingPayments: '3'
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center pb-2 card-gradient rounded-t-lg">
            <CardTitle className="text-sm font-medium pb-1">
              <ArrowUp className="h-4 w-4 text-muted-foreground" />
              Total Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalSent}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center pb-2 card-gradient rounded-t-lg">
            <CardTitle className="text-sm font-medium pb-1">
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
              Total Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalReceived}</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center pb-2 card-gradient rounded-t-lg">
            <CardTitle className="text-sm font-medium pb-1">
            <Wallet className="h-4 w-4 text-muted-foreground" />
              Volume Processed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.volumeProcessed}</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center pb-2 card-gradient rounded-t-lg">
            <CardTitle className="text-sm font-medium pb-1">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
              Pending Payments
            </CardTitle>
      
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting processing
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TopPayees />
        <PayoutSchedule />
      </div>
    </div>
  );
}
