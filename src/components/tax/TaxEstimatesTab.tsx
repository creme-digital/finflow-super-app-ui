import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import type { TooltipProps } from 'recharts';

// Modern color palette
const MODERN_COLORS = ['#6366f1', '#06b6d4', '#f59e42', '#10b981', '#f43f5e'];

// Custom Tooltip for Bar and Pie charts
function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-lg px-4 py-2 border border-gray-100">
        <p className="font-semibold text-sm mb-1">{label}</p>
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: entry.color }}></span>
            <span>{entry.name}:</span>
            <span className="font-medium">{typeof entry.value === 'number' ? `$${entry.value.toLocaleString()}` : entry.value}</span>
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
        <h3 className="text-lg font-medium">2025 Tax Estimation</h3>
        <Button variant="outline">Recalculate Estimates</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Tax Estimates</CardTitle>
            <CardDescription>Estimated vs. actual tax payments by quarter</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyTaxData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
                  <Bar dataKey="estimate" name="Estimated" fill={MODERN_COLORS[0]} radius={[8, 8, 0, 0]} />
                  <Bar dataKey="actual" name="Paid" fill={MODERN_COLORS[3]} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tax Breakdown</CardTitle>
            <CardDescription>Estimated tax by category</CardDescription>
          </CardHeader>
          <CardContent>
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
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income and Deductions Summary</CardTitle>
          <CardDescription>Basis for tax calculations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-white/50">
                <h4 className="text-sm font-semibold mb-3 text-gray-800">Income Sources</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Income</span>
                    <span className="font-medium">$85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">1099 Contract Work</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Income</span>
                    <span className="font-medium">$3,500</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t mt-3">
                    <span className="text-gray-900">Total Income</span>
                    <span className="text-gray-900">$103,500</span>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 bg-white/50">
                <h4 className="text-sm font-semibold mb-3 text-gray-800">Deductions & Credits</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Business Expenses</span>
                    <span className="font-medium">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Retirement Contributions</span>
                    <span className="font-medium">$12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Health Insurance</span>
                    <span className="font-medium">$8,500</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t mt-3">
                    <span className="text-gray-900">Total Deductions</span>
                    <span className="text-gray-900">$46,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-6 border-t text-lg font-bold bg-white/70 rounded-lg px-4 py-3 mt-2">
              <span>Taxable Income</span>
              <span>$57,500</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
