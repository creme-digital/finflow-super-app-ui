import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Star, Trash2, Edit2, Share2 } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function MeelyTradeWatchlists() {
  const { formatAmount } = useCurrency();

  const watchlists = [
    {
      id: 'WL-001',
      name: 'Tech Giants',
      description: 'Top technology companies',
      type: 'stocks',
      items: 5,
      lastUpdated: '2024-03-15',
      isPublic: true
    },
    {
      id: 'WL-002',
      name: 'DeFi Projects',
      description: 'Decentralized finance tokens',
      type: 'crypto',
      items: 8,
      lastUpdated: '2024-03-14',
      isPublic: false
    },
    {
      id: 'WL-003',
      name: 'Dividend Kings',
      description: 'High dividend yield stocks',
      type: 'stocks',
      items: 12,
      lastUpdated: '2024-03-13',
      isPublic: true
    }
  ];

  const watchlistItems = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.50,
      change: 2.5,
      changePercentage: 1.45,
      type: 'stock',
      watchlist: 'Tech Giants'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3450.75,
      change: 3.2,
      changePercentage: 3.2,
      type: 'crypto',
      watchlist: 'DeFi Projects'
    },
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      price: 158.25,
      change: 0.8,
      changePercentage: 0.51,
      type: 'stock',
      watchlist: 'Dividend Kings'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Watchlists</h1>
          <p className="text-muted-foreground mt-1">
            Manage your watchlists and track assets across markets.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search watchlists..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button className="w-full md:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            New Watchlist
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {watchlists.map((watchlist) => (
            <Card key={watchlist.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-medium">{watchlist.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{watchlist.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {watchlist.items} items • {watchlist.type}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Last updated: {watchlist.lastUpdated}
                    </p>
                  </div>
                  <Badge variant={watchlist.isPublic ? "default" : "secondary"}>
                    {watchlist.isPublic ? "Public" : "Private"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Watchlist Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex-1">
                  <Label>Watchlist</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by watchlist" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Watchlists</SelectItem>
                      {watchlists.map((watchlist) => (
                        <SelectItem key={watchlist.id} value={watchlist.id}>
                          {watchlist.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label>Type</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="stock">Stocks</SelectItem>
                      <SelectItem value="crypto">Crypto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Watchlist</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {watchlistItems.map((item) => (
                    <TableRow key={item.symbol}>
                      <TableCell className="font-medium">{item.symbol}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{formatAmount(item.price)}</TableCell>
                      <TableCell>
                        <div className={item.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                          {item.change >= 0 ? '+' : ''}{item.change} ({item.changePercentage}%)
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {item.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.watchlist}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Star className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
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