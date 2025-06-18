import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp } from 'lucide-react';
const moneyFlowData = [{
  day: 'Mon',
  flow: 12000
}, {
  day: 'Tue',
  flow: 18500
}, {
  day: 'Wed',
  flow: 15000
}, {
  day: 'Thu',
  flow: 22000
}, {
  day: 'Fri',
  flow: 19500
}, {
  day: 'Sat',
  flow: 16000
}, {
  day: 'Sun',
  flow: 14500
}];
const chartConfig = {
  flow: {
    label: "Money Flow",
    color: "#292EE9"
  }
};
export function MoneyFlowCard() {
  return;
}