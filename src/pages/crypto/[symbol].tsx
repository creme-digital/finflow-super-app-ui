import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Globe, FileText, ArrowUpRight, BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const coins = [
  { symbol: 'BTC', name: 'Bitcoin', price: 111247.55, change: '+3.97%', positive: true, marketCap: '2.21T', fdv: '2.33T', volume: '94.24B', supply: '19.86M', maxSupply: '21M', rank: 1, website: 'https://bitcoin.org', whitepaper: 'https://bitcoin.org/bitcoin.pdf', rating: 4.4, explorers: ['blockchain.info'], socials: [{ type: 'twitter', url: '#' }], wallets: 6, allTimeHigh: 111861.22, low24h: 106220.61, high24h: 111861.22 },
];

const chartData = [
  { date: '2014', price: 0.05816 },
  { date: '2016', price: 500 },
  { date: '2018', price: 10000 },
  { date: '2020', price: 20000 },
  { date: '2022', price: 60000 },
  { date: '2024', price: 111247.55 },
];

const markets = [
  { exchange: 'Binance', pair: 'BTC/USDT', price: 111388.05, volume: '6,077,015,065', confidence: 'High' },
  { exchange: 'Binance', pair: 'BTC/FDUSD', price: 111388.91, volume: '2,791,542,894', confidence: 'High' },
  { exchange: 'Bybit', pair: 'BTC/USDT', price: 111007.67, volume: '2,453,737,351', confidence: 'High' },
  { exchange: 'Coinbase', pair: 'BTC/USD', price: 111334.64, volume: '1,903,282,216', confidence: 'High' },
];

export default function CoinDetail() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const coin = coins.find((c) => c.symbol === symbol) || coins[0];
  const [tab, setTab] = useState('chart');

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 max-w-[1400px] mx-auto py-6">
        {/* Sidebar */}
        <div className="md:w-80 w-full flex-shrink-0 flex flex-col gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="mb-2 w-8 h-8"><ArrowLeft className="w-4 h-4" /></Button>
          <Card>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-s" style={{ background: '#F7931A' }}>{coin.symbol.charAt(0)}</div>
                <div className="flex flex-row items-center gap-2">
                  <div className="text-lg font-semibold text-black">{coin.name}</div>
                  <div className="text-xs text-[#6D6D74]">BTC</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-mono font-regular">${coin.price.toLocaleString('en-US')}</div>
                <div className={coin.positive ? 'text-fintech-success text-sm' : 'text-fintech-error text-sm'}>{coin.change}</div>
              </div>
              <div className="flex flex-wrap gap-1 text-sm">
                <div className="w-full p-3 border border-gray-200 rounded-lg">Market Cap: <span className="font-mono">${coin.marketCap}</span></div>
                <div className="p-3 border border-gray-200 rounded-lg">FDV: <span className="font-mono">${coin.fdv}</span></div>
                <div className="p-3 border border-gray-200 rounded-lg">Vol.(24h): <span className="font-mono">${coin.volume}</span></div>
                <div className="w-full p-3 border border-gray-200 rounded-lg">Supply: <span className="font-mono">{coin.supply} / {coin.maxSupply}</span></div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Button asChild variant="ghost" className="w-full justify-between px-4 py-3 text-base font-medium">
                  <a href={coin.website} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><Globe className="w-5 h-5" /> Website</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <div style={{ borderTop: '1px solid #EDEDF1' }}></div>
                <Button asChild variant="ghost" className="w-full justify-between px-4 py-3 text-base font-medium">
                  <a href={coin.whitepaper} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2"><FileText className="w-5 h-5" /> Whitepaper</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Main Content */}
        <Card className="flex-1">
          <CardContent className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: '#F7931A' }}>{coin.symbol.charAt(0)}</div>
                <div>
                  <div className="text-xl font-semibold text-black">{coin.name} <span className="text-[#6D6D74]">({coin.symbol})</span></div>
                  <div className="text-xs text-[#6D6D74]">Rank #{coin.rank}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl text-black">${coin.price.toLocaleString('en-US')}</span>
                <span className={coin.positive ? 'text-fintech-success text-lg' : 'text-fintech-error text-lg'}>{coin.change}</span>
                <Button variant="default" className="ml-2">Buy {coin.symbol}</Button>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex gap-4 border-b border-[#EDEDF1] mb-2">
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'chart' ? 'border-b-2 border-[#6050EA] text-black' : 'text-[#6D6D74]'}`} onClick={() => setTab('chart')}>Chart</button>
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'markets' ? 'border-b-2 border-[#6050EA] text-black' : 'text-[#6D6D74]'}`} onClick={() => setTab('markets')}>Markets</button>
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'news' ? 'border-b-2 border-[#6050EA] text-black' : 'text-[#6D6D74]'}`} onClick={() => setTab('news')}>News</button>
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'analytics' ? 'border-b-2 border-[#6050EA] text-black' : 'text-[#6D6D74]'}`} onClick={() => setTab('analytics')}>Analytics</button>
              <button className={`px-4 py-2 text-sm font-medium ${tab === 'about' ? 'border-b-2 border-[#6050EA] text-black' : 'text-[#6D6D74]'}`} onClick={() => setTab('about')}>About</button>
            </div>
            {/* Tab Content */}
            {tab === 'chart' && (
              <div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6050EA" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#6050EA" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0EA" />
                      <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6D6D74', fontSize: 12 }} />
                      <YAxis orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#6D6D74', fontSize: 12 }} tickFormatter={(value) => `$${value.toLocaleString()}`} />
                      <Tooltip content={({ active, payload, label }) => active && payload && payload.length ? (
                        <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
                          <p className="font-semibold text-sm mb-1">{label}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium">${payload[0].value.toLocaleString()}</span>
                          </div>
                        </div>
                      ) : null} />
                      <Area type="monotone" dataKey="price" stroke="#6050EA" strokeWidth={2} fill="url(#colorPrice)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                {/* Timeline events placeholder */}
                <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> 2014: Launch</div>
                  <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> 2021: ATH</div>
                  <div className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> 2024: $111k</div>
                </div>
              </div>
            )}
            {tab === 'markets' && (
              <div>
                <CardHeader>
                  <CardTitle>Bitcoin Markets</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exchange</TableHead>
                        <TableHead>Pair</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Volume (24h)</TableHead>
                        <TableHead>Confidence</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {markets.map((m, i) => (
                        <TableRow key={i}>
                          <TableCell>{m.exchange}</TableCell>
                          <TableCell>{m.pair}</TableCell>
                          <TableCell className="font-mono">${m.price.toLocaleString('en-US')}</TableCell>
                          <TableCell className="font-mono">${m.volume}</TableCell>
                          <TableCell><span className="text-fintech-success font-medium">{m.confidence}</span></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </div>
            )}
            {/* Add more tab content as needed */}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
} 