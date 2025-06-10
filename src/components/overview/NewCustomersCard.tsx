
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Users } from 'lucide-react';

const customerData = [
  { week: 'Week 1', thisMonth: 120, lastMonth: 100 },
  { week: 'Week 2', thisMonth: 135, lastMonth: 110 },
  { week: 'Week 3', thisMonth: 158, lastMonth: 125 },
  { week: 'Week 4', thisMonth: 180, lastMonth: 140 }
];

const chartConfig = {
  thisMonth: { label: "This Month", color: "#3b82f6" },
  lastMonth: { label: "Last Month", color: "#94a3b8" }
};

export function NewCustomersCard() {
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
        <Users className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          New Customers
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <div style={{ height: '280px' }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart data={customerData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <defs>
                <linearGradient id="thisMonthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.thisMonth.color} stopOpacity={0.8}/>
                  <stop offset="100%" stopColor={chartConfig.thisMonth.color} stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="lastMonthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.lastMonth.color} stopOpacity={0.8}/>
                  <stop offset="100%" stopColor={chartConfig.lastMonth.color} stopOpacity={0.1}/>
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
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="thisMonth" 
                stroke={chartConfig.thisMonth.color} 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: chartConfig.thisMonth.color, stroke: '#fff', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="lastMonth" 
                stroke={chartConfig.lastMonth.color} 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: chartConfig.lastMonth.color, stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
        
        <div className="flex gap-4 mt-2 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.thisMonth.color }} />
            <span className="text-sm text-muted-foreground">This Month</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.lastMonth.color }} />
            <span className="text-sm text-muted-foreground">Last Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
