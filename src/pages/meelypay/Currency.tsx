
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function MeelyPayCurrency() {
  const { selectedCurrency, setSelectedCurrency, formatAmount } = useCurrency();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Currency Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your currency preferences and exchange rates.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Currency Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Default Currency</Label>
                  <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Display Format</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (1,234.56)</SelectItem>
                      <SelectItem value="compact">Compact (1.2K)</SelectItem>
                      <SelectItem value="scientific">Scientific (1.23e3)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exchange Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>From</Label>
                  <Select defaultValue="USD">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <Select defaultValue="EUR">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Amount</Label>
                  <div className="flex space-x-2">
                    <Input type="number" placeholder="Enter amount" />
                    <Button variant="outline" size="icon">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Exchange Rate</span>
                    <span>1 USD = 0.92 EUR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span>Converted Amount</span>
                    <span className="font-medium">920.00 EUR</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Exchange Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="text-muted-foreground">USD/EUR</div>
                    <div className="font-medium">0.92</div>
                    <div className="text-green-500">+0.02%</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-foreground">USD/GBP</div>
                    <div className="font-medium">0.79</div>
                    <div className="text-red-500">-0.01%</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-muted-foreground">EUR/GBP</div>
                    <div className="font-medium">0.86</div>
                    <div className="text-green-500">+0.03%</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Historical Rates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
