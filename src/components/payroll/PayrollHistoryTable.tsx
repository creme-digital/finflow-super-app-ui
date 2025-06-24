
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
import { FileText, Download } from 'lucide-react';

// Sample payroll history data
const payrollHistory = [
  {
    id: 'PAY-2025-041',
    period: 'Apr 16 - Apr 30, 2025',
    processedDate: 'Apr 30, 2025',
    employees: 42,
    grossPay: '$163,850',
    netPay: '$118,972',
    taxes: '$44,878',
    status: 'Completed',
  },
  {
    id: 'PAY-2025-040',
    period: 'Apr 1 - Apr 15, 2025',
    processedDate: 'Apr 15, 2025',
    employees: 42,
    grossPay: '$162,950',
    netPay: '$118,450',
    taxes: '$44,500',
    status: 'Completed',
  },
  {
    id: 'PAY-2025-039',
    period: 'Mar 16 - Mar 31, 2025',
    processedDate: 'Mar 31, 2025',
    employees: 40,
    grossPay: '$158,200',
    netPay: '$115,550',
    taxes: '$42,650',
    status: 'Completed',
  },
  {
    id: 'PAY-2025-038',
    period: 'Mar 1 - Mar 15, 2025',
    processedDate: 'Mar 15, 2025',
    employees: 40,
    grossPay: '$158,200',
    netPay: '$115,550',
    taxes: '$42,650',
    status: 'Completed',
  },
  {
    id: 'PAY-2025-037',
    period: 'Feb 16 - Feb 28, 2025',
    processedDate: 'Feb 28, 2025',
    employees: 38,
    grossPay: '$156,400',
    netPay: '$112,850',
    taxes: '$43,550',
    status: 'Completed',
  },
];

export const PayrollHistoryTable = () => {
  return (
    <Table className="min-w-full text-sm">
      <TableHeader>
        <TableRow className="border-b border-border">
          <TableHead className="font-medium text-muted-foreground py-4">ID</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Pay Period ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Processed Date ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Employees</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Gross Pay ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Net Pay ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Taxes ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Status ↕</TableHead>
          <TableHead className="font-medium text-muted-foreground py-4">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payrollHistory.map((payroll) => (
          <TableRow key={payroll.id} className="border-b border-border last:border-0">
            <TableCell className="font-medium text-foreground py-4">{payroll.id}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{payroll.period}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{payroll.processedDate}</TableCell>
            <TableCell className="text-sm text-muted-foreground py-4">{payroll.employees} employees</TableCell>
            <TableCell className="font-medium text-foreground py-4">{payroll.grossPay}</TableCell>
            <TableCell className="font-medium text-foreground py-4">{payroll.netPay}</TableCell>
            <TableCell className="font-medium text-foreground py-4">{payroll.taxes}</TableCell>
            <TableCell className="py-4">
              <Badge 
                variant="secondary" 
                className="bg-green-100 text-green-800 hover:bg-green-100"
              >
                {payroll.status}
              </Badge>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
