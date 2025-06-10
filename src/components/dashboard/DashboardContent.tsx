
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const cashFlowData = [
  { month: 'Jan', moneyIn: 285000, moneyOut: 240000 },
  { month: 'Feb', moneyIn: 310000, moneyOut: 280000 },
  { month: 'Mar', moneyIn: 295000, moneyOut: 265000 },
  { month: 'Apr', moneyIn: 320000, moneyOut: 290000 },
  { month: 'May', moneyIn: 340000, moneyOut: 310000 },
  { month: 'Jun', moneyIn: 325000, moneyOut: 295000 },
  { month: 'Jul', moneyIn: 355000, moneyOut: 320000 },
  { month: 'Aug', moneyIn: 345000, moneyOut: 315000 },
  { month: 'Sep', moneyIn: 375000, moneyOut: 340000 },
  { month: 'Oct', moneyIn: 390000, moneyOut: 360000 },
  { month: 'Nov', moneyIn: 365000, moneyOut: 335000 },
  { month: 'Dec', moneyIn: 380000, moneyOut: 350000 },
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
              <BarChart data={cashFlowData} margin={{ top: 2, right: 10, left: 10, bottom: 2 }} barCategoryGap="20%">
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
