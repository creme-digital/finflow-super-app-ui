
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

export function CryptoTrade() {
  const [tradeTab, setTradeTab] = useState('buy');

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>BTC/USD Price Chart</CardTitle>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold">$59,870.25</div>
              <div className="flex items-center text-fintech-success text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.4%
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer 
              config={chartConfig}
              className="h-[300px]"
            >
              <AreaChart data={priceData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-price)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--color-price)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" />
                <YAxis 
                  domain={['dataMin - 200', 'dataMax + 200']}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="var(--color-price)" 
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                />
              </AreaChart>
            </ChartContainer>
            
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
                <Card key={asset.asset} className="bg-muted">
                  <CardContent className="p-4">
                    <div className="font-medium">{asset.asset}</div>
                    <div className="text-lg font-bold mt-1">{asset.price}</div>
                    <div className={`flex items-center mt-1 text-sm ${asset.positive ? 'text-fintech-success' : 'text-fintech-error'}`}>
                      {asset.positive ? (
                        <TrendingUp className="w-4 h-4 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 mr-1" />
                      )}
                      {asset.change}
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
