
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { Calendar, ChevronDown, Filter, Search } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

// Sample transaction data
const transactions = [
  {
    id: '1',
    date: new Date('2023-05-01'),
    description: 'Office supplies',
    category: 'Expenses',
    amount: -125.50,
    status: 'Reconciled'
  },
  {
    id: '2',
    date: new Date('2023-05-02'),
    description: 'Client payment - ABC Corp',
    category: 'Income',
    amount: 1500.00,
    status: 'Pending'
  },
  {
    id: '3',
    date: new Date('2023-05-03'),
    description: 'Software subscription',
    category: 'Expenses',
    amount: -49.99,
    status: 'Reconciled'
  },
  {
    id: '4',
    date: new Date('2023-05-05'),
    description: 'Utility bill',
    category: 'Expenses',
    amount: -210.75,
    status: 'Pending'
  },
  {
    id: '5',
    date: new Date('2023-05-07'),
    description: 'Client payment - XYZ Inc',
    category: 'Income',
    amount: 2750.00,
    status: 'Reconciled'
  }
];

export function BookkeepingTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Income', 'Expenses', 'Transfers'];
  
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search transactions..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-between">
                <span>Category: {selectedCategory}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map(category => (
                <DropdownMenuItem 
                  key={category} 
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
          
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction Ledger</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No transactions found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date.toLocaleDateString()}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        transaction.status === 'Reconciled'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell className={`text-right ${
                      transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {formatCurrency(transaction.amount)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline">Reconcile</Button>
        <Button variant="outline">Import Transactions</Button>
        <Button>Add Transaction</Button>
      </div>
    </div>
  );
}
