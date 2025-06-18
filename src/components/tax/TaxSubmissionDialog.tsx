
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface TaxSubmissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TaxSubmissionDialog({ open, onOpenChange }: TaxSubmissionDialogProps) {
  const [formData, setFormData] = useState({
    preferences: '',
    salesTaxSchedule: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Tax submission data:', formData);
    onOpenChange(false);
    // Reset form when closing
    setFormData({
      preferences: '',
      salesTaxSchedule: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    });
  };

  const handleCancel = () => {
    onOpenChange(false);
    setFormData({
      preferences: '',
      salesTaxSchedule: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
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
            Tax Submission Form
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
        <div className="flex flex-col gap-4 p-4 overflow-auto" style={{ maxHeight: '500px' }}>
          {/* Tax Preferences Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Tax Information</h3>
            
            {/* Preferences */}
            <div className="space-y-2">
              <Label htmlFor="preferences">Preferences</Label>
              <Select value={formData.preferences} onValueChange={(value) => handleInputChange('preferences', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your tax preferences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quarterly">Quarterly Filing</SelectItem>
                  <SelectItem value="annual">Annual Filing</SelectItem>
                  <SelectItem value="monthly">Monthly Filing</SelectItem>
                  <SelectItem value="custom">Custom Schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sales Tax Schedule */}
            <div className="space-y-2">
              <Label htmlFor="salesTaxSchedule">When do you pay sales tax?</Label>
              <Select value={formData.salesTaxSchedule} onValueChange={(value) => handleInputChange('salesTaxSchedule', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sales tax payment schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                  <SelectItem value="no-sales-tax">No Sales Tax Required</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Personal Information</h3>
            
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
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
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 p-4 border-t border-border">
          <Button
            variant="secondary"
            onClick={handleCancel}
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1"
          >
            Submit Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
