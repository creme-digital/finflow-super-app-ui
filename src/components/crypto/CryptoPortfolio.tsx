import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpRight, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
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
  { name: 'Bitcoin', symbol: 'BTC', amount: '0.42', value: '24,850', change: '+5.3%', positive: true },
  { name: 'Ethereum', symbol: 'ETH', amount: '3.72', value: '9,120', change: '+8.1%', positive: true },
  { name: 'Solana', symbol: 'SOL', amount: '45.2', value: '3,960', change: '-2.4%', positive: false },
  { name: 'Cardano', symbol: 'ADA', amount: '1,250', value: '1,625', change: '+0.8%', positive: true },
];

const recentTransactions = [
  { type: 'Buy', asset: 'Bitcoin', amount: '0.1 BTC', value: '$5,920', date: '2024-03-15' },
  { type: 'Sell', asset: 'Ethereum', amount: '1.5 ETH', value: '$3,675', date: '2024-03-14' },
  { type: 'Buy', asset: 'Solana', amount: '25 SOL', value: '$2,200', date: '2024-03-13' },
  { type: 'Buy', asset: 'Cardano', amount: '500 ADA', value: '$650', date: '2024-03-12' },
];

const RANGE_OPTIONS = [
  { label: '1W', value: '1W' },
  { label: '1M', value: '1M' },
  { label: '3M', value: '3M' },
  { label: '6M', value: '6M' },
  { label: 'YTD', value: 'YTD' },
  { label: '1Y', value: '1Y' },
];

// Custom Tooltip for LineChart
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
  const [selectedRange, setSelectedRange] = useState('6M');

  // Mock filtering logic for demo purposes
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

  return (
    <div className="space-y-6">
      {/* Total Value Card */}
      <Card>
        <CardHeader className="border-b-0">
          <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <DollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Value</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl">$40,955.00</span>
                <span className="text-fintech-success text-sm">+7.3%</span>
              </div>
            </div>
            {/* Range Selector */}
            <div className="flex gap-1 md:mt-0 mt-2">
              {RANGE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedRange(option.value)}
                  className={`px-2.5 py-1 rounded-full text-sm font-medium transition-colors
                    ${selectedRange === option.value
                      ? 'bg-black text-white'
                      : 'bg-[#F8F8FA] text-[#6D6D74] hover:bg-[#F0F0F0]'}
                  `}
                  style={{ fontFamily: 'Inter' }}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
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
                  tick={{ fill: '#6D6D74', fontSize: 12 }}
                />
                <YAxis 
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6D6D74', fontSize: 12 }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
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

      {/* Holdings Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b-0">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
            <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Holdings</span>
          </div>
          <Button variant="secondary" className="gap-2">
            View all holdings
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {holdings.map((asset, i) => (
              <div key={asset.symbol} className="bg-white rounded-lg p-4 border border-[#EDEDF1] flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{
                        background: asset.symbol === 'BTC' ? '#F7931A' :
                                    asset.symbol === 'ETH' ? '#627EEA' :
                                    asset.symbol === 'SOL' ? '#00FFA3' : '#0033AD'
                      }}>
                      {asset.symbol.charAt(0)}
                    </div>
                    <span className="text-base font-medium text-black">{asset.name}</span>
                    <span className="text-xs text-[#6D6D74]">{asset.symbol}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-mono text-2xl text-black">${asset.value}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#6D6D74]">{asset.amount} {asset.symbol}</span>
                  <span className={asset.positive ? "text-fintech-success flex items-center gap-1" : "text-fintech-error flex items-center gap-1"}>
                    {asset.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {asset.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions Card */}
      <Card>
        <CardHeader className="border-b-0">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
            <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Recent Transactions</span>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((tx, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <span className={tx.type === 'Buy' ? 'text-fintech-success' : 'text-fintech-error'}>
                      {tx.type}
                    </span>
                  </TableCell>
                  <TableCell>{tx.asset}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>{tx.value}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
