
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const cryptoValueData = [
  { month: 'Jan', value: 15000 },
  { month: 'Feb', value: 18500 },
  { month: 'Mar', value: 22000 },
  { month: 'Apr', value: 19500 },
  { month: 'May', value: 28000 },
  { month: 'Jun', value: 32500 },
  { month: 'Jul', value: 29000 },
  { month: 'Aug', value: 35500 },
  { month: 'Sep', value: 38000 },
  { month: 'Oct', value: 42321 },
  { month: 'Nov', value: 39500 },
  { month: 'Dec', value: 45000 }
];

const chartConfig = {
  value: {
    label: "Crypto Portfolio Value",
    color: "#F59E0B" // Crypto orange color
  }
};

export function CryptoNetCashSection() {
  return (
    <div className="flex flex-col gap-3 bg-transparent">
      {/* Crypto portfolio value */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Crypto Portfolio Value</p>
        <h2 className="text-4xl font-medium" style={{ fontFamily: 'Inter' }}>
          $42,321.11
        </h2>
      </div>

      {/* Crypto Value Line Chart */}
      <div className="w-full h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart 
            data={cryptoValueData} 
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="cryptoValueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartConfig.value.color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={chartConfig.value.color} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }} 
              tickFormatter={value => `$${(value / 1000).toFixed(0)}k`} 
            />
            <ChartTooltip 
              content={<ChartTooltipContent />} 
              formatter={value => [`$${Number(value).toLocaleString()}`, 'Crypto Portfolio Value']} 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={chartConfig.value.color} 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: chartConfig.value.color, stroke: '#fff', strokeWidth: 2 }} 
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
