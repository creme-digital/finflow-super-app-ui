
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpRight, Activity, Wallet } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';
import type { TooltipProps } from 'recharts';

const portfolioData = [
  { date: 'Jan', value: 35800 },
  { date: 'Feb', value: 32800 },
  { date: 'Mar', value: 39500 },
  { date: 'Apr', value: 36200 },
  { date: 'May', value: 42500 },
  { date: 'Jun', value: 40955 },
];

const holdings = [
  { name: 'Bitcoin', symbol: 'BTC', amount: '0.42', value: 24850, change: 5.3, positive: true },
  { name: 'Ethereum', symbol: 'ETH', amount: '3.72', value: 9120, change: 8.1, positive: true },
  { name: 'Solana', symbol: 'SOL', amount: '45.2', value: 3960, change: -2.4, positive: false },
  { name: 'Cardano', symbol: 'ADA', amount: '1,250', value: 1625, change: 0.8, positive: true },
  { name: 'Polygon', symbol: 'MATIC', amount: '2,500', value: 2125, change: 3.2, positive: true },
  { name: 'Chainlink', symbol: 'LINK', amount: '150', value: 2217, change: -1.8, positive: false },
];

const RANGE_OPTIONS = [
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' },
  { label: '6M', value: '6M' },
  { label: 'YTD', value: 'YTD' },
  { label: '1Y', value: '1Y' },
];

function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{label}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">${payload[0].value.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
}

export function CryptoPortfolio() {
  const { formatAmount } = useCurrency();
  const [selectedRange, setSelectedRange] = useState('6M');

  let filteredData = portfolioData;
  switch (selectedRange) {
    case '1W':
      filteredData = portfolioData.slice(-1);
      break;
    case '1M':
      filteredData = portfolioData.slice(-1);
      break;
    case '3M':
      filteredData = portfolioData.slice(-3);
      break;
    case '6M':
      filteredData = portfolioData;
      break;
    case 'YTD':
      filteredData = portfolioData;
      break;
    case '1Y':
      filteredData = portfolioData;
      break;
    default:
      filteredData = portfolioData;
  }

  const totalValue = 40955.00;
  const changePercent = 7.3;
  const changeAmount = 2856.00;

  return (
    <div className="space-y-6">
      {/* Total Portfolio Value Card */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Wallet className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Portfolio Value</span>
              </div>
              <div className="space-y-3">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 48, fontWeight: 400, letterSpacing: '-0.96px' }}>
                  {formatAmount(totalValue)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600 text-lg flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500 }}>
                      +{changePercent}% ({formatAmount(changeAmount)})
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Range Selector */}
            <div className="flex gap-1">
              {RANGE_OPTIONS.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => setSelectedRange(option.value)}
                  variant={selectedRange === option.value ? 'default' : 'ghost'}
                  size="sm"
                  className={selectedRange === option.value ? '' : 'text-muted-foreground hover:text-foreground'}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Portfolio Chart */}
          <div className="mt-8 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false}
                  stroke="#E0E0EA"
                />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6D6D74', fontSize: 12, fontFamily: 'Inter' }}
                />
                <YAxis 
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6D6D74', fontSize: 12, fontFamily: 'Inter' }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#22c55e"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Holdings Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <CardTitle style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Holdings</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              View all assets
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow style={{ background: '#F8F8FA' }}>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Asset</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Holdings</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Value</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">24h Change</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holdings.map((asset) => (
                  <TableRow key={asset.symbol}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                          style={{
                            background: asset.symbol === 'BTC' ? '#F7931A' :
                                        asset.symbol === 'ETH' ? '#627EEA' :
                                        asset.symbol === 'SOL' ? '#00FFA3' : 
                                        asset.symbol === 'ADA' ? '#0033AD' :
                                        asset.symbol === 'MATIC' ? '#8247E5' : '#375BD2'
                          }}>
                          {asset.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium" style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#000' }}>{asset.name}</div>
                          <div className="text-sm" style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 12 }}>{asset.symbol}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium" style={{ fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 14, color: '#000' }}>{asset.amount} {asset.symbol}</div>
                    </TableCell>
                    <TableCell>
                      <div style={{ fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 14, fontWeight: 500, color: '#000' }}>{formatAmount(asset.value)}</div>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center gap-1 ${asset.positive ? 'text-green-600' : 'text-red-600'}`} style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500 }}>
                        {asset.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {asset.positive ? '+' : ''}{asset.change}%
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Trade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
