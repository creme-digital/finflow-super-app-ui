
import React from 'react';
import { CHART_COLORS } from '@/lib/chart-config';

// Gradient definitions for charts as a React component
export const ChartGradientDefs: React.FC = () => (
  <defs>
    <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.8} />
      <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0.3} />
    </linearGradient>
    <linearGradient id="secondaryGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={CHART_COLORS.secondary} stopOpacity={0.8} />
      <stop offset="100%" stopColor={CHART_COLORS.secondary} stopOpacity={0.3} />
    </linearGradient>
    <linearGradient id="tertiaryGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={CHART_COLORS.tertiary} stopOpacity={0.8} />
      <stop offset="100%" stopColor={CHART_COLORS.tertiary} stopOpacity={0.3} />
    </linearGradient>
  </defs>
);

// Helper function to create pie chart gradients
export const createPieGradients = (data: Array<{ color: string }>) => (
  <defs>
    {data.map((entry, index) => (
      <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={entry.color} stopOpacity={0.8} />
        <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
      </linearGradient>
    ))}
  </defs>
);
