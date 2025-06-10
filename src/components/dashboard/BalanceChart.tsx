
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', balance: 85000 },
  { month: 'Feb', balance: 92000 },
  { month: 'Mar', balance: 98000 },
  { month: 'Apr', balance: 104400 },
  { month: 'May', balance: 108000 },
  { month: 'Jun', balance: 110000 },
];

const chartConfig = {
  balance: {
    label: 'Total Balance',
    color: 'hsl(var(--primary))',
  },
};

export function BalanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="var(--color-balance)" 
                fill="var(--color-balance)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
