
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, TrendingUp, TrendingDown, Activity, DollarSign, Plus } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { TradingViewChart } from '@/components/crypto/TradingViewChart';
import { CryptoTradingPanel } from '@/components/crypto/CryptoTradingPanel';

export default function Crypto() {
  const { formatAmount } = useCurrency();

  const accountStats = {
    balance: 478419.95,
    btcHoldings: 1.895,
    ethHoldings: 65,
    tradingPair: 'ETH/BTC'
  };

  const priceStats = [
    { label: '24h Change', value: '12454.37', change: 0.89, positive: true },
    { label: '24h High', value: '56,354.23', change: 1.58, positive: true },
    { label: '24h Low', value: '36,899.36', change: -1.71, positive: false },
    { label: 'BTC/USDT', value: '36,899.36', change: -1.71, positive: false },
    { label: 'ETH/USDT', value: '3,252', change: 1.58, positive: true }
  ];

  const tradeHistory = [
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'buy' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'buy' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'buy' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'buy' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'buy' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'sell' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'sell' },
    { price: 64345.34, amount: 0.925602, time: '0.925602', type: 'sell' }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Crypto</h1>
        </div>

        <Tabs defaultValue="trading" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-auto grid-cols-2">
              <TabsTrigger value="trading" className="text-primary border-b-2 border-primary">
                Crypto Trading
              </TabsTrigger>
              <TabsTrigger value="asset" className="text-muted-foreground">
                Asset
              </TabsTrigger>
            </TabsList>
            <Button variant="outline" className="gap-2">
              View Portfolio
            </Button>
          </div>

          <TabsContent value="trading" className="space-y-6">
            {/* Account and Market Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Exchange</div>
                    <div className="text-sm">Account 1890980</div>
                    <div className="text-lg font-semibold">{formatAmount(accountStats.balance)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">0 BTC : 0.00 USD</div>
                    <div className="text-sm text-muted-foreground">Market</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">₿</div>
                      <span className="font-medium">BTC</span>
                      <span className="text-sm text-muted-foreground">{accountStats.btcHoldings} BTC</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Trading Pair</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">Ξ</div>
                      <span className="font-medium">{accountStats.tradingPair}</span>
                      <span className="text-sm text-muted-foreground">{accountStats.ethHoldings} ETH</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <Button className="w-full gap-2">
                    <Plus className="w-4 h-4" />
                    Add Asset
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Price Statistics */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {priceStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-lg font-bold font-mono">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {stat.positive ? '+' : ''}{stat.change}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Trading Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* TradingView Chart - Takes up 3/4 of the width */}
              <div className="lg:col-span-3">
                <TradingViewChart />
              </div>

              {/* Trading Panel - Takes up 1/4 of the width */}
              <div className="lg:col-span-1">
                <CryptoTradingPanel />
              </div>
            </div>

            {/* Trade History Table */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Recent Trades</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Save</Button>
                    <Button variant="outline" size="sm">Settings</Button>
                  </div>
                </div>

                <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow style={{ background: '#F8F8FA' }}>
                        <TableHead className="text-xs uppercase text-[#9898A5] font-medium">Price (USDT)</TableHead>
                        <TableHead className="text-xs uppercase text-[#9898A5] font-medium">Amount (BTC)</TableHead>
                        <TableHead className="text-xs uppercase text-[#9898A5] font-medium">Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tradeHistory.map((trade, index) => (
                        <TableRow key={index}>
                          <TableCell className={`font-mono ${trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                            {trade.price.toLocaleString()}
                          </TableCell>
                          <TableCell className="font-mono">{trade.amount}</TableCell>
                          <TableCell className="font-mono text-muted-foreground">{trade.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="asset">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Asset view content would go here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
