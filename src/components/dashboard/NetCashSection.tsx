import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
const assetValueData = [{
  month: 'Jan',
  value: 45000
}, {
  month: 'Feb',
  value: 48500
}, {
  month: 'Mar',
  value: 52000
}, {
  month: 'Apr',
  value: 49500
}, {
  month: 'May',
  value: 58000
}, {
  month: 'Jun',
  value: 62500
}, {
  month: 'Jul',
  value: 59000
}, {
  month: 'Aug',
  value: 65500
}, {
  month: 'Sep',
  value: 68000
}, {
  month: 'Oct',
  value: 72321
}, {
  month: 'Nov',
  value: 69500
}, {
  month: 'Dec',
  value: 75000
}];
const chartConfig = {
  value: {
    label: "Asset Value",
    color: "#292EE9"
  }
};
export function NetCashSection() {
  return <div className="flex flex-col gap-3 bg-transparent">
      {/* Net cash this month */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Portfolio Value</p>
        <h2 className="text-4xl font-medium" style={{
        fontFamily: 'Inter'
      }}>
          $72,321.11
        </h2>
      </div>

      {/* Asset Value Line Chart */}
      <div className="w-full h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart data={assetValueData} margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5
        }}>
            <defs>
              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartConfig.value.color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={chartConfig.value.color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
            fontSize: 12,
            fill: '#64748b'
          }} />
            <YAxis axisLine={false} tickLine={false} tick={{
            fontSize: 12,
            fill: '#64748b'
          }} tickFormatter={value => `$${(value / 1000).toFixed(0)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} formatter={value => [`$${Number(value).toLocaleString()}`, 'Asset Value']} />
            <Line type="monotone" dataKey="value" stroke={chartConfig.value.color} strokeWidth={3} dot={false} activeDot={{
            r: 6,
            fill: chartConfig.value.color,
            stroke: '#fff',
            strokeWidth: 2
          }} />
          </LineChart>
        </ChartContainer>
      </div>
    </div>;
}