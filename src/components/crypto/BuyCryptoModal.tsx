
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown, ChevronRight } from 'lucide-react';

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="sr-only">
          <DialogTitle>Buy Crypto</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-6">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="buy" className="text-blue-600 font-medium">Buy</TabsTrigger>
              <TabsTrigger value="sell" className="text-muted-foreground font-medium">Sell</TabsTrigger>
              <TabsTrigger value="convert" className="text-muted-foreground font-medium">Convert</TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-6 space-y-6">
              {/* Amount Input Section */}
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="text-6xl font-light text-gray-400 mb-2">
                    {selectedCurrencyData?.symbol}{amount || '0'}
                  </div>
                  
                  {/* Currency Selector */}
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-300 bg-white hover:bg-gray-50"
                      onClick={() => {}}
                    >
                      <ArrowUpDown className="w-4 h-4 mr-2" />
                      {selectedCurrency}
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  You can buy up to ${maxAmount.toLocaleString()}
                </div>

                {/* Hidden amount input for functionality */}
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="sr-only"
                />
              </div>

              {/* Crypto Selection */}
              <div 
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer"
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
                    <span className="font-medium">{selectedCrypto}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Payment Method Selection */}
              <div 
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer"
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
                    <span className="font-medium">{selectedPaymentData?.name}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Buy Button */}
              <Button 
                onClick={handleBuy}
                className="w-full h-14 text-lg font-medium rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)' }}
              >
                Buy
              </Button>
            </TabsContent>

            <TabsContent value="sell" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">
                Sell functionality coming soon
              </div>
            </TabsContent>

            <TabsContent value="convert" className="mt-6">
              <div className="text-center py-8 text-muted-foreground">
                Convert functionality coming soon
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
