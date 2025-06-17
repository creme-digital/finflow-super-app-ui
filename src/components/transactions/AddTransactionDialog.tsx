
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface AddTransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddTransactionDialog({ open, onOpenChange }: AddTransactionDialogProps) {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    type: '',
    fromAccount: '',
    toAccount: '',
    paymentMethod: '',
    recipient: '',
    amount: '',
    description: '',
    category: '',
    reference: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTransaction = () => {
    // Handle add transaction logic here
    console.log('Transaction data:', { ...formData, date });
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px] p-0 border-0 flex flex-col gap-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            New Transaction
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div 
          className="flex flex-col gap-3 p-4 overflow-auto"
          style={{ maxHeight: '500px' }}
        >
          {/* Transaction Type */}
          <div className="space-y-2">
            <Label htmlFor="type">Transaction Type</Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transfer">Transfer</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="deposit">Deposit</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
                <SelectItem value="invoice">Invoice Payment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* From Account */}
          <div className="space-y-2">
            <Label htmlFor="fromAccount">From Account</Label>
            <Select value={formData.fromAccount} onValueChange={(value) => handleInputChange('fromAccount', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select source account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ops-payroll">Ops / Payroll</SelectItem>
                <SelectItem value="credit-account">Credit Account</SelectItem>
                <SelectItem value="ap">AP</SelectItem>
                <SelectItem value="checking">Checking Account</SelectItem>
                <SelectItem value="savings">Savings Account</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* To Account/Recipient */}
          <div className="space-y-2">
            <Label htmlFor="recipient">To/Recipient</Label>
            <Input
              id="recipient"
              value={formData.recipient}
              onChange={(e) => handleInputChange('recipient', e.target.value)}
              placeholder="Enter recipient name or account"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transfer">Transfer</SelectItem>
                <SelectItem value="wire">Intl. Wire</SelectItem>
                <SelectItem value="request">Request or Invoice Payment</SelectItem>
                <SelectItem value="card">Card Payment</SelectItem>
                <SelectItem value="ach">ACH Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label>Transaction Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
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
                  onSelect={setDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                placeholder="0.00"
                className="pl-8"
                step="0.01"
                min="0"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="meals">Meals</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="utilities">Utilities</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter transaction description"
              rows={3}
            />
          </div>

          {/* Reference Number */}
          <div className="space-y-2">
            <Label htmlFor="reference">Reference Number</Label>
            <Input
              id="reference"
              value={formData.reference}
              onChange={(e) => handleInputChange('reference', e.target.value)}
              placeholder="Optional reference number"
            />
          </div>
        </div>

        {/* Fixed Buttons */}
        <div className="flex gap-2 p-4 border-t border-border">
          <Button
            variant="secondary"
            onClick={handleCancel}
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddTransaction}
            className="flex-1"
          >
            Add Transaction
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
