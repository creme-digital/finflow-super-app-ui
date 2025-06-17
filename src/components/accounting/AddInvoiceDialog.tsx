
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X, Search, Plus, Eye, Send } from 'lucide-react';

interface AddInvoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
const customers = ['James Hall', 'Rhonda Rhodes', 'Kathy Pacheco', 'Kimberly Mastrangelo', 'Corina McCoy'];
const items = ['Consulting Services', 'Design Work', 'Development Hours', 'Marketing Campaign'];
const brands = ['Default Brand', 'Company Logo Blue', 'Minimal Theme'];

export function AddInvoiceDialog({ open, onOpenChange }: AddInvoiceDialogProps) {
  const [formData, setFormData] = useState({
    customer: '',
    currency: '',
    selectedItem: '',
    paymentCollection: 'request', // 'request' or 'autocharge'
    memo: false,
    footer: false,
    customFields: false,
    taxId: false,
    branding: '',
    memoText: '',
    footerText: '',
    customFieldsText: '',
    taxIdText: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateInvoice = () => {
    console.log('Invoice data:', formData);
    onOpenChange(false);
  };

  const handlePreview = () => {
    console.log('Preview invoice:', formData);
    // Handle preview logic here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[600px] p-0 border-0 flex flex-col gap-0"
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
            Create Invoice
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
          className="flex flex-col gap-6 p-4 overflow-auto"
          style={{ maxHeight: '600px' }}
        >
          {/* Customer Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Customer Info</h3>
            
            <div className="space-y-2">
              <Label>Customer</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Select value={formData.customer} onValueChange={(value) => handleInputChange('customer', value)}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Search for customer" />
                  </SelectTrigger>
                  <SelectContent>
                    {customers.map((customer) => (
                      <SelectItem key={customer} value={customer}>{customer}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Currency</Label>
              <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Items</h3>
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Select value={formData.selectedItem} onValueChange={(value) => handleInputChange('selectedItem', value)}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Search or create new item" />
                    </SelectTrigger>
                    <SelectContent>
                      {items.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Payment Collection Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Payment Collection</h3>
            
            <RadioGroup 
              value={formData.paymentCollection} 
              onValueChange={(value) => handleInputChange('paymentCollection', value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="request" id="request" />
                <Label htmlFor="request" className="flex-1">
                  <div className="font-medium">Request Payment</div>
                  <div className="text-sm text-muted-foreground">Create an invoice requesting payment</div>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="autocharge" id="autocharge" />
                <Label htmlFor="autocharge" className="flex-1">
                  <div className="font-medium">Autocharge Customer</div>
                  <div className="text-sm text-muted-foreground">Automatically charge the customer</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Collection Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Additional Options</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="memo" 
                  checked={formData.memo}
                  onCheckedChange={(checked) => handleInputChange('memo', checked)}
                />
                <Label htmlFor="memo">Memo</Label>
              </div>
              {formData.memo && (
                <div className="ml-6 space-y-2">
                  <Textarea
                    value={formData.memoText}
                    onChange={(e) => handleInputChange('memoText', e.target.value)}
                    placeholder="Enter memo text"
                    rows={2}
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="footer" 
                  checked={formData.footer}
                  onCheckedChange={(checked) => handleInputChange('footer', checked)}
                />
                <Label htmlFor="footer">Footer</Label>
              </div>
              {formData.footer && (
                <div className="ml-6 space-y-2">
                  <Textarea
                    value={formData.footerText}
                    onChange={(e) => handleInputChange('footerText', e.target.value)}
                    placeholder="Enter footer text"
                    rows={2}
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="customFields" 
                  checked={formData.customFields}
                  onCheckedChange={(checked) => handleInputChange('customFields', checked)}
                />
                <Label htmlFor="customFields">Custom Fields</Label>
              </div>
              {formData.customFields && (
                <div className="ml-6 space-y-2">
                  <Input
                    value={formData.customFieldsText}
                    onChange={(e) => handleInputChange('customFieldsText', e.target.value)}
                    placeholder="Enter custom field value"
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="taxId" 
                  checked={formData.taxId}
                  onCheckedChange={(checked) => handleInputChange('taxId', checked)}
                />
                <Label htmlFor="taxId">Tax ID</Label>
              </div>
              {formData.taxId && (
                <div className="ml-6 space-y-2">
                  <Input
                    value={formData.taxIdText}
                    onChange={(e) => handleInputChange('taxIdText', e.target.value)}
                    placeholder="Enter tax ID"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Branding</h3>
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Select value={formData.branding} onValueChange={(value) => handleInputChange('branding', value)}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Search or create new brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Logo & color customization</p>
            </div>
          </div>
        </div>

        {/* Fixed Buttons */}
        <div className="flex gap-2 p-4 border-t border-border">
          <Button
            variant="secondary"
            onClick={handlePreview}
            className="flex-1 rounded-full gap-2"
          >
            <Eye className="h-4 w-4" />
            Show Preview
          </Button>
          <Button
            onClick={handleCreateInvoice}
            className="flex-1 gap-2"
          >
            <Send className="h-4 w-4" />
            Send Invoice
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
