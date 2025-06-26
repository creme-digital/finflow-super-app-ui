
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Eye, Plus } from 'lucide-react';

interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  sparklineData: number[];
  rank?: number;
}

const trendingCoins: CryptoAsset[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '₿',
    price: 65400.00,
    change24h: -1.71,
    marketCap: 1284000000000,
    volume24h: 28400000000,
    sparklineData: [64000, 64500, 65200, 64800, 65400, 65100, 65400]
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '◆',
    price: 3252.00,
    change24h: 1.58,
    marketCap: 391000000000,
    volume24h: 15600000000,
    sparklineData: [3200, 3180, 3220, 3240, 3252, 3260, 3252]
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    icon: '◎',
    price: 156.42,
    change24h: 3.45,
    marketCap: 72500000000,
    volume24h: 3200000000,
    sparklineData: [150, 152, 155, 158, 156, 157, 156.42]
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    icon: '₳',
    price: 0.487,
    change24h: -0.89,
    marketCap: 17200000000,
    volume24h: 892000000,
    sparklineData: [0.49, 0.485, 0.492, 0.488, 0.487, 0.486, 0.487]
  },
  {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'BNB',
    icon: 'B',
    price: 412.50,
    change24h: 2.34,
    marketCap: 60400000000,
    volume24h: 1580000000,
    sparklineData: [405, 408, 410, 415, 412, 413, 412.50]
  },
  {
    id: 'polygon',
    symbol: 'MATIC',
    name: 'Polygon',
    icon: '⬟',
    price: 0.85,
    change24h: 4.56,
    marketCap: 8100000000,
    volume24h: 680000000,
    sparklineData: [0.82, 0.83, 0.84, 0.86, 0.85, 0.854, 0.85]
  }
];

const allCoins: (CryptoAsset & { rank: number })[] = [
  { ...trendingCoins[0], rank: 1 },
  { ...trendingCoins[1], rank: 2 },
  { ...trendingCoins[2], rank: 5 },
  { ...trendingCoins[3], rank: 8 },
  { ...trendingCoins[4], rank: 4 },
  { ...trendingCoins[5], rank: 15 },
  {
    id: 'chainlink',
    symbol: 'LINK',
    name: 'Chainlink',
    icon: '🔗',
    price: 14.78,
    change24h: 2.89,
    marketCap: 8900000000,
    volume24h: 780000000,
    sparklineData: [14.2, 14.5, 14.8, 14.6, 14.78, 14.9, 14.78],
    rank: 12
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    icon: '●',
    price: 7.23,
    change24h: -1.23,
    marketCap: 9200000000,
    volume24h: 420000000,
    sparklineData: [7.5, 7.3, 7.1, 7.2, 7.23, 7.1, 7.23],
    rank: 11
  }
];

const formatCurrency = (value: number) => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
};

const SimpleSparkline = ({ data, isPositive }: { data: number[]; isPositive: boolean }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 60;
    const y = 20 - ((value - min) / range) * 20;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="60" height="20" className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={isPositive ? '#10b981' : '#ef4444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function CryptoCoins() {
  const navigate = useNavigate();

  const handleViewAsset = (symbol: string) => {
    console.log('Viewing asset:', symbol);
    navigate(`/crypto/detail/${symbol.toLowerCase()}`);
  };

  const handleAddToWatchlist = (assetId: string) => {
    console.log('Adding to watchlist:', assetId);
    // Implementation for adding asset to watchlist
  };

  const handleRowClick = (symbol: string) => {
    navigate(`/crypto/detail/${symbol.toLowerCase()}`);
  };

  return (
    <div className="space-y-6">
      {/* Trending Coins Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Trending Coins</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingCoins.map((asset) => (
            <div
              key={asset.id}
              className="overflow-hidden p-4 cursor-pointer hover:shadow-lg transition-shadow"
              style={{
                border: '1px solid #FFFFFF',
                boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
              onClick={() => handleRowClick(asset.symbol)}
            >
              {/* Header with asset info and actions */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: asset.symbol === 'BTC' ? '#f7931a' : asset.symbol === 'ETH' ? '#627eea' : asset.symbol === 'SOL' ? '#9945ff' : asset.symbol === 'ADA' ? '#0033ad' : asset.symbol === 'BNB' ? '#f3ba2f' : '#8247e5' }}
                  >
                    {asset.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{asset.symbol}</div>
                    <div className="text-xs text-muted-foreground">{asset.name}</div>
                  </div>
                </div>
                <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                    onClick={() => handleViewAsset(asset.symbol)}
                  >
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-blue-500"
                    onClick={() => handleAddToWatchlist(asset.id)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Price and change */}
              <div className="mb-3">
                <div className="text-lg font-bold">${asset.price.toLocaleString()}</div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      asset.change24h >= 0 
                        ? 'text-green-600 border-green-200 bg-green-50' 
                        : 'text-red-600 border-red-200 bg-red-50'
                    }`}
                  >
                    {asset.change24h >= 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {Math.abs(asset.change24h)}%
                  </Badge>
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-3 flex justify-center">
                <SimpleSparkline data={asset.sparklineData} isPositive={asset.change24h >= 0} />
              </div>

              {/* Market data */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span className="font-medium">{formatCurrency(asset.marketCap)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Volume 24h</span>
                  <span className="font-medium">{formatCurrency(asset.volume24h)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Coins Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">All Coins</h3>
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
              <TableRow>
                <TableHead className="text-xs font-medium text-muted-foreground">#</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Name</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Price</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">24h %</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Market Cap</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Volume 24h</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Chart</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allCoins.sort((a, b) => a.rank - b.rank).map((asset) => (
                <TableRow 
                  key={asset.id} 
                  className="cursor-pointer hover:bg-gray-50/50"
                  onClick={() => handleRowClick(asset.symbol)}
                >
                  <TableCell className="font-medium">{asset.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: asset.symbol === 'BTC' ? '#f7931a' : asset.symbol === 'ETH' ? '#627eea' : asset.symbol === 'SOL' ? '#9945ff' : asset.symbol === 'ADA' ? '#0033ad' : asset.symbol === 'BNB' ? '#f3ba2f' : '#8247e5' }}
                      >
                        {asset.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{asset.symbol}</div>
                        <div className="text-xs text-muted-foreground">{asset.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono font-medium">${asset.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        asset.change24h >= 0 
                          ? 'text-green-600 border-green-200 bg-green-50' 
                          : 'text-red-600 border-red-200 bg-red-50'
                      }`}
                    >
                      {asset.change24h >= 0 ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {Math.abs(asset.change24h)}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{formatCurrency(asset.marketCap)}</TableCell>
                  <TableCell className="text-sm">{formatCurrency(asset.volume24h)}</TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <SimpleSparkline data={asset.sparklineData} isPositive={asset.change24h >= 0} />
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                        onClick={() => handleViewAsset(asset.symbol)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-500"
                        onClick={() => handleAddToWatchlist(asset.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
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
