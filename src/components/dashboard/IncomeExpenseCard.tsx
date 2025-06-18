
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
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Income vs Expense</h3>
        <Select defaultValue="12m">
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12m">12 months</SelectItem>
            <SelectItem value="6m">6 months</SelectItem>
            <SelectItem value="3m">3 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart data={balanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="income" fill={chartConfig.income.color} radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" fill={chartConfig.expense.color} radius={[0, 0, 4, 4]} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
