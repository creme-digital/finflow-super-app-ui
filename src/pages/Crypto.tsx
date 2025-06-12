
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, TrendingDown, Activity, DollarSign, Plus, Filter, Download, ChevronDown } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { TradingViewChart } from '@/components/crypto/TradingViewChart';

export default function Crypto() {
  const { formatAmount } = useCurrency();

  const exchangeData = {
    account: 'Account 1890980',
    balance: 478419.95,
    btcBalance: '0 BTC : 0.00 USD'
  };

  const marketData = {
    symbol: 'BTC',
    amount: '1.895 BTC'
  };

  const tradingPairData = {
    pair: 'ETH/BTC',
    amount: '65 ETH'
  };

  const marketChanges = [
    { pair: 'BTC/USDT', price: 36899.36, change: 1.71, positive: false },
    { pair: 'ETH/USDT', price: 3252, change: 1.58, positive: true },
    { pair: 'BNB/USDT', price: 412.50, change: 2.34, positive: true },
    { pair: 'ADA/USDT', price: 0.487, change: 0.89, positive: false },
    { pair: 'SOL/USDT', price: 156.42, change: 3.45, positive: true },
    { pair: 'DOT/USDT', price: 7.23, change: 1.23, positive: false },
    { pair: 'MATIC/USDT', price: 0.85, change: 4.56, positive: true },
    { pair: 'LINK/USDT', price: 14.78, change: 2.89, positive: true }
  ];

  const orderBookData = {
    bids: [
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' }
    ],
    asks: [
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' },
      { price: 64345.34, amount: 0.925602, time: '0.925602' }
    ]
  };

  return (
    <Layout
      title="Crypto Trading"
      mainContent={
        <div className="space-y-6">
          {/* Header with tabs and View Portfolio button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6">
              <Tabs defaultValue="crypto-trading" className="w-auto">
                <TabsList>
                  <TabsTrigger value="crypto-trading" className="text-blue-600 font-medium">Crypto Trading</TabsTrigger>
                  <TabsTrigger value="asset" className="text-muted-foreground font-medium">Asset</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Button variant="outline" size="sm" className="w-auto">
              View Portfolio
            </Button>
          </div>

          {/* Three cards: Exchange, Market & Trading Pair */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Exchange Card */}
            <div className="bg-[#E8F2FF] rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col space-y-4">
                {/* Header with label and BTC balance */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600">Exchange</div>
                  <div className="text-xs text-gray-500">{exchangeData.btcBalance}</div>
                </div>
                
                {/* Account info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{exchangeData.account}</div>
                      <div className="text-xl font-semibold text-gray-900">${exchangeData.balance.toLocaleString()}</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Market Card */}
            <div className="bg-[#E8F2FF] rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600">Market</div>
                </div>
                
                {/* Market info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">₿</span>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-gray-900">{marketData.symbol}</div>
                      <div className="text-sm font-medium text-gray-600">{marketData.amount}</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Trading Pair Card */}
            <div className="bg-[#E8F2FF] rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-600">Trading Pair</div>
                </div>
                
                {/* Trading pair info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">◆</span>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-gray-900">{tradingPairData.pair}</div>
                      <div className="text-sm font-medium text-gray-600">{tradingPairData.amount}</div>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Full width market changes table */}
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
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border">
                      <TableHead className="text-xs uppercase text-muted-foreground font-medium px-6 py-4">Trading Pair</TableHead>
                      <TableHead className="text-xs uppercase text-muted-foreground font-medium px-6 py-4">Price</TableHead>
                      <TableHead className="text-xs uppercase text-muted-foreground font-medium px-6 py-4">24h Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketChanges.map((item, index) => (
                      <TableRow key={index} className="border-b border-border last:border-0">
                        <TableCell className="px-6 py-4 font-medium">{item.pair}</TableCell>
                        <TableCell className="px-6 py-4">{formatAmount(item.price)}</TableCell>
                        <TableCell className="px-6 py-4">
                          <div className={`flex items-center gap-1 ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                            {item.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                            {item.positive ? '+' : ''}{item.change}%
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </div>

          {/* Bottom section: TradingView chart and Order Book */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* TradingView Chart - 2/3 width */}
            <div className="lg:col-span-2">
              <div
                className="overflow-hidden h-[500px]"
                style={{
                  border: '1px solid #FFFFFF',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <TradingViewChart />
              </div>
            </div>

            {/* Order Book - 1/3 width */}
            <div className="lg:col-span-1">
              <div
                className="overflow-hidden h-[500px]"
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
                    <CardTitle className="text-sm font-medium">Order Book</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-xs">Price (USDT)</Button>
                      <Button variant="ghost" size="sm" className="text-xs">Amount (BTC)</Button>
                      <Button variant="ghost" size="sm" className="text-xs">Time</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 overflow-auto">
                  <div className="space-y-2 p-4">
                    {/* Asks (Sell orders) */}
                    <div className="space-y-1">
                      {orderBookData.asks.map((order, index) => (
                        <div key={`ask-${index}`} className="grid grid-cols-3 gap-2 text-xs">
                          <span className="text-red-600">{order.price.toLocaleString()}</span>
                          <span className="text-muted-foreground">{order.amount}</span>
                          <span className="text-muted-foreground">{order.time}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Spread */}
                    <div className="border-t border-b border-border py-2 my-2">
                      <div className="text-center text-xs text-muted-foreground">
                        Spread: 0.01 (0.10%)
                      </div>
                    </div>
                    
                    {/* Bids (Buy orders) */}
                    <div className="space-y-1">
                      {orderBookData.bids.map((order, index) => (
                        <div key={`bid-${index}`} className="grid grid-cols-3 gap-2 text-xs">
                          <span className="text-green-600">{order.price.toLocaleString()}</span>
                          <span className="text-muted-foreground">{order.amount}</span>
                          <span className="text-muted-foreground">{order.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
