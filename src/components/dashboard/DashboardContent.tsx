
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const cashFlowData = [
  { month: 'Jan', moneyIn: 28500, moneyOut: 24000 },
  { month: 'Feb', moneyIn: 31000, moneyOut: 28000 },
  { month: 'Mar', moneyIn: 29500, moneyOut: 26500 },
  { month: 'Apr', moneyIn: 32000, moneyOut: 29000 },
  { month: 'May', moneyIn: 34000, moneyOut: 31000 },
  { month: 'Jun', moneyIn: 32500, moneyOut: 29500 },
  { month: 'Jul', moneyIn: 35500, moneyOut: 32000 },
  { month: 'Aug', moneyIn: 34500, moneyOut: 31500 },
  { month: 'Sep', moneyIn: 37500, moneyOut: 34000 },
  { month: 'Oct', moneyIn: 39000, moneyOut: 36000 },
  { month: 'Nov', moneyIn: 36500, moneyOut: 33500 },
  { month: 'Dec', moneyIn: 38000, moneyOut: 35000 },
];

const chartConfig = {
  moneyIn: {
    label: "Money In",
    color: "#292EE9",
  },
  moneyOut: {
    label: "Money Out", 
    color: "#D1D5DC",
  },
};

export function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Net Cash Section */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Net cash this month</p>
        <h2 className="text-4xl font-medium" style={{ fontFamily: 'Inter' }}>
          $72,321.11
        </h2>
      </div>

      {/* Money In/Out and Chart Section */}
      <div className="flex flex-row gap-8 items-center">
        {/* Money In/Out Summary */}
        <div className="space-y-4 min-w-[200px]">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-green-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Money in</span>
              <span className="text-lg font-medium text-green-600">$310,704.49</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-red-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Money out</span>
              <span className="text-lg font-medium text-red-600">-$383,025.60</span>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1 h-[20px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowData} margin={{ top: 2, right: 10, left: 10, bottom: 2 }} barCategoryGap="60%">
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 8, fill: '#64748b' }}
                />
                <YAxis hide />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                />
                <Bar 
                  dataKey="moneyIn" 
                  fill="var(--color-moneyIn)"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={8}
                />
                <Bar 
                  dataKey="moneyOut" 
                  fill="var(--color-moneyOut)"
                  radius={[2, 2, 0, 0]} 
                  maxBarSize={8}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
