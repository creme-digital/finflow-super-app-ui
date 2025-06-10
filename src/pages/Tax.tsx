
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Filter, Download, MoreHorizontal, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const Tax = () => {
  const taxRecords = [
    {
      id: 'TAX-001',
      date: '23/05/2025',
      issuer: 'James Hall',
      form: '1092-NEC',
      amount: 8657.41,
      status: 'Submitted'
    },
    {
      id: 'TAX-002',
      date: '23/05/2024',
      issuer: 'Rhonda Rhodes',
      form: '1029-MISC',
      amount: 342.07,
      status: 'Submitted'
    },
    {
      id: 'TAX-003',
      date: '23/05/2023',
      issuer: 'Kathy Pacheco',
      form: '1077-K',
      amount: 1486.52,
      status: 'Submitted'
    },
    {
      id: 'TAX-004',
      date: '23/05/2022',
      issuer: 'Kimberly Mastrangelo',
      form: '1092-NEC',
      amount: 5653.56,
      status: 'Submitted'
    },
    {
      id: 'TAX-005',
      date: '23/05/2021',
      issuer: 'Corina McCoy',
      form: '1029-MISC',
      amount: 1595.71,
      status: 'Submitted'
    },
    {
      id: 'TAX-006',
      date: '23/05/2020',
      issuer: 'Iva Ryan',
      form: '1077-K',
      amount: 7738.89,
      status: 'Submitted'
    },
    {
      id: 'TAX-007',
      date: '23/05/2019',
      issuer: 'Stephanie Nicol',
      form: '1092-NEC',
      amount: 8650.33,
      status: 'Submitted'
    },
    {
      id: 'TAX-008',
      date: '23/05/2018',
      issuer: 'Alex Buckmaster',
      form: '1029-MISC',
      amount: 1207.52,
      status: 'Submitted'
    },
    {
      id: 'TAX-009',
      date: '23/05/2017',
      issuer: 'Patricia Sanders',
      form: '1077-K',
      amount: 376.96,
      status: 'Submitted'
    },
    {
      id: 'TAX-010',
      date: '23/05/2016',
      issuer: 'Katie Sims',
      form: '1077-K',
      amount: 7727.07,
      status: 'Submitted'
    }
  ];

  return (
    <Layout
      title="Tax"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader title="Tax">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export All
              </Button>
              <Button variant="default" size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Tax Submission form
              </Button>
            </div>
          </PageHeader>

          {/* Tab Navigation */}
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-6">
              <button className="text-sm font-medium text-primary border-b-2 border-primary pb-2">
                Tax History
              </button>
              <button className="text-sm font-medium text-muted-foreground pb-2">
                Tax Estimation
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex items-center gap-4 px-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Tax Records Table */}
          <Card className="mx-4">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b bg-muted/20">
                    <TableHead className="font-medium text-muted-foreground">Date ↕</TableHead>
                    <TableHead className="font-medium text-muted-foreground">Issuer</TableHead>
                    <TableHead className="font-medium text-muted-foreground">Form</TableHead>
                    <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                    <TableHead className="font-medium text-muted-foreground">Status ↕</TableHead>
                    <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {taxRecords.map((record) => (
                    <TableRow key={record.id} className="border-b border-border/50 hover:bg-muted/30">
                      <TableCell className="font-medium text-foreground py-4">
                        {record.date}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground py-4">
                        {record.issuer}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground py-4">
                        {record.form}
                      </TableCell>
                      <TableCell className="font-medium text-foreground py-4">
                        {formatCurrency(record.amount)}
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge 
                          variant="secondary" 
                          className="bg-green-100 text-green-800 hover:bg-green-100"
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4">
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
        </div>
      }
    />
  );
};

export default Tax;
