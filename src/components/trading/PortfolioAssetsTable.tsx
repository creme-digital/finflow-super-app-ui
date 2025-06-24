
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, Activity, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';

// Portfolio performance data
const portfolioData = [
  { month: 'Jan', value: 65000 },
  { month: 'Feb', value: 68000 },
  { month: 'Mar', value: 70000 },
  { month: 'Apr', value: 72000 },
  { month: 'May', value: 69000 },
  { month: 'Jun', value: 74000 },
  { month: 'Jul', value: 78000 },
  { month: 'Aug', value: 80000 },
  { month: 'Sep', value: 77000 },
  { month: 'Oct', value: 85000 },
  { month: 'Nov', value: 88000 },
  { month: 'Dec', value: 91800 },
];

// Portfolio assets data matching crypto design
const portfolioAssets = [
  {
    id: 'aapl',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    icon: '🍎',
    amount: 50,
    price: 175.50,
    value: 8775.00,
    change24h: 2.5,
    allocation: 15.2,
    sparklineData: [170, 172, 175, 173, 175.5, 176, 175.5]
  },
  {
    id: 'tsla',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    icon: '🚗',
    amount: 25,
    price: 245.75,
    value: 6143.75,
    change24h: -1.8,
    allocation: 10.6,
    sparklineData: [250, 248, 245, 247, 245.75, 244, 245.75]
  },
  {
    id: 'msft',
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    icon: '💻',
    amount: 30,
    price: 415.32,
    value: 12459.60,
    change24h: 1.2,
    allocation: 21.5,
    sparklineData: [410, 412, 415, 414, 415.32, 417, 415.32]
  },
  {
    id: 'amzn',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    icon: '📦',
    amount: 15,
    price: 178.25,
    value: 2673.75,
    change24h: 0.8,
    allocation: 4.6,
    sparklineData: [176, 177, 178, 179, 178.25, 178.5, 178.25]
  },
  {
    id: 'googl',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    icon: '🔍',
    amount: 20,
    price: 150.75,
    value: 3015.00,
    change24h: 3.1,
    allocation: 5.2,
    sparklineData: [146, 148, 150, 151, 150.75, 152, 150.75]
  }
];

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-[#EDEDF1]">
        <p className="text-sm font-medium mb-1" style={{ color: '#6D6D74', fontFamily: 'Inter, sans-serif' }}>{label}</p>
        <p style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, letterSpacing: '-0.28px' }}>
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
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

export function PortfolioAssetsTable() {
  const { formatAmount } = useCurrency();

  const portfolioValue = 91800.00;
  const totalValue = portfolioAssets.reduce((sum, asset) => sum + asset.value, 0);

  // Glass card style matching crypto design
  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Value Chart Section */}
      <div className="overflow-hidden" style={glassCardStyle}>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio value this month</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 32, fontWeight: 600, letterSpacing: '-0.64px' }}>
              {formatAmount(portfolioValue)}
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={portfolioData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af', fontFamily: 'Inter, sans-serif' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>

      {/* Portfolio Assets Table Section */}
      <div className="overflow-hidden" style={glassCardStyle}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Portfolio Assets</span>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search assets..." className="pl-8" style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow style={{ background: '#F8F8FA' }}>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Asset</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Amount</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Price</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Value</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">24h %</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Allocation</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Chart</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioAssets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{ 
                            background: asset.symbol === 'AAPL' ? '#007AFF' : 
                                       asset.symbol === 'TSLA' ? '#CC0000' : 
                                       asset.symbol === 'MSFT' ? '#00BCF2' : 
                                       asset.symbol === 'AMZN' ? '#FF9900' : '#4285F4' 
                          }}
                        >
                          {asset.icon}
                        </div>
                        <div>
                          <div className="font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{asset.symbol}</div>
                          <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>{asset.name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{asset.amount}</TableCell>
                    <TableCell style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{formatAmount(asset.price)}</TableCell>
                    <TableCell style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{formatAmount(asset.value)}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          asset.change24h >= 0 
                            ? 'text-green-600 border-green-200 bg-green-50' 
                            : 'text-red-600 border-red-200 bg-red-50'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {asset.change24h >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {Math.abs(asset.change24h)}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{asset.allocation}%</TableCell>
                    <TableCell>
                      <SimpleSparkline data={asset.sparklineData} isPositive={asset.change24h >= 0} />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-500"
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
        </CardContent>
      </div>
    </div>
  );
}
