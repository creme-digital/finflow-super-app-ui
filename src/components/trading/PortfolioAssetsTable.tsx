
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';

interface PortfolioAsset {
  rank: number;
  symbol: string;
  name: string;
  shortName: string;
  shares: number;
  price: number;
  value: number;
  change1h: number;
  change24h: number;
  change7d: number;
  weight: number;
  priceHistory: { date: string; price: number }[];
}

const portfolioAssets: PortfolioAsset[] = [
  {
    rank: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shortName: 'AAPL',
    shares: 10,
    price: 175.50,
    value: 1755.00,
    change1h: 0.5,
    change24h: 1.45,
    change7d: 3.2,
    weight: 15.6,
    priceHistory: [
      { date: '2024-03-09', price: 170 },
      { date: '2024-03-10', price: 172 },
      { date: '2024-03-11', price: 175 },
      { date: '2024-03-12', price: 173 },
      { date: '2024-03-13', price: 176 },
      { date: '2024-03-14', price: 174 },
      { date: '2024-03-15', price: 175.50 },
    ]
  },
  {
    rank: 2,
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    shortName: 'MSFT',
    shares: 5,
    price: 415.32,
    value: 2076.60,
    change1h: 0.8,
    change24h: 2.07,
    change7d: 4.5,
    weight: 18.4,
    priceHistory: [
      { date: '2024-03-09', price: 405 },
      { date: '2024-03-10', price: 408 },
      { date: '2024-03-11', price: 412 },
      { date: '2024-03-12', price: 410 },
      { date: '2024-03-13', price: 415 },
      { date: '2024-03-14', price: 413 },
      { date: '2024-03-15', price: 415.32 },
    ]
  },
  {
    rank: 3,
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    shortName: 'TSLA',
    shares: 8,
    price: 245.75,
    value: 1966.00,
    change1h: -0.3,
    change24h: -2.09,
    change7d: -1.8,
    weight: 17.4,
    priceHistory: [
      { date: '2024-03-09', price: 250 },
      { date: '2024-03-10', price: 248 },
      { date: '2024-03-11', price: 245 },
      { date: '2024-03-12', price: 247 },
      { date: '2024-03-13', price: 244 },
      { date: '2024-03-14', price: 246 },
      { date: '2024-03-15', price: 245.75 },
    ]
  },
  {
    rank: 4,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    shortName: 'GOOGL',
    shares: 12,
    price: 142.65,
    value: 1711.80,
    change1h: 0.2,
    change24h: -0.87,
    change7d: 2.1,
    weight: 15.2,
    priceHistory: [
      { date: '2024-03-09', price: 145 },
      { date: '2024-03-10', price: 144 },
      { date: '2024-03-11', price: 143 },
      { date: '2024-03-12', price: 142 },
      { date: '2024-03-13', price: 141 },
      { date: '2024-03-14', price: 143 },
      { date: '2024-03-15', price: 142.65 },
    ]
  },
  {
    rank: 5,
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    shortName: 'AMZN',
    shares: 15,
    price: 178.25,
    value: 2673.75,
    change1h: 0.7,
    change24h: 1.97,
    change7d: 5.3,
    weight: 23.7,
    priceHistory: [
      { date: '2024-03-09', price: 175 },
      { date: '2024-03-10', price: 176 },
      { date: '2024-03-11', price: 178 },
      { date: '2024-03-12', price: 177 },
      { date: '2024-03-13', price: 179 },
      { date: '2024-03-14', price: 178 },
      { date: '2024-03-15', price: 178.25 },
    ]
  },
  {
    rank: 6,
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    shortName: 'NVDA',
    shares: 3,
    price: 875.28,
    value: 2625.84,
    change1h: -0.2,
    change24h: -1.39,
    change7d: 6.8,
    weight: 23.3,
    priceHistory: [
      { date: '2024-03-09', price: 880 },
      { date: '2024-03-10', price: 885 },
      { date: '2024-03-11', price: 875 },
      { date: '2024-03-12', price: 878 },
      { date: '2024-03-13', price: 872 },
      { date: '2024-03-14', price: 876 },
      { date: '2024-03-15', price: 875.28 },
    ]
  }
];

export function PortfolioAssetsTable() {
  const { formatAmount } = useCurrency();

  const totalPortfolioValue = portfolioAssets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
            <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Holdings</span>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search holdings..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-auto">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Position
            </Button>
          </div>
        </div>

        <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow style={{ background: '#F8F8FA' }}>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">#</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Shares</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Price</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Value</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">1h %</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">24h %</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">7d %</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Weight</TableHead>
                <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Last 7 Days</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioAssets.map((asset) => (
                <TableRow key={asset.symbol}>
                  <TableCell>{asset.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ 
                          background: asset.symbol === 'AAPL' ? '#007AFF' : 
                                     asset.symbol === 'MSFT' ? '#00BCF2' : 
                                     asset.symbol === 'TSLA' ? '#CC0000' : 
                                     asset.symbol === 'NVDA' ? '#76B900' : 
                                     asset.symbol === 'AMZN' ? '#FF9900' : '#4285F4' 
                        }}
                      >
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-sm text-[#6D6D74]">{asset.shortName}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{asset.shares}</TableCell>
                  <TableCell className="font-mono">{formatAmount(asset.price)}</TableCell>
                  <TableCell className="font-mono font-medium">{formatAmount(asset.value)}</TableCell>
                  <TableCell>
                    <div className={asset.change1h >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {asset.change1h >= 0 ? '+' : ''}{asset.change1h}%
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={asset.change7d >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {asset.change7d >= 0 ? '+' : ''}{asset.change7d}%
                    </div>
                  </TableCell>
                  <TableCell>{asset.weight.toFixed(1)}%</TableCell>
                  <TableCell>
                    <div className="w-32 h-12">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={asset.priceHistory}>
                          <defs>
                            <linearGradient id={`color-${asset.symbol}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={asset.change7d >= 0 ? '#10b981' : '#ef4444'} stopOpacity={0.8}/>
                              <stop offset="95%" stopColor={asset.change7d >= 0 ? '#10b981' : '#ef4444'} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="price"
                            stroke={asset.change7d >= 0 ? '#10b981' : '#ef4444'}
                            fillOpacity={1}
                            fill={`url(#color-${asset.symbol})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-[#6D6D74]">
          <span>Total Portfolio Value: <span className="font-mono font-medium text-black">{formatAmount(totalPortfolioValue)}</span></span>
          <span>6 positions</span>
        </div>
      </CardContent>
    </Card>
  );
}
