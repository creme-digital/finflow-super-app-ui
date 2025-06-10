
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', flow: 13000 },
  { month: 'Feb', flow: 13000 },
  { month: 'Mar', flow: 13000 },
  { month: 'Apr', flow: 19600 },
  { month: 'May', flow: 21000 },
  { month: 'Jun', flow: 19500 },
];

const chartConfig = {
  flow: {
    label: 'Money Flow',
    color: 'hsl(var(--primary))',
  },
};

export function MoneyFlowChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Money Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="flow" 
                stroke="var(--color-flow)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-flow)', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
