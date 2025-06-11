
import React from 'react';

export function TotalStatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        className="rounded-[24px] p-6"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <div
          className="p-4 rounded-lg"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <h4 className="text-sm text-muted-foreground mb-2">Total Sent</h4>
          <p className="text-3xl font-bold text-foreground">$12,918.98</p>
        </div>
      </div>
      <div 
        className="rounded-[24px] p-6"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <div
          className="p-4 rounded-lg"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <h4 className="text-sm text-muted-foreground mb-2">Total Received</h4>
          <p className="text-3xl font-bold text-foreground">$12,918.98</p>
        </div>
      </div>
    </div>
  );
}
