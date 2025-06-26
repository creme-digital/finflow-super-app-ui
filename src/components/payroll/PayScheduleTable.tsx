
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
import { Pencil } from 'lucide-react';

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

interface PayScheduleTableProps {
  onEditSchedule?: (schedule: any) => void;
}

export const PayScheduleTable = ({ onEditSchedule }: PayScheduleTableProps) => {
  const handleEditClick = (schedule: any) => {
    console.log('Edit schedule:', schedule);
    if (onEditSchedule) {
      onEditSchedule(schedule);
    }
  };

  return (
    <Table className="min-w-full text-sm">
      <TableHeader>
        <TableRow className="border-b border-border">
          <TableHead className="font-medium text-muted-foreground py-4">Name</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Frequency</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Next Pay Date ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Employees</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Total Amount ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Status ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paySchedules.map((schedule) => (
          <TableRow key={schedule.id} className="border-b border-border last:border-0">
            <TableCell className="font-medium text-foreground py-4">{schedule.name}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{schedule.frequency}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{schedule.nextDate}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{schedule.employeeCount} employees</TableCell>
            <TableCell className="font-medium text-foreground py-4">{schedule.totalAmount}</TableCell>
            <TableCell className="py-4">
              <Badge 
                variant="secondary" 
                className={
                  schedule.status === 'Upcoming' 
                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100" 
                    : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                }
              >
                {schedule.status}
              </Badge>
            </TableCell>
            <TableCell className="py-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => handleEditClick(schedule)}
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
