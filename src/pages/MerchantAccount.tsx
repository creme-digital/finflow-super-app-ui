
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, Download, ArrowRight, MoreHorizontal } from 'lucide-react';

const MerchantAccountMainContent = () => {
  const [activeTab, setActiveTab] = useState('payment-history');

  // Mock account data
  const accounts = [
    {
      name: 'Tech Gadget',
      type: 'Account',
      balance: '$96,223.92',
      accountNumber: '******2137',
      routingNumber: '01938128',
      icon: '🛍️'
    },
    {
      name: 'CosMake',
      type: 'Account',
      balance: '$62,223.92',
      accountNumber: '******2137',
      routingNumber: '01938128',
      icon: '💄'
    },
    {
      name: 'CosMake',
      type: 'Account',
      balance: '$62,223.92',
      accountNumber: '******2137',
      routingNumber: '01938128',
      icon: '💄'
    }
  ];

  // Mock payment history data
  const paymentHistory = [
    {
      date: 'May 2, 2025 9:25 am',
      account: 'CosMake',
      productName: 'Gadget',
      amount: '$8,657.41',
      status: 'Received'
    },
    {
      date: 'May 5, 2025 2:22 pm',
      account: 'Tech gadget',
      productName: 'Gadget',
      amount: '$342.07',
      status: 'Received'
    },
    {
      date: 'May 5, 2025 7:00 am',
      account: 'CosMake',
      productName: 'Gadget',
      amount: '$1,486.52',
      status: 'Received'
    },
    {
      date: 'May 17, 2025 8:13 am',
      account: 'CosMake',
      productName: 'Gadget',
      amount: '$5,653.56',
      status: 'Received'
    },
    {
      date: 'May 18, 2025 4:23 am',
      account: 'Tech gadget',
      productName: 'Gadget',
      amount: '$1,595.71',
      status: 'Received'
    },
    {
      date: 'May 15, 2025 11:42 am',
      account: 'Tech gadget',
      productName: 'Gadget',
      amount: '$7,738.89',
      status: 'Received'
    },
    {
      date: 'May 14, 2025 12:40 pm',
      account: 'CosMake',
      productName: 'Gadget',
      amount: '$8,650.33',
      status: 'Received'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Tab and Action Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setActiveTab('payment-history')}
            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'payment-history' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-muted-foreground border-transparent hover:text-foreground'
            }`}
          >
            Payment History
          </button>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          Create Merchant Account
        </Button>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <Card key={index} className="p-6">
            <CardContent className="p-0">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-2xl">
                  {account.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{account.name}</h3>
                  <p className="text-muted-foreground text-sm">{account.type}</p>
                  <p className="text-3xl font-bold mt-2">{account.balance}</p>
                  <p className="text-muted-foreground text-sm">Current Balance</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-3">Account Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Account Number</span>
                      <span className="font-medium">{account.accountNumber}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Routing Number</span>
                      <span className="font-medium">{account.routingNumber}</span>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between p-0 h-auto text-left">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Export */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export All
        </Button>
      </div>

      {/* Payment History Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b">
                <TableHead className="text-left font-medium">Date</TableHead>
                <TableHead className="text-left font-medium">Account</TableHead>
                <TableHead className="text-left font-medium">Product Name</TableHead>
                <TableHead className="text-left font-medium">Amount</TableHead>
                <TableHead className="text-left font-medium">Status</TableHead>
                <TableHead className="text-left font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((item, index) => (
                <TableRow key={index} className="border-b last:border-b-0">
                  <TableCell className="font-medium">{item.date}</TableCell>
                  <TableCell>{item.account}</TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell className="font-medium">{item.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const MerchantAccount = () => {
  return (
    <Layout
      title="Merchant Account"
      showRightSidebar={false}
      mainContent={<MerchantAccountMainContent />}
    />
  );
};

export default MerchantAccount;
