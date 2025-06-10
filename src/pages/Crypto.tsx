
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, TrendingUp, TrendingDown, Settings, Save, Grid3x3, BarChart3, Eye } from 'lucide-react';
import { CandlestickChart } from '@/components/crypto/CandlestickChart';

const Crypto = () => {
  const [selectedAsset, setSelectedAsset] = useState('BTC');
  const [selectedMarket, setSelectedMarket] = useState('BTC');
  const [selectedTradingPair, setSelectedTradingPair] = useState('ETH/BTC');

  const accountBalance = 478419.95;
  const portfolioValue = 1.895;

  const marketStats = [
    { label: '24h Change', value: '12454.37', change: '0.89%', positive: true },
    { label: '24h High', value: '56,354.23', change: '1.58%', positive: true },
    { label: '24h Low', value: '36,899.36', change: '1.71%', positive: false },
    { label: 'BTC/USDT', value: '36,899.36', change: '1.71%', positive: false },
    { label: 'ETH/USDT', value: '3,252', change: '1.58%', positive: true },
  ];

  const tradeHistory = [
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
    { price: 64345.34, amount: 0.925602, time: '0.925602' },
  ];

  return (
    <Layout
      title="Crypto"
      mainContent={
        <div className="space-y-6">
          {/* Header with Tabs */}
          <div className="flex items-center justify-between mb-6">
            <Tabs defaultValue="trading" className="w-fit">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="trading" 
                  className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-4 py-2 text-base font-medium transition-theme"
                >
                  Crypto Trading
                </TabsTrigger>
                <TabsTrigger 
                  value="asset" 
                  className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-4 py-2 text-base font-medium text-secondary transition-theme"
                >
                  Asset
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" className="gap-2">
              <Eye className="w-4 h-4" />
              View Portfolio
            </Button>
          </div>

          {/* Account and Asset Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="fintech-card">
              <CardContent className="fintech-card-content">
                <div className="space-y-4">
                  <div>
                    <label className="fintech-body mb-2 block">Exchange</label>
                    <div className="fintech-body">0 BTC : 0.00 USD</div>
                  </div>
                  <div>
                    <label className="fintech-body mb-2 block">Account 1890980</label>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-info flex items-center justify-center">
                        <span className="text-info-foreground text-xs font-bold">$</span>
                      </div>
                      <span className="fintech-mono text-lg text-primary">${accountBalance.toLocaleString()}</span>
                      <ChevronDown className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="fintech-card">
              <CardContent className="fintech-card-content">
                <div className="space-y-4">
                  <div>
                    <label className="fintech-body mb-2 block">Market</label>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-warning flex items-center justify-center">
                        <span className="text-warning-foreground text-xs font-bold">₿</span>
                      </div>
                      <span className="font-medium text-primary">{selectedMarket}</span>
                      <div className="flex items-center gap-1">
                        <span className="fintech-mono text-primary">{portfolioValue} BTC</span>
                        <ChevronDown className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="fintech-card">
              <CardContent className="fintech-card-content">
                <div className="space-y-4">
                  <div>
                    <label className="fintech-body mb-2 block">Trading Pair</label>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                        <span className="text-background text-xs font-bold">◆</span>
                      </div>
                      <span className="font-medium text-primary">{selectedTradingPair}</span>
                      <div className="flex items-center gap-1">
                        <span className="fintech-mono text-primary">65 ETH</span>
                        <ChevronDown className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {marketStats.map((stat, index) => (
              <Card key={index} className="fintech-card">
                <CardContent className="fintech-card-content">
                  <div className="space-y-2">
                    <div className="fintech-body">{stat.label}</div>
                    <div className="fintech-mono text-lg font-medium text-primary">{stat.value}</div>
                    <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-success' : 'text-error'}`}>
                      {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {stat.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chart and Trading Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <Card className="lg:col-span-2 fintech-card">
              <CardHeader className="fintech-card-header pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center">
                        <Grid3x3 className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">Indicators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Save className="w-3 h-3" />
                      Save
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Grid3x3 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Save className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] p-4">
                  <CandlestickChart />
                </div>
              </CardContent>
            </Card>

            {/* Trading Panel */}
            <Card className="fintech-card">
              <CardHeader className="fintech-card-header pb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <CardTitle className="fintech-heading-3">Price (USDT)</CardTitle>
                  <CardTitle className="fintech-heading-3">Amount (BTC)</CardTitle>
                  <CardTitle className="fintech-heading-3">Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[400px] overflow-y-auto">
                  <Table className="fintech-table">
                    <TableBody>
                      {tradeHistory.map((trade, index) => (
                        <TableRow key={index} className="fintech-table-row border-none">
                          <TableCell className="text-success fintech-mono text-sm py-2">{trade.price.toFixed(2)}</TableCell>
                          <TableCell className="fintech-mono text-sm py-2 text-primary">{trade.amount}</TableCell>
                          <TableCell className="fintech-mono text-sm py-2 text-primary">{trade.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      }
    />
  );
};

export default Crypto;
