
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, DollarSign } from 'lucide-react';

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

const moneyFlowData = [
  { day: 'Mon', flow: 12000 },
  { day: 'Tue', flow: 18500 },
  { day: 'Wed', flow: 15000 },
  { day: 'Thu', flow: 22000 },
  { day: 'Fri', flow: 19500 },
  { day: 'Sat', flow: 16000 },
  { day: 'Sun', flow: 14500 },
];

const balanceData = [
  { category: 'Earned', value: 45000, fill: '#22c55e' },
  { category: 'Spent', value: -32000, fill: '#ef4444' },
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
  flow: {
    label: "Money Flow",
    color: "#292EE9",
  },
  earned: {
    label: "Earned",
    color: "#22c55e",
  },
  spent: {
    label: "Spent",
    color: "#ef4444",
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
      <div className="flex flex-row gap-8 items-start">
        {/* Money In/Out Summary */}
        <div className="space-y-4 min-w-[200px] flex-shrink-0">
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
        <div className="flex-1 h-[80px] mt-2">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }} barCategoryGap="20%">
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#64748b' }}
                />
                <YAxis 
                  hide 
                  domain={[0, 50000]}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                />
                <Bar 
                  dataKey="moneyIn" 
                  fill="var(--color-moneyIn)"
                  radius={[2, 2, 0, 0]}
                  maxBarSize={12}
                />
                <Bar 
                  dataKey="moneyOut" 
                  fill="var(--color-moneyOut)"
                  radius={[2, 2, 0, 0]} 
                  maxBarSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Money Flow Card */}
      <div className="flex flex-col space-y-0 p-0 rounded-[16px] overflow-hidden" style={{ 
        background: 'rgba(255, 255, 255, 0.64)',
        border: '1px solid #FFFFFF'
      }}>
        {/* Card Header */}
        <div className="p-2 flex flex-row justify-between items-center" style={{
          background: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-black text-base font-medium" style={{ fontFamily: 'Inter' }}>
              Money flow
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
        
        {/* Card Content */}
        <div className="h-[200px] p-4">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moneyFlowData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                />
                <Line 
                  type="monotone" 
                  dataKey="flow" 
                  stroke="var(--color-flow)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-flow)", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      {/* Balance Card */}
      <div className="flex flex-col space-y-0 p-0 rounded-[16px] overflow-hidden" style={{ 
        background: 'rgba(255, 255, 255, 0.64)',
        border: '1px solid #FFFFFF'
      }}>
        {/* Card Header */}
        <div className="p-2 flex flex-row justify-between items-center" style={{
          background: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span className="text-black text-base font-medium" style={{ fontFamily: 'Inter' }}>
              Balance
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
        
        {/* Card Content */}
        <div className="h-[200px] p-4">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={balanceData} 
                layout="horizontal"
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis 
                  type="category" 
                  dataKey="category" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                />
                <Bar 
                  dataKey="value" 
                  fill="#22c55e"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
