
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Plus, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export function InvoicingTab() {
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2025-001");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: "", quantity: 1, rate: 0, amount: 0 }
  ]);
  const [notes, setNotes] = useState("");

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { id: newId, description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Recalculate amount if quantity or rate changes
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        
        return updatedItem;
      }
      return item;
    }));
  };

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  const handleSendInvoice = () => {
    // Validation checks
    if (!clientName || !clientEmail || !dueDate) {
      toast({
        title: "Missing information",
        description: "Please fill in all required client details.",
        variant: "destructive"
      });
      return;
    }

    if (items.some(item => !item.description || item.amount === 0)) {
      toast({
        title: "Incomplete invoice items",
        description: "Please ensure all invoice items have descriptions and amounts.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Invoice sent",
      description: `Invoice ${invoiceNumber} has been sent to ${clientName}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">New Invoice</h3>
          <p className="text-sm text-muted-foreground">Create and send a new invoice to your clients</p>
        </div>
        <Badge variant="outline" className="text-xs">
          {invoiceNumber}
        </Badge>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
          <CardDescription>
            Enter the client details for this invoice
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input 
                id="clientName" 
                value={clientName} 
                onChange={(e) => setClientName(e.target.value)} 
                placeholder="Enter client name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input 
                id="clientEmail" 
                type="email" 
                value={clientEmail} 
                onChange={(e) => setClientEmail(e.target.value)} 
                placeholder="client@example.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoiceDate">Invoice Date</Label>
              <Input 
                id="invoiceDate" 
                type="date" 
                defaultValue={new Date().toISOString().split('T')[0]} 
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input 
                id="dueDate" 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Items</CardTitle>
          <CardDescription>
            Add items to your invoice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">Description</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Rate ($)</TableHead>
                <TableHead className="text-right">Amount ($)</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Input 
                      value={item.description} 
                      onChange={(e) => updateItem(item.id, 'description', e.target.value)} 
                      placeholder="Item description"
                    />
                  </TableCell>
                  <TableCell>
                    <Input 
                      type="number" 
                      min="1"
                      value={item.quantity} 
                      onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)} 
                    />
                  </TableCell>
                  <TableCell>
                    <Input 
                      type="number"
                      min="0"
                      step="0.01" 
                      value={item.rate} 
                      onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} 
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    {item.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeItem(item.id)}
                      disabled={items.length <= 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-4 flex justify-between items-center">
            <Button variant="outline" onClick={addItem}>
              <Plus className="mr-2 h-4 w-4" /> Add Item
            </Button>
            <div className="text-right font-medium">
              Total: ${totalAmount.toFixed(2)}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Notes</CardTitle>
          <CardDescription>
            Add payment terms or other notes to the invoice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Payment is due within 30 days. Please include the invoice number with your payment."
            className="min-h-[100px]"
          />
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline">Save as Draft</Button>
          <Button onClick={handleSendInvoice}>
            <Send className="mr-2 h-4 w-4" /> Send Invoice
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
