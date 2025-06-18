
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { modernChartConfig, modernChartStyles, formatYAxisValue, modernLegendStyles } from '@/lib/chart-config';

interface ModernBarChartProps {
  data: Array<Record<string, any>>;
  dataKeys: Array<{ key: string; name: string; color: string }>;
  height?: number;
  formatTooltip?: (value: number) => string;
  formatYAxis?: (value: number) => string;
}

export const ModernBarChart: React.FC<ModernBarChartProps> = ({
  data,
  dataKeys,
  height = 300,
  formatTooltip,
  formatYAxis = formatYAxisValue
}) => {
  return (
    <div style={{ height: `${height}px` }}>
      <ChartContainer config={modernChartConfig} className="w-full h-full">
        <BarChart 
          data={data} 
          margin={modernChartStyles.barChart.margin}
          barCategoryGap={modernChartStyles.barChart.barCategoryGap}
        >
          <defs>
            {dataKeys.map((dataKey) => (
              <linearGradient key={`${dataKey.key}Gradient`} id={`${dataKey.key}Gradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={dataKey.color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={dataKey.color} stopOpacity={0.3} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid {...modernChartStyles.cartesianGrid} />
          <XAxis 
            dataKey="quarter" 
            {...modernChartStyles.xAxis}
          />
          <YAxis 
            {...modernChartStyles.yAxis}
            tickFormatter={formatYAxis}
          />
          <ChartTooltip 
            content={<ChartTooltipContent />}
            {...modernChartStyles.tooltip}
          />
          {dataKeys.map((dataKey, index) => (
            <Bar 
              key={dataKey.key}
              dataKey={dataKey.key}
              fill={`url(#${dataKey.key}Gradient)`}
              name={dataKey.name}
              radius={[4, 4, 0, 0] as [number, number, number, number]}
              maxBarSize={40}
            />
          ))}
        </BarChart>
      </ChartContainer>
      
      {/* Modern Legend */}
      <div className={modernLegendStyles.container}>
        {dataKeys.map((dataKey) => (
          <div key={dataKey.key} className={modernLegendStyles.item}>
            <div 
              className={modernLegendStyles.dot}
              style={{ backgroundColor: dataKey.color }}
            />
            <span className={modernLegendStyles.label}>{dataKey.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
