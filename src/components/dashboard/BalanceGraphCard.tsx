
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp } from 'lucide-react';

const balanceData = [
  { month: 'Jan', balance: 65000 },
  { month: 'Feb', balance: 68500 },
  { month: 'Mar', balance: 72300 },
  { month: 'Apr', balance: 69800 },
  { month: 'May', balance: 74200 },
  { month: 'Jun', balance: 78500 },
  { month: 'Jul', balance: 82100 },
  { month: 'Aug', balance: 79600 },
  { month: 'Sep', balance: 83400 },
  { month: 'Oct', balance: 87200 },
  { month: 'Nov', balance: 85800 },
  { month: 'Dec', balance: 89600 }
];

const chartConfig = {
  balance: {
    label: "Balance",
    color: "#10B981"
  }
};

export function BalanceGraphCard() {
  return (
    <div className="flex flex-col overflow-hidden" style={{
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
      borderRadius: '16px'
    }}>
      {/* Card header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.8)'
      }} className="p-3 flex flex-row justify-between items-center bg-white/40">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span className="text-black text-sm font-medium" style={{
            fontFamily: 'Inter'
          }}>
            Balance per Month
          </span>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-3">
        <div style={{ height: '280px' }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart data={balanceData} margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.balance.color} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={chartConfig.balance.color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
                fontSize: 12,
                fill: '#64748b'
              }} />
              <YAxis axisLine={false} tickLine={false} tick={{
                fontSize: 12,
                fill: '#64748b'
              }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke={chartConfig.balance.color} 
                strokeWidth={3} 
                fill="url(#balanceGradient)"
                dot={false} 
                activeDot={{
                  r: 6,
                  fill: chartConfig.balance.color,
                  stroke: '#fff',
                  strokeWidth: 2
                }} 
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
