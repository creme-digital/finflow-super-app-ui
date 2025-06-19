
import React from 'react';
import { CryptoDashboardContent } from './CryptoDashboardContent';
import { CryptoWatchlistCards } from './CryptoWatchlistCards';

export function CryptoPortfolio() {
  return (
    <div className="space-y-6">
      <CryptoDashboardContent />
      <CryptoWatchlistCards />
    </div>
  );
}
