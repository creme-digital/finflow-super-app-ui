
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', balance: 85000 },
  { month: 'Feb', balance: 89000 },
  { month: 'Mar', balance: 94000 },
  { month: 'Apr', balance: 98000 },
  { month: 'May', balance: 101000 },
  { month: 'Jun', balance: 104400 },
];

interface BalanceChartProps {
  className?: string;
}

export function BalanceChart({ className }: BalanceChartProps) {
  return (
    <Card className={cn('card-shadow', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Balance Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Balance']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="#6366f1" 
                strokeWidth={3}
                fill="#6366f1"
                fillOpacity={0.1}
                dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
