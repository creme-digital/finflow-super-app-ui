
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Globe, FileText, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';
import { TradingViewChart } from '@/components/crypto/TradingViewChart';
import { useCurrency } from '@/contexts/CurrencyContext';

// Mock data for crypto coins
const cryptoData = {
  bitcoin: {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '₿',
    price: 65400.00,
    change24h: -1.71,
    marketCap: 1284000000000,
    volume24h: 28400000000,
    rank: 1,
    description: 'Bitcoin is the world\'s first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto.',
    website: 'https://bitcoin.org',
    whitepaper: 'https://bitcoin.org/bitcoin.pdf',
    maxSupply: '21M',
    circulatingSupply: '19.8M',
    allTimeHigh: 73757.00,
    allTimeLow: 0.0495
  },
  ethereum: {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '◆',
    price: 3252.00,
    change24h: 1.58,
    marketCap: 391000000000,
    volume24h: 15600000000,
    rank: 2,
    description: 'Ethereum is a decentralized platform that runs smart contracts and decentralized applications (DApps).',
    website: 'https://ethereum.org',
    whitepaper: 'https://ethereum.org/en/whitepaper/',
    maxSupply: 'No Limit',
    circulatingSupply: '120.3M',
    allTimeHigh: 4878.26,
    allTimeLow: 0.432
  },
  solana: {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    icon: '◎',
    price: 156.42,
    change24h: 3.45,
    marketCap: 72500000000,
    volume24h: 3200000000,
    rank: 5,
    description: 'Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale.',
    website: 'https://solana.com',
    whitepaper: 'https://solana.com/solana-whitepaper.pdf',
    maxSupply: 'No Limit',
    circulatingSupply: '463.9M',
    allTimeHigh: 259.96,
    allTimeLow: 0.500
  },
  cardano: {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    icon: '₳',
    price: 0.487,
    change24h: -0.89,
    marketCap: 17200000000,
    volume24h: 892000000,
    rank: 8,
    description: 'Cardano is a blockchain platform for changemakers, innovators, and visionaries.',
    website: 'https://cardano.org',
    whitepaper: 'https://cardano.org/white-paper/',
    maxSupply: '45B',
    circulatingSupply: '35.3B',
    allTimeHigh: 3.10,
    allTimeLow: 0.0174
  },
  binancecoin: {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'BNB',
    icon: 'B',
    price: 412.50,
    change24h: 2.34,
    marketCap: 60400000000,
    volume24h: 1580000000,
    rank: 4,
    description: 'BNB is the native cryptocurrency of the Binance exchange and BNB Chain ecosystem.',
    website: 'https://www.binance.com',
    whitepaper: 'https://www.binance.com/en/research',
    maxSupply: '200M',
    circulatingSupply: '166.8M',
    allTimeHigh: 686.31,
    allTimeLow: 0.0398
  },
  polygon: {
    id: 'polygon',
    symbol: 'MATIC',
    name: 'Polygon',
    icon: '⬟',
    price: 0.85,
    change24h: 4.56,
    marketCap: 8100000000,
    volume24h: 680000000,
    rank: 15,
    description: 'Polygon is a decentralized platform that provides tools for building and scaling Ethereum applications.',
    website: 'https://polygon.technology',
    whitepaper: 'https://polygon.technology/papers/',
    maxSupply: '10B',
    circulatingSupply: '9.5B',
    allTimeHigh: 2.92,
    allTimeLow: 0.00314
  }
};

const formatCurrency = (value: number) => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
};

export default function CryptoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formatAmount } = useCurrency();
  const [activeTab, setActiveTab] = useState('chart');

  const coin = cryptoData[id as keyof typeof cryptoData];

  if (!coin) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Coin Not Found</h2>
            <p className="text-muted-foreground mb-4">The cryptocurrency you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/crypto')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Crypto
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const getCoinColor = (symbol: string) => {
    const colors = {
      'BTC': '#f7931a',
      'ETH': '#627eea',
      'SOL': '#9945ff',
      'ADA': '#0033ad',
      'BNB': '#f3ba2f',
      'MATIC': '#8247e5'
    };
    return colors[symbol as keyof typeof colors] || '#8247e5';
  };

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/crypto')}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
              style={{ background: getCoinColor(coin.symbol) }}
            >
              {coin.icon}
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{coin.name}</h1>
              <p className="text-muted-foreground">{coin.symbol} • Rank #{coin.rank}</p>
            </div>
          </div>
        </div>

        {/* Price and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Price Card */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">{formatAmount(coin.price)}</div>
                  <Badge 
                    variant="outline" 
                    className={`mt-2 ${
                      coin.change24h >= 0 
                        ? 'text-green-600 border-green-200 bg-green-50' 
                        : 'text-red-600 border-red-200 bg-red-50'
                    }`}
                  >
                    {coin.change24h >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(coin.change24h)}% (24h)
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Market Cap</span>
                    <div className="font-medium">{formatCurrency(coin.marketCap)}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Volume (24h)</span>
                    <div className="font-medium">{formatCurrency(coin.volume24h)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">All-Time High</span>
                  <div className="font-semibold">{formatAmount(coin.allTimeHigh)}</div>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">All-Time Low</span>
                  <div className="font-semibold">{formatAmount(coin.allTimeLow)}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-muted-foreground">Circulating Supply</span>
                  <div className="font-semibold">{coin.circulatingSupply}</div>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Max Supply</span>
                  <div className="font-semibold">{coin.maxSupply}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'chart'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('chart')}
          >
            Chart
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'about'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'chart' && (
          <div className="space-y-6">
            {/* TradingView Chart */}
            <TradingViewChart />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* About Section */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>About {coin.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {coin.description}
                </p>
              </CardContent>
            </Card>

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between"
                  asChild
                >
                  <a href={coin.website} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Website
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between"
                  asChild
                >
                  <a href={coin.whitepaper} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Whitepaper
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
}
