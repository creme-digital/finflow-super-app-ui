
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const data = [
  { month: 'Jan', moneyIn: 28000, moneyOut: 15000 },
  { month: 'Feb', moneyIn: 31000, moneyOut: 12000 },
  { month: 'Mar', moneyIn: 29000, moneyOut: 18000 },
  { month: 'Apr', moneyIn: 35000, moneyOut: 14000 },
  { month: 'May', moneyIn: 32000, moneyOut: 16000 },
  { month: 'Jun', moneyIn: 32400, moneyOut: 12800 },
];

interface MoneyFlowChartProps {
  className?: string;
}

export function MoneyFlowChart({ className }: MoneyFlowChartProps) {
  return (
    <Card className={cn('card-shadow', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Money Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`$${value.toLocaleString()}`, name === 'moneyIn' ? 'Money In' : 'Money Out']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="moneyIn" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Money In"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="moneyOut" 
                stroke="#ef4444" 
                strokeWidth={3}
                name="Money Out"
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
