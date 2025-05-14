import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BalanceCard } from '@/components/dashboard/BalanceCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Bitcoin, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import type { TooltipProps } from 'recharts';

const portfolioData = [
  { date: 'Jan', btc: 0.85, eth: 1.2 },
  { date: 'Feb', btc: 0.9, eth: 1.5 },
  { date: 'Mar', btc: 1.0, eth: 1.8 },
  { date: 'Apr', btc: 0.95, eth: 2.0 },
  { date: 'May', btc: 1.2, eth: 2.2 },
  { date: 'Jun', btc: 1.5, eth: 2.8 },
];

const cryptoAssets = [
  { name: 'Bitcoin', symbol: 'BTC', amount: '0.42', value: '24,850', change: '+5.3%', positive: true },
  { name: 'Ethereum', symbol: 'ETH', amount: '3.72', value: '9,120', change: '+8.1%', positive: true },
  { name: 'Solana', symbol: 'SOL', amount: '45.2', value: '3,960', change: '-2.4%', positive: false },
  { name: 'Cardano', symbol: 'ADA', amount: '1,250', value: '1,625', change: '+0.8%', positive: true },
  { name: 'Polkadot', symbol: 'DOT', amount: '175', value: '1,400', change: '-1.2%', positive: false },
];

const chartConfig = {
  btc: { theme: { light: '#F7931A', dark: '#F7931A' }, label: 'Bitcoin' },
  eth: { theme: { light: '#627EEA', dark: '#627EEA' }, label: 'Ethereum' },
};

// Modern color palette for lines
const MODERN_COLORS = {
  btc: '#F7931A',
  eth: '#627EEA',
};

// Custom Tooltip for LineChart
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{label}</p>
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: entry.color }}></span>
            <span>{entry.name}:</span>
            <span className="font-medium">{typeof entry.value === 'number' ? entry.value : entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function CryptoPortfolio() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BalanceCard
          title="Total Portfolio Value"
          balance="$40,955.00"
          change="7.3% this week"
          positive={true}
          className="col-span-1"
          icon={DollarSign}
        >
          
        </BalanceCard>
        
        <BalanceCard
          title="Bitcoin Holdings"
          balance="0.42 BTC"
          change="$24,850"
          positive={true}
          className="col-span-1"
          icon={Bitcoin}
        >
          
        </BalanceCard>
        
        <BalanceCard
          title="24h Change"
          balance="+$1,543.27"
          change="3.9%"
          positive={true}
          className="col-span-1"
          icon={TrendingUp}
        >
          
        </BalanceCard>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={portfolioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="date" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ stroke: '#6366f1', strokeWidth: 2, opacity: 0.1 }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
                <Line 
                  type="monotone" 
                  dataKey="btc" 
                  name="Bitcoin"
                  stroke={MODERN_COLORS.btc}
                  strokeWidth={3}
                  dot={{ r: 5, fill: MODERN_COLORS.btc }}
                  activeDot={{ r: 7, fill: MODERN_COLORS.btc }}
                />
                <Line 
                  type="monotone" 
                  dataKey="eth" 
                  name="Ethereum"
                  stroke={MODERN_COLORS.eth}
                  strokeWidth={3}
                  dot={{ r: 5, fill: MODERN_COLORS.eth }}
                  activeDot={{ r: 7, fill: MODERN_COLORS.eth }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Value (USD)</TableHead>
                <TableHead>24h Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoAssets.map((asset) => (
                <TableRow key={asset.symbol}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <div>{asset.name}</div>
                        <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{asset.amount}</TableCell>
                  <TableCell>${asset.value}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {asset.positive ? (
                        <TrendingUp className="w-4 h-4 mr-1 text-fintech-success" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1 text-fintech-error" />
                      )}
                      <span className={asset.positive ? "text-fintech-success" : "text-fintech-error"}>
                        {asset.change}
                      </span>
                    </div>
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
