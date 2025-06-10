
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

export const TaxHistoryTab = () => {
  const taxHistory = [
    {
      date: '23/05/2025',
      issuer: 'James Hall',
      form: '1092-NEC',
      amount: 8657.41,
      status: 'Submitted'
    },
    {
      date: '23/05/2024',
      issuer: 'Rhonda Rhodes',
      form: '1029-MISC',
      amount: 342.07,
      status: 'Submitted'
    },
    {
      date: '23/05/2023',
      issuer: 'Kathy Pacheco',
      form: '1077-K',
      amount: 1486.52,
      status: 'Submitted'
    },
    {
      date: '23/05/2022',
      issuer: 'Kimberly Mastrangelo',
      form: '1092-NEC',
      amount: 5653.56,
      status: 'Submitted'
    },
    {
      date: '23/05/2021',
      issuer: 'Corina McCoy',
      form: '1029-MISC',
      amount: 1595.71,
      status: 'Submitted'
    },
    {
      date: '23/05/2020',
      issuer: 'Iva Ryan',
      form: '1077-K',
      amount: 7738.89,
      status: 'Submitted'
    },
    {
      date: '23/05/2019',
      issuer: 'Stephanie Nicol',
      form: '1092-NEC',
      amount: 8650.33,
      status: 'Submitted'
    },
    {
      date: '23/05/2018',
      issuer: 'Alex Buckmaster',
      form: '1029-MISC',
      amount: 1207.52,
      status: 'Submitted'
    },
    {
      date: '23/05/2017',
      issuer: 'Patricia Sanders',
      form: '1077-K',
      amount: 376.96,
      status: 'Submitted'
    },
    {
      date: '23/05/2016',
      issuer: 'Katie Sims',
      form: '1077-K',
      amount: 7727.07,
      status: 'Submitted'
    }
  ];

  return (
    <Card className="fintech-card">
      <CardContent className="p-0">
        <Table className="fintech-table">
          <TableHeader className="fintech-table-header">
            <TableRow className="border-b bg-surface-muted">
              <TableHead className="fintech-table-header-cell">Date</TableHead>
              <TableHead className="fintech-table-header-cell">Issuer</TableHead>
              <TableHead className="fintech-table-header-cell">Form</TableHead>
              <TableHead className="fintech-table-header-cell">Amount</TableHead>
              <TableHead className="fintech-table-header-cell">Status</TableHead>
              <TableHead className="fintech-table-header-cell">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxHistory.map((item, index) => (
              <TableRow key={index} className="fintech-table-row border-b border-border/50">
                <TableCell className="fintech-table-cell font-medium">
                  {item.date}
                </TableCell>
                <TableCell className="fintech-table-cell">
                  {item.issuer}
                </TableCell>
                <TableCell className="fintech-table-cell">
                  {item.form}
                </TableCell>
                <TableCell className="fintech-table-cell fintech-mono font-medium">
                  {formatCurrency(item.amount)}
                </TableCell>
                <TableCell className="fintech-table-cell">
                  <Badge 
                    variant="secondary" 
                    className="bg-success/10 text-success hover:bg-success/20 transition-theme"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="fintech-table-cell">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
