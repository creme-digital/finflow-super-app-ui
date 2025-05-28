import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { TooltipProps } from 'recharts';

// Modern color palette matching accounting dashboard
const MODERN_COLORS = ['#0EA5E9', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

// Custom Tooltip for Bar and Pie charts
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-[#EDEDF1]">
        <p className="text-sm font-medium mb-1" style={{ color: '#6D6D74' }}>{label}</p>
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: entry.color }}></span>
            <span style={{ color: '#6D6D74' }}>{entry.name}:</span>
            <span className="font-mono" style={{ color: '#000' }}>{typeof entry.value === 'number' ? `$${entry.value.toLocaleString()}` : entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

// Sample data for the tax estimation charts
const quarterlyTaxData = [
  { name: 'Q1', estimate: 3125, actual: 3125 },
  { name: 'Q2', estimate: 3125, actual: 0 },
  { name: 'Q3', estimate: 3125, actual: 0 },
  { name: 'Q4', estimate: 3125, actual: 0 },
];

const taxBreakdownData = [
  { name: 'Federal Income Tax', value: 8250 },
  { name: 'Self-Employment Tax', value: 3200 },
  { name: 'State Income Tax', value: 1000 },
];

export const TaxEstimatesTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium" style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>2025 Tax Estimation</h3>
        <Button variant="outline" className="h-8 px-3 text-sm">Recalculate Estimates</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border border-[#E3E3EA] shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Quarterly Tax Estimates</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyTaxData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EDEDF1" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 13, fill: '#6D6D74' }} 
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <YAxis 
                    tick={{ fontSize: 13, fill: '#6D6D74' }} 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#F8F8FA' }} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{ fontSize: 13, color: '#6D6D74' }}
                    formatter={(value) => <span style={{ color: '#6D6D74' }}>{value}</span>}
                  />
                  <Bar dataKey="estimate" name="Estimated" fill={MODERN_COLORS[0]} radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar dataKey="actual" name="Paid" fill={MODERN_COLORS[1]} radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-[#E3E3EA] shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Tax Breakdown</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taxBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {taxBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={MODERN_COLORS[index % MODERN_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#F8F8FA' }} />
                  <Legend 
                    iconType="circle" 
                    wrapperStyle={{ fontSize: 13, color: '#6D6D74' }}
                    formatter={(value) => <span style={{ color: '#6D6D74' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-[#E3E3EA] shadow-none">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Income and Deductions Summary</span>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#EDEDF1] rounded-lg p-4 bg-white/50">
                <h4 className="text-sm font-medium mb-3" style={{ color: '#6D6D74' }}>Income Sources</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>Business Income</span>
                    <span className="font-mono" style={{ color: '#000' }}>$85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>1099 Contract Work</span>
                    <span className="font-mono" style={{ color: '#000' }}>$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>Investment Income</span>
                    <span className="font-mono" style={{ color: '#000' }}>$3,500</span>
                  </div>
                  <div className="flex justify-between font-medium pt-3 border-t border-[#EDEDF1] mt-3">
                    <span style={{ color: '#000' }}>Total Income</span>
                    <span className="font-mono" style={{ color: '#000' }}>$103,500</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#EDEDF1] rounded-lg p-4 bg-white/50">
                <h4 className="text-sm font-medium mb-3" style={{ color: '#6D6D74' }}>Deductions & Credits</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>Business Expenses</span>
                    <span className="font-mono" style={{ color: '#000' }}>$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>Retirement Contributions</span>
                    <span className="font-mono" style={{ color: '#000' }}>$12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#6D6D74' }}>Health Insurance</span>
                    <span className="font-mono" style={{ color: '#000' }}>$8,500</span>
                  </div>
                  <div className="flex justify-between font-medium pt-3 border-t border-[#EDEDF1] mt-3">
                    <span style={{ color: '#000' }}>Total Deductions</span>
                    <span className="font-mono" style={{ color: '#000' }}>$46,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-6 border-t border-[#EDEDF1] text-lg font-medium bg-white/70 rounded-lg px-4 py-3 mt-2">
              <span style={{ color: '#000' }}>Taxable Income</span>
              <span className="font-mono" style={{ color: '#000' }}>$57,500</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
