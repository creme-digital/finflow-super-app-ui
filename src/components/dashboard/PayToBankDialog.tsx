
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface PayToBankDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PayToBankDialog({ open, onOpenChange }: PayToBankDialogProps) {
  const [formData, setFormData] = useState({
    bank: '',
    branch: '',
    routingNumber: '',
    accountName: '',
    accountNumber: '',
    amount: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Pay to Bank data:', formData);
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
            Pay to Bank
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
          {/* Bank */}
          <div className="space-y-2">
            <Label htmlFor="bank">Bank</Label>
            <Select value={formData.bank} onValueChange={(value) => handleInputChange('bank', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chase">Chase Bank</SelectItem>
                <SelectItem value="bofa">Bank of America</SelectItem>
                <SelectItem value="wells-fargo">Wells Fargo</SelectItem>
                <SelectItem value="citibank">Citibank</SelectItem>
                <SelectItem value="us-bank">US Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Branch */}
          <div className="space-y-2">
            <Label htmlFor="branch">Branch</Label>
            <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="main">Main Branch</SelectItem>
                <SelectItem value="downtown">Downtown Branch</SelectItem>
                <SelectItem value="uptown">Uptown Branch</SelectItem>
                <SelectItem value="westside">Westside Branch</SelectItem>
                <SelectItem value="eastside">Eastside Branch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Routing Number */}
          <div className="space-y-2">
            <Label htmlFor="routingNumber">Routing Number</Label>
            <Input
              id="routingNumber"
              type="number"
              value={formData.routingNumber}
              onChange={(e) => handleInputChange('routingNumber', e.target.value)}
              placeholder="Enter routing number"
            />
          </div>

          {/* Account Name */}
          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              value={formData.accountName}
              onChange={(e) => handleInputChange('accountName', e.target.value)}
              placeholder="Enter account name"
            />
          </div>

          {/* Account Number */}
          <div className="space-y-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              type="number"
              value={formData.accountNumber}
              onChange={(e) => handleInputChange('accountNumber', e.target.value)}
              placeholder="Enter account number"
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
            onClick={handlePayment}
            className="flex-1"
          >
            Pay
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
