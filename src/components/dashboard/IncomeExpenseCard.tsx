
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ReferenceLine } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign } from 'lucide-react';

const balanceData = [{
  month: 'Jan',
  income: 28500,
  expense: -24000
}, {
  month: 'Feb',
  income: 31000,
  expense: -28000
}, {
  month: 'Mar',
  income: 29500,
  expense: -26500
}, {
  month: 'Apr',
  income: 32000,
  expense: -29000
}, {
  month: 'May',
  income: 34000,
  expense: -31000
}, {
  month: 'Jun',
  income: 32500,
  expense: -29500
}, {
  month: 'Jul',
  income: 35000,
  expense: -32000
}, {
  month: 'Aug',
  income: 33500,
  expense: -30500
}, {
  month: 'Sep',
  income: 31500,
  expense: -28500
}, {
  month: 'Oct',
  income: 36000,
  expense: -33000
}, {
  month: 'Nov',
  income: 34500,
  expense: -31500
}, {
  month: 'Dec',
  income: 37000,
  expense: -34000
}];

const chartConfig = {
  income: {
    label: "Income",
    color: "#292EE9"
  },
  expense: {
    label: "Expense",
    color: "#D1D5DC"
  }
};

export function IncomeExpenseCard() {
  return (
    <div className="flex flex-col overflow-hidden" style={{
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.06)',
      borderRadius: '16px'
    }}>
      
      {/* Card header */}
      <div className="p-3 flex flex-row justify-between items-center" style={{
        background: 'rgba(255, 255, 255, 0.4)'
      }}>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          <span className="text-black text-sm font-medium" style={{
            fontFamily: 'Inter'
          }}>
            Income vs Expense
          </span>
        </div>
        <Select defaultValue="7days">
          <SelectTrigger className="w-[140px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">7 days</SelectItem>
            <SelectItem value="lastweek">Last Week</SelectItem>
            <SelectItem value="lastmonth">Last Month</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="lastyear">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Card content hug height */}
      <div className="p-3">
        <div style={{ height: '280px' }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart data={balanceData} margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }} barCategoryGap="5%">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
                fontSize: 10
              }} />
              <YAxis axisLine={false} tickLine={false} tick={{
                fontSize: 10,
                fill: '#64748b'
              }} />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="2 2" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="income" fill={chartConfig.income.color} radius={[24, 24, 0, 0]} maxBarSize={32} />
              <Bar dataKey="expense" fill={chartConfig.expense.color} radius={[24, 24, 0, 0]} maxBarSize={32} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
