
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { ChevronDown, FileText, Plus, Search, Send } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

// Sample invoice data
const invoices = [
  { 
    id: 'INV-001', 
    client: 'ABC Corporation', 
    date: new Date('2023-05-01'), 
    amount: 1500.00, 
    status: 'Paid' 
  },
  { 
    id: 'INV-002', 
    client: 'XYZ Limited', 
    date: new Date('2023-05-15'), 
    amount: 2750.00, 
    status: 'Pending' 
  },
  { 
    id: 'INV-003', 
    client: '123 Industries', 
    date: new Date('2023-05-22'), 
    amount: 950.00, 
    status: 'Overdue' 
  }
];

export function InvoicingTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  
  const statuses = ['All', 'Paid', 'Pending', 'Overdue', 'Draft'];
  
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || invoice.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search invoices..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-between">
                <span>Status: {selectedStatus}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {statuses.map(status => (
                <DropdownMenuItem 
                  key={status} 
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Client</label>
                    <Input placeholder="Select or add client" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Invoice Number</label>
                    <Input defaultValue="INV-004" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Issue Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Due Date</label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Line Items</label>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Input placeholder="Item description" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" defaultValue="1" className="w-20" />
                        </TableCell>
                        <TableCell>
                          <Input type="number" placeholder="0.00" />
                        </TableCell>
                        <TableCell className="text-right">$0.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button variant="outline" className="mt-2" size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Add Item
                  </Button>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <label className="block text-sm font-medium mb-1">Notes</label>
                    <textarea 
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm" 
                      placeholder="Payment terms, notes to client, etc."
                    />
                  </div>
                  <div className="text-right space-y-2">
                    <div>
                      <span className="inline-block w-24">Subtotal:</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div>
                      <span className="inline-block w-24">Tax (0%):</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="text-lg font-bold">
                      <span className="inline-block w-24">Total:</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Create Invoice</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No invoices found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>{invoice.date.toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                        invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(invoice.amount)}</TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
