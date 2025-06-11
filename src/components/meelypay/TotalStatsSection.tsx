
import React from 'react';

export function TotalStatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        className="overflow-hidden"
        style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div className="p-6">
          <h4 className="text-sm text-muted-foreground mb-2">Total Sent</h4>
          <p className="text-3xl font-bold text-foreground">$12,918.98</p>
        </div>
      </div>
      <div 
        className="overflow-hidden"
        style={{
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <div className="p-6">
          <h4 className="text-sm text-muted-foreground mb-2">Total Received</h4>
          <p className="text-3xl font-bold text-foreground">$12,918.98</p>
        </div>
      </div>
    </div>
  );
}
