import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MeelyTradeDashboard() {
  const { formatAmount } = useCurrency();

  const portfolioValue = 125000;
  const dailyChange = 2500;
  const dailyChangePercentage = 2.04;
  const totalTrades = 156;

  const recentTrades = [
    {
      id: 'TRD-001',
      symbol: 'AAPL',
      type: 'buy',
      shares: 10,
      price: 175.50,
      total: 1755.00,
      date: '2024-03-15 10:30 AM',
      status: 'completed'
    },
    {
      id: 'TRD-002',
      symbol: 'TSLA',
      type: 'sell',
      shares: 5,
      price: 245.75,
      total: 1228.75,
      date: '2024-03-15 09:15 AM',
      status: 'completed'
    },
    {
      id: 'TRD-003',
      symbol: 'BTC',
      type: 'buy',
      amount: 0.5,
      price: 65000.00,
      total: 32500.00,
      date: '2024-03-14 03:45 PM',
      status: 'pending'
    }
  ];

  const watchlist = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.50,
      change: 2.5,
      changePercentage: 1.45,
      volume: '45.2M'
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 245.75,
      change: -5.25,
      changePercentage: -2.09,
      volume: '32.8M'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 415.32,
      change: 8.45,
      changePercentage: 2.07,
      volume: '28.5M'
    }
  ];

  // Sample data for the portfolio performance graph
  const portfolioData = [
    { date: 'Jan', value: 115000 },
    { date: 'Feb', value: 118000 },
    { date: 'Mar', value: 122000 },
    { date: 'Apr', value: 119000 },
    { date: 'May', value: 123000 },
    { date: 'Jun', value: 125000 },
  ];

  // Custom tooltip for the graph
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
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Trading Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor your portfolio performance and market activity.
          </p>
        </div>

        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* Portfolio Value */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Value</span>
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(portfolioValue)}</div>
                <div className={dailyChange >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>
                  {dailyChange >= 0 ? '+' : ''}{formatAmount(dailyChange)} ({dailyChangePercentage}%)
                </div>
              </div>
            </div>

            {/* Total Trades */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Trades</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{totalTrades}</div>
              <div className="text-sm text-[#6D6D74]">This month</div>
            </div>

            {/* Top Gainers */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Top Gainers</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>+8.5%</div>
              <div className="text-sm text-[#6D6D74]">MSFT, AAPL, GOOGL</div>
            </div>

            {/* Top Losers */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Top Losers</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>-3.2%</div>
              <div className="text-sm text-[#6D6D74]">TSLA, META, NFLX</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Performance</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium" style={{ color: '#6D6D74' }}>
                <span className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 rounded bg-[#10B981]"></span>
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
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
                    stroke="#10B981"
                    strokeWidth={3}
                    fill="url(#colorPortfolio)"
                    dot={{ r: 0, fill: '#10B981' }}
                    activeDot={{ r: 7, fill: '#10B981' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Recent Trades</span>
                </div>
                <Button variant="outline" className="w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                <Table className="min-w-full text-sm">
                  <TableHeader>
                    <TableRow style={{ background: '#F8F8FA' }}>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">ID</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Symbol</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Type</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Amount</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Total</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTrades.map((trade) => (
                      <TableRow key={trade.id}>
                        <TableCell className="font-medium">{trade.id}</TableCell>
                        <TableCell>{trade.symbol}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              borderRadius: 6,
                              fontWeight: 500,
                              fontSize: 13,
                              padding: '2px 12px',
                              display: 'inline-block',
                              background: trade.type === 'buy' ? '#C9EBCC' : '#EBC9C9',
                              color: trade.type === 'buy' ? '#021B0D' : '#1D0202',
                            }}
                          >
                            {trade.type.toUpperCase()}
                          </span>
                        </TableCell>
                        <TableCell>{trade.shares || trade.amount}</TableCell>
                        <TableCell className="font-mono">{formatAmount(trade.total)}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              borderRadius: 6,
                              fontWeight: 500,
                              fontSize: 13,
                              padding: '2px 12px',
                              display: 'inline-block',
                              background: trade.status === 'completed' ? '#C9EBCC' : '#EBC9C9',
                              color: trade.status === 'completed' ? '#021B0D' : '#1D0202',
                            }}
                          >
                            {trade.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Watchlist</span>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search watchlist..." className="pl-8 w-[200px]" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {watchlist.map((item) => (
                  <div
                    key={item.symbol}
                    className="rounded-lg border border-[#E3E3EA] p-4 hover:border-[#D1D1D6] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium text-base mb-1">{item.symbol}</div>
                        <div className="text-sm text-[#6D6D74]">{item.name}</div>
                      </div>
                      <div className={item.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                        {item.change >= 0 ? '+' : ''}{item.change}%
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="font-mono text-lg" style={{ fontFamily: 'DM Mono, IBM Plex Mono, monospace' }}>
                        {formatAmount(item.price)}
                      </div>
                      <div className="text-sm text-[#6D6D74]">
                        Vol: {item.volume}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
} 