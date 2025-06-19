
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Eye, X } from 'lucide-react';

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
}

const watchlistAssets: CryptoAsset[] = [
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

export function CryptoWatchlistCards() {
  const handleRemoveAsset = (assetId: string) => {
    console.log('Removing asset:', assetId);
    // Implementation for removing asset from watchlist
  };

  const handleViewAsset = (assetId: string) => {
    console.log('Viewing asset:', assetId);
    // Implementation for viewing asset details
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Watchlist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {watchlistAssets.map((asset) => (
          <div
            key={asset.id}
            className="overflow-hidden p-4"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
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
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                  onClick={() => handleViewAsset(asset.id)}
                >
                  <Eye className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-muted-foreground hover:text-red-500"
                  onClick={() => handleRemoveAsset(asset.id)}
                >
                  <X className="h-3 w-3" />
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
  );
}
