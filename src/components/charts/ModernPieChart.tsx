
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { modernChartStyles, modernLegendStyles } from '@/lib/chart-config';

interface PieChartData {
  category: string;
  value: number;
  color: string;
}

interface ModernPieChartProps {
  data: PieChartData[];
  height?: number;
  showLegend?: boolean;
  formatTooltip?: (props: any) => React.ReactNode;
}

export const ModernPieChart: React.FC<ModernPieChartProps> = ({
  data,
  height = 300,
  showLegend = true,
  formatTooltip
}) => {
  const defaultTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const total = 12450; // Total for percentage calculation
      return (
        <div className="bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
          <p className="font-semibold text-sm mb-1">{data.category}</p>
          <p className="text-sm">
            <span className="font-medium">${data.value.toLocaleString()}</span>
            <span className="text-muted-foreground ml-2">
              ({((data.value / total) * 100).toFixed(1)}%)
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ChartContainer config={{}} className="w-full h-full">
        <PieChart margin={modernChartStyles.pieChart.margin}>
          <defs>
            {data.map((entry, index) => (
              <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={entry.color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            dataKey="value"
            {...modernChartStyles.pieChart.pieProps}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={`url(#gradient-${index})`}
              />
            ))}
          </Pie>
          <ChartTooltip 
            content={formatTooltip || defaultTooltip}
          />
        </PieChart>
      </ChartContainer>
      
      {/* Modern Legend */}
      {showLegend && (
        <div className="space-y-2 mt-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className={modernLegendStyles.item}>
                <div 
                  className={modernLegendStyles.dot}
                  style={{ backgroundColor: entry.color }}
                />
                <span className={modernLegendStyles.label}>{entry.category}</span>
              </div>
              <span className="text-sm font-semibold">${entry.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
