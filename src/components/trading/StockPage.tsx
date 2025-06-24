import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Download, TrendingUp, TrendingDown, Star, Plus } from 'lucide-react';

// Mock data for recommended stocks
const recommendedStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.50,
    change: 2.5,
    changePercentage: 1.45,
    reason: 'Strong quarterly earnings',
    rating: 'Buy'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 415.32,
    change: 8.45,
    changePercentage: 2.07,
    reason: 'AI growth potential',
    rating: 'Strong Buy'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 875.28,
    change: -12.34,
    changePercentage: -1.39,
    reason: 'AI chip demand',
    rating: 'Buy'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.65,
    change: -1.25,
    changePercentage: -0.87,
    reason: 'Search dominance',
    rating: 'Hold'
  }
];

// Mock data for all stocks
const allStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.50,
    change: 2.5,
    changePercentage: 1.45,
    volume: '45.2M',
    marketCap: '2.8T',
    peRatio: 28.5,
    dividend: 0.92,
    sector: 'Technology',
    beta: 1.21
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 415.32,
    change: 8.45,
    changePercentage: 2.07,
    volume: '28.5M',
    marketCap: '3.1T',
    peRatio: 35.2,
    dividend: 0.75,
    sector: 'Technology',
    beta: 0.89
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.65,
    change: -1.25,
    changePercentage: -0.87,
    volume: '22.3M',
    marketCap: '1.8T',
    peRatio: 24.8,
    dividend: 0.00,
    sector: 'Technology',
    beta: 1.05
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 178.25,
    change: 3.45,
    changePercentage: 1.97,
    volume: '38.5M',
    marketCap: '1.9T',
    peRatio: 52.4,
    dividend: 0.00,
    sector: 'Consumer Discretionary',
    beta: 1.33
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 245.75,
    change: -5.25,
    changePercentage: -2.09,
    volume: '32.8M',
    marketCap: '780B',
    peRatio: 65.2,
    dividend: 0.00,
    sector: 'Consumer Discretionary',
    beta: 2.01
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 485.58,
    change: 12.35,
    changePercentage: 2.61,
    volume: '25.6M',
    marketCap: '1.2T',
    peRatio: 23.1,
    dividend: 0.00,
    sector: 'Communication Services',
    beta: 1.18
  }
];

const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'Strong Buy':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Buy':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Hold':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Sell':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function StockPage() {
  const [search, setSearch] = useState('');
  const [watchlist, setWatchlist] = useState<string[]>([]);

  const filteredStocks = allStocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(search.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWatchlist = (symbol: string) => {
    setWatchlist(prev =>
      prev.includes(symbol)
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    );
  };

  return (
    <div className="space-y-6">
      {/* Recommended Stocks Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedStocks.map((stock) => (
            <Card
              key={stock.symbol}
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
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-lg">{stock.symbol}</div>
                    <div className="text-sm text-muted-foreground">{stock.name}</div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getRatingColor(stock.rating)}
                  >
                    {stock.rating}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <div className="text-2xl font-bold">${stock.price.toLocaleString()}</div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercentage}%)
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-3">
                  {stock.reason}
                </div>

                <Button className="w-full" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Portfolio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Stocks Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Stocks</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stocks..."
                className="pl-8"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Table with matching Cards/Transfers styling */}
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
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border">
                <TableHead className="text-muted-foreground font-medium py-3">Symbol</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Name</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Price</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Change</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Volume</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Market Cap</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">P/E Ratio</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Dividend</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Beta</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3">Sector</TableHead>
                <TableHead className="text-muted-foreground font-medium py-3 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock.symbol} className="border-b border-border/50 hover:bg-muted/50">
                  <TableCell className="font-medium text-foreground">{stock.symbol}</TableCell>
                  <TableCell className="text-foreground">{stock.name}</TableCell>
                  <TableCell className="font-mono text-foreground">${stock.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${
                      stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stock.change >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercentage}%)
                    </div>
                  </TableCell>
                  <TableCell className="text-foreground">{stock.volume}</TableCell>
                  <TableCell className="text-foreground">{stock.marketCap}</TableCell>
                  <TableCell className="text-foreground">{stock.peRatio}</TableCell>
                  <TableCell className="text-foreground">{stock.dividend > 0 ? `${stock.dividend}%` : 'N/A'}</TableCell>
                  <TableCell className="text-foreground">{stock.beta}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {stock.sector}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => toggleWatchlist(stock.symbol)}
                      className={watchlist.includes(stock.symbol) ? 'text-yellow-500' : ''}
                    >
                      <Star 
                        className={`h-4 w-4 ${
                          watchlist.includes(stock.symbol) ? 'fill-current' : ''
                        }`} 
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
