
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { UserCheck } from 'lucide-react';

const retentionData = [
  { week: 'Week 1', new: 45, return: 85 },
  { week: 'Week 2', new: 52, return: 78 },
  { week: 'Week 3', new: 48, return: 82 },
  { week: 'Week 4', new: 61, return: 89 }
];

const chartConfig = {
  new: { label: "New Customers", color: "#3b82f6" },
  return: { label: "Return Customers", color: "#10b981" }
};

export function CustomerRetentionCard() {
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
        <UserCheck className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          Customer Retention
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart data={retentionData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
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
            <Bar 
              dataKey="new" 
              fill={chartConfig.new.color} 
              radius={[2, 2, 0, 0]} 
            />
            <Bar 
              dataKey="return" 
              fill={chartConfig.return.color} 
              radius={[2, 2, 0, 0]} 
            />
          </BarChart>
        </ChartContainer>
        
        <div className="flex gap-4 mt-2 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.new.color }} />
            <span className="text-sm text-muted-foreground">New</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.return.color }} />
            <span className="text-sm text-muted-foreground">Return</span>
          </div>
        </div>
      </div>
    </div>
  );
}
