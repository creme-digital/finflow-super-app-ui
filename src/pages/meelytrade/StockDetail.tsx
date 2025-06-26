
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
  Bookmark
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCurrency } from '@/contexts/CurrencyContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function StockDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { formatAmount } = useCurrency();

  // Mock stock data - in real app, this would come from API
  const stockData = {
    symbol: symbol?.toUpperCase() || 'AAPL',
    name: 'Apple Inc.',
    price: 175.50,
    change: 2.5,
    changePercentage: 1.45,
    volume: '45.2M',
    marketCap: '2.8T',
    peRatio: 28.5,
    dividend: 0.92,
    sector: 'Technology',
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
    website: 'https://www.apple.com',
    founded: '1976',
    employees: '164,000',
    headquarters: 'Cupertino, CA'
  };

  // Chart data
  const priceData = [
    { time: '09:30', price: 173.20 },
    { time: '10:00', price: 174.15 },
    { time: '10:30', price: 173.80 },
    { time: '11:00', price: 175.20 },
    { time: '11:30', price: 174.90 },
    { time: '12:00', price: 175.50 },
    { time: '12:30', price: 176.10 },
    { time: '13:00', price: 175.85 },
    { time: '13:30', price: 175.50 },
    { time: '14:00', price: 175.90 }
  ];

  const volumeData = [
    { time: '09:30', volume: 12.5 },
    { time: '10:00', volume: 8.3 },
    { time: '10:30', volume: 15.2 },
    { time: '11:00', volume: 9.8 },
    { time: '11:30', volume: 11.4 },
    { time: '12:00', volume: 7.9 },
    { time: '12:30', volume: 13.6 },
    { time: '13:00', volume: 10.2 },
    { time: '13:30', volume: 14.8 },
    { time: '14:00', volume: 16.3 }
  ];

  const financialData = [
    { metric: 'Revenue (TTM)', value: '$394.3B' },
    { metric: 'Net Income (TTM)', value: '$99.8B' },
    { metric: 'EPS (TTM)', value: '$6.16' },
    { metric: 'Book Value per Share', value: '$4.10' },
    { metric: 'Return on Equity', value: '160.9%' },
    { metric: 'Profit Margin', value: '25.3%' }
  ];

  const recentTrades = [
    { time: '14:35:42', price: 175.50, volume: 1200, type: 'buy' },
    { time: '14:35:38', price: 175.48, volume: 850, type: 'sell' },
    { time: '14:35:35', price: 175.52, volume: 2100, type: 'buy' },
    { time: '14:35:31', price: 175.49, volume: 750, type: 'sell' },
    { time: '14:35:28', price: 175.51, volume: 1450, type: 'buy' }
  ];

  const documents = [
    { name: '10-K Annual Report 2023', type: 'Annual Report', date: '2023-10-27', size: '12.4 MB' },
    { name: '10-Q Quarterly Report Q1 2024', type: 'Quarterly Report', date: '2024-02-01', size: '8.7 MB' },
    { name: 'Proxy Statement 2024', type: 'Proxy Statement', date: '2024-01-12', size: '5.2 MB' },
    { name: 'Earnings Call Transcript Q4 2023', type: 'Earnings Call', date: '2024-02-01', size: '1.8 MB' }
  ];

  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <Layout>
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

        {/* Price Overview */}
        <Card style={glassCardStyle}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="text-4xl font-bold">{formatAmount(stockData.price)}</div>
                <div className={`flex items-center gap-2 text-lg ${stockData.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.change >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                  {stockData.change >= 0 ? '+' : ''}{stockData.change} ({stockData.changePercentage}%)
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <div className="text-muted-foreground">Volume</div>
                  <div className="font-semibold">{stockData.volume}</div>
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
                  <div className="text-muted-foreground">Dividend</div>
                  <div className="font-semibold">{stockData.dividend}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
          </TabsList>

          {/* Chart Tab */}
          <TabsContent value="chart" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Price Chart */}
              <div className="lg:col-span-2">
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Price Chart</CardTitle>
                      <Select defaultValue="1d">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1d">1D</SelectItem>
                          <SelectItem value="5d">5D</SelectItem>
                          <SelectItem value="1m">1M</SelectItem>
                          <SelectItem value="3m">3M</SelectItem>
                          <SelectItem value="1y">1Y</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={priceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E3E3EA" />
                          <XAxis dataKey="time" />
                          <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Volume Chart */}
              <div>
                <Card style={glassCardStyle}>
                  <CardHeader>
                    <CardTitle>Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={volumeData}>
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="volume" fill="#8b5cf6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Trades */}
                <Card style={glassCardStyle} className="mt-6">
                  <CardHeader>
                    <CardTitle>Recent Trades</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="max-h-[200px] overflow-y-auto">
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
                                {formatAmount(trade.price)}
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
                    <h3 className="font-semibold mb-2">Apple Reports Strong Q4 Results</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Apple Inc. reported better-than-expected quarterly results with revenue growth across all segments.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>2 hours ago</span>
                      <span>Reuters</span>
                    </div>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">New iPhone Launch Expected</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Industry analysts expect Apple to announce new iPhone models in the upcoming event.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>4 hours ago</span>
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
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {doc.type} • {doc.date} • {doc.size}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
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
    </Layout>
  );
}
