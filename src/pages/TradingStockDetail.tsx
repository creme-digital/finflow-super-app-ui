import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

// TradingView Widget Component
const TradingViewWidget = ({ symbol }: { symbol: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: `NASDAQ:${symbol}`,
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
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
      container_id: "tradingview_chart"
    });

    const container = document.getElementById('tradingview_chart');
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
      id="tradingview_chart" 
      className="h-[600px] w-full"
      style={{ minHeight: '600px' }}
    />
  );
};

export default function TradingStockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  // Mock stock data - in real app, this would come from API
  const stockData = {
    symbol: symbol?.toUpperCase() || 'MSFT',
    name: 'Microsoft Corp.',
    price: 415.32,
    change: 8.45,
    changePercentage: 2.07,
    volume: '28.5M',
    marketCap: '3.1T',
    peRatio: 35.2,
    dividend: 0.75,
    sector: 'Technology',
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
    website: 'https://www.microsoft.com',
    founded: '1975',
    employees: '221,000',
    headquarters: 'Redmond, WA',
    high52Week: 468.35,
    low52Week: 309.45,
    avgVolume: '32.8M',
    beta: 0.89,
    eps: 9.65,
    revenue: '$211.9B',
    netIncome: '$72.4B'
  };

  // Chart data
  const priceData = [
    { time: '09:30', price: 410.20 },
    { time: '10:00', price: 412.15 },
    { time: '10:30', price: 411.80 },
    { time: '11:00', price: 414.20 },
    { time: '11:30', price: 413.90 },
    { time: '12:00', price: 415.32 },
    { time: '12:30', price: 416.10 },
    { time: '13:00', price: 415.85 },
    { time: '13:30', price: 415.50 },
    { time: '14:00', price: 415.90 }
  ];

  const volumeData = [
    { time: '09:30', volume: 8.5 },
    { time: '10:00', volume: 6.3 },
    { time: '10:30', volume: 12.2 },
    { time: '11:00', volume: 7.8 },
    { time: '11:30', volume: 9.4 },
    { time: '12:00', volume: 5.9 },
    { time: '12:30', volume: 11.6 },
    { time: '13:00', volume: 8.2 },
    { time: '13:30', volume: 12.8 },
    { time: '14:00', volume: 14.3 }
  ];

  const financialData = [
    { metric: 'Revenue (TTM)', value: '$211.9B' },
    { metric: 'Net Income (TTM)', value: '$72.4B' },
    { metric: 'EPS (TTM)', value: '$9.65' },
    { metric: 'Book Value per Share', value: '$13.90' },
    { metric: 'Return on Equity', value: '36.7%' },
    { metric: 'Profit Margin', value: '34.1%' }
  ];

  const recentTrades = [
    { time: '14:35:42', price: 415.32, volume: 1500, type: 'buy' },
    { time: '14:35:38', price: 415.28, volume: 950, type: 'sell' },
    { time: '14:35:35', price: 415.35, volume: 2300, type: 'buy' },
    { time: '14:35:31', price: 415.29, volume: 800, type: 'sell' },
    { time: '14:35:28', price: 415.33, volume: 1750, type: 'buy' }
  ];

  // Enhanced data for more detailed view
  const analystRatings = [
    { firm: 'Goldman Sachs', rating: 'Buy', target: 450, date: '2024-01-15' },
    { firm: 'Morgan Stanley', rating: 'Overweight', target: 435, date: '2024-01-12' },
    { firm: 'JPMorgan', rating: 'Neutral', target: 420, date: '2024-01-10' },
    { firm: 'Bank of America', rating: 'Buy', target: 460, date: '2024-01-08' }
  ];

  const keyEvents = [
    { date: '2024-01-20', event: 'Quarterly Earnings Release', impact: 'high' },
    { date: '2024-02-15', event: 'Ex-Dividend Date', impact: 'medium' },
    { date: '2024-03-10', event: 'Annual Shareholder Meeting', impact: 'low' }
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
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
              <h1 className="text-3xl font-semibold tracking-tight">{stockData.symbol}</h1>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {stockData.sector}
              </Badge>
              <Button variant="ghost" size="icon">
                <Star className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-muted-foreground">{stockData.name}</p>
          </div>
        </div>

        {/* Enhanced Price Overview */}
        <Card style={glassCardStyle}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="text-4xl font-bold">${stockData.price.toLocaleString()}</div>
                <div className={`flex items-center gap-2 text-lg ${stockData.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.change >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                  {stockData.change >= 0 ? '+' : ''}{stockData.change} ({stockData.changePercentage}%)
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="text-muted-foreground">Volume</div>
                  <div className="font-semibold">{stockData.volume}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Avg Volume</div>
                  <div className="font-semibold">{stockData.avgVolume}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Market Cap</div>
                  <div className="font-semibold">{stockData.marketCap}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">P/E Ratio</div>
                  <div className="font-semibold">{stockData.peRatio}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">52W High</div>
                  <div className="font-semibold">${stockData.high52Week}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">52W Low</div>
                  <div className="font-semibold">${stockData.low52Week}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Beta</div>
                  <div className="font-semibold">{stockData.beta}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">EPS</div>
                  <div className="font-semibold">${stockData.eps}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Dividend</div>
                  <div className="font-semibold">{stockData.dividend}%</div>
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
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
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
                    <TradingViewWidget symbol={stockData.symbol} />
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
                      <span className="font-semibold">$412.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">High</span>
                      <span className="font-semibold">$418.90</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Low</span>
                      <span className="font-semibold">$409.20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Prev Close</span>
                      <span className="font-semibold">$406.87</span>
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
                            <TableHead className="text-xs">Volume</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentTrades.map((trade, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-xs">{trade.time}</TableCell>
                              <TableCell className={`text-xs ${trade.type === 'buy' ? 'text-green-600' : 'text-red-600'}`}>
                                ${trade.price.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-xs">{trade.volume.toLocaleString()}</TableCell>
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
                  <CardTitle className="text-green-600">Buy {stockData.symbol}</CardTitle>
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
                    <Label>Quantity</Label>
                    <Input type="number" placeholder="Number of shares" />
                  </div>
                  <div>
                    <Label>Price per Share</Label>
                    <Input value={stockData.price} disabled />
                  </div>
                  <div>
                    <Label>Estimated Total</Label>
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
                  <CardTitle className="text-red-600">Sell {stockData.symbol}</CardTitle>
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
                    <Label>Quantity</Label>
                    <Input type="number" placeholder="Number of shares" />
                  </div>
                  <div>
                    <Label>Price per Share</Label>
                    <Input value={stockData.price} disabled />
                  </div>
                  <div>
                    <Label>Estimated Total</Label>
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

          {/* New Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Analyst Ratings */}
              <Card style={glassCardStyle}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Analyst Ratings
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
                            <div className="text-sm font-semibold">${rating.target}</div>
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

          {/* Financials Tab */}
          <TabsContent value="financials" className="space-y-6">
            <Card style={glassCardStyle}>
              <CardHeader>
                <CardTitle>Key Financial Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {financialData.map((item, index) => (
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
                    <h3 className="font-semibold mb-2">Microsoft Reports Strong Q4 Results</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Microsoft Corporation reported better-than-expected quarterly results with cloud revenue growth.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>1 hour ago</span>
                      <span>Reuters</span>
                    </div>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">Azure Growth Accelerates</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Microsoft's cloud platform Azure continues to show strong growth in the enterprise segment.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>3 hours ago</span>
                      <span>TechCrunch</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card style={glassCardStyle}>
              <CardHeader>
                <CardTitle>Company Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">10-K Annual Report 2023</div>
                        <div className="text-sm text-muted-foreground">
                          Annual Report • 2023-07-27 • 15.2 MB
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Tab */}
          <TabsContent value="company" className="space-y-6">
            <Card style={glassCardStyle}>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground">{stockData.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a href={stockData.website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        {stockData.website}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Founded {stockData.founded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{stockData.employees} employees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span>{stockData.headquarters}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
