import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, DollarSign, Activity, Coins, ArrowUpDown } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

export default function MeelyTradeCrypto() {
  const { formatAmount } = useCurrency();

  const marketStats = {
    totalMarketCap: 3450000000000, // 3.45T
    cms100: 212.83,
    fearAndGreedIndex: 65, // 0-100
    fearAndGreedLabel: 'Greed',
    altcoinSeason: 26, // 0-100
  };

  const cryptocurrencies = [
    {
      rank: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      shortName: 'BTC',
      price: 65000.00,
      change1h: 0.5,
      change24h: 2.5,
      change7d: 5.8,
      volume24h: '28.5B',
      marketCap: '1.2T',
      circulatingSupply: '19.5M',
      priceHistory: [
        { date: '2024-03-09', price: 61500 },
        { date: '2024-03-10', price: 62200 },
        { date: '2024-03-11', price: 63500 },
        { date: '2024-03-12', price: 62800 },
        { date: '2024-03-13', price: 64200 },
        { date: '2024-03-14', price: 63800 },
        { date: '2024-03-15', price: 65000 },
      ]
    },
    {
      rank: 2,
      symbol: 'ETH',
      name: 'Ethereum',
      shortName: 'ETH',
      price: 3450.75,
      change1h: 0.8,
      change24h: 3.2,
      change7d: 7.5,
      volume24h: '15.8B',
      marketCap: '415B',
      circulatingSupply: '120.2M',
      priceHistory: [
        { date: '2024-03-09', price: 3200 },
        { date: '2024-03-10', price: 3250 },
        { date: '2024-03-11', price: 3320 },
        { date: '2024-03-12', price: 3280 },
        { date: '2024-03-13', price: 3380 },
        { date: '2024-03-14', price: 3420 },
        { date: '2024-03-15', price: 3450 },
      ]
    },
    // Add 8 more cryptocurrencies with similar structure
  ];

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
    return num.toLocaleString();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Cryptocurrency</h1>
          <p className="text-muted-foreground mt-1">
            Track and trade cryptocurrencies across global markets.
          </p>
        </div>

        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* Market Cap */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Market Cap</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>
                {formatLargeNumber(marketStats.totalMarketCap)}
              </div>
            </div>

            {/* CMS100 */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>CMS100</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>
                ${marketStats.cms100.toFixed(2)}
              </div>
            </div>

            {/* Fear & Greed Index */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Fear & Greed Index</span>
              </div>
              <div className="flex flex-col">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>
                  {marketStats.fearAndGreedIndex}
                </div>
                <div className="text-sm text-[#6D6D74]">{marketStats.fearAndGreedLabel}</div>
              </div>
            </div>

            {/* Altcoin Season */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Altcoin Season</span>
              </div>
              <div className="flex flex-col">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>
                  {marketStats.altcoinSeason}/100
                </div>
                <div className="text-sm text-[#6D6D74]">Bitcoin Season</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Market Overview</span>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search cryptocurrencies..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow style={{ background: '#F8F8FA' }}>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">#</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Price</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">1h %</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">24h %</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">7d %</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Market Cap</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Volume (24h)</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Circulating Supply</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Last 7 Days</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cryptocurrencies.map((crypto) => (
                    <TableRow key={crypto.symbol}>
                      <TableCell>{crypto.rank}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            {crypto.symbol.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{crypto.name}</div>
                            <div className="text-sm text-[#6D6D74]">{crypto.shortName}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono">{formatAmount(crypto.price)}</TableCell>
                      <TableCell>
                        <div className={crypto.change1h >= 0 ? 'text-green-500' : 'text-red-500'}>
                          {crypto.change1h >= 0 ? '+' : ''}{crypto.change1h}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                          {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={crypto.change7d >= 0 ? 'text-green-500' : 'text-red-500'}>
                          {crypto.change7d >= 0 ? '+' : ''}{crypto.change7d}%
                        </div>
                      </TableCell>
                      <TableCell>{crypto.marketCap}</TableCell>
                      <TableCell>{crypto.volume24h}</TableCell>
                      <TableCell>{crypto.circulatingSupply}</TableCell>
                      <TableCell>
                        <div className="w-32 h-12">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={crypto.priceHistory}>
                              <defs>
                                <linearGradient id={`color-${crypto.symbol}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#8884d8"
                                fillOpacity={1}
                                fill={`url(#color-${crypto.symbol})`}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
} 