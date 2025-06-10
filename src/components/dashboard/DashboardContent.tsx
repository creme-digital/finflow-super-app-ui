import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, ReferenceLine } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, DollarSign } from 'lucide-react';

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
  moneyIn: {
    label: "Money In",
    color: "#292EE9"
  },
  moneyOut: {
    label: "Money Out",
    color: "#D1D5DC"
  },
  flow: {
    label: "Money Flow",
    color: "#292EE9"
  },
  income: {
    label: "Income",
    color: "#22c55e"
  },
  expense: {
    label: "Expense",
    color: "#ef4444"
  }
};

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-4 min-h-full" style={{
      borderRadius: '24px'
    }}>
      
      {/* Top Main Card items: transparent background, flex-col, 12px spacing, hug content */}
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

      {/* Card money flow: flex-col, 16px border radius, hug content */}
      <div className="flex flex-col overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px'
      }}>
        
        {/* Card header */}
        <div className="p-3 flex flex-row justify-between items-center" style={{
          background: 'rgba(255, 255, 255, 0.8)'
        }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-black text-sm font-medium" style={{
              fontFamily: 'Inter'
            }}>
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
        
        {/* Card content hug height */}
        <div className="p-3">
          <div style={{ height: '280px' }}>
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart data={moneyFlowData} margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5
              }}>
                <defs>
                  <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={chartConfig.flow.color} stopOpacity={0.8}/>
                    <stop offset="100%" stopColor={chartConfig.flow.color} stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{
                  fontSize: 12,
                  fill: '#64748b'
                }} />
                <YAxis axisLine={false} tickLine={false} tick={{
                  fontSize: 12,
                  fill: '#64748b'
                }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="flow" 
                  stroke={chartConfig.flow.color} 
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: chartConfig.flow.color, stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      {/* Card balance: flex-col, 16px border radius, hug content */}
      <div className="flex flex-col overflow-hidden" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px'
      }}>
        
        {/* Card header */}
        <div className="p-3 flex flex-row justify-between items-center" style={{
          background: 'rgba(255, 255, 255, 0.8)'
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
              }} barCategoryGap="10%">
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
                <Bar dataKey="income" fill={chartConfig.income.color} radius={[24, 24, 0, 0]} maxBarSize={12} />
                <Bar dataKey="expense" fill={chartConfig.expense.color} radius={[0, 0, 24, 24]} maxBarSize={12} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
