import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarCheck, Pencil } from 'lucide-react';

// Sample pay schedule data
const paySchedules = [
  {
    id: 1,
    name: 'Bi-Weekly Standard',
    frequency: 'Bi-Weekly',
    nextDate: 'May 15, 2025',
    employeeCount: 38,
    totalAmount: '$145,850',
    status: 'Upcoming',
  },
  {
    id: 2,
    name: 'Monthly Executives',
    frequency: 'Monthly',
    nextDate: 'May 31, 2025',
    employeeCount: 5,
    totalAmount: '$52,500',
    status: 'Upcoming',
  },
  {
    id: 3,
    name: 'Quarterly Bonuses',
    frequency: 'Quarterly',
    nextDate: 'June 30, 2025',
    employeeCount: 42,
    totalAmount: '$84,000',
    status: 'Scheduled',
  },
  {
    id: 4,
    name: 'Weekly Contractors',
    frequency: 'Weekly',
    nextDate: 'May 8, 2025',
    employeeCount: 7,
    totalAmount: '$18,900',
    status: 'Upcoming',
  },
  {
    id: 5,
    name: 'Bi-Weekly Support',
    frequency: 'Bi-Weekly',
    nextDate: 'May 15, 2025',
    employeeCount: 12,
    totalAmount: '$38,400',
    status: 'Upcoming',
  },
];

export const PayScheduleTable = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
        <Table className="min-w-full text-sm">
          <TableHeader>
            <TableRow style={{ background: '#F8F8FA' }}>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Frequency</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Next Pay Date</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Employees</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Total Amount</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
              <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paySchedules.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell className="font-medium">{schedule.name}</TableCell>
                <TableCell>{schedule.frequency}</TableCell>
                <TableCell>{schedule.nextDate}</TableCell>
                <TableCell>{schedule.employeeCount}</TableCell>
                <TableCell>{schedule.totalAmount}</TableCell>
                <TableCell>
                  <span
                    style={{
                      borderRadius: 6,
                      fontWeight: 500,
                      fontSize: 13,
                      padding: '2px 12px',
                      display: 'inline-block',
                      background: schedule.status === 'Upcoming' ? '#C9EBCC' : '#EBC9C9',
                      color: schedule.status === 'Upcoming' ? '#021B0D' : '#1D0202',
                    }}
                  >
                    {schedule.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button size="icon" variant="ghost">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
