
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, Download, ArrowRight, MoreHorizontal, Wallet } from 'lucide-react';

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-foreground">Merchant Account</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Merchant Account
        </Button>
      </div>

      {/* Tab Navigation with glass effect */}
      <div 
        className="inline-flex h-10 items-center justify-center rounded-full p-1"
        style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <button 
          onClick={() => setActiveTab('payment-history')}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all bg-white text-[#292EE9] shadow-sm"
        >
          Payment History
        </button>
      </div>

      {/* Account Cards with consistent glass styling matching /accounting */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <div
            key={index}
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <CardContent className="p-6">
              {/* Header section with icon and account info */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{account.name}</h3>
                    <p className="text-sm text-muted-foreground">{account.type}</p>
                  </div>
                </div>
              </div>

              {/* Balance section */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-foreground mb-1">{account.balance}</div>
                <div className="text-sm text-muted-foreground">Current Balance</div>
              </div>

              {/* Account Details section */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Account Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Account Number</span>
                    <span className="text-sm font-medium text-foreground">{account.accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Routing Number</span>
                    <span className="text-sm font-medium text-foreground">{account.routingNumber}</span>
                  </div>
                </div>
              </div>

              {/* View Details button */}
              <Button 
                variant="outline" 
                className="w-full justify-between text-sm font-medium"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </div>
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

      {/* Payment History Table with glass effect */}
      <div
        className="overflow-hidden"
        style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
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
      </div>
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
