
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';
import { DollarSign } from 'lucide-react';

const paymentData = [
  { name: 'Complete', value: 70, fill: '#22c55e' },
  { name: 'Pending', value: 20, fill: '#f59e0b' },
  { name: 'Failed', value: 10, fill: '#ef4444' }
];

const chartConfig = {
  complete: { label: "Complete", color: "#22c55e" },
  pending: { label: "Pending", color: "#f59e0b" },
  failed: { label: "Failed", color: "#ef4444" }
};

export function PaymentStatusCard() {
  return (
    <div 
      className="flex flex-col h-full overflow-hidden"
      style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px'
      }}
    >
      <div className="p-4 flex items-center gap-2" style={{
        background: 'rgba(255, 255, 255, 0.6)'
      }}>
        <DollarSign className="w-4 h-4" />
        <span className="text-black text-base font-medium" style={{
          fontFamily: 'Inter'
        }}>
          Payment Status
        </span>
      </div>
      
      <div className="flex-1 p-4">
        <div className="h-full flex flex-col items-center justify-center">
          <ChartContainer config={chartConfig} className="w-full h-48">
            <PieChart>
              <Pie
                data={paymentData}
                cx="50%"
                cy="80%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {paymentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
          
          <div className="flex gap-6 mt-4">
            {paymentData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
