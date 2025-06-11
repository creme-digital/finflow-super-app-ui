import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const transactions = [
  {
    id: '2110',
    date: '23/05/2024',
    person: {
      name: 'James Hall',
      avatar: '/placeholder.svg'
    },
    amount: 8657.41,
    account: 'Ops / Payroll',
    method: 'Request or Invoice Payment'
  },
  {
    id: '2109',
    date: '23/05/2024',
    person: {
      name: 'Rhonda Rhodes',
      avatar: '/placeholder.svg'
    },
    amount: 342.07,
    account: 'Credit account',
    method: 'Aluna T. ••7840'
  },
  {
    id: '2980',
    date: '23/05/2024',
    person: {
      name: 'Kathy Pacheco',
      avatar: '/placeholder.svg'
    },
    amount: 1486.52,
    account: 'AP',
    method: 'Transfer'
  },
  {
    id: '1098',
    date: '23/05/2024',
    person: {
      name: 'Kimberly Mastrangelo',
      avatar: '/placeholder.svg'
    },
    amount: 5653.56,
    account: 'Ops / Payroll',
    method: 'Intl. Wire'
  },
  {
    id: '1456',
    date: '23/05/2024',
    person: {
      name: 'Corina McCoy',
      avatar: '/placeholder.svg'
    },
    amount: 1595.71,
    account: 'Credit account',
    method: 'Landon S. ••5555'
  },
  {
    id: '1567',
    date: '23/05/2024',
    person: {
      name: 'Iva Ryan',
      avatar: '/placeholder.svg'
    },
    amount: 7738.89,
    account: 'AP',
    method: 'Request or Invoice Payment'
  },
  {
    id: '1234',
    date: '23/05/2024',
    person: {
      name: 'Stephanie Nicol',
      avatar: '/placeholder.svg'
    },
    amount: 8650.33,
    account: 'Ops / Payroll',
    method: 'Aluna T. ••7840'
  },
  {
    id: '1324',
    date: '23/05/2024',
    person: {
      name: 'Alex Buckmaster',
      avatar: '/placeholder.svg'
    },
    amount: 1207.52,
    account: 'Ops / Payroll',
    method: 'Transfer'
  }
];

export function AccountsTransactionTable() {
  return (
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
            <TableHead className="text-muted-foreground font-medium">To/From</TableHead>
            <TableHead className="text-muted-foreground font-medium">Amount</TableHead>
            <TableHead className="text-muted-foreground font-medium">Account</TableHead>
            <TableHead className="text-muted-foreground font-medium">ID</TableHead>
            <TableHead className="text-muted-foreground font-medium">Method</TableHead>
            <TableHead className="text-muted-foreground font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-b border-border last:border-0">
              <TableCell className="text-foreground">{transaction.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={transaction.person.avatar} alt={transaction.person.name} />
                    <AvatarFallback>
                      {transaction.person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-foreground font-medium">{transaction.person.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-foreground font-medium">
                ${transaction.amount.toLocaleString()}
              </TableCell>
              <TableCell className="text-muted-foreground">{transaction.account}</TableCell>
              <TableCell className="text-muted-foreground">{transaction.id}</TableCell>
              <TableCell className="text-muted-foreground">{transaction.method}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Eye className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
