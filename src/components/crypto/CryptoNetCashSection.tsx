
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const cashFlowData = [{
  month: 'Jan',
  moneyIn: 28500,
  moneyOut: 24000
}, {
  month: 'Feb',
  moneyIn: 31000,
  moneyOut: 28000
}, {
  month: 'Mar',
  moneyIn: 29500,
  moneyOut: 26500
}, {
  month: 'Apr',
  moneyIn: 32000,
  moneyOut: 29000
}, {
  month: 'May',
  moneyIn: 34000,
  moneyOut: 31000
}, {
  month: 'Jun',
  moneyIn: 32500,
  moneyOut: 29500
}, {
  month: 'Jul',
  moneyIn: 35000,
  moneyOut: 32000
}, {
  month: 'Aug',
  moneyIn: 33500,
  moneyOut: 30500
}, {
  month: 'Sep',
  moneyIn: 31500,
  moneyOut: 28500
}, {
  month: 'Oct',
  moneyIn: 36000,
  moneyOut: 33000
}, {
  month: 'Nov',
  moneyIn: 34500,
  moneyOut: 31500
}, {
  month: 'Dec',
  moneyIn: 37000,
  moneyOut: 34000
}];

const chartConfig = {
  moneyIn: {
    label: "Money In",
    color: "#292EE9"
  },
  moneyOut: {
    label: "Money Out",
    color: "#D1D5DC"
  }
};

export function CryptoNetCashSection() {
  return (
    <div className="flex flex-col gap-3 bg-transparent">
      {/* Net cash this month */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Net cash this month</p>
        <h2 className="text-4xl font-medium" style={{
          fontFamily: 'Inter'
        }}>
          $72,321.11
        </h2>
      </div>

      {/* Div flex-row gap-16px */}
      <div className="flex flex-row gap-4 justify-between items-center ">
        
        {/* Div flex-col gap-12px */}
        <div className="flex flex-col gap-3">
          
          {/* Money in */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-green-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Money in</span>
              <span className="text-sm font-medium text-green-600 whitespace-nowrap">$310,704.49</span>
            </div>
          </div>
          
          {/* Money out */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-red-500 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Money out</span>
              <span className="text-sm font-medium text-red-600 whitespace-nowrap">-$383,025.60</span>
            </div>
          </div>
        </div>

        {/* Barchart */}
        <div className="w-full h-32">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={cashFlowData} margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }} barCategoryGap="10%">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
                fontSize: 10
              }} />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="moneyIn" fill={chartConfig.moneyIn.color} radius={[24, 24, 0, 0]} maxBarSize={12} />
              <Bar dataKey="moneyOut" fill={chartConfig.moneyOut.color} radius={[24, 24, 0, 0]} maxBarSize={12} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
