
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
          className="rounded-[16px] p-4 bg-white/80 border border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)]"
        >
          <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
          <div className="text-3xl font-bold text-foreground">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
