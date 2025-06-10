
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { TrendingUp } from 'lucide-react';

const grossVolumeData = [
  { time: '10AM', volume: 12000 },
  { time: '11AM', volume: 15000 },
  { time: '12PM', volume: 18000 },
  { time: '1PM', volume: 22000 },
  { time: '2PM', volume: 19000 },
  { time: '3PM', volume: 25000 },
  { time: '4PM', volume: 28000 },
  { time: '5PM', volume: 24000 },
  { time: '6PM', volume: 21000 }
];

const chartConfig = {
  volume: { label: "Volume", color: "#3b82f6" }
};

export function GrossVolumeCard() {
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
        <TrendingUp className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          Gross Volume (Daily)
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart data={grossVolumeData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="time" 
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
              formatter={(value) => [`$${value.toLocaleString()}`, 'Volume']}
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
