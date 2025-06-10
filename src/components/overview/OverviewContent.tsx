
import React from 'react';
import { PaymentStatusCard } from './PaymentStatusCard';
import { GrossVolumeCard } from './GrossVolumeCard';
import { NetVolumeCard } from './NetVolumeCard';
import { NewCustomersCard } from './NewCustomersCard';
import { CustomerRetentionCard } from './CustomerRetentionCard';
import { ChurnRateCard } from './ChurnRateCard';

export function OverviewContent() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* First row */}
        <PaymentStatusCard />
        <GrossVolumeCard />
        
        {/* Second row */}
        <NetVolumeCard />
        <NewCustomersCard />
        
        {/* Third row */}
        <CustomerRetentionCard />
        <ChurnRateCard />
      </div>
    </div>
  );
}
