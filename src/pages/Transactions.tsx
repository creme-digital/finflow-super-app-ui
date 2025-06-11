
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronDown, Filter, Download, MoreHorizontal, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const Transactions = () => {
  const transactions = [
    {
      id: '2110',
      date: '23/05/2024',
      toFrom: { name: 'James Hall', avatar: '/placeholder.svg' },
      amount: 8657.41,
      account: 'Ops / Payroll',
      method: 'Request or Invoice Payment'
    },
    {
      id: '2109',
      date: '23/05/2024',
      toFrom: { name: 'Rhonda Rhodes', avatar: '/placeholder.svg' },
      amount: 342.07,
      account: 'Credit account',
      method: 'Aluna T. ••7840'
    },
    {
      id: '2980',
      date: '23/05/2024',
      toFrom: { name: 'Kathy Pacheco', avatar: '/placeholder.svg' },
      amount: 1486.52,
      account: 'AP',
      method: 'Transfer'
    },
    {
      id: '1098',
      date: '23/05/2024',
      toFrom: { name: 'Kimberly Mastrangelo', avatar: '/placeholder.svg' },
      amount: 5653.56,
      account: 'Ops / Payroll',
      method: 'Intl. Wire'
    },
    {
      id: '1456',
      date: '23/05/2024',
      toFrom: { name: 'Corina McCoy', avatar: '/placeholder.svg' },
      amount: 1595.71,
      account: 'Credit account',
      method: 'Landon S. ••5555'
    },
    {
      id: '1567',
      date: '23/05/2024',
      toFrom: { name: 'Iva Ryan', avatar: '/placeholder.svg' },
      amount: 7738.89,
      account: 'AP',
      method: 'Request or Invoice Payment'
    },
    {
      id: '1234',
      date: '23/05/2024',
      toFrom: { name: 'Stephanie Nicol', avatar: '/placeholder.svg' },
      amount: 8650.33,
      account: 'Ops / Payroll',
      method: 'Aluna T. ••7840'
    },
    {
      id: '1324',
      date: '23/05/2024',
      toFrom: { name: 'Alex Buckmaster', avatar: '/placeholder.svg' },
      amount: 1207.52,
      account: 'Ops / Payroll',
      method: 'Transfer'
    },
    {
      id: '1643',
      date: '23/05/2024',
      toFrom: { name: 'Patricia Sanders', avatar: '/placeholder.svg' },
      amount: 376.96,
      account: 'Credit account',
      method: 'Intl. Wire'
    },
  ];

  // Generate bar chart data for visualization
  const chartBars = Array.from({ length: 15 }, (_, i) => ({
    height: Math.random() * 60 + 20,
    isHighlight: i === 10 // Highlight one bar
  }));

  return (
    <Layout
      title="Transactions"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader title="Transactions">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Transaction
            </Button>
          </PageHeader>

          {/* Filters Row */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              📊 Data View
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Date
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Keywords
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Amount
              <ChevronDown className="w-4 h-4" />
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export All
              </Button>
            </div>
          </div>

          {/* Net Cash Summary Card */}
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
            <CardContent className="p-6">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Net cash this month</p>
                <h2 className="text-4xl font-bold text-foreground">-$72,321.11</h2>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <span className="text-sm text-muted-foreground">Money in</span>
                  <span className="text-sm font-medium text-green-600">$310,704.49</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                  <span className="text-sm text-muted-foreground">Money out</span>
                  <span className="text-sm font-medium text-red-600">-$383,025.60</span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end gap-1 h-20">
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${
                      bar.isHighlight ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    style={{ height: `${bar.height}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </div>

          {/* Transactions Table */}
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
                  <TableHead className="font-medium text-muted-foreground">Date ↕</TableHead>
                  <TableHead className="font-medium text-muted-foreground">To/From</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Account</TableHead>
                  <TableHead className="font-medium text-muted-foreground">ID</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Method</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-b border-border last:border-0">
                    <TableCell className="font-medium text-foreground py-4">
                      {transaction.date}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transaction.toFrom.avatar} alt={transaction.toFrom.name} />
                          <AvatarFallback className="text-xs bg-muted">
                            {transaction.toFrom.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-foreground">{transaction.toFrom.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-foreground py-4">
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.account}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.id}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground py-4">
                      {transaction.method}
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
          </div>
        </div>
      }
    />
  );
};

export default Transactions;
