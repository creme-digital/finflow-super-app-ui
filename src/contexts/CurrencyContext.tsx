import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'USD' | 'GBP' | 'EUR';

interface CurrencyContextType {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  exchangeRates: Record<Currency, number>;
  formatAmount: (amount: number, currency?: Currency) => string;
  convertAmount: (amount: number, fromCurrency: Currency, toCurrency: Currency) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<Currency, number>>({
    USD: 1,
    GBP: 0.79, // Example rate: 1 USD = 0.79 GBP
    EUR: 0.92, // Example rate: 1 USD = 0.92 EUR
  });

  // In a real app, you would fetch these rates from an API
  useEffect(() => {
    // Example of fetching exchange rates
    const fetchExchangeRates = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        // const data = await response.json();
        // setExchangeRates(data.rates);
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const formatAmount = (amount: number, currency: Currency = selectedCurrency) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(amount);
  };

  const convertAmount = (amount: number, fromCurrency: Currency, toCurrency: Currency) => {
    // Convert to USD first (base currency)
    const amountInUSD = amount / exchangeRates[fromCurrency];
    // Then convert to target currency
    return amountInUSD * exchangeRates[toCurrency];
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        exchangeRates,
        formatAmount,
        convertAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}; 