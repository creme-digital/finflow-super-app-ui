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
  return;
}