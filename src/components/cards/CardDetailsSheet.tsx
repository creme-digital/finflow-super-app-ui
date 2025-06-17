
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Lock, LockOpen, Eye, EyeOff, CreditCard, Settings, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface CardData {
  id: string;
  cardholder: string;
  avatar: string;
  cardNumber: string;
  spendThisMonth: string;
  type: string;
  account: string;
  status: string;
}

interface CardDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  card: CardData | null;
}

export function CardDetailsSheet({ open, onOpenChange, card }: CardDetailsSheetProps) {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [isLocked, setIsLocked] = useState(card?.status === 'Card locked');
  const [spendingLimit, setSpendingLimit] = useState('1000');
  const [transactionLimit, setTransactionLimit] = useState('500');
  const [monthlyLimit, setMonthlyLimit] = useState('5000');
  const { toast } = useToast();

  if (!card) return null;

  const cardColors = [
    'bg-gradient-to-br from-gray-800 to-gray-900',
    'bg-gradient-to-br from-blue-800 to-blue-900', 
    'bg-gradient-to-br from-purple-800 to-purple-900',
    'bg-gradient-to-br from-green-800 to-green-900',
    'bg-gradient-to-br from-red-800 to-red-900',
  ];
  
  const cardColor = cardColors[parseInt(card.id) % cardColors.length];
  const fullCardNumber = '4532 1234 5678 9012';
  const expiryDate = '02/30';
  const cvv = '123';

  const handleToggleLock = () => {
    setIsLocked(!isLocked);
    toast({
      title: isLocked ? "Card unlocked" : "Card locked",
      description: isLocked 
        ? "Your card has been unlocked and is now active." 
        : "Your card has been locked for security.",
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your card settings have been updated successfully.",
    });
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-lg p-0 overflow-y-auto"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Card Details
          </SheetTitle>
        </SheetHeader>

        <div className="p-6 space-y-6">
          {/* Card Preview */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Card Preview</h3>
            <div
              className={cn(
                "p-6 relative text-white min-h-[200px] flex flex-col justify-between rounded-xl",
                cardColor
              )}
            >
              {isLocked && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center rounded-xl">
                  <Lock className="h-8 w-8 text-white" />
                </div>
              )}
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white/80">Finaci</p>
                </div>
                <div>
                  <p className="text-lg font-bold">VISA</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-8 bg-yellow-400 rounded-sm"></div>
                
                <div>
                  <p className="text-xl font-mono tracking-wider">
                    {showCardDetails ? fullCardNumber : card.cardNumber}
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-white/70">Card Holder</p>
                    <p className="font-medium">{card.cardholder}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Expiry</p>
                    <p className="font-medium">{expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/70">CVV</p>
                    <p className="font-medium">{showCardDetails ? cvv : '***'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Status and Quick Actions */}
            <div className="flex items-center justify-between">
              <Badge 
                variant={card.status === 'Active' ? 'default' : 'secondary'}
                className={cn(
                  card.status === 'Active' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-100'
                )}
              >
                {isLocked ? 'Locked' : 'Active'}
              </Badge>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowCardDetails(!showCardDetails)}
                >
                  {showCardDetails ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleToggleLock}
                  className={cn(isLocked && "text-amber-600 border-amber-600")}
                >
                  {isLocked ? <Lock className="h-4 w-4" /> : <LockOpen className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Card Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Card Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium">{card.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account</p>
                <p className="font-medium">{card.account}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Spend This Month</p>
                <p className="font-medium">{card.spendThisMonth}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="font-medium">$15,342.59</p>
              </div>
            </div>
          </div>

          {/* Settings Tabs */}
          <Tabs defaultValue="limits" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="limits" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Limits
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="limits" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Spending Controls</h3>
              
              {/* Card Lock Toggle */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Card Lock</p>
                  <p className="text-sm text-muted-foreground">
                    Temporarily disable all transactions
                  </p>
                </div>
                <Switch 
                  checked={isLocked} 
                  onCheckedChange={handleToggleLock}
                />
              </div>

              {/* Spending Limits */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="daily-limit">Daily Spending Limit</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      id="daily-limit"
                      type="number"
                      value={spendingLimit}
                      onChange={(e) => setSpendingLimit(e.target.value)}
                      className="pl-8"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transaction-limit">Per Transaction Limit</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      id="transaction-limit"
                      type="number"
                      value={transactionLimit}
                      onChange={(e) => setTransactionLimit(e.target.value)}
                      className="pl-8"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly-limit">Monthly Spending Limit</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                    <Input 
                      id="monthly-limit"
                      type="number"
                      value={monthlyLimit}
                      onChange={(e) => setMonthlyLimit(e.target.value)}
                      className="pl-8"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="merchant-category">Allowed Merchant Categories</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="dining">Dining & Restaurants</SelectItem>
                      <SelectItem value="retail">Retail & Shopping</SelectItem>
                      <SelectItem value="gas">Gas Stations</SelectItem>
                      <SelectItem value="groceries">Groceries</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleSaveSettings} className="w-full">
                  Save Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="space-y-4 mt-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              
              <div className="space-y-3">
                {[
                  { date: 'Today', merchant: 'Amazon.com', amount: '-$42.99', status: 'Completed' },
                  { date: 'Yesterday', merchant: 'Starbucks Coffee', amount: '-$5.75', status: 'Completed' },
                  { date: '2 days ago', merchant: 'Netflix Subscription', amount: '-$14.99', status: 'Completed' },
                  { date: '3 days ago', merchant: 'Order Refund', amount: '+$29.99', status: 'Refunded' },
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{transaction.merchant}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={cn(
                        "font-medium",
                        transaction.amount.startsWith('-') ? 'text-red-600' : 'text-green-600'
                      )}>
                        {transaction.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">{transaction.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
