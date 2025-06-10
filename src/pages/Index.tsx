
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { TransactionsList } from '@/components/dashboard/TransactionsList';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { SpendingSummary } from '@/components/dashboard/SpendingSummary';
import { AccountsOverview } from '@/components/dashboard/AccountsOverview';
import { CardUsage } from '@/components/dashboard/CardUsage';
import { MoneyFlowChart } from '@/components/dashboard/MoneyFlowChart';
import { BalanceChart } from '@/components/dashboard/BalanceChart';
import { BusinessMetrics } from '@/components/dashboard/BusinessMetrics';
import { CardBalances } from '@/components/dashboard/CardBalances';
import { ChartColumnIncreasing, WalletCards, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft, Send, Download, Repeat, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back! Here's an overview of your finances."
        >
          <Button
            className="h-10 px-6 font-medium"
            style={{
              borderRadius: 8,
              background: '#6F45F1',
              boxShadow: '0px -4px 8px -4px rgba(0, 0, 0, 0.08) inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.04) inset, 0px 3px 4px -3px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(221, 221, 228, 0.25)'
            }}
            variant="default"
          >
            <span style={{ fontSize: 14, letterSpacing: '-0.02em' }}>New Account</span>
          </Button>
        </PageHeader>
        
        {/* Top summary card - Net Cash, Money In, Money Out */}
        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* Net Cash This Month */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <WalletCards className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Net Cash This Month</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$19,600.00</div>
                <div className="text-green-600 text-sm">+1.7%</div>
              </div>
            </div>
            {/* Money In */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDownLeft className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Money In</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$32,400.00</div>
                <div className="text-green-600 text-sm">+2.3%</div>
              </div>
            </div>
            {/* Money Out */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpRight className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Money Out</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$12,800.00</div>
                <div className="text-red-600 text-sm">+4.1%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Balance with Actions */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ChartColumnIncreasing className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Balance</span>
                </div>
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 48, fontWeight: 400, letterSpacing: '-0.96px' }}>$104,400.00</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Deposit
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowDownLeft className="w-4 h-4" />
                  Receive
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Repeat className="w-4 h-4" />
                  Transfer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MoneyFlowChart />
          <BalanceChart />
        </div>
        
        {/* Card Balances */}
        <CardBalances />

        {/* Business Metrics */}
        <BusinessMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SpendingSummary />
          </div>
          <div>
            <TransactionsList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
