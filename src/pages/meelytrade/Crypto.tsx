
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
          <h1 className="fintech-heading-1">Cryptocurrency</h1>
          <p className="fintech-body mt-1">
            Track and trade cryptocurrencies across global markets.
          </p>
        </div>

        <Card className="fintech-card">
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-border fintech-card-content">
            {/* Market Cap */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-[18px] h-[18px] text-secondary" />
                <span className="fintech-body">Market Cap</span>
              </div>
              <div className="fintech-mono text-3xl font-normal text-primary">
                {formatLargeNumber(marketStats.totalMarketCap)}
              </div>
            </div>

            {/* CMS100 */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px] text-secondary" />
                <span className="fintech-body">CMS100</span>
              </div>
              <div className="fintech-mono text-3xl font-normal text-primary">
                ${marketStats.cms100.toFixed(2)}
              </div>
            </div>

            {/* Fear & Greed Index */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-[18px] h-[18px] text-secondary" />
                <span className="fintech-body">Fear & Greed Index</span>
              </div>
              <div className="flex flex-col">
                <div className="fintech-mono text-3xl font-normal text-primary">
                  {marketStats.fearAndGreedIndex}
                </div>
                <div className="fintech-body">{marketStats.fearAndGreedLabel}</div>
              </div>
            </div>

            {/* Altcoin Season */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="w-[18px] h-[18px] text-secondary" />
                <span className="fintech-body">Altcoin Season</span>
              </div>
              <div className="flex flex-col">
                <div className="fintech-mono text-3xl font-normal text-primary">
                  {marketStats.altcoinSeason}/100
                </div>
                <div className="fintech-body">Bitcoin Season</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fintech-card">
          <CardContent className="fintech-card-content">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-[18px] h-[18px] text-secondary" />
                <span className="fintech-body">Market Overview</span>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-secondary" />
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

            <div className="rounded-lg border border-card-border overflow-hidden">
              <Table className="fintech-table">
                <TableHeader className="fintech-table-header">
                  <TableRow className="bg-surface-muted">
                    <TableHead className="fintech-table-header-cell">#</TableHead>
                    <TableHead className="fintech-table-header-cell">Name</TableHead>
                    <TableHead className="fintech-table-header-cell">Price</TableHead>
                    <TableHead className="fintech-table-header-cell">1h %</TableHead>
                    <TableHead className="fintech-table-header-cell">24h %</TableHead>
                    <TableHead className="fintech-table-header-cell">7d %</TableHead>
                    <TableHead className="fintech-table-header-cell">Market Cap</TableHead>
                    <TableHead className="fintech-table-header-cell">Volume (24h)</TableHead>
                    <TableHead className="fintech-table-header-cell">Circulating Supply</TableHead>
                    <TableHead className="fintech-table-header-cell">Last 7 Days</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cryptocurrencies.map((crypto) => (
                    <TableRow key={crypto.symbol} className="fintech-table-row">
                      <TableCell className="fintech-table-cell">{crypto.rank}</TableCell>
                      <TableCell className="fintech-table-cell">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center">
                            <span className="text-primary font-medium">{crypto.symbol.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-medium text-primary">{crypto.name}</div>
                            <div className="fintech-body">{crypto.shortName}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="fintech-table-cell fintech-mono">{formatAmount(crypto.price)}</TableCell>
                      <TableCell className="fintech-table-cell">
                        <div className={crypto.change1h >= 0 ? 'text-success' : 'text-error'}>
                          {crypto.change1h >= 0 ? '+' : ''}{crypto.change1h}%
                        </div>
                      </TableCell>
                      <TableCell className="fintech-table-cell">
                        <div className={crypto.change24h >= 0 ? 'text-success' : 'text-error'}>
                          {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                        </div>
                      </TableCell>
                      <TableCell className="fintech-table-cell">
                        <div className={crypto.change7d >= 0 ? 'text-success' : 'text-error'}>
                          {crypto.change7d >= 0 ? '+' : ''}{crypto.change7d}%
                        </div>
                      </TableCell>
                      <TableCell className="fintech-table-cell fintech-mono">{crypto.marketCap}</TableCell>
                      <TableCell className="fintech-table-cell fintech-mono">{crypto.volume24h}</TableCell>
                      <TableCell className="fintech-table-cell fintech-mono">{crypto.circulatingSupply}</TableCell>
                      <TableCell className="fintech-table-cell">
                        <div className="w-32 h-12">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={crypto.priceHistory}>
                              <defs>
                                <linearGradient id={`color-${crypto.symbol}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area
                                type="monotone"
                                dataKey="price"
                                stroke="hsl(var(--primary))"
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
