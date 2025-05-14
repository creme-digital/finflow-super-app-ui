import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { TooltipProps } from 'recharts';

const data = [
  { name: 'Business', value: 63, color: '#6366f1' },
  { name: 'Personal', value: 25, color: '#06b6d4' },
  { name: 'Travel', value: 12, color: '#f59e42' },
];

// Custom Tooltip for PieChart
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{payload[0].name}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-block w-3 h-3 rounded-full" style={{ background: payload[0].color }}></span>
          <span className="font-medium">{payload[0].value}%</span>
        </div>
      </div>
    );
  }
  return null;
}

interface CardUsageProps {
  className?: string;
}

export function CardUsage({ className }: CardUsageProps) {
  return (
    <Card className={cn('card-shadow h-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Card Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
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
                stroke="#fff"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
            </PieChart>
          </ResponsiveContainer>
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
