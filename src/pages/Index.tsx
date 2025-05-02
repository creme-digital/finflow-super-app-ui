
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { TransactionsList } from '@/components/dashboard/TransactionsList';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { SpendingSummary } from '@/components/dashboard/SpendingSummary';
import { AccountsOverview } from '@/components/dashboard/AccountsOverview';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's an overview of your finances.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BalanceCard 
            title="Total Balance" 
            balance="$104,400.00" 
            change="5.2% from last month" 
            positive={true} 
          />
          <BalanceCard 
            title="Monthly Income" 
            balance="$32,400.00" 
            change="2.3% from last month" 
            positive={true} 
          />
          <BalanceCard 
            title="Monthly Expenses" 
            balance="$12,800.00" 
            change="4.1% from last month" 
            positive={false} 
          />
          <BalanceCard 
            title="Cash Flow" 
            balance="$19,600.00" 
            change="1.7% from last month" 
            positive={true} 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SpendingSummary />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AccountsOverview />
          </div>
          <div className="lg:col-span-2">
            <TransactionsList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
