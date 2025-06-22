import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpDown, Plus, DollarSign, Activity, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';

const TradingMainContent = () => {
  const { formatAmount } = useCurrency();

  // Mock data for stock tickers
  const stockTickers = [
    {
      symbol: 'ADB',
      company: 'Cordono',
      price: '201.01',
      change: '+2.45',
      isPositive: true,
      logo: '🅰️',
      color: 'bg-red-500'
    },
    {
      symbol: 'AIR',
      company: 'Cordono',
      price: '201.01',
      change: '-1.23',
      isPositive: false,
      logo: '🏠',
      color: 'bg-red-500'
    },
    {
      symbol: 'ANM',
      company: 'Cordono',
      price: '201.01',
      change: '-0.89',
      isPositive: false,
      logo: '📊',
      color: 'bg-orange-500'
    },
    {
      symbol: 'ACT',
      company: 'Adobe Inc.',
      price: '432.18',
      change: '+5.67',
      isPositive: true,
      logo: '🅰️',
      color: 'bg-blue-500'
    }
  ];

  const portfolioData = [
    { date: 'Jan', value: 115000, trades: 12 },
    { date: 'Feb', value: 118000, trades: 18 },
    { date: 'Mar', value: 122000, trades: 25 },
    { date: 'Apr', value: 119000, trades: 20 },
    { date: 'May', value: 123000, trades: 28 },
    { date: 'Jun', value: 125000, trades: 35 },
    { date: 'Jul', value: 128000, trades: 40 }
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

  const tradesTableData = Array.from({ length: 10 }, (_, i) => ({
    symbol: ['AAPL', 'TSLA', 'MSFT', 'GOOGL', 'AMZN'][i % 5],
    price: (Math.random() * 1000 + 100).toFixed(2),
    amount: (Math.random() * 10).toFixed(8),
    time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    type: Math.random() > 0.5 ? 'buy' : 'sell'
  }));

  const stockHoldings = [
    {
      symbol: 'AAPL',
      company: 'Apple Inc.',
      price: '175.50',
      change: '- 2.45',
      changePercent: '-1.38%',
      isPositive: false,
      logo: '🍎',
      color: 'bg-gray-900'
    },
    {
      symbol: 'TSLA',
      company: 'Tesla Inc.',
      price: '245.75',
      change: '+ 12.30',
      changePercent: '+5.27%',
      isPositive: true,
      logo: '⚡',
      color: 'bg-red-600'
    }
  ];

  // Custom tooltip for the area chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-[#EDEDF1]">
          <p className="text-sm font-medium mb-1" style={{ color: '#6D6D74' }}>{label}</p>
          <p style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 14, fontWeight: 400, letterSpacing: '-0.28px' }}>
            {formatAmount(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <PageHeader 
        title="Trading Dashboard"
        children={
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm">
              View Portfolio
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New Trade
            </Button>
          </div>
        }
      />

      {/* Overview Stats Cards */}
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
          {/* Portfolio Value */}
          <div className="flex-1 flex flex-col items-start md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Value</span>
            </div>
            <div className="flex flex-col gap-1">
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(125000)}</div>
              <div className="text-sm text-green-600">
                +{formatAmount(2500)} (+2.04%)
              </div>
            </div>
          </div>

          {/* Total Trades */}
          <div className="flex-1 flex flex-col items-start md:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Trades</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>156</div>
            <div className="text-sm text-[#6D6D74]">This month</div>
          </div>

          {/* Active Positions */}
          <div className="flex-1 flex flex-col items-start md:px-6">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Active Positions</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>12</div>
            <div className="text-sm text-[#6D6D74]">Open trades</div>
          </div>

          {/* Daily P&L */}
          <div className="flex-1 flex flex-col items-start md:pl-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Daily P&L</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>+{formatAmount(1250)}</div>
            <div className="text-sm text-green-600">+1.58% today</div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
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
          {/* Stock Tickers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stockTickers.map((stock, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 ${stock.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
                      {stock.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{stock.symbol}</div>
                      <div className="text-sm text-muted-foreground">{stock.company}</div>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-blue-200 rounded mb-2">
                    <div className="h-full w-3/4 bg-blue-600 rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-mono font-medium">${stock.price}</span>
                    <span className={stock.isPositive ? 'text-green-600' : 'text-red-600'}>
                      {stock.change}
                    </span>
                    {stock.isPositive ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Portfolio Performance Chart */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                      <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Performance</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium" style={{ color: '#6D6D74' }}>
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-3 h-3 rounded bg-[#292EE9]"></span>
                        Portfolio Value
                      </span>
                    </div>
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={portfolioData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#292EE9" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#292EE9" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="date" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 13, fill: '#64748b' }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                          tick={{ fontSize: 13, fill: '#64748b' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                        <Area
                          type="monotone"
                          dataKey="value"
                          name="Portfolio Value"
                          stroke="#292EE9"
                          strokeWidth={3}
                          fill="url(#colorPortfolio)"
                          dot={{ r: 0, fill: '#292EE9' }}
                          activeDot={{ r: 7, fill: '#292EE9' }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Stock Holdings */}
              <Card className="mt-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Stock Holdings</CardTitle>
                    <Button variant="secondary" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stockHoldings.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-[#E3E3EA] hover:border-[#D1D1D6] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${stock.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                          {stock.logo}
                        </div>
                        <div>
                          <div className="font-medium">{stock.symbol}</div>
                          <div className="text-sm text-muted-foreground">{stock.company}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-medium">${stock.price}</div>
                        <div className={`text-sm ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change} ({stock.changePercent})
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Account Balance */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">Account Balance</div>
                  <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'DM Mono, IBM Plex Mono, monospace' }}>
                    {formatAmount(112893)}
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Available Cash</span>
                      <span className="font-mono text-sm">{formatAmount(25000)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Invested</span>
                      <span className="font-mono text-sm">{formatAmount(87893)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="gap-2">
                      <Plus className="w-4 h-4" />
                      Deposit
                    </Button>
                    <Button variant="secondary">Withdraw</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Trades */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Recent Trades</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[400px] overflow-y-auto">
                    <Table>
                      <TableHeader>
                        <TableRow style={{ background: '#F8F8FA' }}>
                          <TableHead className="text-xs font-medium text-[#9898A5] py-3">Symbol</TableHead>
                          <TableHead className="text-xs font-medium text-[#9898A5] py-3">Price</TableHead>
                          <TableHead className="text-xs font-medium text-[#9898A5] py-3">Type</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tradesTableData.map((trade, index) => (
                          <TableRow key={index} className="border-none">
                            <TableCell className="font-medium text-sm py-3">{trade.symbol}</TableCell>
                            <TableCell className="font-mono text-sm py-3">${trade.price}</TableCell>
                            <TableCell className="py-3">
                              <span
                                style={{
                                  borderRadius: 6,
                                  fontWeight: 500,
                                  fontSize: 12,
                                  padding: '2px 8px',
                                  display: 'inline-block',
                                  background: trade.type === 'buy' ? '#C9EBCC' : '#EBC9C9',
                                  color: trade.type === 'buy' ? '#021B0D' : '#1D0202',
                                }}
                              >
                                {trade.type.toUpperCase()}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Other tab contents remain the same */}
        <TabsContent value="portfolio">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Portfolio view will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stock">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Stock view will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="watchlist">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Watchlist view will be implemented here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wallet">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Wallet view will be implemented here</p>
            </CardContent>
          </Card>
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
