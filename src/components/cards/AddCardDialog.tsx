
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X } from 'lucide-react';

interface AddCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddCardDialog({ open, onOpenChange }: AddCardDialogProps) {
  const [formData, setFormData] = useState({
    cardHolder: '',
    nickname: '',
    cardType: '',
    type: '',
    maxSpendingMonth: '',
    maxTransactionsMonth: '',
    maxSpendingTransaction: '',
    limitType: '',
    dailySpendingLimit: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddCard = () => {
    // Handle add card logic here
    console.log('Add card data:', formData);
    onOpenChange(false);
    // Reset form when closing
    setFormData({
      cardHolder: '',
      nickname: '',
      cardType: '',
      type: '',
      maxSpendingMonth: '',
      maxTransactionsMonth: '',
      maxSpendingTransaction: '',
      limitType: '',
      dailySpendingLimit: ''
    });
  };

  const handleCancel = () => {
    onOpenChange(false);
    setFormData({
      cardHolder: '',
      nickname: '',
      cardType: '',
      type: '',
      maxSpendingMonth: '',
      maxTransactionsMonth: '',
      maxSpendingTransaction: '',
      limitType: '',
      dailySpendingLimit: ''
    });
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
            Create New Card
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
          className="flex flex-col gap-4 p-4 overflow-auto"
          style={{ maxHeight: '500px' }}
        >
          {/* Basic Information Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Basic Information</h3>
            
            {/* Card Holder */}
            <div className="space-y-2">
              <Label htmlFor="cardHolder">Card Holder</Label>
              <Input
                id="cardHolder"
                value={formData.cardHolder}
                onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                placeholder="Enter card holder name"
              />
            </div>

            {/* Nickname */}
            <div className="space-y-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                value={formData.nickname}
                onChange={(e) => handleInputChange('nickname', e.target.value)}
                placeholder="Enter card nickname"
              />
            </div>

            {/* Card Type */}
            <div className="space-y-3">
              <Label>Card Type</Label>
              <RadioGroup 
                value={formData.cardType} 
                onValueChange={(value) => handleInputChange('cardType', value)} 
                className="flex gap-0"
              >
                <div className="w-full px-[12px] py-[12px] bg-white rounded-xl border flex items-center space-x-2">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit" className="font-normal">Credit Card</Label>
                </div>
                <div className="w-full px-[12px] py-[12px] bg-white rounded-xl border flex items-center space-x-2">
                  <RadioGroupItem value="debit" id="debit" />
                  <Label htmlFor="debit" className="font-normal">Debit Card</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Type */}
            <div className="space-y-3">
              <Label>Type</Label>
              <RadioGroup 
                value={formData.type} 
                onValueChange={(value) => handleInputChange('type', value)} 
                className="flex gap-0"
              >
                <div className="w-full px-[12px] py-[12px] bg-white rounded-xl border flex items-center space-x-2">
                  <RadioGroupItem value="virtual" id="virtual" />
                  <Label htmlFor="virtual" className="font-normal">Virtual Card</Label>
                </div>
                <div className="w-full px-[12px] py-[12px] bg-white rounded-xl border flex items-center space-x-2">
                  <RadioGroupItem value="physical" id="physical" />
                  <Label htmlFor="physical" className="font-normal">Physical Card</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Spend Controls Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Spend Controls</h3>
            
            {/* Max Spending p/ Month */}
            <div className="space-y-2">
              <Label htmlFor="maxSpendingMonth">Max Spending p/ Month</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="maxSpendingMonth"
                  type="number"
                  value={formData.maxSpendingMonth}
                  onChange={(e) => handleInputChange('maxSpendingMonth', e.target.value)}
                  placeholder="0.00"
                  className="pl-8"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>

            {/* Max Transactions p/ Month */}
            <div className="space-y-2">
              <Label htmlFor="maxTransactionsMonth">Max Transactions p/ Month</Label>
              <Input
                id="maxTransactionsMonth"
                type="number"
                value={formData.maxTransactionsMonth}
                onChange={(e) => handleInputChange('maxTransactionsMonth', e.target.value)}
                placeholder="Enter maximum transactions"
                min="0"
              />
            </div>

            {/* Max Spending p/ Transaction */}
            <div className="space-y-2">
              <Label htmlFor="maxSpendingTransaction">Max Spending p/ Transaction</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="maxSpendingTransaction"
                  type="number"
                  value={formData.maxSpendingTransaction}
                  onChange={(e) => handleInputChange('maxSpendingTransaction', e.target.value)}
                  placeholder="0.00"
                  className="pl-8"
                  step="0.01"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Limits Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Limits</h3>
            
            {/* Limit Type */}
            <div className="space-y-2">
              <Label htmlFor="limitType">Limit Type</Label>
              <Select value={formData.limitType} onValueChange={(value) => handleInputChange('limitType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select limit type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fixed">Fixed Limit</SelectItem>
                  <SelectItem value="percentage">Percentage Based</SelectItem>
                  <SelectItem value="dynamic">Dynamic Limit</SelectItem>
                  <SelectItem value="account-balance">Account Balance Based</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Daily Spending Limit */}
            <div className="space-y-2">
              <Label htmlFor="dailySpendingLimit">Daily Spending Limit</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="dailySpendingLimit"
                  type="number"
                  value={formData.dailySpendingLimit}
                  onChange={(e) => handleInputChange('dailySpendingLimit', e.target.value)}
                  placeholder="0.00"
                  className="pl-8"
                  step="0.01"
                  min="0"
                />
              </div>
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
            onClick={handleAddCard}
            className="flex-1"
          >
            Create Card
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
