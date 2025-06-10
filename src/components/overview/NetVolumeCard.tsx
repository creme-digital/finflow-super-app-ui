
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart3 } from 'lucide-react';

const netVolumeData = [
  { day: 'Mon', volume: 45000 },
  { day: 'Tue', volume: 52000 },
  { day: 'Wed', volume: 48000 },
  { day: 'Thu', volume: 61000 },
  { day: 'Fri', volume: 55000 },
  { day: 'Sat', volume: 67000 },
  { day: 'Sun', volume: 43000 }
];

const chartConfig = {
  volume: { label: "Net Volume", color: "#10b981" }
};

export function NetVolumeCard() {
  return (
    <div 
      className="flex flex-col h-full"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px'
      }}
    >
      <div className="p-4 flex items-center gap-2" style={{
        background: 'rgba(255, 255, 255, 0.8)'
      }}>
        <BarChart3 className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          Net Volume from Sales
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart data={netVolumeData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value) => [`$${value.toLocaleString()}`, 'Net Volume']}
            />
            <Line 
              type="monotone" 
              dataKey="volume" 
              stroke={chartConfig.volume.color} 
              strokeWidth={2} 
              dot={{ fill: chartConfig.volume.color, r: 4 }} 
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
