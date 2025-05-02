
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ExpenseFilters } from '@/components/expenses/ExpenseFilters';
import { ExpenseTable } from '@/components/expenses/ExpenseTable';
import { AddExpenseDialog } from '@/components/expenses/AddExpenseDialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Expense } from '@/types/expenses';

// Sample data - in a real app this would come from an API
const sampleExpenses: Expense[] = [
  {
    id: '1',
    date: new Date('2025-04-25'),
    description: 'Office Supplies',
    category: 'Office',
    amount: 125.99,
    receipt: null,
  },
  {
    id: '2',
    date: new Date('2025-04-20'),
    description: 'Client Lunch',
    category: 'Meals',
    amount: 84.50,
    receipt: null,
  },
  {
    id: '3',
    date: new Date('2025-04-15'),
    description: 'Taxi Ride',
    category: 'Travel',
    amount: 35.25,
    receipt: null,
  },
  {
    id: '4',
    date: new Date('2025-04-10'),
    description: 'Software Subscription',
    category: 'Software',
    amount: 49.99,
    receipt: null,
  },
  {
    id: '5',
    date: new Date('2025-04-05'),
    description: 'Hotel Stay',
    category: 'Travel',
    amount: 245.80,
    receipt: null,
  },
];

export default function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>(sampleExpenses);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(sampleExpenses);
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
  
  const handleFilter = (startDate: Date | undefined, endDate: Date | undefined, category: string | undefined) => {
    let filtered = [...expenses];
    
    if (startDate) {
      filtered = filtered.filter(expense => expense.date >= startDate);
    }
    
    if (endDate) {
      filtered = filtered.filter(expense => expense.date <= endDate);
    }
    
    if (category && category !== 'All') {
      filtered = filtered.filter(expense => expense.category === category);
    }
    
    setFilteredExpenses(filtered);
  };
  
  const handleAddExpense = (newExpense: Omit<Expense, 'id'>) => {
    const expense = {
      ...newExpense,
      id: (expenses.length + 1).toString(),
    };
    
    setExpenses([expense, ...expenses]);
    setFilteredExpenses([expense, ...filteredExpenses]);
    setIsAddExpenseOpen(false);
  };
  
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Expenses</h1>
            <p className="text-muted-foreground mt-1">Track and manage your expenses.</p>
          </div>
          <Button onClick={() => setIsAddExpenseOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
        
        <ExpenseFilters onFilter={handleFilter} />
        
        <ExpenseTable expenses={filteredExpenses} />
        
        <AddExpenseDialog 
          open={isAddExpenseOpen} 
          onOpenChange={setIsAddExpenseOpen} 
          onAddExpense={handleAddExpense} 
        />
      </div>
    </Layout>
  );
}
