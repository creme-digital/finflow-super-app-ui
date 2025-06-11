
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, ChevronDown, Download, MoreHorizontal, Info } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const summaryData = [
  {
    label: 'Total Open',
    value: 2000,
    subtitle: '12 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
  {
    label: 'Overdue invoices',
    value: 182,
    subtitle: '5 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
  {
    label: 'paid invoices',
    value: 928,
    subtitle: '7 Invoices',
    icon: <Info className="w-4 h-4 text-muted-foreground" />,
  },
];

const invoicesData = [
  {
    date: '23/05/2024',
    status: 'Overdue',
    customer: 'James Hall',
    amount: 8657.41,
    invoiceNo: '2110',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Overdue',
    customer: 'Rhonda Rhodes',
    amount: 342.07,
    invoiceNo: '2109',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Kathy Pacheco',
    amount: 1486.52,
    invoiceNo: '2980',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Kimberly Mastrangelo',
    amount: 5653.56,
    invoiceNo: '1098',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Not due yet',
    customer: 'Corina McCoy',
    amount: 1595.71,
    invoiceNo: '1456',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Iva Ryan',
    amount: 7738.89,
    invoiceNo: '1567',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Stephanie Nicol',
    amount: 8650.33,
    invoiceNo: '1234',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Paid',
    customer: 'Alex Buckmaster',
    amount: 1207.52,
    invoiceNo: '1324',
    invoiceDate: '23/05/2024',
    recurring: 'Monthly',
  },
  {
    date: '23/05/2024',
    status: 'Processing',
    customer: 'Patricia Sanders',
    amount: 376.96,
    invoiceNo: '1643',
    invoiceDate: '23/05/2024',
    recurring: 'Weekly',
  },
  {
    date: '23/05/2024',
    status: 'Canceled',
    customer: 'Katie Sims',
    amount: 7727.07,
    invoiceNo: '1759',
    invoiceDate: '23/05/2024',
    recurring: 'One Time',
  },
];

const statusStyles = {
  'Overdue': { bg: '#FEF2F2', color: '#991B1B' },
  'Not due yet': { bg: '#EFF6FF', color: '#1E40AF' },
  'Paid': { bg: '#F0FDF4', color: '#166534' },
  'Processing': { bg: '#FEF3C7', color: '#92400E' },
  'Canceled': { bg: '#F3F4F6', color: '#374151' },
};

const Accounting = () => {
  return (
    <Layout
      title="Accounting"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-foreground">Accounting Details</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export All
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Invoice
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Status
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {summaryData.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{
                  border: '1px solid #FFFFFF',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    ${item.value < 1000 ? item.value : `${(item.value / 1000).toFixed(0)}k`}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Invoices Table */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="w-12 p-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </TableHead>
                  <TableHead className="font-medium text-muted-foreground">Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Status</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Customer</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Invoice No.</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Invoice Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Recurring</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoicesData.map((invoice, i) => (
                  <TableRow key={i} className="border-b border-border last:border-0">
                    <TableCell className="p-4">
                      <input type="checkbox" className="w-4 h-4" />
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {invoice.date}
                    </TableCell>
                    <TableCell>
                      <Badge
                        style={{
                          backgroundColor: statusStyles[invoice.status]?.bg,
                          color: statusStyles[invoice.status]?.color,
                          borderRadius: 6,
                          fontWeight: 500,
                          fontSize: 12,
                          padding: '4px 8px',
                        }}
                        className="hover:bg-current"
                      >
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {invoice.customer}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {formatCurrency(invoice.amount)}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.invoiceNo}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.invoiceDate}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {invoice.recurring}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      }
    />
  );
};

export default Accounting;
