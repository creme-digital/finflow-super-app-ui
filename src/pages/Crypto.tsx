
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, TrendingDown, Activity, DollarSign, Plus, Filter, Download } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { TradingViewChart } from '@/components/crypto/TradingViewChart';
import { CryptoTradingPanel } from '@/components/crypto/CryptoTradingPanel';

export default function Crypto() {
  const { formatAmount } = useCurrency();

  const marketStats = [
    { 
      icon: DollarSign, 
      label: 'Total Market Cap', 
      value: '2.45T',
      change: '+2.34%',
      positive: true 
    },
    { 
      icon: Activity, 
      label: '24h Volume', 
      value: '89.2B',
      change: '+5.67%',
      positive: true 
    },
    { 
      icon: TrendingUp, 
      label: 'BTC Dominance', 
      value: '42.8%',
      change: '-0.23%',
      positive: false 
    },
    { 
      icon: Activity, 
      label: 'Active Cryptos', 
      value: '13,247',
      change: '+12',
      positive: true 
    }
  ];

  const accountData = {
    balance: 47841.95,
    btcHoldings: 1.895,
    ethHoldings: 65,
    portfolioChange: 2.34
  };

  const topCryptos = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 65432.10,
      change: 2.45,
      volume: '28.5B',
      marketCap: '1.28T'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3456.78,
      change: 3.21,
      volume: '15.2B',
      marketCap: '415B'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 156.42,
      change: -1.89,
      volume: '2.8B',
      marketCap: '71B'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.487,
      change: 4.56,
      volume: '1.2B',
      marketCap: '17B'
    }
  ];

  const recentTrades = [
    { type: 'buy', symbol: 'BTC', amount: 0.025, price: 65100, time: '2 min ago' },
    { type: 'sell', symbol: 'ETH', amount: 1.5, price: 3450, time: '5 min ago' },
    { type: 'buy', symbol: 'SOL', amount: 10, price: 155, time: '8 min ago' },
    { type: 'sell', symbol: 'ADA', amount: 500, price: 0.49, time: '12 min ago' }
  ];

  return (
    <Layout
      title="Crypto Trading"
      mainContent={
        <div className="space-y-6">
          {/* Header with consistent styling */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Crypto Trading</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                View Portfolio
              </Button>
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Funds
              </Button>
            </div>
          </div>

          {/* Market Overview - Individual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
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
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-[18px] h-[18px] text-muted-foreground" />
                    <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Tabs with Glass Effect */}
          <Tabs defaultValue="trading" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="trading">Trading</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="markets">Markets</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="trading" className="space-y-6">
              {/* Account Overview with Glass Effect */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">Total Balance</div>
                      <div className="text-3xl font-bold tracking-tight">
                        {formatAmount(accountData.balance)}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">+{accountData.portfolioChange}%</span>
                        <span className="text-muted-foreground">24h</span>
                      </div>
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
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">Bitcoin Holdings</div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
                          ₿
                        </div>
                        <div>
                          <div className="text-xl font-bold">{accountData.btcHoldings} BTC</div>
                          <div className="text-sm text-muted-foreground">≈ {formatAmount(accountData.btcHoldings * 65432)}</div>
                        </div>
                      </div>
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
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">Ethereum Holdings</div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                          Ξ
                        </div>
                        <div>
                          <div className="text-xl font-bold">{accountData.ethHoldings} ETH</div>
                          <div className="text-sm text-muted-foreground">≈ {formatAmount(accountData.ethHoldings * 3456)}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>

              {/* Trading Interface */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <TradingViewChart />
                </div>
                <div className="lg:col-span-1">
                  <CryptoTradingPanel />
                </div>
              </div>

              {/* Recent Trades with Glass Effect */}
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
                  <CardTitle>Recent Trades</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-border">
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Type</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Asset</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Amount</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Price</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTrades.map((trade, index) => (
                        <TableRow key={index} className="border-b border-border last:border-0">
                          <TableCell className="py-4">
                            <Badge 
                              className={`${trade.type === 'buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                            >
                              {trade.type.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium py-4">{trade.symbol}</TableCell>
                          <TableCell className="py-4">{trade.amount}</TableCell>
                          <TableCell className="py-4">{formatAmount(trade.price)}</TableCell>
                          <TableCell className="text-muted-foreground py-4">{trade.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="markets" className="space-y-6">
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
                    <CardTitle>Top Cryptocurrencies</CardTitle>
                    <div className="flex gap-2">
                      <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search assets..." className="pl-8 w-64" />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-border">
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Asset</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Price</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">24h Change</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Volume</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Market Cap</TableHead>
                        <TableHead className="text-xs uppercase text-muted-foreground font-medium">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topCryptos.map((crypto, index) => (
                        <TableRow key={index} className="border-b border-border last:border-0">
                          <TableCell className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                                {crypto.symbol.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium">{crypto.name}</div>
                                <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4">{formatAmount(crypto.price)}</TableCell>
                          <TableCell className="py-4">
                            <div className={`flex items-center gap-1 ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {crypto.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                              {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                            </div>
                          </TableCell>
                          <TableCell className="py-4">{crypto.volume}</TableCell>
                          <TableCell className="py-4">{crypto.marketCap}</TableCell>
                          <TableCell className="py-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Buy</Button>
                              <Button size="sm" variant="outline">Sell</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </div>
            </TabsContent>

            <TabsContent value="portfolio">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Portfolio view will be implemented here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
}
