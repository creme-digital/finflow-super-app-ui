
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { CryptoTransactionsTable } from './CryptoTransactionsTable';

const portfolioData = [
  { month: 'Jan', value: 65000 },
  { month: 'Feb', value: 68500 },
  { month: 'Mar', value: 71200 },
  { month: 'Apr', value: 74800 },
  { month: 'May', value: 78300 },
  { month: 'Jun', value: 75600 },
  { month: 'Jul', value: 79200 },
  { month: 'Aug', value: 82100 },
  { month: 'Sep', value: 78900 },
  { month: 'Oct', value: 84500 },
  { month: 'Nov', value: 87200 },
  { month: 'Dec', value: 91800 }
];

const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "#292EE9"
  }
};

export function CryptoNetCashSection() {
  return (
    <div className="flex flex-col gap-6 bg-transparent">
      {/* Net cash this month */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Portfolio value this month</p>
        <h2 className="text-4xl font-medium" style={{
          fontFamily: 'Inter'
        }}>
          $91,800.00
        </h2>
      </div>

      {/* Portfolio Value Chart */}
      <div className="w-full h-80">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart data={portfolioData} margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20
          }}>
            <defs>
              <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={chartConfig.value.color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={chartConfig.value.color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{
                fontSize: 12,
                fill: '#64748b'
              }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{
                fontSize: 12,
                fill: '#64748b'
              }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />} 
              formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={chartConfig.value.color} 
              strokeWidth={3} 
              dot={{ 
                fill: chartConfig.value.color, 
                strokeWidth: 2, 
                r: 4 
              }} 
              activeDot={{
                r: 6,
                fill: chartConfig.value.color,
                stroke: '#fff',
                strokeWidth: 2
              }}
              fill="url(#portfolioGradient)"
            />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Crypto Transactions Table */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Recent Transactions</h3>
        <CryptoTransactionsTable />
      </div>
    </div>
  );
}
