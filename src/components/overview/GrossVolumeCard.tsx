import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp } from 'lucide-react';
const grossVolumeData = [{
  time: '10AM',
  volume: 12000
}, {
  time: '11AM',
  volume: 15000
}, {
  time: '12PM',
  volume: 18000
}, {
  time: '1PM',
  volume: 22000
}, {
  time: '2PM',
  volume: 19000
}, {
  time: '3PM',
  volume: 25000
}, {
  time: '4PM',
  volume: 28000
}, {
  time: '5PM',
  volume: 24000
}, {
  time: '6PM',
  volume: 21000
}];
const chartConfig = {
  volume: {
    label: "Volume",
    color: "#3b82f6"
  }
};
export function GrossVolumeCard() {
  return <div className="flex flex-col h-full overflow-hidden" style={{
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px'
  }}>
      <div style={{
      background: 'rgba(255, 255, 255, 0.8)'
    }} className="p-4 flex items-center gap-2 bg-white/40">
        <TrendingUp className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
        fontFamily: 'Inter'
      }}>
          Gross Volume (Daily)
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <div style={{
        height: '280px'
      }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart data={grossVolumeData} margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 10
          }}>
              <defs>
                <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.volume.color} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={chartConfig.volume.color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{
              fontSize: 12,
              fill: '#64748b'
            }} />
              <YAxis axisLine={false} tickLine={false} tick={{
              fontSize: 12,
              fill: '#64748b'
            }} tickFormatter={value => `$${value / 1000}k`} width={40} />
              <ChartTooltip content={<ChartTooltipContent />} formatter={value => [`$${value.toLocaleString()}`, 'Volume']} />
              <Line type="monotone" dataKey="volume" stroke={chartConfig.volume.color} strokeWidth={3} dot={false} activeDot={{
              r: 6,
              fill: chartConfig.volume.color,
              stroke: '#fff',
              strokeWidth: 2
            }} />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>;
}