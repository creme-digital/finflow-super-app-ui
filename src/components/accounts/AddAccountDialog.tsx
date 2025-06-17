
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface AddAccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const currencies = [
  { value: 'USD', label: 'USD - US Dollar', flag: '🇺🇸' },
  { value: 'GBP', label: 'GBP - British Pound', flag: '🇬🇧' },
  { value: 'AUD', label: 'AUD - Australian Dollar', flag: '🇦🇺' },
  { value: 'CAD', label: 'CAD - Canadian Dollar', flag: '🇨🇦' },
  { value: 'EUR', label: 'EUR - Euro', flag: '🇪🇺' },
  { value: 'JPY', label: 'JPY - Japanese Yen', flag: '🇯🇵' },
  { value: 'CHF', label: 'CHF - Swiss Franc', flag: '🇨🇭' },
  { value: 'SGD', label: 'SGD - Singapore Dollar', flag: '🇸🇬' },
];

export function AddAccountDialog({ open, onOpenChange }: AddAccountDialogProps) {
  const [formData, setFormData] = useState({
    accountName: '',
    accountNumber: '',
    routingNumber: '',
    currency: '',
    type: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddAccount = () => {
    // Handle add account logic here
    console.log('Add account data:', formData);
    onOpenChange(false);
    // Reset form when closing
    setFormData({
      accountName: '',
      accountNumber: '',
      routingNumber: '',
      currency: '',
      type: ''
    });
  };

  const handleCancel = () => {
    onOpenChange(false);
    setFormData({
      accountName: '',
      accountNumber: '',
      routingNumber: '',
      currency: '',
      type: ''
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
            Add New Account
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
              value={formData.accountNumber}
              onChange={(e) => handleInputChange('accountNumber', e.target.value)}
              placeholder="Enter account number"
            />
          </div>

          {/* Routing Number */}
          <div className="space-y-2">
            <Label htmlFor="routingNumber">Routing Number</Label>
            <Input
              id="routingNumber"
              value={formData.routingNumber}
              onChange={(e) => handleInputChange('routingNumber', e.target.value)}
              placeholder="Enter routing number"
            />
          </div>

          {/* Currency */}
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    <div className="flex items-center gap-2">
                      <span>{currency.flag}</span>
                      <span>{currency.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
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
            onClick={handleAddAccount}
            className="flex-1"
          >
            Add Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
