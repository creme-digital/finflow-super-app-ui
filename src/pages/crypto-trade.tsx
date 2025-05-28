import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Search, Plus, ArrowLeft, DollarSign } from 'lucide-react';

const coins = [
  { symbol: 'BTC', name: 'Bitcoin', price: 69000, change: '+2.4%', positive: true, marketCap: '1.3T', volume: '35B' },
  { symbol: 'ETH', name: 'Ethereum', price: 3500, change: '-1.2%', positive: false, marketCap: '420B', volume: '18B' },
  { symbol: 'SOL', name: 'Solana', price: 160, change: '+4.1%', positive: true, marketCap: '70B', volume: '2.5B' },
  { symbol: 'ADA', name: 'Cardano', price: 0.55, change: '+0.8%', positive: true, marketCap: '19B', volume: '0.8B' },
];

const mockOrderBook = {
  bids: [
    { price: 68950, amount: 0.5 },
    { price: 68900, amount: 1.2 },
    { price: 68850, amount: 0.8 },
  ],
  asks: [
    { price: 69010, amount: 0.3 },
    { price: 69050, amount: 0.7 },
    { price: 69100, amount: 1.1 },
  ],
};

const mockTrades = [
  { time: '12:01:10', price: 69000, amount: 0.1, side: 'buy' },
  { time: '12:00:55', price: 68980, amount: 0.2, side: 'sell' },
  { time: '12:00:40', price: 69010, amount: 0.05, side: 'buy' },
];

const mockChartData = [
  { time: '09:00', price: 68000 },
  { time: '10:00', price: 68400 },
  { time: '11:00', price: 68800 },
  { time: '12:00', price: 69000 },
];

export default function CryptoTrade() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(coins[0]);
  const [buyAmount, setBuyAmount] = useState('');
  const [buyPrice, setBuyPrice] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [sellPrice, setSellPrice] = useState('');

  const filteredCoins = coins.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6 max-w-[1400px] mx-auto py-4">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight" style={{ fontSize: 24 }}>Crypto Trading</h1>
          <p className="text-muted-foreground mt-1">Trade, analyze, and manage your crypto assets in detail.</p>
        </div>
        <Card>
          <CardHeader className="border-b-0 pb-0">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-[#6D6D74]" />
              <input
                type="text"
                placeholder="Search coins..."
                className="border rounded px-2 py-1 w-full text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Coin</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Market Cap</TableHead>
                  <TableHead>Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCoins.map((coin) => (
                  <TableRow key={coin.symbol} className="cursor-pointer" onClick={() => navigate(`/crypto/trade/${coin.symbol}`)}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: coin.symbol === 'BTC' ? '#F7931A' : coin.symbol === 'ETH' ? '#627EEA' : coin.symbol === 'SOL' ? '#00FFA3' : '#0033AD' }}>{coin.symbol.charAt(0)}</div>
                        <div>
                          <div className="text-base font-medium text-black">{coin.name}</div>
                          <div className="text-xs text-[#6D6D74]">{coin.symbol}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">${coin.price.toLocaleString('en-US')}</TableCell>
                    <TableCell className={coin.positive ? 'text-fintech-success' : 'text-fintech-error'}>{coin.change}</TableCell>
                    <TableCell className="font-mono">${coin.marketCap}</TableCell>
                    <TableCell className="font-mono">${coin.volume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
} 