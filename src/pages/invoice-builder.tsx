
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Plus, Trash2, Send, Eye } from 'lucide-react';

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  rate: number;
}

interface InvoiceData {
  customer: string;
  currency: string;
  items: InvoiceItem[];
  paymentCollection: 'request' | 'autocharge';
  memo: boolean;
  memoText: string;
  footer: boolean;
  footerText: string;
  customFields: boolean;
  customFieldsText: string;
  taxId: boolean;
  taxIdText: string;
  branding: string;
}

const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
const customers = ['James Hall', 'Rhonda Rhodes', 'Kathy Pacheco', 'Kimberly Mastrangelo', 'Corina McCoy'];
const brands = ['Default Brand', 'Company Logo Blue', 'Minimal Theme'];

const InvoiceBuilder = () => {
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    customer: '',
    currency: 'USD',
    items: [{ id: 1, description: '', quantity: 1, rate: 0 }],
    paymentCollection: 'request',
    memo: false,
    memoText: '',
    footer: false,
    footerText: '',
    customFields: false,
    customFieldsText: '',
    taxId: false,
    taxIdText: '',
    branding: ''
  });

  const handleInputChange = (field: keyof InvoiceData, value: any) => {
    setInvoiceData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id 
          ? { ...item, [field]: field === 'quantity' || field === 'rate' ? Number(value) : value }
          : item
      )
    }));
  };

  const addItem = () => {
    setInvoiceData(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now(), description: '', quantity: 1, rate: 0 }]
    }));
  };

  const removeItem = (id: number) => {
    setInvoiceData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  const handleSendInvoice = () => {
    console.log('Sending invoice:', invoiceData);
    // Handle invoice sending logic
    navigate('/accounting');
  };

  const handlePreview = () => {
    console.log('Preview invoice:', invoiceData);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/accounting')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-semibold">Create Invoice</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Invoice Builder */}
          <div className="space-y-6">
            {/* Customer Info */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Customer</Label>
                  <Select value={invoiceData.customer} onValueChange={(value) => handleInputChange('customer', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer} value={customer}>{customer}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Select value={invoiceData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Items */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Invoice Items</CardTitle>
                <Button variant="outline" size="sm" onClick={addItem}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoiceData.items.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-3 items-end">
                      <div className="col-span-5">
                        <Label className="text-sm">Description</Label>
                        <Input
                          value={item.description}
                          onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                          placeholder="Item description"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-sm">Qty</Label>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                        />
                      </div>
                      <div className="col-span-3">
                        <Label className="text-sm">Rate</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.rate}
                          onChange={(e) => handleItemChange(item.id, 'rate', e.target.value)}
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          disabled={invoiceData.items.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Collection */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={invoiceData.paymentCollection} 
                  onValueChange={(value: 'request' | 'autocharge') => handleInputChange('paymentCollection', value)}
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
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Memo */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="memo" 
                      checked={invoiceData.memo}
                      onCheckedChange={(checked) => handleInputChange('memo', checked)}
                    />
                    <Label htmlFor="memo">Memo</Label>
                  </div>
                  {invoiceData.memo && (
                    <Textarea
                      value={invoiceData.memoText}
                      onChange={(e) => handleInputChange('memoText', e.target.value)}
                      placeholder="Enter memo text"
                      rows={2}
                    />
                  )}
                </div>

                {/* Footer */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="footer" 
                      checked={invoiceData.footer}
                      onCheckedChange={(checked) => handleInputChange('footer', checked)}
                    />
                    <Label htmlFor="footer">Footer</Label>
                  </div>
                  {invoiceData.footer && (
                    <Textarea
                      value={invoiceData.footerText}
                      onChange={(e) => handleInputChange('footerText', e.target.value)}
                      placeholder="Enter footer text"
                      rows={2}
                    />
                  )}
                </div>

                {/* Custom Fields */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="customFields" 
                      checked={invoiceData.customFields}
                      onCheckedChange={(checked) => handleInputChange('customFields', checked)}
                    />
                    <Label htmlFor="customFields">Custom Fields</Label>
                  </div>
                  {invoiceData.customFields && (
                    <Input
                      value={invoiceData.customFieldsText}
                      onChange={(e) => handleInputChange('customFieldsText', e.target.value)}
                      placeholder="Enter custom field value"
                    />
                  )}
                </div>

                {/* Tax ID */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="taxId" 
                      checked={invoiceData.taxId}
                      onCheckedChange={(checked) => handleInputChange('taxId', checked)}
                    />
                    <Label htmlFor="taxId">Tax ID</Label>
                  </div>
                  {invoiceData.taxId && (
                    <Input
                      value={invoiceData.taxIdText}
                      onChange={(e) => handleInputChange('taxIdText', e.target.value)}
                      placeholder="Enter tax ID"
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Branding */}
            <Card>
              <CardHeader>
                <CardTitle>Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Brand</Label>
                  <Select value={invoiceData.branding} onValueChange={(value) => handleInputChange('branding', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">Logo & color customization</p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePreview} className="flex-1">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSendInvoice} className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Send Invoice
              </Button>
            </div>
          </div>

          {/* Right Side - Invoice Preview */}
          <div className="lg:sticky lg:top-6">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Invoice Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 min-h-[600px]">
                  {/* Invoice Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">INVOICE</h2>
                      <p className="text-gray-600">Invoice #INV-{Date.now().toString().slice(-4)}</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-semibold text-gray-900">Meely AB</h3>
                      <p className="text-gray-600">123 Main St, Stockholm</p>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Bill To:</h4>
                    <p className="text-gray-700">{invoiceData.customer || 'Select a customer'}</p>
                  </div>

                  {/* Items Table */}
                  <div className="mb-6">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 text-gray-900">Description</th>
                          <th className="text-right py-2 text-gray-900">Qty</th>
                          <th className="text-right py-2 text-gray-900">Rate</th>
                          <th className="text-right py-2 text-gray-900">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoiceData.items.map((item) => (
                          <tr key={item.id} className="border-b">
                            <td className="py-3 text-gray-700">{item.description || 'Item description'}</td>
                            <td className="py-3 text-right text-gray-700">{item.quantity}</td>
                            <td className="py-3 text-right text-gray-700">{invoiceData.currency} {item.rate.toFixed(2)}</td>
                            <td className="py-3 text-right text-gray-700">{invoiceData.currency} {(item.quantity * item.rate).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Total */}
                  <div className="flex justify-end mb-6">
                    <div className="w-64">
                      <div className="flex justify-between py-2 border-t border-gray-300">
                        <span className="font-semibold text-gray-900">Total:</span>
                        <span className="font-semibold text-gray-900">{invoiceData.currency} {calculateSubtotal().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Memo */}
                  {invoiceData.memo && invoiceData.memoText && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Memo:</h4>
                      <p className="text-gray-700">{invoiceData.memoText}</p>
                    </div>
                  )}

                  {/* Footer */}
                  {invoiceData.footer && invoiceData.footerText && (
                    <div className="mt-8 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">{invoiceData.footerText}</p>
                    </div>
                  )}

                  {/* Tax ID */}
                  {invoiceData.taxId && invoiceData.taxIdText && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">Tax ID: {invoiceData.taxIdText}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvoiceBuilder;
