
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpDown, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TradingMainContent = () => {
  // Mock data for stock tickers
  const stockTickers = [
    {
      symbol: 'ADB',
      company: 'Cordono',
      price: '201.01',
      change: '+',
      isPositive: true,
      logo: '🅰️',
      color: 'bg-red-500'
    },
    {
      symbol: 'AIR',
      company: 'Cordono',
      price: '201.01',
      change: '-',
      isPositive: false,
      logo: '🏠',
      color: 'bg-red-500'
    },
    {
      symbol: 'ANM',
      company: 'Cordono',
      price: '201.01',
      change: '-',
      isPositive: false,
      logo: '📊',
      color: 'bg-orange-500'
    },
    {
      symbol: 'ACT',
      company: '',
      price: '',
      change: '',
      isPositive: null,
      logo: '🅰️',
      color: 'bg-blue-500'
    }
  ];

  const tradesData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 40 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 50 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 40 }
  ];

  const tradesTableData = Array.from({ length: 20 }, (_, i) => ({
    price: '568,388.00',
    amount: '0.36985547',
    time: '0.6983641'
  }));

  const stockHoldings = [
    {
      symbol: 'Adobe',
      company: 'Adobe',
      price: '201.01',
      change: '- 201.01',
      isPositive: false,
      logo: '🅰️',
      color: 'bg-red-500'
    },
    {
      symbol: 'ATR',
      company: 'Adobe',
      price: '201.01',
      change: '- 201.01',
      isPositive: false,
      logo: '📊',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Cards page styling */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trading Dashboard</h1>
          <p className="text-muted-foreground">Track your trading performance and market activity</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            View Portfolio
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Trade
          </Button>
        </div>
      </div>

      {/* Tabs with Accounts page styling */}
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
          {/* Stock Tickers with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stockTickers.map((stock, index) => (
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
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 ${stock.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
                      {stock.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{stock.symbol}</div>
                      {stock.company && <div className="text-sm text-muted-foreground">{stock.company}</div>}
                    </div>
                  </div>
                  <div className="w-full h-1 bg-blue-200 rounded mb-2">
                    <div className="h-full w-3/4 bg-blue-600 rounded"></div>
                  </div>
                  {stock.price && (
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{stock.price}</span>
                      <span className={stock.isPositive ? 'text-green-600' : 'text-red-600'}>
                        {stock.change} 201.01
                      </span>
                      {stock.isPositive ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  )}
                </CardContent>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Info and Get Started Cards with Glass Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-1">Sell</div>
                    <div className="text-sm text-muted-foreground mb-4">Account Balance (CNY)</div>
                    <div className="text-3xl font-bold mb-6">112,893.00</div>
                    
                    <div className="mb-6">
                      <div className="text-sm font-medium mb-4">Stock</div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>Coin</span>
                        <span>$2.00</span>
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white mb-4">
                        🅰️
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>Coin</span>
                        <span>$2.00</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">No extra fees</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="bg-blue-600 hover:bg-blue-700">Deposit</Button>
                      <Button variant="outline" className="text-blue-600">Withdraw</Button>
                    </div>
                  </CardContent>
                </div>

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
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-1">Get Started</div>
                    <div className="text-sm mb-4">January 7, 2024</div>
                    <div className="text-6xl font-bold mb-4">$</div>
                  </CardContent>
                </div>
              </div>

              {/* Trades Overview Chart with Glass Effect */}
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
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Trades Overview</CardTitle>
                      <div className="text-sm text-muted-foreground">net profile per month</div>
                      <div className="text-lg font-bold mt-2">Account Balance (CNY)</div>
                      <div className="text-2xl font-bold">112,893.00</div>
                      
                      <div className="flex gap-4 mt-4">
                        <label className="flex items-center gap-2">
                          <input type="radio" name="period" defaultChecked className="text-blue-600" />
                          <span className="text-sm">This month</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="period" className="text-yellow-500" />
                          <span className="text-sm">Last month</span>
                        </label>
                      </div>
                    </div>
                    <Select defaultValue="thisyear">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thisyear">This Year</SelectItem>
                        <SelectItem value="lastmonth">Last Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={tradesData}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Bar dataKey="value" fill="#3b82f6" radius={4} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </div>

              {/* Stock Holdings with Glass Effect */}
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
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Trades Overview</CardTitle>
                    <Select defaultValue="thisyear">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thisyear">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-sm text-muted-foreground">net profile per month</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stockHoldings.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${stock.color} rounded flex items-center justify-center text-white`}>
                          {stock.logo}
                        </div>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.company}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$ {stock.price}</div>
                        <div className="text-sm text-red-600">{stock.change} ▼</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </div>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              {/* Earning Report with Glass Effect */}
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
                <CardHeader>
                  <CardTitle>Earning Report</CardTitle>
                  <Tabs defaultValue="week" className="w-fit">
                    <TabsList className="grid w-fit grid-cols-3">
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                      <TabsTrigger value="year">Year</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">Account Balance (CNY)</div>
                  <div className="text-3xl font-bold mb-4">112,893.00</div>
                  <div className="flex justify-between text-sm">
                    <span>1k+</span>
                    <span>$510</span>
                  </div>
                </CardContent>
              </div>

              {/* Trades Table with Glass Effect */}
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
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">Price</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">Amount</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">Time</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </div>
                    <Select defaultValue="alltime">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alltime">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[500px] overflow-y-auto">
                    <Table>
                      <TableBody>
                        {tradesTableData.map((trade, index) => (
                          <TableRow key={index} className="border-none">
                            <TableCell className="text-muted-foreground font-mono text-xs px-2 py-1">
                              {trade.price}
                            </TableCell>
                            <TableCell className="font-mono text-xs px-2 py-1">
                              {trade.amount}
                            </TableCell>
                            <TableCell className="text-red-600 font-mono text-xs px-2 py-1">
                              {trade.time}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </div>
            </div>
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
