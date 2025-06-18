
import type { ChartConfig } from '@/components/ui/chart';

// Modern color palette for charts
export const CHART_COLORS = {
  primary: '#292EE9',
  secondary: '#10B981',
  tertiary: '#8B5CF6',
  quaternary: '#F59E0B',
  quinary: '#EF4444',
  // Gradient variations
  primaryGradient: 'url(#primaryGradient)',
  secondaryGradient: 'url(#secondaryGradient)',
  tertiaryGradient: 'url(#tertiaryGradient)',
};

// Chart configuration presets
export const modernChartConfig: ChartConfig = {
  estimated: {
    label: "Estimated",
    color: CHART_COLORS.primary,
  },
  actual: {
    label: "Actual", 
    color: CHART_COLORS.secondary,
  },
  income: {
    label: "Income",
    color: CHART_COLORS.primary,
  },
  expenses: {
    label: "Expenses",
    color: CHART_COLORS.tertiary,
  },
  profit: {
    label: "Profit",
    color: CHART_COLORS.secondary,
  },
};

// Common chart styling props
export const modernChartStyles = {
  barChart: {
    margin: { top: 10, right: 10, left: 0, bottom: 10 },
    barCategoryGap: "20%",
    barProps: {
      radius: [4, 4, 0, 0],
      maxBarSize: 40,
    }
  },
  pieChart: {
    margin: { top: 10, right: 10, left: 10, bottom: 10 },
    pieProps: {
      innerRadius: 40,
      outerRadius: 100,
      paddingAngle: 2,
      stroke: "none",
    }
  },
  cartesianGrid: {
    strokeDasharray: "3 3",
    stroke: "#e2e8f0",
    opacity: 0.4,
  },
  xAxis: {
    axisLine: false,
    tickLine: false,
    tick: { fontSize: 12, fill: '#64748b', fontFamily: 'Inter' },
  },
  yAxis: {
    axisLine: false,
    tickLine: false,
    tick: { fontSize: 12, fill: '#64748b', fontFamily: 'Inter' },
    width: 50,
  },
  tooltip: {
    cursor: { fill: 'rgba(59, 130, 246, 0.05)' },
  }
};

// Helper function to format Y-axis values
export const formatYAxisValue = (value: number) => `$${(value / 1000).toFixed(0)}k`;

// Modern legend component styles
export const modernLegendStyles = {
  container: "flex gap-6 mt-4 justify-center",
  item: "flex items-center gap-2",
  dot: "w-3 h-3 rounded-full",
  label: "text-sm text-muted-foreground font-medium"
};
