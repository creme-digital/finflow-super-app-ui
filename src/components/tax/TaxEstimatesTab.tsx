
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

const COLORS = ['#8b5cf6', '#f97316', '#10b981'];

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
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Legend />
                  <Bar dataKey="estimate" name="Estimated" fill="#8b5cf6" />
                  <Bar dataKey="actual" name="Paid" fill="#10b981" />
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
                  >
                    {taxBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                  <Legend />
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
              <div>
                <h4 className="text-sm font-medium mb-2">Income Sources</h4>
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
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total Income</span>
                    <span>$103,500</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Deductions & Credits</h4>
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
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total Deductions</span>
                    <span>$46,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t text-lg font-medium">
              <span>Taxable Income</span>
              <span>$57,500</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
