
import React from 'react';

const stats = [
  {
    label: 'Total Card',
    value: '12'
  },
  {
    label: 'Total Employee',
    value: '124'
  },
  {
    label: 'Pending Payments',
    value: '2'
  },
  {
    label: 'Over Due Payment',
    value: '6'
  }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[24px] p-4"
          style={{ 
            background: 'rgba(255, 255, 255, 0.64)',
            border: '1px solid #FFFFFF'
          }}
        >
          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
          <div className="text-3xl font-bold text-foreground">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
