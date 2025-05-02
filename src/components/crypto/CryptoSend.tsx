
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bitcoin, Send } from 'lucide-react';

export function CryptoSend() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Send Cryptocurrency</CardTitle>
          <CardDescription>
            Send crypto to another wallet address. Double check the address before sending.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="asset">Select Asset</Label>
            <Select defaultValue="btc">
              <SelectTrigger>
                <SelectValue placeholder="Select Asset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#F7931A] flex items-center justify-center text-white">
                      <Bitcoin className="w-3 h-3" />
                    </div>
                    <span>Bitcoin (BTC)</span>
                  </div>
                </SelectItem>
                <SelectItem value="eth">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#627EEA] flex items-center justify-center text-white">
                      ETH
                    </div>
                    <span>Ethereum (ETH)</span>
                  </div>
                </SelectItem>
                <SelectItem value="sol">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#00FFBD] flex items-center justify-center text-white">
                      SOL
                    </div>
                    <span>Solana (SOL)</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient Address</Label>
            <Input 
              id="recipient" 
              placeholder="Enter wallet address" 
            />
            <p className="text-xs text-muted-foreground">
              Ensure you're sending to the correct network type for the selected asset.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input 
                id="amount" 
                type="number" 
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="usd">USD Value</Label>
              <Input 
                id="usd"
                type="number"
                placeholder="0.00"
                disabled
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fee">Network Fee</Label>
            <Select defaultValue="normal">
              <SelectTrigger>
                <SelectValue placeholder="Select Fee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow">Slow (0.0001 BTC)</SelectItem>
                <SelectItem value="normal">Normal (0.0002 BTC)</SelectItem>
                <SelectItem value="fast">Fast (0.0005 BTC)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Higher fees may result in faster transaction confirmation.
            </p>
          </div>

          <div className="p-4 bg-muted rounded-md">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Amount</span>
              <span>0.1 BTC</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Network Fee</span>
              <span>0.0002 BTC</span>
            </div>
            <div className="flex justify-between font-medium mt-2 pt-2 border-t border-border">
              <span>Total</span>
              <span>0.1002 BTC</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            <Send className="w-4 h-4 mr-2" /> Send Crypto
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
