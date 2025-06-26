
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Copy, Check, X } from 'lucide-react';

interface CryptoReceiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CryptoReceiveModal({ open, onOpenChange }: CryptoReceiveModalProps) {
  const [copied, setCopied] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('btc');

  const mockAddresses = {
    btc: '3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5',
    eth: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    sol: 'CXWXL9vahKJj6RW58VF9jvDNwTGU3dz7QbLrau6XJQz5',
    usdc: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mockAddresses[selectedAsset as keyof typeof mockAddresses]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px] p-0 border-0 flex flex-col gap-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            Receive Cryptocurrency
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 p-6">
          {/* Asset Selection */}
          <div className="space-y-2">
            <Label htmlFor="asset">Select Asset</Label>
            <Select 
              value={selectedAsset}
              onValueChange={(value) => setSelectedAsset(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Asset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                <SelectItem value="sol">Solana (SOL)</SelectItem>
                <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* QR Code */}
          <div className="flex justify-center p-6 bg-muted rounded-lg">
            <div className="p-4 bg-white rounded-lg">
              <QrCode className="w-48 h-48 mx-auto text-gray-400" />
            </div>
          </div>
          
          {/* Wallet Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Wallet Address</Label>
            <div className="flex">
              <Input 
                id="address" 
                value={mockAddresses[selectedAsset as keyof typeof mockAddresses]}
                readOnly 
                className="rounded-r-none font-mono text-sm"
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

          {/* Warning */}
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm">
            <p className="text-yellow-800">
              <strong>Important:</strong> Always verify that you're sharing the correct address for the cryptocurrency you wish to receive.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between gap-3 p-6 border-t border-border">
          <Button variant="outline" className="flex-1">
            Generate New Address
          </Button>
          <Button onClick={handleCopy} className="flex-1">
            {copied ? 'Copied!' : 'Copy Address'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
