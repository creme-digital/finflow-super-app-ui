
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const stockChartData = [
  { month: 'Jan', price: 1500, volume: 200 },
  { month: 'Feb', price: 2000, volume: 300 },
  { month: 'Mar', price: 2500, volume: 250 },
  { month: 'Apr', price: 2200, volume: 400 },
  { month: 'May', price: 3000, volume: 350 },
  { month: 'Jun', price: 4000, volume: 500 },
  { month: 'Jul', price: 3500, volume: 300 },
  { month: 'Aug', price: 4500, volume: 600 },
  { month: 'Sep', price: 5500, volume: 700 },
  { month: 'Oct', price: 6000, volume: 800 },
  { month: 'Nov', price: 5800, volume: 600 },
  { month: 'Dec', price: 6200, volume: 750 }
];

const timeFrames = ['1 Day', '1 Week', '1 Month', '3 Month', '6 Month', '1 Years', '3 Years', 'ALL'];

const chartConfig = {
  price: {
    label: "Price",
    color: "#10b981"
  },
  volume: {
    label: "Volume",
    color: "#6366f1"
  }
};

export function StockDetailChart() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('1 Day');

  const glassCardStyle = {
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  };

  return (
    <div className="overflow-hidden" style={glassCardStyle}>
      <CardHeader style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold">
              a
            </div>
            <div>
              <div className="font-semibold text-lg">Amazone</div>
              <div className="text-sm text-muted-foreground">AMZ</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">$ 201,01</div>
            <div className="text-sm text-green-600">trend title ▲ 70.5% Last update 15.40</div>
          </div>
        </div>
        
        {/* Time Frame Buttons */}
        <div className="flex gap-2 mt-4">
          {timeFrames.map((timeFrame) => (
            <Button
              key={timeFrame}
              variant={selectedTimeFrame === timeFrame ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeFrame(timeFrame)}
              className={`text-xs px-3 py-1 ${
                selectedTimeFrame === timeFrame 
                  ? "bg-blue-600 text-white" 
                  : "bg-white/50 text-muted-foreground hover:bg-white/70"
              }`}
            >
              {timeFrame}
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
        <div className="h-[400px] w-full">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={stockChartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b' }} 
                />
                <YAxis 
                  yAxisId="price"
                  orientation="left"
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <YAxis 
                  yAxisId="volume"
                  orientation="right"
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  yAxisId="volume"
                  dataKey="volume" 
                  fill={chartConfig.volume.color}
                  opacity={0.3}
                  radius={[2, 2, 0, 0]}
                />
                <Line 
                  yAxisId="price"
                  type="monotone" 
                  dataKey="price" 
                  stroke={chartConfig.price.color} 
                  strokeWidth={2} 
                  dot={{ fill: chartConfig.price.color, strokeWidth: 2, r: 3 }} 
                  activeDot={{ r: 5, fill: chartConfig.price.color, stroke: '#fff', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </div>
  );
}
