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
    <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
      <Table className="min-w-full text-sm">
        <TableHeader>
          <TableRow style={{ background: '#F8F8FA' }}>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">ID</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Pay Period</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Processed Date</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Employees</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Gross Pay</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Net Pay</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Taxes</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
            <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payrollHistory.map((payroll) => (
            <TableRow key={payroll.id}>
              <TableCell className="font-medium">{payroll.id}</TableCell>
              <TableCell>{payroll.period}</TableCell>
              <TableCell>{payroll.processedDate}</TableCell>
              <TableCell>{payroll.employees}</TableCell>
              <TableCell>{payroll.grossPay}</TableCell>
              <TableCell>{payroll.netPay}</TableCell>
              <TableCell>{payroll.taxes}</TableCell>
              <TableCell>
                <span
                  style={{
                    borderRadius: 6,
                    fontWeight: 500,
                    fontSize: 13,
                    padding: '2px 12px',
                    display: 'inline-block',
                    background: '#C9EBCC',
                    color: '#021B0D',
                  }}
                >
                  {payroll.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
