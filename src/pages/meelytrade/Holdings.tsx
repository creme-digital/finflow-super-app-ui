import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, DollarSign, PieChart, BarChart, Wallet, ArrowUpDown } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function MeelyTradeHoldings() {
  const { formatAmount } = useCurrency();

  const totalValue = 125000;
  const availableForPurchase = 25000;
  const yearlyChange = 15000;
  const yearlyChangePercentage = 13.6;
  const stockToCryptoRatio = 65;

  const holdings = [
    {
      id: 'HOLD-001',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 50,
      avgPrice: 150.25,
      currentPrice: 175.50,
      value: 8775.00,
      change: 1262.50,
      changePercentage: 16.8,
      type: 'stock'
    },
    {
      id: 'HOLD-002',
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      shares: 10,
      avgPrice: 220.50,
      currentPrice: 245.75,
      value: 2457.50,
      change: 252.50,
      changePercentage: 11.5,
      type: 'stock'
    },
    {
      id: 'HOLD-003',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.5,
      avgPrice: 60000.00,
      currentPrice: 65000.00,
      value: 32500.00,
      change: 2500.00,
      changePercentage: 8.3,
      type: 'crypto'
    }
  ];

  const assetAllocation = [
    { name: 'Stocks', value: 75000, color: '#10B981' },
    { name: 'Crypto', value: 35000, color: '#6366F1' },
    { name: 'Cash', value: 15000, color: '#F59E0B' }
  ];

  const dividends = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      amount: 125.50,
      date: '2024-03-15',
      status: 'paid'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      amount: 85.75,
      date: '2024-03-14',
      status: 'paid'
    },
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      amount: 45.25,
      date: '2024-03-20',
      status: 'pending'
    }
  ];

  const advancedMetrics = [
    {
      name: 'Sharpe Ratio',
      value: '1.85',
      description: 'Risk-adjusted return'
    },
    {
      name: 'Standard Deviation',
      value: '12.4%',
      description: 'Portfolio volatility'
    },
    {
      name: 'Annual Return',
      value: '15.8%',
      description: 'Year-to-date performance'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-[#EDEDF1]">
          <p className="text-sm font-medium mb-1" style={{ color: '#6D6D74' }}>{payload[0].name}</p>
          <p style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 14, fontWeight: 400, letterSpacing: '-0.28px' }}>
            {formatAmount(payload[0].value)} ({((payload[0].value / totalValue) * 100).toFixed(1)}%)
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
          <h1 className="text-3xl font-semibold tracking-tight">Holdings</h1>
          <p className="text-muted-foreground mt-1">
            View and manage your investment portfolio.
          </p>
        </div>

        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* Total Value */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Value</span>
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(totalValue)}</div>
                <div className={yearlyChange >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>
                  {yearlyChange >= 0 ? '+' : ''}{formatAmount(yearlyChange)} ({yearlyChangePercentage}%)
                </div>
              </div>
            </div>

            {/* Available for Purchase */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Available for Purchase</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(availableForPurchase)}</div>
              <div className="text-sm text-[#6D6D74]">Ready to invest</div>
            </div>

            {/* Yearly Change */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Change This Year</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{yearlyChangePercentage}%</div>
              <div className="text-sm text-[#6D6D74]">Year to date</div>
            </div>

            {/* Stock to Crypto Ratio */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Stock/Crypto Ratio</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{stockToCryptoRatio}%</div>
              <div className="text-sm text-[#6D6D74]">Stocks vs Crypto</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="stocks" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Holdings</span>
                </div>
                <TabsList
                  style={{
                    display: 'inline-flex',
                    padding: 3,
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: 8,
                    background: '#F8F8FA',
                  }}
                >
                  <TabsTrigger
                    value="stocks"
                    style={{
                      display: 'flex',
                      padding: '6px 8px',
                      alignItems: 'center',
                      gap: 8,
                      borderRadius: 6,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14,
                      letterSpacing: '-0.02em',
                      fontWeight: 500,
                    }}
                    className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
                  >
                    Stocks
                  </TabsTrigger>
                  <TabsTrigger
                    value="crypto"
                    style={{
                      display: 'flex',
                      padding: '6px 8px',
                      alignItems: 'center',
                      gap: 8,
                      borderRadius: 6,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14,
                      letterSpacing: '-0.02em',
                      fontWeight: 500,
                    }}
                    className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
                  >
                    Crypto
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="stocks">
                <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                  <Table className="min-w-full text-sm">
                    <TableHeader>
                      <TableRow style={{ background: '#F8F8FA' }}>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Symbol</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Shares</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Avg Price</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Current Price</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Value</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Change</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {holdings.filter(h => h.type === 'stock').map((holding) => (
                        <TableRow key={holding.id}>
                          <TableCell className="font-medium">{holding.symbol}</TableCell>
                          <TableCell>{holding.name}</TableCell>
                          <TableCell>{holding.shares}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.avgPrice)}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.currentPrice)}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.value)}</TableCell>
                          <TableCell>
                            <div className={holding.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                              {holding.change >= 0 ? '+' : ''}{formatAmount(holding.change)} ({holding.changePercentage}%)
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="crypto">
                <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                  <Table className="min-w-full text-sm">
                    <TableHeader>
                      <TableRow style={{ background: '#F8F8FA' }}>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Symbol</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Amount</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Avg Price</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Current Price</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Value</TableHead>
                        <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Change</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {holdings.filter(h => h.type === 'crypto').map((holding) => (
                        <TableRow key={holding.id}>
                          <TableCell className="font-medium">{holding.symbol}</TableCell>
                          <TableCell>{holding.name}</TableCell>
                          <TableCell>{holding.amount}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.avgPrice)}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.currentPrice)}</TableCell>
                          <TableCell className="font-mono">{formatAmount(holding.value)}</TableCell>
                          <TableCell>
                            <div className={holding.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                              {holding.change >= 0 ? '+' : ''}{formatAmount(holding.change)} ({holding.changePercentage}%)
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <PieChart className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Asset Allocation</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-[300px] w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={assetAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {assetAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-4 ml-8">
                  {assetAllocation.map((asset) => (
                    <div key={asset.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
                      <span className="text-sm text-[#6D6D74]">{asset.name}</span>
                      <span className="text-sm font-mono ml-2">
                        {formatAmount(asset.value)} ({((asset.value / totalValue) * 100).toFixed(1)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Dividends</span>
                </div>
              </div>
              <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                <Table className="min-w-full text-sm">
                  <TableHeader>
                    <TableRow style={{ background: '#F8F8FA' }}>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Symbol</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Amount</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Date</TableHead>
                      <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dividends.map((dividend) => (
                      <TableRow key={dividend.symbol}>
                        <TableCell className="font-medium">{dividend.symbol}</TableCell>
                        <TableCell>{dividend.name}</TableCell>
                        <TableCell className="font-mono">{formatAmount(dividend.amount)}</TableCell>
                        <TableCell>{dividend.date}</TableCell>
                        <TableCell>
                          <span
                            style={{
                              borderRadius: 6,
                              fontWeight: 500,
                              fontSize: 13,
                              padding: '2px 12px',
                              display: 'inline-block',
                              background: dividend.status === 'paid' ? '#C9EBCC' : '#EBC9C9',
                              color: dividend.status === 'paid' ? '#021B0D' : '#1D0202',
                            }}
                          >
                            {dividend.status}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advancedMetrics.map((metric) => (
            <Card key={metric.name}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-[#6D6D74]">{metric.name}</div>
                  <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 24, fontWeight: 400, letterSpacing: '-0.48px' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-[#6D6D74]">{metric.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
} 