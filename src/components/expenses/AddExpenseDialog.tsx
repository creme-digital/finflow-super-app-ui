
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, Upload } from 'lucide-react';
import { Expense } from '@/types/expenses';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface AddExpenseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddExpense: (expense: Omit<Expense, 'id'>) => void;
}

const categories = ['Office', 'Meals', 'Travel', 'Software', 'Hardware', 'Utilities', 'Other'];

export function AddExpenseDialog({ open, onOpenChange, onAddExpense }: AddExpenseDialogProps) {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleSubmit = () => {
    // Simple validation
    if (!description || !category || !amount || !date) {
      toast({
        title: "Missing fields",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    const expenseAmount = parseFloat(amount);
    if (isNaN(expenseAmount) || expenseAmount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit expense
    onAddExpense({
      date,
      description,
      category,
      amount: expenseAmount,
      receipt,
    });
    
    // Reset form
    resetForm();
  };
  
  const resetForm = () => {
    setDate(new Date());
    setDescription('');
    setCategory('');
    setAmount('');
    setReceipt(null);
    setPreviewUrl(null);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setReceipt(result);
        setPreviewUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      if (!newOpen) resetForm();
      onOpenChange(newOpen);
    }}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Expense</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="expense-date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="expense-date"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="expense-category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="expense-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="expense-description">Description</Label>
            <Input
              id="expense-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter expense description"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="expense-amount">Amount</Label>
              <Input
                id="expense-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <Label htmlFor="expense-receipt">Receipt</Label>
              <div className="flex gap-2">
                <Input
                  id="expense-receipt"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById('expense-receipt')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Receipt
                </Button>
              </div>
              
              {previewUrl && (
                <div className="mt-2 relative border rounded-md p-2 h-24">
                  <img 
                    src={previewUrl} 
                    alt="Receipt preview" 
                    className="h-full object-contain mx-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Add Expense
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
