
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { formatCurrency } from '@/lib/formatters';
import { Expense } from '@/types/expenses';
import { format } from 'date-fns';
import { File } from 'lucide-react';

interface ExpenseTableProps {
  expenses: Expense[];
}

export function ExpenseTable({ expenses }: ExpenseTableProps) {
  const [selectedReceipt, setSelectedReceipt] = useState<string | null>(null);
  
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
            <TableHead className="text-muted-foreground font-medium">Description</TableHead>
            <TableHead className="text-muted-foreground font-medium">Category</TableHead>
            <TableHead className="text-right text-muted-foreground font-medium">Amount</TableHead>
            <TableHead className="text-muted-foreground font-medium">Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No expenses found.
              </TableCell>
            </TableRow>
          ) : (
            expenses.map((expense) => (
              <TableRow key={expense.id} className="border-b border-border last:border-0">
                <TableCell className="text-foreground">{format(expense.date, 'MMM d, yyyy')}</TableCell>
                <TableCell className="text-foreground">{expense.description}</TableCell>
                <TableCell className="text-muted-foreground">{expense.category}</TableCell>
                <TableCell className="text-right text-foreground font-medium">{formatCurrency(expense.amount)}</TableCell>
                <TableCell>
                  {expense.receipt ? (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedReceipt(expense.receipt)}
                    >
                      <File className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-sm">None</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Dialog open={!!selectedReceipt} onOpenChange={() => setSelectedReceipt(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Receipt</DialogTitle>
          </DialogHeader>
          {selectedReceipt && (
            <div className="flex justify-center">
              <img src={selectedReceipt} alt="Receipt" className="max-h-[80vh] object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
