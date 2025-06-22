import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpDown, Plus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

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
    },
    {
      symbol: 'GOOGL',
      company: 'Alphabet',
      price: '150.75',
      change: '+',
      isPositive: true,
      logo: '🔍',
      color: 'bg-green-500'
    },
    {
      symbol: 'MSFT',
      company: 'Microsoft',
      price: '415.32',
      change: '+',
      isPositive: true,
      logo: '💻',
      color: 'bg-purple-500'
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

  // Portfolio value data for the new chart
  const portfolioData = [
    { month: 'Jan', value: 85000 },
    { month: 'Feb', value: 92000 },
    { month: 'Mar', value: 88000 },
    { month: 'Apr', value: 95000 },
    { month: 'May', value: 102000 },
    { month: 'Jun', value: 98000 },
    { month: 'Jul', value: 112893 }
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
          {/* Horizontally Scrollable Stock Tickers */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {stockTickers.map((stock, index) => (
                <div
                  key={index}
                  className="overflow-hidden h-[120px] w-[280px] md:w-[300px] flex-shrink-0"
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
                      <div className={`w-6 h-6 ${stock.color} rounded flex items-center justify-center text-white text-xs font-bold`}>
                        {stock.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate">{stock.symbol}</div>
                        {stock.company && <div className="text-xs text-muted-foreground truncate">{stock.company}</div>}
                      </div>
                    </div>
                    <div className="w-full h-1 bg-blue-200 rounded mb-2">
                      <div className="h-full w-3/4 bg-blue-600 rounded"></div>
                    </div>
                    {stock.price && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">{stock.price}</span>
                        <span className={`text-xs ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change} 201.01
                        </span>
                        {stock.isPositive ? (
                          <TrendingUp className="w-3 h-3 text-green-600" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-600" />
                        )}
                      </div>
                    )}
                  </CardContent>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              {/* Portfolio Value Chart - Single Card */}
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
                      <CardTitle>Portfolio Value</CardTitle>
                      <div className="text-sm text-muted-foreground">Monthly performance</div>
                      <div className="text-lg font-bold mt-2">Current Balance</div>
                      <div className="text-2xl font-bold">$112,893.00</div>
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
                      <LineChart data={portfolioData}>
                        <defs>
                          <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{
                            fontSize: 12,
                            fill: '#64748b'
                          }} 
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{
                            fontSize: 12,
                            fill: '#64748b'
                          }}
                          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#3b82f6" 
                          strokeWidth={3} 
                          dot={{ 
                            fill: "#3b82f6", 
                            strokeWidth: 2, 
                            r: 4 
                          }} 
                          activeDot={{
                            r: 6,
                            fill: "#3b82f6",
                            stroke: '#fff',
                            strokeWidth: 2
                          }}
                          fill="url(#portfolioGradient)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
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
