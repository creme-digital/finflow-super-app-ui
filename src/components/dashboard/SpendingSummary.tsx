
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Jan', spending: 4000 },
  { name: 'Feb', spending: 3000 },
  { name: 'Mar', spending: 5000 },
  { name: 'Apr', spending: 2780 },
  { name: 'May', spending: 1890 },
  { name: 'Jun', spending: 2390 },
  { name: 'Jul', spending: 3490 },
];

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
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, 'Spending']}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  padding: '8px 12px',
                }}
                labelStyle={{ fontWeight: 600, marginBottom: 4 }}
              />
              <Line
                type="monotone"
                dataKey="spending"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
