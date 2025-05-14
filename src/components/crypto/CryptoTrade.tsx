import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ArrowRightLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TooltipProps } from 'recharts';

const priceData = [
  { time: '1:00', price: 58950 },
  { time: '2:00', price: 59200 },
  { time: '3:00', price: 59100 },
  { time: '4:00', price: 59450 },
  { time: '5:00', price: 59800 },
  { time: '6:00', price: 60200 },
  { time: '7:00', price: 60150 },
  { time: '8:00', price: 60400 },
  { time: '9:00', price: 60300 },
  { time: '10:00', price: 60500 },
  { time: '11:00', price: 60700 },
  { time: '12:00', price: 60900 },
];

const marketData = [
  { asset: 'Bitcoin', price: '$59,870.25', change: '+2.4%', positive: true },
  { asset: 'Ethereum', price: '$2,450.80', change: '+3.8%', positive: true },
  { asset: 'Solana', price: '$87.65', change: '-1.2%', positive: false },
  { asset: 'Cardano', price: '$1.30', change: '+0.5%', positive: true },
  { asset: 'Polkadot', price: '$8.05', change: '-0.7%', positive: false },
];

const chartConfig = {
  price: { theme: { light: '#9b87f5', dark: '#9b87f5' }, label: 'Price' },
};

// Modern color for price area
const MODERN_COLOR = '#6366f1';

// Custom Tooltip for AreaChart
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{label}</p>
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: entry.color }}></span>
            <span>{entry.name}:</span>
            <span className="font-medium">{typeof entry.value === 'number' ? `$${entry.value}` : entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

// Add sample sparkline data for each asset
const sparklineData = {
  Bitcoin: [58950, 59200, 58700, 59900, 59500, 60200, 59000, 60400, 60000, 60500, 60700, 60900],
  Ethereum: [2450, 2550, 2460, 2580, 2500, 2620, 2510, 2630, 2525, 2640, 2550, 2660],
  Solana: [87, 92, 85, 94, 88, 96, 89, 91, 87, 93, 90, 97],
  Cardano: [1.28, 1.35, 1.22, 1.38, 1.32, 1.41, 1.30, 1.39, 1.31, 1.36, 1.32, 1.40],
  Polkadot: [8.00, 8.25, 7.90, 8.30, 8.10, 8.35, 8.09, 8.28, 8.07, 8.32, 8.05, 8.38],
};
const sparklineColors = {
  Bitcoin: '#F7931A',
  Ethereum: '#627EEA',
  Solana: '#00FFA3',
  Cardano: '#0033AD',
  Polkadot: '#E6007A',
};

export function CryptoTrade() {
  const [tradeTab, setTradeTab] = useState('buy');

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>BTC/USD Price Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl font-bold">$59,870.25</div>
              <div className="flex items-center text-fintech-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.4%
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={MODERN_COLOR} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={MODERN_COLOR} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis dataKey="time" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis 
                    domain={['dataMin - 200', 'dataMax + 200']}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    tick={{ fontSize: 13, fill: '#64748b' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    name="Price"
                    stroke={MODERN_COLOR}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                    dot={{ r: 2, fill: MODERN_COLOR }}
                    activeDot={{ r: 7, fill: MODERN_COLOR }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="ghost" size="sm">24h</Button>
              <Button variant="ghost" size="sm">7d</Button>
              <Button variant="outline" size="sm">30d</Button>
              <Button variant="ghost" size="sm">90d</Button>
              <Button variant="ghost" size="sm">1y</Button>
              <Button variant="ghost" size="sm">All</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buy" value={tradeTab} onValueChange={setTradeTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="sell">Sell</TabsTrigger>
              </TabsList>
              
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label>I want to {tradeTab}</Label>
                  <Select defaultValue="btc">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                      <SelectItem value="sol">Solana (SOL)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>For</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">US Dollar (USD)</SelectItem>
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                      <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="0.00"
                  />
                </div>
                
                <div className="p-4 bg-muted rounded-md">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Price</span>
                    <span>$59,870.25 per BTC</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-medium mt-2 pt-2 border-t border-border">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
                
                <Button className="w-full">
                  {tradeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Market Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {marketData.map((asset) => (
                <Card key={asset.asset} className="bg-white border border-gray-100 shadow-sm">
                  <CardContent className="p-4">
                    <div className="font-medium">{asset.asset}</div>
                    <div className="text-lg font-bold mt-1">{asset.price}</div>
                    <div className="mt-2">
                      <ResponsiveContainer width="100%" height={48}>
                        <AreaChart data={sparklineData[asset.asset].map((v, i) => ({ x: i, y: v }))} margin={{ top: 6, right: 0, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id={`sparkline-${asset.asset}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={sparklineColors[asset.asset]} stopOpacity={0.7}/>
                              <stop offset="95%" stopColor={sparklineColors[asset.asset]} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="y"
                            stroke={sparklineColors[asset.asset]}
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#sparkline-${asset.asset})`}
                            dot={false}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
