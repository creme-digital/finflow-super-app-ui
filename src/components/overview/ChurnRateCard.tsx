
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingDown } from 'lucide-react';

const churnData = [
  { week: 'Week 1', rate: 5.2 },
  { week: 'Week 2', rate: 4.8 },
  { week: 'Week 3', rate: 6.1 },
  { week: 'Week 4', rate: 3.9 }
];

const chartConfig = {
  rate: { label: "Churn Rate", color: "#ef4444" }
};

export function ChurnRateCard() {
  return (
    <div 
      className="flex flex-col h-full overflow-hidden"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px'
      }}
    >
      <div className="p-4 flex items-center gap-2" style={{
        background: 'rgba(255, 255, 255, 0.8)'
      }}>
        <TrendingDown className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          Churn Rate
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <div style={{ height: '280px' }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart data={churnData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <defs>
                <linearGradient id="churnGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.rate.color} stopOpacity={0.8}/>
                  <stop offset="100%" stopColor={chartConfig.rate.color} stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis 
                dataKey="week" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }}
                tickFormatter={(value) => `${value}%`}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                formatter={(value) => [`${value}%`, 'Churn Rate']}
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke={chartConfig.rate.color} 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: chartConfig.rate.color, stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
