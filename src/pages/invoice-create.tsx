import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, User, List, Percent, Calendar, CreditCard, Mail, Download, Eye, Check, Trash2 } from 'lucide-react';

interface InvoiceItem {
  id: number;
  title: string;
  quantity: number;
  amount: number;
}

const InvoiceCreate = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, title: '', quantity: 1, amount: 0 },
  ]);

  const handleItemChange = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: field === 'quantity' || field === 'amount' ? Number(value) : value } : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), title: '', quantity: 1, amount: 0 },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + (item.quantity * item.amount), 0);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8 space-y-6">
        {/* Back button and title */}
        <div className="flex items-center gap-3 mb-2">
          <Button variant="ghost" size="icon" onClick={() => navigate('/invoicing')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-semibold tracking-tight" style={{ fontSize: 24 }}>Create Invoice</h1>
        </div>
        {/* Company section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Company</span>
              <Button variant="secondary" size="sm" className="ml-auto">Edit</Button>
            </div>
            <div className="text-black font-mono">Meely AB<br />123 Main St, Stockholm</div>
          </CardContent>
        </Card>
        {/* Customer section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Customer</span>
              <Button variant="secondary" size="sm" className="ml-auto">New Customer</Button>
            </div>
            <select className="border rounded px-3 py-2 w-full">
              <option>Select customer...</option>
              <option>Acme Corp</option>
              <option>Globex Inc</option>
            </select>
          </CardContent>
        </Card>
        {/* Invoice Items section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <List className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Invoice Items</span>
              <Button variant="secondary" size="sm" className="ml-auto" onClick={addItem}>Add Item</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border rounded">
                <thead>
                  <tr className="text-[#6D6D74] text-xs font-medium uppercase">
                    <th className="py-2 px-3 text-left">Title</th>
                    <th className="py-2 px-3 text-left">Quantity</th>
                    <th className="py-2 px-3 text-left">Amount</th>
                    <th className="py-2 px-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          className="border rounded px-2 py-1 w-full"
                          placeholder="Item title"
                          value={item.title}
                          onChange={(e) => handleItemChange(item.id, 'title', e.target.value)}
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          min={1}
                          className="border rounded px-2 py-1 w-20"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          min={0}
                          step={0.01}
                          className="border rounded px-2 py-1 w-28"
                          value={item.amount}
                          onChange={(e) => handleItemChange(item.id, 'amount', e.target.value)}
                        />
                      </td>
                      <td className="py-2 px-3 text-right">
                        <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                          <Trash2 className="w-4 h-4 text-[#6D6D74]" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-4 text-base font-medium">
              Total: <span className="ml-2">${total.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </CardContent>
        </Card>
        {/* Tax Selector */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Tax</span>
              <Button variant="secondary" size="sm" className="ml-auto">Add Tax</Button>
            </div>
            <select className="border rounded px-3 py-2 w-full">
              <option>0% (No tax)</option>
              <option>6%</option>
              <option>12%</option>
              <option>25%</option>
            </select>
          </CardContent>
        </Card>
        {/* Terms section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Terms</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-muted-foreground mb-1">Send Date</label>
                <input type="date" className="border rounded px-3 py-2 w-full" />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-muted-foreground mb-1">Expiry Date</label>
                <input type="date" className="border rounded px-3 py-2 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Payment Methods section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Payment Methods</span>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6050EA]" /> Bank Transfer
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6050EA]" /> Card
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#6050EA]" /> Swish
              </label>
            </div>
          </CardContent>
        </Card>
        {/* Delivery Method section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-[#6D6D74]" />
              <span className="text-[#6D6D74] font-medium">Delivery Method</span>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" className="accent-[#6050EA]" /> Email
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" className="accent-[#6050EA]" /> Download
              </label>
            </div>
          </CardContent>
        </Card>
        {/* Preview/Create buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="secondary" className="gap-2"><Eye className="w-4 h-4" /> Preview</Button>
          <Button variant="default" className="gap-2"><Check className="w-4 h-4" /> Create Invoice</Button>
        </div>
      </div>
    </Layout>
  );
};

export default InvoiceCreate; 