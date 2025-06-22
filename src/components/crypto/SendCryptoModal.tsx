
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown, ChevronRight, X, QrCode } from 'lucide-react';

interface SendCryptoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cryptocurrencies = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', color: '#f7931a' },
  { symbol: 'ETH', name: 'Ethereum', icon: '◆', color: '#627eea' },
  { symbol: 'SOL', name: 'Solana', icon: '◎', color: '#9945ff' },
  { symbol: 'ADA', name: 'Cardano', icon: '₳', color: '#0033ad' },
  { symbol: 'BNB', name: 'BNB', icon: 'B', color: '#f3ba2f' },
  { symbol: 'ITC', name: 'ITC Token', icon: 'I', color: '#1a365d' }
];

export function SendCryptoModal({ open, onOpenChange }: SendCryptoModalProps) {
  const [amount, setAmount] = useState('0');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [networkFee, setNetworkFee] = useState('normal');

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setAmount('0');
      setRecipientAddress('');
      setNetworkFee('normal');
    }
  }, [open]);

  const selectedCryptoData = cryptocurrencies.find(c => c.symbol === selectedCrypto);

  const networkFees = {
    slow: { label: 'Slow', fee: '0.0001', time: '30-60 min' },
    normal: { label: 'Normal', fee: '0.0002', time: '10-30 min' },
    fast: { label: 'Fast', fee: '0.0005', time: '5-10 min' }
  };

  const handleSend = () => {
    console.log('Send crypto:', { amount, selectedCrypto, recipientAddress, networkFee });
    // Implementation for sending crypto
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-md p-0 border-0 flex flex-col gap-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Send Crypto</DialogTitle>
        </DialogHeader>

        {/* Header with close button */}
        <div className="flex justify-end p-4 pb-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="px-6 pb-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground">Send Crypto</h2>
            <p className="text-sm text-muted-foreground mt-1">Send cryptocurrency to another wallet</p>
          </div>

          <div className="space-y-8">
            {/* Amount Input Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                {/* Large amount display */}
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl font-light text-gray-400">
                    {selectedCryptoData?.icon}
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="text-6xl font-light text-gray-400 bg-transparent border-none outline-none text-center min-w-0 flex-1 max-w-xs"
                    style={{ appearance: 'textfield' }}
                  />
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Enter amount to send
                </div>
              </div>
            </div>

            {/* Crypto Selection */}
            <div 
              className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 cursor-pointer"
              onClick={() => {}}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Asset</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: selectedCryptoData?.color }}
                  >
                    {selectedCryptoData?.icon}
                  </div>
                  <span className="font-medium text-foreground">{selectedCrypto}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            {/* Recipient Address Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Recipient Address</label>
              <div className="relative">
                <Input
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="Enter wallet address or scan QR code"
                  className="pr-12 rounded-2xl border-gray-200 bg-white"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                  onClick={() => {}}
                >
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Double-check the address. Transactions cannot be reversed.
              </p>
            </div>

            {/* Network Fee Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Network Fee</label>
              <Select value={networkFee} onValueChange={setNetworkFee}>
                <SelectTrigger className="rounded-2xl border-gray-200 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(networkFees).map(([key, fee]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex justify-between items-center w-full">
                        <span>{fee.label}</span>
                        <div className="text-right ml-4">
                          <div className="text-sm">{fee.fee} {selectedCrypto}</div>
                          <div className="text-xs text-muted-foreground">{fee.time}</div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Higher fees result in faster confirmation times
              </p>
            </div>

            {/* Transaction Summary */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">{amount} {selectedCrypto}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Network Fee</span>
                <span className="font-medium">{networkFees[networkFee as keyof typeof networkFees].fee} {selectedCrypto}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{(parseFloat(amount) + parseFloat(networkFees[networkFee as keyof typeof networkFees].fee)).toFixed(6)} {selectedCrypto}</span>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <Button 
              onClick={handleSend}
              disabled={!recipientAddress || parseFloat(amount) <= 0}
              className="w-full h-14 text-lg font-medium rounded-full bg-[#292EE9] hover:bg-[#1f24d1] text-white disabled:opacity-50"
            >
              Send Crypto
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
