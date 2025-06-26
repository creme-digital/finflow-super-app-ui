
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  ExternalLink, 
  FileText, 
  Globe, 
  Calendar,
  DollarSign,
  Activity,
  BarChart3,
  Users,
  Building,
  Bookmark,
  AlertTriangle,
  Target,
  Shield
} from 'lucide-react';

// TradingView Widget Component for Crypto
const CryptoTradingViewWidget = ({ symbol }: { symbol: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: `BINANCE:${symbol.toUpperCase()}USDT`,
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_legend: true,
      hide_side_toolbar: false,
      details: true,
      hotlist: true,
      calendar: true,
      studies: [
        "Volume@tv-basicstudies"
      ],
      show_popup_button: true,
      popup_width: "1000",
      popup_height: "650",
      container_id: "crypto_tradingview_chart"
    });

    const container = document.getElementById('crypto_tradingview_chart');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [symbol]);

  return (
    <div 
      id="crypto_tradingview_chart" 
      className="h-[600px] w-full"
      style={{ minHeight: '600px' }}
    />
  );
};

export default function CryptoDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  // Mock crypto data - in real app, this would come from API
  const cryptoData = {
    symbol: symbol?.toUpperCase() || 'BTC',
    name: 'Bitcoin',
    price: 69247.55,
    change: 1845.22,
    changePercentage: 2.74,
    volume: '28.5B',
    marketCap: '1.37T',
    fullyDilutedValuation: '1.45T',
    circulatingSupply: '19.8M',
    maxSupply: '21M',
    totalSupply: '19.8M',
    rank: 1,
    description: 'Bitcoin is the first successful internet money based on peer-to-peer technology.',
    website: 'https://bitcoin.org',
    whitepaper: 'https://bitcoin.org/bitcoin.pdf',
    founded: '2009',
    creator: 'Satoshi Nakamoto',
    consensus: 'Proof of Work',
    high24h: 69850.35,
    low24h: 67420.45,
    allTimeHigh: 73750.07,
    allTimeLow: 67.81,
    avgVolume: '32.8B',
    dominance: 58.2,
    fearGreedIndex: 78
  };

  // Mock trading data
  const recentTrades = [
    { time: '14:35:42', price: 69247.55, volume: 0.15, type: 'buy' },
    { time: '14:35:38', price: 69228.00, volume: 0.095, type: 'sell' },
    { time: '14:35:35', price: 69235.00, volume: 0.23, type: 'buy' },
    { time: '14:35:31', price: 69229.00, volume: 0.08, type: 'sell' },
    { time: '14:35:28', price: 69233.00, volume: 0.175, type: 'buy' }
  ];

  const metrics = [
    { metric: 'Market Cap Rank', value: '#1' },
    { metric: 'Market Dominance', value: '58.2%' },
    { metric: 'Fear & Greed Index', value: '78 (Extreme Greed)' },
    { metric: 'Hash Rate', value: '450 EH/s' },
    { metric: 'Block Time', value: '10 minutes' },
    { metric: 'Blockchain Size', value: '450 GB' }
  ];

  const exchanges = [
    { exchange: 'Binance', pair: 'BTC/USDT', price: 69247.55, volume: '6.2B', spread: '0.01%' },
    { exchange: 'Coinbase Pro', pair: 'BTC/USD', price: 69245.32, volume: '2.8B', spread: '0.02%' },
    { exchange: 'Kraken', pair: 'BTC/USD', price: 69250.17, volume: '1.9B', spread: '0.03%' },
    { exchange: 'Bybit', pair: 'BTC/USDT', price: 69248.91, volume: '3.1B', spread: '0.01%' }
  ];

  const keyEvents = [
    { date: '2024-04-20', event: 'Bitcoin Halving', impact: 'high' },
    { date: '2024-03-15', event: 'ETF Approval Decision', impact: 'high' },
    { date: '2024-02-28', event: 'Major Exchange Listing', impact: 'medium' }
  ];

  const analystRatings = [
    { firm: 'JPMorgan', rating: 'Overweight', target: 150000, date: '2024-01-15' },
    { firm: 'Goldman Sachs', rating: 'Buy', target: 120000, date: '2024-01-12' },
    { firm: 'Citi', rating: 'Neutral', target: 80000, date: '2024-01-10' },
    { firm: 'Morgan Stanley', rating: 'Buy', target: 130000, date: '2024-01-08' }
  ];

  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  const getRatingColor = (rating: string) => {
    switch (rating.toLowerCase()) {
      case 'buy':
      case 'strong buy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'overweight':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'neutral':
      case 'hold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'underweight':
      case 'sell':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout 
      title={`${cryptoData.symbol} - ${cryptoData.name}`}
      mainContent={
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-10 w-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-semibold tracking-tight">{cryptoData.symbol}</h1>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  Rank #{cryptoData.rank}
                </Badge>
                <Button variant="ghost" size="icon">
                  <Star className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-muted-foreground">{cryptoData.name}</p>
            </div>
          </div>

          {/* Enhanced Price Overview */}
          <Card style={glassCardStyle}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">${cryptoData.price.toLocaleString()}</div>
                  <div className={`flex items-center gap-2 text-lg ${cryptoData.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {cryptoData.change >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                    {cryptoData.change >= 0 ? '+' : ''}{cryptoData.change.toLocaleString()} ({cryptoData.changePercentage}%)
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="text-muted-foreground">Market Cap</div>
                    <div className="font-semibold">{cryptoData.marketCap}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Volume (24h)</div>
                    <div className="font-semibold">{cryptoData.volume}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Circulating Supply</div>
                    <div className="font-semibold">{cryptoData.circulatingSupply}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Max Supply</div>
                    <div className="font-semibold">{cryptoData.maxSupply}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">All-Time High</div>
                    <div className="font-semibold">${cryptoData.allTimeHigh.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">All-Time Low</div>
                    <div className="font-semibold">${cryptoData.allTimeLow}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">24h High</div>
                    <div className="font-semibold">${cryptoData.high24h.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">24h Low</div>
                    <div className="font-semibold">${cryptoData.low24h.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Dominance</div>
                    <div className="font-semibold">{cryptoData.dominance}%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="trade">Trade</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            {/* Enhanced Chart Tab with TradingView */}
            <TabsContent value="chart" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* TradingView Chart */}
                <div className="lg:col-span-3">
                  <Card style={glassCardStyle}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Advanced Chart - TradingView</CardTitle>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Live Data
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CryptoTradingViewWidget symbol={cryptoData.symbol} />
                    </CardContent>
                  </Card>
                </div>

                {/* Right Panel with Key Stats and Recent Trades */}
                <div className="space-y-6">
                  {/* Key Statistics */}
                  <Card style={glassCardStyle}>
                    <CardHeader>
                      <CardTitle>Key Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Open</span>
                        <span className="font-semibold">$67,420.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">High</span>
                        <span className="font-semibold">$69,850.35</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Low</span>
                        <span className="font-semibold">$67,420.45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Prev Close</span>
                        <span className="font-semibold">$67,402.33</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Trades */}
                  <Card style={glassCardStyle}>
                    <CardHeader>
                      <CardTitle>Recent Trades</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="max-h-[300px] overflow-y-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="text-xs">Time</TableHead>
                              <TableHead className="text-xs">Price</TableHead>
                              <TableHead className="text-xs">Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {recentTrades.map((trade, index) => (
                              <TableRow key={index}>
                                <TableCell className="text-xs">{trade.time}</TableCell>
                                <TableCell className={`text-xs ${trade.type === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
                                  ${trade.price.toLocaleString()}
                                </TableCell>
                                <TableCell className="text-xs">{trade.volume} BTC</TableCell>
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

            {/* Trade Tab */}
            <TabsContent value="trade" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Buy Order */}
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <CardTitle className="text-green-600">Buy {cryptoData.symbol}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Order Type</Label>
                      <Select defaultValue="market">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market">Market Order</SelectItem>
                          <SelectItem value="limit">Limit Order</SelectItem>
                          <SelectItem value="stop">Stop Order</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Amount ({cryptoData.symbol})</Label>
                      <Input type="number" placeholder="0.00" step="0.00001" />
                    </div>
                    <div>
                      <Label>Price per {cryptoData.symbol}</Label>
                      <Input value={cryptoData.price} disabled />
                    </div>
                    <div>
                      <Label>Estimated Total (USD)</Label>
                      <Input placeholder="$0.00" disabled />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Place Buy Order
                    </Button>
                  </CardContent>
                </Card>

                {/* Sell Order */}
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <CardTitle className="text-red-600">Sell {cryptoData.symbol}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Order Type</Label>
                      <Select defaultValue="market">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market">Market Order</SelectItem>
                          <SelectItem value="limit">Limit Order</SelectItem>
                          <SelectItem value="stop">Stop Order</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Amount ({cryptoData.symbol})</Label>
                      <Input type="number" placeholder="0.00" step="0.00001" />
                    </div>
                    <div>
                      <Label>Price per {cryptoData.symbol}</Label>
                      <Input value={cryptoData.price} disabled />
                    </div>
                    <div>
                      <Label>Estimated Total (USD)</Label>
                      <Input placeholder="$0.00" disabled />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Place Sell Order
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analysis Tab */}
            <TabsContent value="analysis" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Analyst Ratings */}
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Analyst Price Targets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analystRatings.map((rating, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-semibold">{rating.firm}</div>
                            <div className="text-sm text-muted-foreground">{rating.date}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getRatingColor(rating.rating)}>
                              {rating.rating}
                            </Badge>
                            <div className="text-right">
                              <div className="text-sm font-semibold">${rating.target.toLocaleString()}</div>
                              <div className="text-xs text-muted-foreground">Target</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Events */}
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {keyEvents.map((event, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                          <div className={`p-2 rounded-full ${
                            event.impact === 'high' ? 'bg-red-100 text-red-600' :
                            event.impact === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            {event.impact === 'high' ? <AlertTriangle className="h-4 w-4" /> :
                             event.impact === 'medium' ? <Activity className="h-4 w-4" /> :
                             <Shield className="h-4 w-4" />}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{event.event}</div>
                            <div className="text-sm text-muted-foreground">{event.date}</div>
                          </div>
                          <Badge variant="outline" className={
                            event.impact === 'high' ? 'border-red-200 text-red-700' :
                            event.impact === 'medium' ? 'border-yellow-200 text-yellow-700' :
                            'border-green-200 text-green-700'
                          }>
                            {event.impact}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Metrics Tab */}
            <TabsContent value="metrics" className="space-y-6">
              <Card style={glassCardStyle}>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="text-sm text-muted-foreground">{item.metric}</div>
                        <div className="text-2xl font-bold">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* News Tab */}
            <TabsContent value="news" className="space-y-6">
              <Card style={glassCardStyle}>
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="font-semibold mb-2">Bitcoin Hits New All-Time High</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Bitcoin reaches a new milestone as institutional adoption continues to drive demand.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>2 hours ago</span>
                        <span>CoinDesk</span>
                      </div>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="font-semibold mb-2">Major Exchange Adds Bitcoin ETF Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Leading cryptocurrency exchange announces support for Bitcoin ETF trading.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>4 hours ago</span>
                        <span>CoinTelegraph</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Exchanges Tab */}
            <TabsContent value="exchanges" className="space-y-6">
              <Card style={glassCardStyle}>
                <CardHeader>
                  <CardTitle>Exchange Markets</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exchange</TableHead>
                        <TableHead>Pair</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Volume (24h)</TableHead>
                        <TableHead>Spread</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {exchanges.map((exchange, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{exchange.exchange}</TableCell>
                          <TableCell>{exchange.pair}</TableCell>
                          <TableCell className="font-mono">${exchange.price.toLocaleString()}</TableCell>
                          <TableCell className="font-mono">{exchange.volume}</TableCell>
                          <TableCell className="text-green-600">{exchange.spread}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card style={glassCardStyle}>
                <CardHeader>
                  <CardTitle>About {cryptoData.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{cryptoData.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href={cryptoData.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Official Website
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <a href={cryptoData.whitepaper} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          Whitepaper
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Founded {cryptoData.founded}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Created by {cryptoData.creator}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span>Consensus: {cryptoData.consensus}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
}
