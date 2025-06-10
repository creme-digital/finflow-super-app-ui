
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', moneyIn: 28000, moneyOut: 15000 },
  { month: 'Feb', moneyIn: 31000, moneyOut: 18000 },
  { month: 'Mar', moneyIn: 29000, moneyOut: 16000 },
  { month: 'Apr', moneyIn: 32400, moneyOut: 12800 },
  { month: 'May', moneyIn: 35000, moneyOut: 14000 },
  { month: 'Jun', moneyIn: 33000, moneyOut: 13500 },
];

const chartConfig = {
  moneyIn: {
    label: 'Money In',
    color: 'hsl(var(--primary))',
  },
  moneyOut: {
    label: 'Money Out',
    color: 'hsl(var(--destructive))',
  },
};

export function MoneyInOutChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Money In vs Out</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="moneyIn" fill="var(--color-moneyIn)" radius={4} />
              <Bar dataKey="moneyOut" fill="var(--color-moneyOut)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
