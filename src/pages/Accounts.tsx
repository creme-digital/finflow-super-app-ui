
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { AccountCard } from '@/components/accounts/AccountCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for accounts
const personalAccounts = [
  {
    id: 'pa-1',
    name: 'Main Checking',
    type: 'Checking',
    balance: '$24,500.75',
    accountNumber: '****3456',
    routingNumber: '071000013',
    recentActivity: [
      { id: 'tx-1', date: '2025-05-01', description: 'Paycheck Deposit', amount: '+$3,200.00' },
      { id: 'tx-2', date: '2025-04-30', description: 'Grocery Store', amount: '-$125.30' },
      { id: 'tx-3', date: '2025-04-29', description: 'Electric Bill', amount: '-$87.45' },
    ],
  },
  {
    id: 'pa-2',
    name: 'Savings Account',
    type: 'Savings',
    balance: '$74,200.50',
    accountNumber: '****7890',
    routingNumber: '071000013',
    recentActivity: [
      { id: 'tx-4', date: '2025-04-25', description: 'Transfer from Checking', amount: '+$1,000.00' },
      { id: 'tx-5', date: '2025-03-25', description: 'Interest Payment', amount: '+$34.25' },
      { id: 'tx-6', date: '2025-02-25', description: 'Transfer from Checking', amount: '+$1,000.00' },
    ],
  },
];

const businessAccounts = [
  {
    id: 'ba-1',
    name: 'Business Checking',
    type: 'Business',
    balance: '$57,384.29',
    accountNumber: '****4321',
    routingNumber: '071000013',
    recentActivity: [
      { id: 'tx-7', date: '2025-05-01', description: 'Client Payment', amount: '+$12,500.00' },
      { id: 'tx-8', date: '2025-04-30', description: 'Office Supplies', amount: '-$349.99' },
      { id: 'tx-9', date: '2025-04-28', description: 'Software Subscription', amount: '-$99.00' },
    ],
  },
  {
    id: 'ba-2',
    name: 'Business Savings',
    type: 'Business',
    balance: '$124,732.18',
    accountNumber: '****6543',
    routingNumber: '071000013',
    recentActivity: [
      { id: 'tx-10', date: '2025-04-15', description: 'Transfer from Business Checking', amount: '+$5,000.00' },
      { id: 'tx-11', date: '2025-04-01', description: 'Quarterly Interest', amount: '+$248.65' },
      { id: 'tx-12', date: '2025-03-15', description: 'Transfer from Business Checking', amount: '+$5,000.00' },
    ],
  },
];

const AccountsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Accounts</h1>
          <p className="text-muted-foreground mt-1">Manage your personal and business accounts.</p>
        </div>
        
        <div className="w-full">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Accounts</TabsTrigger>
              <TabsTrigger value="business">Business Accounts</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              {personalAccounts.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
              <Button variant="outline" className="mt-4">
                + Add New Personal Account
              </Button>
            </TabsContent>
            <TabsContent value="business" className="space-y-4">
              {businessAccounts.map((account) => (
                <AccountCard key={account.id} account={account} />
              ))}
              <Button variant="outline" className="mt-4">
                + Add New Business Account
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AccountsPage;
