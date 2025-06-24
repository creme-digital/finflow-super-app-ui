
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Plus, Trash2, Send, Eye, Save } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

console.log('InvoiceCreate component is loading...');

// Form validation schema
const invoiceItemSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  rate: z.number().min(0, 'Rate must be positive'),
});

const invoiceSchema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  customerEmail: z.string().email('Valid email is required'),
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  issueDate: z.string().min(1, 'Issue date is required'),
  dueDate: z.string().min(1, 'Due date is required'),
  items: z.array(invoiceItemSchema).min(1, 'At least one item is required'),
  notes: z.string().optional(),
  terms: z.string().optional(),
});

type InvoiceFormData = z.infer<typeof invoiceSchema>;

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

const InvoiceCreate = () => {
  console.log('InvoiceCreate component is rendering...');
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: '', quantity: 1, rate: 0 }
  ]);

  const form = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      customerName: '',
      customerEmail: '',
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      issueDate: new Date().toISOString().split('T')[0],
      dueDate: '',
      items: [{ description: '', quantity: 1, rate: 0 }],
      notes: '',
      terms: '',
    },
  });

  console.log('Form initialized with default values');

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof Omit<InvoiceItem, 'id'>, value: string | number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, [field]: value }
        : item
    ));
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  const calculateTax = (subtotal: number) => {
    return subtotal * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    return subtotal + tax;
  };

  const onSubmit = (data: InvoiceFormData) => {
    console.log('Invoice data:', { ...data, items });
    toast({
      title: "Invoice Created",
      description: "Your invoice has been created successfully.",
    });
    navigate('/accounting');
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your invoice draft has been saved.",
    });
  };

  const handlePreview = () => {
    toast({
      title: "Preview",
      description: "Invoice preview functionality would open here.",
    });
  };

  console.log('About to render Layout component...');

  const mainContent = (
    <div className="space-y-6">
      <div style={{ backgroundColor: 'red', padding: '10px', color: 'white' }}>
        DEBUG: If you can see this red box, the InvoiceCreate component is rendering!
      </div>
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate('/accounting')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-semibold">Create Invoice</h1>
            <p className="text-muted-foreground">Create and send professional invoices</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Invoice Form */}
        <div className="space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter customer name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Customer Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="customer@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Invoice Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Invoice Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="invoiceNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Invoice Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="issueDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issue Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dueDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Due Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Invoice Items */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Invoice Items</CardTitle>
                  <Button type="button" variant="outline" size="sm" onClick={addItem}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id} className="grid grid-cols-12 gap-3 items-end">
                        <div className="col-span-5">
                          <Label className="text-sm">Description</Label>
                          <Input
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                            placeholder="Item description"
                          />
                        </div>
                        <div className="col-span-2">
                          <Label className="text-sm">Qty</Label>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                          />
                        </div>
                        <div className="col-span-3">
                          <Label className="text-sm">Rate ($)</Label>
                          <Input
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.rate}
                            onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                          />
                        </div>
                        <div className="col-span-2 flex items-center justify-between">
                          <span className="text-sm font-medium">
                            ${(item.quantity * item.rate).toFixed(2)}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            disabled={items.length === 1}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add any notes or instructions..."
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Terms & Conditions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Payment terms and conditions..."
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Create & Send Invoice
              </Button>
            </form>
          </Form>
        </div>

        {/* Right Side - Invoice Preview */}
        <div className="lg:sticky lg:top-6">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Invoice Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white border rounded-lg p-8 min-h-[700px] space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">INVOICE</h2>
                    <p className="text-gray-600 mt-1">#{form.watch('invoiceNumber')}</p>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-900 text-lg">Your Company</h3>
                    <p className="text-gray-600">123 Business St</p>
                    <p className="text-gray-600">City, State 12345</p>
                    <p className="text-gray-600">contact@yourcompany.com</p>
                  </div>
                </div>

                <Separator />

                {/* Customer & Invoice Info */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bill To:</h4>
                    <p className="text-gray-800 font-medium">
                      {form.watch('customerName') || 'Customer Name'}
                    </p>
                    <p className="text-gray-600">
                      {form.watch('customerEmail') || 'customer@email.com'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Issue Date:</span> {form.watch('issueDate')}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Due Date:</span> {form.watch('dueDate') || 'Not set'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 text-gray-900 font-semibold">Description</th>
                        <th className="text-right py-3 text-gray-900 font-semibold">Qty</th>
                        <th className="text-right py-3 text-gray-900 font-semibold">Rate</th>
                        <th className="text-right py-3 text-gray-900 font-semibold">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="py-3 text-gray-700">
                            {item.description || 'Item description'}
                          </td>
                          <td className="py-3 text-right text-gray-700">{item.quantity}</td>
                          <td className="py-3 text-right text-gray-700">
                            ${item.rate.toFixed(2)}
                          </td>
                          <td className="py-3 text-right text-gray-700">
                            ${(item.quantity * item.rate).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-gray-900">${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-600">Tax (10%):</span>
                      <span className="text-gray-900">${calculateTax(calculateSubtotal()).toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between py-2">
                      <span className="font-semibold text-gray-900 text-lg">Total:</span>
                      <span className="font-bold text-gray-900 text-lg">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Notes & Terms */}
                {form.watch('notes') && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Notes:</h4>
                    <p className="text-gray-700 text-sm">{form.watch('notes')}</p>
                  </div>
                )}

                {form.watch('terms') && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Terms & Conditions:</h4>
                    <p className="text-gray-700 text-sm">{form.watch('terms')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <Layout 
      title="Create Invoice"
      mainContent={mainContent}
    />
  );
};

export default InvoiceCreate;
