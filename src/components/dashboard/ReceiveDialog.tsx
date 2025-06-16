
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ReceiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReceiveDialog({ open, onOpenChange }: ReceiveDialogProps) {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    requestFrom: '',
    email: '',
    amount: '',
    memo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReceive = () => {
    // Handle receive logic here
    console.log('Receive data:', { ...formData, date });
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
            Request Payment
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
          {/* Request From */}
          <div className="space-y-2">
            <Label htmlFor="requestFrom">Request From</Label>
            <Input
              id="requestFrom"
              value={formData.requestFrom}
              onChange={(e) => handleInputChange('requestFrom', e.target.value)}
              placeholder="Enter name or company"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter email address"
            />
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

          {/* Date */}
          <div className="space-y-2">
            <Label>Date</Label>
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

          {/* Memo */}
          <div className="space-y-2">
            <Label htmlFor="memo">Memo (Optional)</Label>
            <Input
              id="memo"
              value={formData.memo}
              onChange={(e) => handleInputChange('memo', e.target.value)}
              placeholder="Optional memo"
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
            onClick={handleReceive}
            className="flex-1"
          >
            Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
