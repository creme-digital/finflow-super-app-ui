
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CalendarCheck, CalendarX, ArrowRightLeft } from 'lucide-react';
import { format } from 'date-fns';

// Sample tax deadlines data
const taxDeadlinesData = [
  {
    id: 1,
    quarter: 'Q1',
    dueDate: new Date(2025, 3, 15), // April 15, 2025
    description: 'First quarter estimated tax payment',
    amount: 3125,
    status: 'paid',
    paymentDate: new Date(2025, 3, 10), // April 10, 2025
  },
  {
    id: 2,
    quarter: 'Q2',
    dueDate: new Date(2025, 5, 15), // June 15, 2025
    description: 'Second quarter estimated tax payment',
    amount: 3125,
    status: 'upcoming',
    paymentDate: null,
  },
  {
    id: 3,
    quarter: 'Q3',
    dueDate: new Date(2025, 8, 15), // September 15, 2025
    description: 'Third quarter estimated tax payment',
    amount: 3125,
    status: 'upcoming',
    paymentDate: null,
  },
  {
    id: 4,
    quarter: 'Q4',
    dueDate: new Date(2026, 0, 15), // January 15, 2026
    description: 'Fourth quarter estimated tax payment',
    amount: 3125,
    status: 'upcoming',
    paymentDate: null,
  },
  {
    id: 5,
    quarter: 'Annual',
    dueDate: new Date(2026, 3, 15), // April 15, 2026
    description: '2025 Tax Return filing deadline',
    amount: null,
    status: 'upcoming',
    paymentDate: null,
  }
];

// Format currency
const formatCurrency = (amount: number | null) => {
  if (amount === null) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const TaxDeadlinesTab = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taxDeadlinesData.map((deadline) => (
                <TableRow key={deadline.id}>
                  <TableCell className="font-medium">{deadline.quarter}</TableCell>
                  <TableCell>{format(deadline.dueDate, 'MMM d, yyyy')}</TableCell>
                  <TableCell>{deadline.description}</TableCell>
                  <TableCell>{deadline.amount ? formatCurrency(deadline.amount) : '-'}</TableCell>
                  <TableCell>
                    {deadline.status === 'paid' ? (
                      <Badge className="bg-emerald-500 hover:bg-emerald-600">
                        <CalendarCheck className="mr-1 h-3 w-3" />
                        Paid {deadline.paymentDate && format(deadline.paymentDate, 'MMM d')}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-amber-500 text-amber-500">
                        <CalendarX className="mr-1 h-3 w-3" />
                        Due in {Math.ceil((deadline.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {deadline.status === 'upcoming' && deadline.amount ? (
                      <Button size="sm" variant="outline">
                        <ArrowRightLeft className="mr-1 h-3 w-3" />
                        Schedule Payment
                      </Button>
                    ) : deadline.status === 'upcoming' && !deadline.amount ? (
                      <Button size="sm" variant="outline">
                        Add Reminder
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" disabled>
                        Payment Complete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Deadline Calendar</h3>
            <div className="space-y-4">
              {taxDeadlinesData.map((deadline) => (
                <div key={deadline.id} className="flex items-center p-3 rounded-md border">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    deadline.status === 'paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {format(deadline.dueDate, 'MMM')}
                    <br />
                    {format(deadline.dueDate, 'd')}
                  </div>
                  <div>
                    <div className="font-medium">{deadline.description}</div>
                    <div className="text-sm text-muted-foreground">{format(deadline.dueDate, 'EEEE, MMMM d, yyyy')}</div>
                  </div>
                  {deadline.status === 'paid' && (
                    <Badge className="ml-auto bg-emerald-500">Paid</Badge>
                  )}
                  {deadline.status === 'upcoming' && (
                    <Badge variant="outline" className="ml-auto border-amber-500 text-amber-500">Upcoming</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Payment Options</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-md border hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium">Direct Payment (IRS)</h4>
                <p className="text-sm text-muted-foreground">Pay directly to the IRS via bank account or credit card</p>
              </div>
              <div className="p-3 rounded-md border hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium">State Tax Authority</h4>
                <p className="text-sm text-muted-foreground">Pay state estimated taxes through state tax portal</p>
              </div>
              <div className="p-3 rounded-md border hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium">Schedule Automatic Payments</h4>
                <p className="text-sm text-muted-foreground">Set up automatic payments for all your tax deadlines</p>
              </div>
              <div className="p-3 rounded-md border hover:bg-muted/50 cursor-pointer">
                <h4 className="font-medium">Payment History</h4>
                <p className="text-sm text-muted-foreground">View all your previous tax payments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
