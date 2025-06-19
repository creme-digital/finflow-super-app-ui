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
import { CryptoRightPanel } from '@/components/crypto/CryptoRightPanel';
import { CryptoPortfolio } from '@/components/crypto/CryptoPortfolio';
import { CryptoWatchlistCards } from '@/components/crypto/CryptoWatchlistCards';

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
  return <Layout title="Crypto Trading" showRightSidebar={true} rightSidebarContent={<CryptoRightPanel />} mainContent={<div className="space-y-6">
          {/* Header with tabs and View Portfolio button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6 w-full">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview" className="text-blue-600 font-medium">Overview</TabsTrigger>
                  <TabsTrigger value="assets" className="text-muted-foreground font-medium">Assets</TabsTrigger>
                  <TabsTrigger value="watchlist" className="text-muted-foreground font-medium">Watchlist</TabsTrigger>
                  <TabsTrigger value="coins" className="text-muted-foreground font-medium">Coins</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  {/* Three cards: Exchange, Market & Trading Pair */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                          
                          {/* Bottom row: Account selector with new structure */}
                          <div className="flex flex-row justify-between items-center w-full p-3 pr-2 pt-2 pb-2" style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid #FFFFFF',
                      borderRadius: '9999px'
                    }}>
                            <div className="text-xs text-black">{exchangeData.account}</div>
                            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full" style={{
                        background: '#F1F1F5'
                      }}>
                              <DollarSign className="w-4 h-4 text-blue-600" />
                              <span className="text-xs font-medium">${exchangeData.balance.toLocaleString()}</span>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
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
                          
                          {/* Bottom row: Market selector with new structure */}
                          <div className="flex flex-row justify-between items-center w-full p-3 pr-2 pt-2 pb-2" style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid #FFFFFF',
                      borderRadius: '9999px'
                    }}>
                            <div className="text-xs text-black">{marketData.symbol}</div>
                            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full" style={{
                        background: '#F1F1F5'
                      }}>
                              <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                                ₿
                              </div>
                              <span className="text-xs font-medium">{marketData.amount}</span>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
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
                          
                          {/* Bottom row: Trading pair selector with new structure */}
                          <div className="flex flex-row justify-between items-center w-full p-3 pr-2 pt-2 pb-2" style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      border: '1px solid #FFFFFF',
                      borderRadius: '9999px'
                    }}>
                            <div className="text-xs text-black">{tradingPairData.pair}</div>
                            <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full" style={{
                        background: '#F1F1F5'
                      }}>
                              <div className="w-4 h-4 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                                ◆
                              </div>
                              <span className="text-xs font-medium">{tradingPairData.amount}</span>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>

                  {/* Market Changes Section - Smaller text and glass card */}
                  <div className="overflow-hidden mb-6" style={{
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
                </TabsContent>

                <TabsContent value="assets" className="mt-6">
                  <CryptoPortfolio />
                </TabsContent>

                <TabsContent value="watchlist" className="mt-6">
                  <CryptoWatchlistCards />
                </TabsContent>

                <TabsContent value="coins" className="mt-6">
                  <div className="text-center py-20">
                    <h3 className="text-lg font-medium mb-2">Coins</h3>
                    <p className="text-muted-foreground">Crypto market data will appear here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
          </div>
        </div>} />;
}
