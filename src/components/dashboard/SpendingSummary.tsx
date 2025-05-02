
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', spending: 4000 },
  { month: 'Feb', spending: 3000 },
  { month: 'Mar', spending: 5000 },
  { month: 'Apr', spending: 2780 },
  { month: 'May', spending: 1890 },
  { month: 'Jun', spending: 2390 },
  { month: 'Jul', spending: 3490 },
  { month: 'Aug', spending: 4200 },
  { month: 'Sep', spending: 3800 },
  { month: 'Oct', spending: 5100 },
  { month: 'Nov', spending: 4900 },
  { month: 'Dec', spending: 6200 },
];

const spendingConfig = {
  spending: {
    label: "Spending",
    color: "#8B5CF6", // Purple color
  },
};

interface SpendingSummaryProps {
  className?: string;
}

export function SpendingSummary({ className }: SpendingSummaryProps) {
  return (
    <Card className={cn('card-shadow card-gradient h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Spending Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ChartContainer config={spendingConfig} className="h-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                  tick={{ fontSize: 12 }}
                />
                <ChartTooltip 
                  content={
                    <ChartTooltipContent 
                      labelFormatter={(label) => `${label}`} 
                      formatter={(value) => [`$${value}`, 'Spending']} 
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="spending"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSpending)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
