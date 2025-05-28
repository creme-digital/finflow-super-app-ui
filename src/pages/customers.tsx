import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, User } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const customers = [
  {
    id: 1,
    logo: 'https://ui-avatars.com/api/?name=Acme+Corp',
    name: 'Acme Corp',
    created: '2023-01-15',
    totalBilled: 12000,
  },
  {
    id: 2,
    logo: 'https://ui-avatars.com/api/?name=Globex+Inc',
    name: 'Globex Inc',
    created: '2023-03-22',
    totalBilled: 8500,
  },
  {
    id: 3,
    logo: 'https://ui-avatars.com/api/?name=Soylent+LLC',
    name: 'Soylent LLC',
    created: '2023-07-10',
    totalBilled: 4300,
  },
  {
    id: 4,
    logo: 'https://ui-avatars.com/api/?name=Initech',
    name: 'Initech',
    created: '2024-01-05',
    totalBilled: 2100,
  },
];

const totalBilled = customers.reduce((sum, c) => sum + c.totalBilled, 0);

export default function Customers() {
  const [isNewCustomerOpen, setIsNewCustomerOpen] = useState(false);

  return (
    <Layout>
      <PageHeader
        title="Customers"
        subtitle="Manage your company's customers, view billing history, and add new clients."
        className="mb-6"
      >
        <Button variant="default" size="sm" className="gap-2" onClick={() => setIsNewCustomerOpen(true)}>
          <Plus className="w-4 h-4" />
          New Customer
        </Button>
      </PageHeader>
      <Card className="mb-8">
        <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
          <div className="flex-1 flex flex-col items-start md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Number of Customers</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{customers.length}</div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Billed</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>${totalBilled.toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
            <span style={{
              color: '#6D6D74',
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: '-0.02em'
            }}>
              Customers
            </span>
          </div>
          <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
            <Table className="min-w-full text-sm">
              <TableHeader>
                <TableRow style={{ background: '#F8F8FA' }}>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Customer Name</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Creation Date</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Total Billed</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium flex flex-row items-center gap-2"> <img src={customer.logo} alt={customer.name} className="w-8 h-8 rounded-full object-cover bg-[#F8F8FA] border border-[#E3E3EA]" /> {customer.name}</TableCell>
                    <TableCell>{customer.created}</TableCell>
                    <TableCell className="font-mono">${customer.totalBilled.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <User className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Dialog open={isNewCustomerOpen} onOpenChange={setIsNewCustomerOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader className="pb-0">
            <DialogTitle>Create New Customer</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <Input id="logo" type="file" accept="image/*" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter company name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter address" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input id="contactPerson" placeholder="Enter contact person" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="UK">United Kingdom</SelectItem>
                    <SelectItem value="DE">Germany</SelectItem>
                    <SelectItem value="FR">France</SelectItem>
                    <SelectItem value="IT">Italy</SelectItem>
                    <SelectItem value="ES">Spain</SelectItem>
                    <SelectItem value="NL">Netherlands</SelectItem>
                    <SelectItem value="BE">Belgium</SelectItem>
                    <SelectItem value="SE">Sweden</SelectItem>
                    <SelectItem value="NO">Norway</SelectItem>
                    <SelectItem value="DK">Denmark</SelectItem>
                    <SelectItem value="FI">Finland</SelectItem>
                    <SelectItem value="PL">Poland</SelectItem>
                    <SelectItem value="CZ">Czech Republic</SelectItem>
                    <SelectItem value="AT">Austria</SelectItem>
                    <SelectItem value="CH">Switzerland</SelectItem>
                    <SelectItem value="IE">Ireland</SelectItem>
                    <SelectItem value="PT">Portugal</SelectItem>
                    <SelectItem value="GR">Greece</SelectItem>
                    <SelectItem value="HU">Hungary</SelectItem>
                    <SelectItem value="RO">Romania</SelectItem>
                    <SelectItem value="BG">Bulgaria</SelectItem>
                    <SelectItem value="HR">Croatia</SelectItem>
                    <SelectItem value="SK">Slovakia</SelectItem>
                    <SelectItem value="SI">Slovenia</SelectItem>
                    <SelectItem value="EE">Estonia</SelectItem>
                    <SelectItem value="LV">Latvia</SelectItem>
                    <SelectItem value="LT">Lithuania</SelectItem>
                    <SelectItem value="CY">Cyprus</SelectItem>
                    <SelectItem value="MT">Malta</SelectItem>
                    <SelectItem value="LU">Luxembourg</SelectItem>
                    <SelectItem value="IS">Iceland</SelectItem>
                    <SelectItem value="LI">Liechtenstein</SelectItem>
                    <SelectItem value="MC">Monaco</SelectItem>
                    <SelectItem value="SM">San Marino</SelectItem>
                    <SelectItem value="VA">Vatican City</SelectItem>
                    <SelectItem value="AD">Andorra</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vatNumber">VAT Number (if Europe)</Label>
                <Input id="vatNumber" placeholder="Enter VAT number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orgNumber">Organization Number</Label>
                <Input id="orgNumber" placeholder="Enter organization number" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Input id="paymentTerms" placeholder="e.g. 30 days" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lateFee">Late Fee</Label>
                <Input id="lateFee" placeholder="e.g. 2%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryTerm">Delivery Term</Label>
                <Input id="deliveryTerm" placeholder="e.g. FOB" />
              </div>
            </div>
          </form>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsNewCustomerOpen(false)}>Cancel</Button>
            <Button variant="default">Create Customer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
} 