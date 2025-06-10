
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

const TradingDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Trading Dashboard"
          subtitle="Monitor your trading portfolio and market performance."
        >
          <Button variant="default" size="sm">
            New Trade
          </Button>
        </PageHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+$1,234.56</div>
              <p className="text-xs text-muted-foreground">
                +2.8% today
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                18 profitable positions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.3%</div>
              <p className="text-xs text-muted-foreground">
                Last 30 trades
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">AAPL</p>
                    <p className="text-sm text-muted-foreground">Apple Inc.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$15,234.50</p>
                    <p className="text-sm text-green-600">+2.3%</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">TSLA</p>
                    <p className="text-sm text-muted-foreground">Tesla Inc.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$8,945.20</p>
                    <p className="text-sm text-red-600">-1.2%</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">MSFT</p>
                    <p className="text-sm text-muted-foreground">Microsoft Corp.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$12,567.80</p>
                    <p className="text-sm text-green-600">+0.8%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">BUY NVDA</p>
                    <p className="text-xs text-muted-foreground">100 shares @ $425.50</p>
                  </div>
                  <span className="text-green-600 font-medium">+$1,250.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">SELL AMZN</p>
                    <p className="text-xs text-muted-foreground">50 shares @ $145.20</p>
                  </div>
                  <span className="text-red-600 font-medium">-$320.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">BUY GOOGL</p>
                    <p className="text-xs text-muted-foreground">25 shares @ $142.80</p>
                  </div>
                  <span className="text-green-600 font-medium">+$890.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TradingDashboard;
