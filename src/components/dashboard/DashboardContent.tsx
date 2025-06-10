
import React from 'react';
import { TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, BarChart3, PieChart, Activity } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

const chartData = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 5200, expenses: 3800 },
  { month: 'Mar', income: 4800, expenses: 3500 },
  { month: 'Apr', income: 6200, expenses: 4200 },
  { month: 'May', income: 5800, expenses: 4000 },
  { month: 'Jun', income: 6500, expenses: 4500 }
];

const chartConfig = {
  income: { label: "Income", color: "#10b981" },
  expenses: { label: "Expenses", color: "#6366f1" }
};

export function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">
          Welcome back, Alex
        </h1>
        <p className="text-muted-foreground text-lg">Here's what's happening with your finances today.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+2.5%</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Balance</p>
            <p className="text-3xl font-bold text-foreground">$72,321.11</p>
            <p className="text-sm text-muted-foreground mt-2">+$1,751.89 this month</p>
          </div>
        </div>

        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 success-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+12.3%</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Income</p>
            <p className="text-3xl font-bold text-foreground">$6,500</p>
            <p className="text-sm text-muted-foreground mt-2">Above average this month</p>
          </div>
        </div>

        <div className="stat-card group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 warning-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <ArrowDownRight className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">-5.2%</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Monthly Expenses</p>
            <p className="text-3xl font-bold text-foreground">$4,500</p>
            <p className="text-sm text-muted-foreground mt-2">$232 less than last month</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="modern-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Cash Flow Trend</h3>
                <p className="text-sm text-muted-foreground">Monthly income vs expenses</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-muted-foreground font-medium">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-muted-foreground font-medium">Expenses</span>
              </div>
            </div>
          </div>
          <div className="h-72">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart data={chartData}>
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
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', r: 6, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        <div className="modern-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Monthly Comparison</h3>
                <p className="text-sm text-muted-foreground">Side-by-side analysis</p>
              </div>
            </div>
          </div>
          <div className="h-72">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <BarChart data={chartData} barGap={8}>
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
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="income" fill="#10b981" radius={[6, 6, 0, 0]} />
                <Bar dataKey="expenses" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
