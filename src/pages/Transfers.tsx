
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, ChevronDown, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/layout/PageHeader';

// Sample transfer data
const transfersData = [
  {
    id: '1',
    date: '23/05/2024',
    method: 'ACH Transfer',
    from: { name: 'James Hall', avatar: '/placeholder.svg' },
    account: 'Ops / Payroll',
    to: { name: 'James Hall', avatar: '/placeholder.svg' },
    amount: '$8,657.41'
  },
  {
    id: '2',
    date: '23/05/2024',
    method: 'Wire Transfer',
    from: { name: 'Rhonda Rhodes', avatar: '/placeholder.svg' },
    account: 'Credit account',
    to: { name: 'Rhonda Rhodes', avatar: '/placeholder.svg' },
    amount: '$342.07'
  },
  {
    id: '3',
    date: '23/05/2024',
    method: 'international',
    from: { name: 'Kathy Pacheco', avatar: '/placeholder.svg' },
    account: 'AP',
    to: { name: 'Kathy Pacheco', avatar: '/placeholder.svg' },
    amount: '$1,486.52'
  },
  {
    id: '4',
    date: '23/05/2024',
    method: 'ACH Transfer',
    from: { name: 'Kimberly Mastrangelo', avatar: '/placeholder.svg' },
    account: 'Ops / Payroll',
    to: { name: 'Kimberly Mastrangelo', avatar: '/placeholder.svg' },
    amount: '$5,653.56'
  },
  {
    id: '5',
    date: '23/05/2024',
    method: 'Wire Transfer',
    from: { name: 'Corina McCoy', avatar: '/placeholder.svg' },
    account: 'Credit account',
    to: { name: 'Corina McCoy', avatar: '/placeholder.svg' },
    amount: '$1,595.71'
  },
  {
    id: '6',
    date: '23/05/2024',
    method: 'international',
    from: { name: 'Iva Ryan', avatar: '/placeholder.svg' },
    account: 'AP',
    to: { name: 'Iva Ryan', avatar: '/placeholder.svg' },
    amount: '$7,738.89'
  },
  {
    id: '7',
    date: '23/05/2024',
    method: 'international',
    from: { name: 'Stephanie Nicol', avatar: '/placeholder.svg' },
    account: 'Ops / Payroll',
    to: { name: 'Stephanie Nicol', avatar: '/placeholder.svg' },
    amount: '$8,650.33'
  },
  {
    id: '8',
    date: '23/05/2024',
    method: 'ACH Transfer',
    from: { name: 'Alex Buckmaster', avatar: '/placeholder.svg' },
    account: 'Ops / Payroll',
    to: { name: 'Alex Buckmaster', avatar: '/placeholder.svg' },
    amount: '$1,207.52'
  },
  {
    id: '9',
    date: '23/05/2024',
    method: 'Wire Transfer',
    from: { name: 'Patricia Sanders', avatar: '/placeholder.svg' },
    account: 'Credit account',
    to: { name: 'Patricia Sanders', avatar: '/placeholder.svg' },
    amount: '$376.96'
  },
  {
    id: '10',
    date: '23/05/2024',
    method: 'international',
    from: { name: 'Katie Sims', avatar: '/placeholder.svg' },
    account: 'AP',
    to: { name: 'Katie Sims', avatar: '/placeholder.svg' },
    amount: '$7,727.07'
  }
];

export default function Transfers() {
  return (
    <Layout
      title="Transfer"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader
            title="Transfer"
          >
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Transfer
            </Button>
          </PageHeader>

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
            <span className="text-sm text-muted-foreground">No filters applied</span>
          </div>

          {/* Transfers Table */}
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
                  <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Method</TableHead>
                  <TableHead className="text-muted-foreground font-medium">From</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Account</TableHead>
                  <TableHead className="text-muted-foreground font-medium">To</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Amount</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transfersData.map((transfer) => (
                  <TableRow key={transfer.id} className="border-b border-border/50">
                    <TableCell className="text-foreground">
                      {transfer.date}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary"
                        className={cn(
                          "font-normal",
                          transfer.method === 'ACH Transfer' && "bg-blue-50 text-blue-700 hover:bg-blue-50",
                          transfer.method === 'Wire Transfer' && "bg-green-50 text-green-700 hover:bg-green-50",
                          transfer.method === 'international' && "bg-purple-50 text-purple-700 hover:bg-purple-50"
                        )}
                      >
                        {transfer.method}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transfer.from.avatar} alt={transfer.from.name} />
                          <AvatarFallback className="text-xs">
                            {transfer.from.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-foreground font-medium">{transfer.from.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {transfer.account}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={transfer.to.avatar} alt={transfer.to.name} />
                          <AvatarFallback className="text-xs">
                            {transfer.to.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-foreground font-medium">{transfer.to.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground font-medium">
                      {transfer.amount}
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
}

export interface TransferData {
  sourceAccount: string;
  destinationAccount: string;
  amount: string;
  memo: string;
  recipientName: string;
  recipientEmail: string;
  routingNumber?: string;
  accountNumber?: string;
  bankName?: string;
  swiftCode?: string;
  country?: string;
}
