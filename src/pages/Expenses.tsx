import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ExpenseFilters } from '@/components/expenses/ExpenseFilters';
import { ExpenseTable } from '@/components/expenses/ExpenseTable';
import { AddExpenseDialog } from '@/components/expenses/AddExpenseDialog';
import { Button } from '@/components/ui/button';
import { Plus, Filter, ChevronDown, Download } from 'lucide-react';
import { Expense } from '@/types/expenses';

// Sample data - in a real app this would come from an API
const sampleExpenses: Expense[] = [
  {
    id: '1',
    date: new Date('2024-05-23'),
    description: 'Office Supplies',
    category: 'Office',
    amount: 8657.41,
    receipt: null,
  },
  {
    id: '2',
    date: new Date('2024-05-23'),
    description: 'Client Lunch',
    category: 'Meals',
    amount: 342.07,
    receipt: null,
  },
  {
    id: '3',
    date: new Date('2024-05-23'),
    description: 'Taxi Ride',
    category: 'Travel',
    amount: 1486.52,
    receipt: null,
  },
  {
    id: '4',
    date: new Date('2024-05-23'),
    description: 'Software Subscription',
    category: 'Software',
    amount: 5653.56,
    receipt: null,
  },
  {
    id: '5',
    date: new Date('2024-05-23'),
    description: 'Hotel Stay',
    category: 'Travel',
    amount: 1595.71,
    receipt: null,
  },
  {
    id: '6',
    date: new Date('2024-05-23'),
    description: 'Office Supplies',
    category: 'Office',
    amount: 7738.89,
    receipt: null,
  },
  {
    id: '7',
    date: new Date('2024-05-23'),
    description: 'Client Lunch',
    category: 'Meals',
    amount: 8650.33,
    receipt: null,
  },
  {
    id: '8',
    date: new Date('2024-05-23'),
    description: 'Taxi Ride',
    category: 'Travel',
    amount: 1207.52,
    receipt: null,
  },
  {
    id: '9',
    date: new Date('2024-05-23'),
    description: 'Software Subscription',
    category: 'Software',
    amount: 376.96,
    receipt: null,
  },
  {
    id: '10',
    date: new Date('2024-05-23'),
    description: 'Hotel Stay',
    category: 'Travel',
    amount: 7727.07,
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
    <Layout
      title="Expenses"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-foreground">Expenses Details</h1>
            <Button onClick={() => setIsAddExpenseOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Expenses
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                Category
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>

          {/* Expenses Table */}
          <ExpenseTable expenses={filteredExpenses} />
          
          <AddExpenseDialog 
            open={isAddExpenseOpen} 
            onOpenChange={setIsAddExpenseOpen} 
            onAddExpense={handleAddExpense} 
          />
        </div>
      }
    />
  );
}
