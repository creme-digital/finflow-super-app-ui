
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export function CryptoTradingPanel() {
  const [orderType, setOrderType] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const orderBook = {
    asks: [
      { price: 0.1800, amount: 1.2345 },
      { price: 0.1795, amount: 2.1234 },
      { price: 0.1790, amount: 0.9876 },
      { price: 0.1785, amount: 1.5432 },
      { price: 0.1780, amount: 0.7654 }
    ],
    bids: [
      { price: 0.1775, amount: 1.4321 },
      { price: 0.1770, amount: 2.3456 },
      { price: 0.1765, amount: 0.8765 },
      { price: 0.1760, amount: 1.6543 },
      { price: 0.1755, amount: 0.5432 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Order Book */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Order Book</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {/* Asks (Sell Orders) */}
            <div className="space-y-1">
              {orderBook.asks.reverse().map((ask, index) => (
                <div key={index} className="flex justify-between items-center px-4 py-1 text-xs hover:bg-red-50">
                  <span className="text-red-500 font-mono">{ask.price.toFixed(4)}</span>
                  <span className="text-muted-foreground font-mono">{ask.amount.toFixed(4)}</span>
                </div>
              ))}
            </div>
            
            {/* Current Price */}
            <div className="px-4 py-2 bg-gray-50 border-y">
              <div className="text-center">
                <div className="text-lg font-bold font-mono text-red-500">0.1777</div>
                <div className="text-xs text-muted-foreground">Current Price</div>
              </div>
            </div>

            {/* Bids (Buy Orders) */}
            <div className="space-y-1">
              {orderBook.bids.map((bid, index) => (
                <div key={index} className="flex justify-between items-center px-4 py-1 text-xs hover:bg-green-50">
                  <span className="text-green-500 font-mono">{bid.price.toFixed(4)}</span>
                  <span className="text-muted-foreground font-mono">{bid.amount.toFixed(4)}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trading Form */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">Place Order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="buy" value={orderType} onValueChange={setOrderType}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy" className="text-green-600">Buy</TabsTrigger>
              <TabsTrigger value="sell" className="text-red-600">Sell</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-xs">Order Type</Label>
                <Select defaultValue="limit">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limit">Limit</SelectItem>
                    <SelectItem value="market">Market</SelectItem>
                    <SelectItem value="stop">Stop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Price</Label>
                <Input 
                  placeholder="0.0000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="h-8 font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Amount</Label>
                <Input 
                  placeholder="0.0000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-8 font-mono"
                />
              </div>

              <div className="grid grid-cols-4 gap-1">
                <Button variant="outline" size="sm" className="h-6 text-xs">25%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">50%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">75%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">100%</Button>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-mono">0.0000 BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-mono">0.0000 BTC</span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 h-8">
                Buy ETH
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-xs">Order Type</Label>
                <Select defaultValue="limit">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limit">Limit</SelectItem>
                    <SelectItem value="market">Market</SelectItem>
                    <SelectItem value="stop">Stop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Price</Label>
                <Input 
                  placeholder="0.0000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="h-8 font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Amount</Label>
                <Input 
                  placeholder="0.0000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-8 font-mono"
                />
              </div>

              <div className="grid grid-cols-4 gap-1">
                <Button variant="outline" size="sm" className="h-6 text-xs">25%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">50%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">75%</Button>
                <Button variant="outline" size="sm" className="h-6 text-xs">100%</Button>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-mono">0.0000 BTC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-mono">0.0000 BTC</span>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 h-8">
                Sell ETH
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Market Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">24h Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">High</span>
            <span className="font-mono">0.1850</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Low</span>
            <span className="font-mono">0.1720</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Volume</span>
            <span className="font-mono">1,234.56 ETH</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Change</span>
            <span className="font-mono text-green-500">+2.45%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
