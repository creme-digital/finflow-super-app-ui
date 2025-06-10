
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CurrencyBalanceCards } from '@/components/accounts/CurrencyBalanceCards';
import { AccountsTransactionTable } from '@/components/accounts/AccountsTransactionTable';

const AccountsPage = () => {
  return (
    <Layout
      title="Accounts" 
      showRightSidebar={false}
      mainContent={
        <div className="space-y-6">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="space-y-6">
              <CurrencyBalanceCards />
              <AccountsTransactionTable />
            </TabsContent>
            
            <TabsContent value="business" className="space-y-6">
              <CurrencyBalanceCards />
              <AccountsTransactionTable />
            </TabsContent>
          </Tabs>
        </div>
      }
    >
    </Layout>
  );
};

export default AccountsPage;
