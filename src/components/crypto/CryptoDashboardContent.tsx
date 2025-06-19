
import React from 'react';
import { CryptoNetCashSection } from './CryptoNetCashSection';

export function CryptoDashboardContent() {
  return (
    <div className="flex flex-col gap-6 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Net Cash Section */}
      <CryptoNetCashSection />
    </div>
  );
}
