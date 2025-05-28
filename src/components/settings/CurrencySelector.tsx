import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCurrency } from '@/contexts/CurrencyContext';

export function CurrencySelector() {
  const { selectedCurrency, setSelectedCurrency, formatAmount } = useCurrency();

  // Example account balances in different currencies
  const accountBalances = {
    USD: 5000,
    GBP: 3950,
    EUR: 4600,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Currency Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Default Currency</label>
          <Select
            value={selectedCurrency}
            onValueChange={(value) => setSelectedCurrency(value as 'USD' | 'GBP' | 'EUR')}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD - US Dollar</SelectItem>
              <SelectItem value="GBP">GBP - British Pound</SelectItem>
              <SelectItem value="EUR">EUR - Euro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Account Balances</h3>
          <div className="grid gap-4">
            {Object.entries(accountBalances).map(([currency, balance]) => (
              <div
                key={currency}
                className="flex items-center justify-between p-4 rounded-lg border bg-card"
              >
                <div>
                  <p className="font-medium">{currency}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatAmount(balance, currency as 'USD' | 'GBP' | 'EUR')}
                  </p>
                </div>
                {currency === selectedCurrency && (
                  <span className="text-xs font-medium text-primary">Current</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 