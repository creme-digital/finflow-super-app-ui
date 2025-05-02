
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, FileText } from 'lucide-react';

type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
};

const mockTransactions: Transaction[] = [
  { id: "1", date: "2025-05-01", description: "Monthly Subscription", category: "Software", amount: 49.99, type: 'expense' },
  { id: "2", date: "2025-05-01", description: "Client Payment", category: "Revenue", amount: 1500, type: 'income' },
  { id: "3", date: "2025-04-28", description: "Office Supplies", category: "Office", amount: 125.45, type: 'expense' },
  { id: "4", date: "2025-04-27", description: "Consulting Service", category: "Revenue", amount: 2200, type: 'income' },
  { id: "5", date: "2025-04-25", description: "Utility Bill", category: "Utilities", amount: 210.33, type: 'expense' },
  { id: "6", date: "2025-04-22", description: "Software License", category: "Software", amount: 299.99, type: 'expense' },
  { id: "7", date: "2025-04-20", description: "Client Retainer", category: "Revenue", amount: 3000, type: 'income' },
  { id: "8", date: "2025-04-18", description: "Marketing", category: "Advertising", amount: 450, type: 'expense' },
];

const categories = [
  "All Categories",
  "Software", 
  "Hardware", 
  "Office", 
  "Utilities", 
  "Advertising", 
  "Travel", 
  "Revenue", 
  "Other"
];

export function BookkeepingTab() {
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const filteredTransactions = mockTransactions.filter(transaction => 
    (transaction.description.toLowerCase().includes(filter.toLowerCase()) || 
     transaction.category.toLowerCase().includes(filter.toLowerCase())) &&
    (categoryFilter === "All Categories" || transaction.category === categoryFilter)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search transactions..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-8"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-10">
            <FileText className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Transaction Ledger</CardTitle>
          <CardDescription>
            A record of your recent financial transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-[100px]">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={transaction.type === 'income' ? "default" : "destructive"}>
                      {transaction.type === 'income' ? 'Income' : 'Expense'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="text-sm text-muted-foreground">
            Showing {filteredTransactions.length} of {mockTransactions.length} transactions
          </div>
          <div className="font-medium">
            Balance: ${mockTransactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0).toFixed(2)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
