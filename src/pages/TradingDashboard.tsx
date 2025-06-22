import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';
import { BalanceGraphCard } from '@/components/dashboard/BalanceGraphCard';

const TradingMainContent = () => {
  const currentBalance = 89600; // Current account balance

  return (
    <div className="space-y-6">
      {/* Header with consistent styling */}
      <PageHeader 
        title="Trading Dashboard"
        children={
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              View Portfolio
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New Trade
            </Button>
          </div>
        }
      />

      {/* Tabs with simplified content */}
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
            <TabsTrigger value="stock">Stock</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Account Balance Display */}
          <div
            className="overflow-hidden p-6"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="text-center mb-4">
              <div className="text-sm text-muted-foreground mb-2">Account Balance</div>
              <div className="text-4xl font-bold" style={{ fontFamily: 'DM Mono, IBM Plex Mono, monospace' }}>
                ${currentBalance.toLocaleString()}
              </div>
            </div>
            
            <BalanceGraphCard />
          </div>
        </TabsContent>

        {/* Other tab contents */}
        <TabsContent value="portfolio">
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
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Portfolio view will be implemented here</p>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="stock">
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
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Stock view will be implemented here</p>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="watchlist">
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
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Watchlist view will be implemented here</p>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="wallet">
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
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Wallet view will be implemented here</p>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const TradingDashboard = () => {
  return (
    <Layout
      title="Trading Dashboard"
      showRightSidebar={false}
      mainContent={<TradingMainContent />}
    />
  );
};

export default TradingDashboard;
