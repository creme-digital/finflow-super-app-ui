
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ExpenseFilters } from '@/components/expenses/ExpenseFilters';
import { ExpenseTable } from '@/components/expenses/ExpenseTable';
import { AddExpenseDialog } from '@/components/expenses/AddExpenseDialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, Download } from 'lucide-react';
import { Expense } from '@/types/expenses';
import { PageHeader } from '@/components/layout/PageHeader';

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
  const [filters, setFilters] = useState({
    category: [] as string[],
    amount: [] as string[]
  });
  
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

  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));

    // Apply filters to expenses
    let filtered = [...expenses];
    const newFilters = {
      ...filters,
      [filterType]: checked 
        ? [...filters[filterType], value]
        : filters[filterType].filter(item => item !== value)
    };

    if (newFilters.category.length > 0) {
      filtered = filtered.filter(expense => newFilters.category.includes(expense.category));
    }

    if (newFilters.amount.length > 0) {
      filtered = filtered.filter(expense => {
        if (newFilters.amount.includes('Under $500') && expense.amount < 500) return true;
        if (newFilters.amount.includes('$500 - $1000') && expense.amount >= 500 && expense.amount <= 1000) return true;
        if (newFilters.amount.includes('Over $1000') && expense.amount > 1000) return true;
        return false;
      });
    }

    setFilteredExpenses(filtered);
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      amount: []
    });
    setFilteredExpenses(expenses);
  };

  const getActiveFiltersCount = () => {
    return filters.category.length + filters.amount.length;
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

  const activeFiltersCount = getActiveFiltersCount();
  
  return (
    <Layout
      title="Expenses"
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <PageHeader title="Expenses Details">
            <Button onClick={() => setIsAddExpenseOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Expenses
            </Button>
          </PageHeader>

          {/* Filters - matching Cards page styling */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full relative gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white">
                  <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Office')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Office', checked)}
                  >
                    Office
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Meals')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Meals', checked)}
                  >
                    Meals
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Travel')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Travel', checked)}
                  >
                    Travel
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Software')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Software', checked)}
                  >
                    Software
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Hardware')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Hardware', checked)}
                  >
                    Hardware
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Utilities')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Utilities', checked)}
                  >
                    Utilities
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.category.includes('Other')}
                    onCheckedChange={(checked) => handleFilterChange('category', 'Other', checked)}
                  >
                    Other
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Amount</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.amount.includes('Under $500')}
                    onCheckedChange={(checked) => handleFilterChange('amount', 'Under $500', checked)}
                  >
                    Under $500
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.amount.includes('$500 - $1000')}
                    onCheckedChange={(checked) => handleFilterChange('amount', '$500 - $1000', checked)}
                  >
                    $500 - $1000
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.amount.includes('Over $1000')}
                    onCheckedChange={(checked) => handleFilterChange('amount', 'Over $1000', checked)}
                  >
                    Over $1000
                  </DropdownMenuCheckboxItem>
                  
                  {activeFiltersCount > 0 && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={clearAllFilters} className="text-red-600">
                        Clear all filters
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <span className="text-sm text-muted-foreground">
                {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
              </span>
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
