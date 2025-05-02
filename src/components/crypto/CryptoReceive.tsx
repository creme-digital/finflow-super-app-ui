
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode, Copy, Check } from 'lucide-react';

export function CryptoReceive() {
  const [copied, setCopied] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('btc');

  const mockAddresses = {
    btc: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5',
    eth: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    sol: 'CXWXL9vahKJj6RW58VF9jvDNwTGU3dz7QbLrau6XJQz5',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mockAddresses[selectedAsset as keyof typeof mockAddresses]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Receive Cryptocurrency</CardTitle>
          <CardDescription>
            Share your wallet address to receive crypto from other users.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="asset">Select Asset</Label>
            <Select 
              defaultValue="btc" 
              onValueChange={(value) => setSelectedAsset(value)}
            >
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
          
          <div className="flex justify-center p-6 bg-muted rounded-lg">
            <div className="p-4 bg-white rounded-lg">
              <QrCode className="w-48 h-48 mx-auto" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Wallet Address</Label>
            <div className="flex">
              <Input 
                id="address" 
                value={mockAddresses[selectedAsset as keyof typeof mockAddresses]}
                readOnly 
                className="rounded-r-none"
              />
              <Button 
                onClick={handleCopy} 
                variant="outline" 
                className="rounded-l-none border-l-0"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Only send {selectedAsset.toUpperCase()} to this address. Sending any other asset may result in permanent loss.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm">
            <p className="text-yellow-800">
              <strong>Important:</strong> Always verify that you're sharing the correct address for the cryptocurrency you wish to receive.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Generate New Address</Button>
          <Button onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy Address'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
