
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

export function CryptoMoneyFlowCard() {
  return (
    <div className="flex flex-col overflow-hidden" style={{
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
      borderRadius: '16px'
    }}>
      
      {/* Card header */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.6)'
      }} className="p-3 flex flex-row justify-between items-center bg-white/40">
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
        <div style={{
          height: '280px'
        }}>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart data={moneyFlowData} margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}>
              <defs>
                <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartConfig.flow.color} stopOpacity={0.8} />
                  <stop offset="100%" stopColor={chartConfig.flow.color} stopOpacity={0.1} />
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
              <Line type="monotone" dataKey="flow" stroke={chartConfig.flow.color} strokeWidth={3} dot={false} activeDot={{
                r: 6,
                fill: chartConfig.flow.color,
                stroke: '#fff',
                strokeWidth: 2
              }} />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
