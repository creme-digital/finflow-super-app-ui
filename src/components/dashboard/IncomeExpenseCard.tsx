
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ReferenceLine } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign } from 'lucide-react';

const balanceData = [
  { month: 'Jan', income: 28500, expense: -24000 },
  { month: 'Feb', income: 31000, expense: -28000 },
  { month: 'Mar', income: 29500, expense: -26500 },
  { month: 'Apr', income: 32000, expense: -29000 },
  { month: 'May', income: 34000, expense: -31000 },
  { month: 'Jun', income: 32500, expense: -29500 },
  { month: 'Jul', income: 35000, expense: -32000 },
  { month: 'Aug', income: 33500, expense: -30500 },
  { month: 'Sep', income: 31500, expense: -28500 },
  { month: 'Oct', income: 36000, expense: -33000 },
  { month: 'Nov', income: 34500, expense: -31500 },
  { month: 'Dec', income: 37000, expense: -34000 }
];

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
    <div 
      className="overflow-hidden p-6"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-medium">Income vs Expenses</h3>
          </div>
          <p className="text-xs text-muted-foreground">Monthly comparison</p>
        </div>
        <Select defaultValue="year">
          <SelectTrigger className="w-[100px] h-8">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="year">Year</SelectItem>
            <SelectItem value="quarter">Quarter</SelectItem>
            <SelectItem value="month">Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full h-64">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <BarChart 
            data={balanceData} 
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }} 
              tickFormatter={(value) => `$${Math.abs(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />} 
              formatter={(value, name) => [
                `$${Math.abs(Number(value)).toLocaleString()}`, 
                name === 'income' ? 'Income' : 'Expenses'
              ]}
            />
            <ReferenceLine y={0} stroke="#64748b" strokeDasharray="2 2" />
            <Bar dataKey="income" fill={chartConfig.income.color} radius={[2, 2, 0, 0]} />
            <Bar dataKey="expense" fill={chartConfig.expense.color} radius={[0, 0, 2, 2]} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
