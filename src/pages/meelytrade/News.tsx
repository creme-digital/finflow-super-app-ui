import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Bookmark, Share2, Clock, TrendingUp, TrendingDown, DollarSign, Coins } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function MeelyTradeNews() {
  const { formatAmount } = useCurrency();

  const marketHighlights = [
    {
      title: 'S&P 500 Hits New Record High',
      description: 'The S&P 500 index reached a new all-time high as tech stocks continue to rally.',
      impact: 'positive',
      category: 'Market',
      time: '2 hours ago',
      source: 'Financial Times'
    },
    {
      title: 'Bitcoin Surges Past $65,000',
      description: 'Bitcoin price breaks through $65,000 resistance level amid institutional buying.',
      impact: 'positive',
      category: 'Crypto',
      time: '3 hours ago',
      source: 'CoinDesk'
    },
    {
      title: 'Fed Signals Rate Cut',
      description: 'Federal Reserve indicates potential interest rate cuts in the coming months.',
      impact: 'neutral',
      category: 'Economy',
      time: '5 hours ago',
      source: 'Bloomberg'
    }
  ];

  const newsArticles = [
    {
      id: 'NEWS-001',
      title: 'Apple Announces New AI Features',
      description: 'Apple unveils new artificial intelligence capabilities for its devices, stock up 3%.',
      category: 'Technology',
      time: '1 hour ago',
      source: 'TechCrunch',
      image: 'https://placeholder.com/400x200',
      relatedAssets: ['AAPL', 'MSFT', 'GOOGL']
    },
    {
      id: 'NEWS-002',
      title: 'Ethereum Upgrade Successfully Implemented',
      description: 'Ethereum network completes major upgrade, improving scalability and reducing fees.',
      category: 'Crypto',
      time: '4 hours ago',
      source: 'The Block',
      image: 'https://placeholder.com/400x200',
      relatedAssets: ['ETH', 'SOL', 'MATIC']
    },
    {
      id: 'NEWS-003',
      title: 'Oil Prices Drop Amid Supply Concerns',
      description: 'Crude oil prices fall as OPEC+ considers production increases.',
      category: 'Commodities',
      time: '6 hours ago',
      source: 'Reuters',
      image: 'https://placeholder.com/400x200',
      relatedAssets: ['XOM', 'CVX', 'BP']
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">News</h1>
          <p className="text-muted-foreground mt-1">
            Stay informed with the latest market news and updates.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search news..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="w-full md:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {marketHighlights.map((highlight, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{highlight.title}</CardTitle>
                {highlight.impact === 'positive' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : highlight.impact === 'negative' ? (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                ) : (
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{highlight.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{highlight.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {highlight.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {newsArticles.map((article) => (
                <Card key={article.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="mt-2">{article.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{article.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {article.relatedAssets.map((asset) => (
                            <Badge key={asset} variant="secondary">
                              {asset}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.time}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">Source: {article.source}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <Label>Category</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Time Range</Label>
                <Select defaultValue="24h">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 Hours</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <Label>Category</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="defi">DeFi</SelectItem>
                    <SelectItem value="nft">NFT</SelectItem>
                    <SelectItem value="regulation">Regulation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Time Range</Label>
                <Select defaultValue="24h">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 Hours</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="economy" className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <Label>Category</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="monetary">Monetary Policy</SelectItem>
                    <SelectItem value="fiscal">Fiscal Policy</SelectItem>
                    <SelectItem value="trade">Trade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Time Range</Label>
                <Select defaultValue="24h">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24h">Last 24 Hours</SelectItem>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
} 