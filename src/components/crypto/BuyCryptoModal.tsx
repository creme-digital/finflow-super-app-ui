
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown, ChevronRight, X } from 'lucide-react';

interface BuyCryptoModalProps {
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

const paymentMethods = [
  { id: 'paypal', name: 'Paypal', icon: '◆', color: '#0070ba' },
  { id: 'card', name: 'Credit/Debit Card', icon: '💳', color: '#4a5568' },
  { id: 'bank', name: 'Bank Transfer', icon: '🏦', color: '#2d3748' }
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' }
];

export function BuyCryptoModal({ open, onOpenChange }: BuyCryptoModalProps) {
  const [amount, setAmount] = useState('0');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCrypto, setSelectedCrypto] = useState('ITC');
  const [selectedPayment, setSelectedPayment] = useState('paypal');
  const [activeTab, setActiveTab] = useState('buy');

  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency);
  const selectedCryptoData = cryptocurrencies.find(c => c.symbol === selectedCrypto);
  const selectedPaymentData = paymentMethods.find(p => p.id === selectedPayment);

  const maxAmount = 25000;

  const handleBuy = () => {
    console.log('Buy crypto:', { amount, selectedCurrency, selectedCrypto, selectedPayment });
    // Implementation for buying crypto
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
          <DialogTitle>Buy Crypto</DialogTitle>
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
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-0">
              <TabsTrigger value="buy" className="text-[#292EE9] font-medium">Buy</TabsTrigger>
              <TabsTrigger value="sell" className="text-muted-foreground font-medium">Sell</TabsTrigger>
              <TabsTrigger value="convert" className="text-muted-foreground font-medium">Convert</TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-8 space-y-8">
              {/* Amount Input Section */}
              <div className="text-center space-y-6">
                <div className="relative">
                  {/* Large amount display */}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl font-light text-gray-400">
                      {selectedCurrencyData?.symbol}
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
                  
                  {/* Currency Selector */}
                  <div className="flex justify-center mb-6">
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-300 bg-white hover:bg-gray-50 px-4 py-2"
                      onClick={() => {}}
                    >
                      <ArrowUpDown className="w-4 h-4 mr-2" />
                      <span className="text-gray-600">{selectedCurrency}</span>
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    You can buy up to ${maxAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Crypto Selection */}
              <div 
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Buy</span>
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

              {/* Payment Method Selection */}
              <div 
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => {}}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Pay with</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: selectedPaymentData?.color }}
                    >
                      {selectedPaymentData?.icon}
                    </div>
                    <span className="font-medium text-foreground">{selectedPaymentData?.name}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Buy Button */}
              <Button 
                onClick={handleBuy}
                className="w-full h-14 text-lg font-medium rounded-full bg-[#292EE9] hover:bg-[#1f24d1] text-white"
              >
                Buy
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="mt-8">
              <div className="text-center py-12 text-muted-foreground">
                Sell functionality coming soon
              </div>
            </TabsContent>

            <TabsContent value="convert" className="mt-8">
              <div className="text-center py-12 text-muted-foreground">
                Convert functionality coming soon
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
