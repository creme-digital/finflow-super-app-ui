
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp } from 'lucide-react';

const moneyFlowData = [{
  day: 'Mon',
  flow: 12000
}, {
  day: 'Tue',
  flow: 18500
}, {
  day: 'Wed',
  flow: 15000
}, {
  day: 'Thu',
  flow: 22000
}, {
  day: 'Fri',
  flow: 19500
}, {
  day: 'Sat',
  flow: 16000
}, {
  day: 'Sun',
  flow: 14500
}];

const chartConfig = {
  flow: {
    label: "Money Flow",
    color: "#292EE9"
  }
};

export function MoneyFlowCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Money Flow</h3>
        <Select defaultValue="7d">
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">7 days</SelectItem>
            <SelectItem value="30d">30 days</SelectItem>
            <SelectItem value="90d">90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart data={moneyFlowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line 
              type="monotone" 
              dataKey="flow" 
              stroke={chartConfig.flow.color} 
              strokeWidth={3} 
              dot={false} 
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
