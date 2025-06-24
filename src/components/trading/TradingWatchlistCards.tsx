
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Eye, X } from 'lucide-react';

interface StockAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  sparklineData: number[];
}

const watchlistAssets: StockAsset[] = [
  {
    id: 'apple',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.50,
    change24h: 1.45,
    marketCap: 2800000000000,
    volume24h: 45200000000,
    sparklineData: [170, 172, 175, 173, 176, 174, 175.50]
  },
  {
    id: 'microsoft',
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: 415.32,
    change24h: 2.07,
    marketCap: 3100000000000,
    volume24h: 28500000000,
    sparklineData: [405, 408, 412, 410, 415, 413, 415.32]
  },
  {
    id: 'tesla',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 245.75,
    change24h: -2.09,
    marketCap: 780000000000,
    volume24h: 32800000000,
    sparklineData: [250, 248, 245, 247, 244, 246, 245.75]
  },
  {
    id: 'nvidia',
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 875.28,
    change24h: -1.39,
    marketCap: 2200000000000,
    volume24h: 15600000000,
    sparklineData: [880, 885, 875, 878, 872, 876, 875.28]
  },
  {
    id: 'amazon',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 178.25,
    change24h: 1.97,
    marketCap: 1900000000000,
    volume24h: 38500000000,
    sparklineData: [175, 176, 178, 177, 179, 178, 178.25]
  },
  {
    id: 'alphabet',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.65,
    change24h: -0.87,
    marketCap: 1800000000000,
    volume24h: 22300000000,
    sparklineData: [145, 144, 143, 142, 141, 143, 142.65]
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

export function TradingWatchlistCards() {
  const handleRemoveAsset = (assetId: string) => {
    console.log('Removing stock from watchlist:', assetId);
    // Implementation for removing stock from watchlist
  };

  const handleViewAsset = (assetId: string) => {
    console.log('Viewing stock details:', assetId);
    // Implementation for viewing stock details
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Stock Watchlist</h3>
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
