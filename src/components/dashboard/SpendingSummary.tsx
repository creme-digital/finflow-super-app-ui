import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { TooltipProps } from 'recharts';

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

// Modern color for spending
const MODERN_COLOR = '#6366f1';

// Custom Tooltip for AreaChart
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{label}</p>
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: entry.color }}></span>
            <span>{entry.name}:</span>
            <span className="font-medium">{typeof entry.value === 'number' ? `$${entry.value}` : entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function SpendingSummary({ className }: SpendingSummaryProps) {
  return (
    <Card className={cn('card-shadow h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Spending Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={MODERN_COLOR} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={MODERN_COLOR} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 13, fill: '#64748b' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
                tick={{ fontSize: 13, fill: '#64748b' }}
              />
              <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
              <Area
                type="monotone"
                dataKey="spending"
                name="Spending"
                stroke={MODERN_COLOR}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorSpending)"
                dot={{ r: 0, fill: MODERN_COLOR }}
                activeDot={{ r: 7, fill: MODERN_COLOR }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
