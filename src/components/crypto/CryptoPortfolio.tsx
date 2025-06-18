
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, ArrowUpRight, Activity, Wallet, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, BarChart, Bar } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';
import type { TooltipProps } from 'recharts';

const portfolioData = [
  { date: 'Jan', value: 35800, moneyIn: 310704, moneyOut: 383025 },
  { date: 'Feb', value: 32800, moneyIn: 325000, moneyOut: 290000 },
  { date: 'Mar', value: 39500, moneyIn: 298000, moneyOut: 310000 },
  { date: 'Apr', value: 36200, moneyIn: 315000, moneyOut: 295000 },
  { date: 'May', value: 42500, moneyIn: 335000, moneyOut: 320000 },
  { date: 'Jun', value: 40955, moneyIn: 310704, moneyOut: 383025 },
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
          <span className="font-medium">{payload[0].value.toLocaleString()}</span>
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

  const totalValue = 72321.11;
  const moneyIn = 310704.49;
  const moneyOut = 383025.60;

  return (
    <div className="space-y-6">
      {/* Net Cash This Month - Matching Index Page Design */}
      <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-2">Net crypto value this month</div>
            <div className="text-4xl font-bold text-foreground mb-4">
              {formatAmount(totalValue)}
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Money in</span>
                <span className="text-sm font-medium text-green-600">
                  {formatAmount(moneyIn)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Money out</span>
                <span className="text-sm font-medium text-red-600">
                  -{formatAmount(moneyOut)}
                </span>
              </div>
            </div>
          </div>

          {/* Bar Chart - Matching Index Page Style */}
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis hide />
                <Bar 
                  dataKey="moneyIn" 
                  fill="#3b82f6"
                  radius={[2, 2, 0, 0]}
                  opacity={0.8}
                />
                <Bar 
                  dataKey="moneyOut" 
                  fill="#e5e7eb"
                  radius={[2, 2, 0, 0]}
                  opacity={0.6}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Currency Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {formatAmount(totalValue)}
                </div>
                <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">
                  +7.3% ({formatAmount(2856.00)})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-foreground">6</div>
                <p className="text-sm text-muted-foreground">Active Holdings</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">+7.3%</div>
                <p className="text-sm text-muted-foreground">24h Performance</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Chart */}
      <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
        <CardHeader className="flex items-center gap-2 px-4 pt-4 pb-3 min-h-[40px] border-b border-border">
          <div className="flex items-center justify-between w-full">
            <CardTitle className="text-base font-medium text-card-foreground flex items-center gap-2">Portfolio Performance</CardTitle>
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
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[300px]">
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
                  stroke="#e2e8f0"
                />
                <XAxis 
                  dataKey="date" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <YAxis 
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
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
      <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)]">
        <CardHeader className="flex items-center gap-2 px-4 pt-4 pb-3 min-h-[40px] border-b border-border">
          <div className="flex items-center justify-between w-full">
            <CardTitle className="text-base font-medium text-card-foreground flex items-center gap-2">Your Holdings</CardTitle>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Asset
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Holdings</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Actions</TableHead>
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
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-sm text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-mono text-sm">{asset.amount} {asset.symbol}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-mono">{formatAmount(asset.value)}</div>
                  </TableCell>
                  <TableCell>
                    <div className={`flex items-center gap-1 ${asset.positive ? 'text-green-600' : 'text-red-600'}`}>
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
        </CardContent>
      </Card>
    </div>
  );
}
