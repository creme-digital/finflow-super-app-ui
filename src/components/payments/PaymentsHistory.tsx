
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowUp, ArrowDown, Search } from 'lucide-react';

type PaymentType = 'sent' | 'received';
type PaymentStatus = 'completed' | 'pending' | 'failed';

interface Payment {
  id: string;
  date: string;
  name: string;
  type: PaymentType;
  amount: number;
  status: PaymentStatus;
  method: string;
}

export function PaymentsHistory() {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sample payment history data
  const payments: Payment[] = [
    { id: 'pay-1', date: '2025-05-01', name: 'Software Solutions, Inc.', type: 'sent', amount: 1250.00, status: 'completed', method: 'ACH' },
    { id: 'pay-2', date: '2025-04-28', name: 'Client Corp.', type: 'received', amount: 3500.00, status: 'completed', method: 'Wire' },
    { id: 'pay-3', date: '2025-04-25', name: 'Office Supplies Co.', type: 'sent', amount: 125.75, status: 'completed', method: 'Card' },
    { id: 'pay-4', date: '2025-04-22', name: 'Consulting Services Ltd.', type: 'received', amount: 1800.00, status: 'completed', method: 'ACH' },
    { id: 'pay-5', date: '2025-04-20', name: 'Global Industries', type: 'sent', amount: 950.50, status: 'pending', method: 'Wire' },
    { id: 'pay-6', date: '2025-04-18', name: 'Tech Innovations', type: 'received', amount: 2750.00, status: 'completed', method: 'ACH' },
    { id: 'pay-7', date: '2025-04-15', name: 'Digital Marketing Agency', type: 'sent', amount: 650.25, status: 'completed', method: 'Card' },
    { id: 'pay-8', date: '2025-04-12', name: 'Legal Consulting Firm', type: 'sent', amount: 1500.00, status: 'failed', method: 'ACH' },
  ];
  
  // Filter payments based on type and search query
  const filteredPayments = payments.filter(payment => {
    const matchesFilter = filter === 'all' || payment.type === filter;
    const matchesSearch = payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Helper function to get status badge style
  const getStatusBadge = (status: PaymentStatus) => {
    switch(status) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'pending':
        return <Badge variant="outline" className="text-amber-500 border-amber-500">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center w-full sm:w-auto space-x-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search payments..."
            className="w-full sm:w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payments</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="received">Received</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                    <TableCell className="font-mono text-xs">{payment.id}</TableCell>
                    <TableCell>{payment.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {payment.type === 'sent' ? (
                          <ArrowUp className="mr-1 h-4 w-4 text-red-500" />
                        ) : (
                          <ArrowDown className="mr-1 h-4 w-4 text-green-500" />
                        )}
                        <span className="capitalize">{payment.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`text-right ${payment.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}>
                      {payment.type === 'sent' ? '-' : '+'}${payment.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                    No payments found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
