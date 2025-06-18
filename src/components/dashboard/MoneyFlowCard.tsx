
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp } from 'lucide-react';

const moneyFlowData = [
  { day: 'Mon', flow: 12000 },
  { day: 'Tue', flow: 18500 },
  { day: 'Wed', flow: 15000 },
  { day: 'Thu', flow: 22000 },
  { day: 'Fri', flow: 19500 },
  { day: 'Sat', flow: 16000 },
  { day: 'Sun', flow: 14500 }
];

const chartConfig = {
  flow: {
    label: "Money Flow",
    color: "#292EE9"
  }
};

export function MoneyFlowCard() {
  return (
    <div 
      className="overflow-hidden p-6"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-medium">Money Flow</h3>
          </div>
          <p className="text-xs text-muted-foreground">Weekly cash flow analysis</p>
        </div>
        <Select defaultValue="week">
          <SelectTrigger className="w-[100px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart 
            data={moneyFlowData} 
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
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
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />} 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Money Flow']}
            />
            <Line 
              type="monotone" 
              dataKey="flow" 
              stroke={chartConfig.flow.color} 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: chartConfig.flow.color, stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
