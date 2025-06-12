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
  const {
    formatAmount
  } = useCurrency();
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
  const marketChanges = [{
    pair: 'BTC/USDT',
    price: 36899.36,
    change: 1.71,
    positive: false
  }, {
    pair: 'ETH/USDT',
    price: 3252,
    change: 1.58,
    positive: true
  }, {
    pair: 'BNB/USDT',
    price: 412.50,
    change: 2.34,
    positive: true
  }, {
    pair: 'ADA/USDT',
    price: 0.487,
    change: 0.89,
    positive: false
  }, {
    pair: 'SOL/USDT',
    price: 156.42,
    change: 3.45,
    positive: true
  }, {
    pair: 'DOT/USDT',
    price: 7.23,
    change: 1.23,
    positive: false
  }, {
    pair: 'MATIC/USDT',
    price: 0.85,
    change: 4.56,
    positive: true
  }, {
    pair: 'LINK/USDT',
    price: 14.78,
    change: 2.89,
    positive: true
  }];
  const orderBookData = {
    bids: [{
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }],
    asks: [{
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }, {
      price: 64345.34,
      amount: 0.925602,
      time: '0.925602'
    }]
  };
  return <Layout title="Crypto Trading" mainContent={<div className="space-y-6">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Exchange Card */}
            <div className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  {/* Top row: Exchange label and BTC text */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Exchange</div>
                    <div className="text-xs text-muted-foreground">{exchangeData.btcBalance}</div>
                  </div>
                  
                  {/* Bottom row: Account selector */}
                  <div style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }} className="bg-white/[0.56] rounded-full">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      <div>
                        <div className="text-sm text-muted-foreground">{exchangeData.account}</div>
                        <div className="text-lg font-semibold">${exchangeData.balance.toLocaleString()}</div>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Market Card */}
            <div className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  {/* Top row: Market label */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Market</div>
                  </div>
                  
                  {/* Bottom row: Market selector */}
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                        ₿
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{marketData.symbol}</div>
                        <div className="text-sm font-medium">{marketData.amount}</div>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Trading Pair Card */}
            <div className="overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  {/* Top row: Trading Pair label */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Trading Pair</div>
                  </div>
                  
                  {/* Bottom row: Trading pair selector */}
                  <div className="flex items-center justify-between p-3 rounded-lg" style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                        ◆
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{tradingPairData.pair}</div>
                        <div className="text-sm font-medium">{tradingPairData.amount}</div>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          {/* Market Changes Section - Smaller text and glass card */}
          <div className="overflow-hidden" style={{
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              <div className="space-y-1">
                <div className="text-lg font-bold">12454.37</div>
                <div className="text-xs text-muted-foreground">24h Change</div>
                <div className="text-green-600 font-medium text-sm">↗ 0.89%</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold">56,354.23</div>
                <div className="text-xs text-muted-foreground">24h High</div>
                <div className="text-green-600 font-medium text-sm">↗ 1.58%</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold">36,899.36</div>
                <div className="text-xs text-muted-foreground">24h Low</div>
                <div className="text-red-600 font-medium text-sm">↘ 1.71%</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold">ETH/USDT</div>
                <div className="text-xs text-muted-foreground">3.252</div>
                <div className="text-green-600 font-medium text-sm">↗ 1.58%</div>
              </div>
            </div>
          </div>

          {/* Full width market changes table */}
          

          {/* Bottom section: TradingView chart and Order Book */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* TradingView Chart - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden h-[500px]" style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
                <TradingViewChart />
              </div>
            </div>

            {/* Order Book - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="overflow-hidden h-[500px]" style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
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
                      {orderBookData.asks.map((order, index) => <div key={`ask-${index}`} className="grid grid-cols-3 gap-2 text-xs">
                          <span className="text-red-600">{order.price.toLocaleString()}</span>
                          <span className="text-muted-foreground">{order.amount}</span>
                          <span className="text-muted-foreground">{order.time}</span>
                        </div>)}
                    </div>
                    
                    {/* Spread */}
                    <div className="border-t border-b border-border py-2 my-2">
                      <div className="text-center text-xs text-muted-foreground">
                        Spread: 0.01 (0.10%)
                      </div>
                    </div>
                    
                    {/* Bids (Buy orders) */}
                    <div className="space-y-1">
                      {orderBookData.bids.map((order, index) => <div key={`bid-${index}`} className="grid grid-cols-3 gap-2 text-xs">
                          <span className="text-green-600">{order.price.toLocaleString()}</span>
                          <span className="text-muted-foreground">{order.amount}</span>
                          <span className="text-muted-foreground">{order.time}</span>
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </div>} />;
}