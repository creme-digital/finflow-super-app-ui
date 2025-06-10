
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
    <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)] transition-all duration-300">
      <CardContent className="p-0">
        <Table className="w-full border-collapse">
          <TableHeader className="bg-surface-muted">
            <TableRow className="border-b bg-surface-muted">
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Date</TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Issuer</TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Form</TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Amount</TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Status</TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {taxHistory.map((item, index) => (
              <TableRow key={index} className="hover:bg-surface-muted transition-colors border-b border-border/50">
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border font-medium">
                  {item.date}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border">
                  {item.issuer}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border">
                  {item.form}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border font-mono font-medium">
                  {formatCurrency(item.amount)}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border">
                  <Badge 
                    variant="secondary" 
                    className="bg-success/10 text-success hover:bg-success/20 transition-all duration-300"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-primary border-b border-border">
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
