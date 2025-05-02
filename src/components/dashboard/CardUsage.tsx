
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { CreditCard } from 'lucide-react';

const data = [
  { name: 'Business', value: 63, color: '#8B5CF6' },
  { name: 'Personal', value: 25, color: '#A78BFA' },
  { name: 'Travel', value: 12, color: '#C4B5FD' },
];

const cardConfig = {
  business: {
    label: "Business",
    color: "#8B5CF6",
  },
  personal: {
    label: "Personal", 
    color: "#A78BFA",
  },
  travel: {
    label: "Travel",
    color: "#C4B5FD",
  },
};

interface CardUsageProps {
  className?: string;
}

export function CardUsage({ className }: CardUsageProps) {
  return (
    <Card className={cn('card-shadow card-gradient h-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Card Usage</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <ChartContainer config={cardConfig} className="h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <div 
                  className="h-3 w-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs font-medium">{item.name}</span>
              </div>
              <span className="text-sm font-bold">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
