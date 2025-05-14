import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ChartContainer, 
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { BarChart2, FileText, Download, ChartPieIcon } from 'lucide-react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { twMerge } from 'tailwind-merge';
import type { TooltipProps } from 'recharts';

const monthlyData = [
  { month: 'Jan', income: 4500, expenses: 3200 },
  { month: 'Feb', income: 5200, expenses: 3800 },
  { month: 'Mar', income: 4800, expenses: 3600 },
  { month: 'Apr', income: 6000, expenses: 4200 },
  { month: 'May', income: 5500, expenses: 3900 },
];

const quarterlyData = [
  { name: 'Q1', value: 15000 },
  { name: 'Q2', value: 18000 },
  { name: 'Q3', value: 16000 },
  { name: 'Q4', value: 21000 },
];

const categoryData = [
  { name: 'Software', value: 3500 },
  { name: 'Hardware', value: 2200 },
  { name: 'Office', value: 1800 },
  { name: 'Marketing', value: 2800 },
  { name: 'Other', value: 1200 },
];

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

export function ReportsTab() {
  const handleDownload = (reportType: string) => {
    toast({
      title: "Report Downloaded",
      description: `Your ${reportType} report has been downloaded.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium">Financial Reports</h3>
          <p className="text-sm text-muted-foreground">View and download your financial reports</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="2025">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
              <SelectItem value="annual">Annual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Income vs Expenses Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div>
            <CardTitle>Income vs Expenses</CardTitle>
            <CardDescription>
              Comparison of monthly income and expenses
            </CardDescription>
          </div>
          <Button variant="outline" onClick={() => handleDownload("Income vs Expenses")}> 
            <Download className="mr-2 h-4 w-4" /> Download Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
                <Bar dataKey="income" name="Income" fill={MODERN_COLORS[0]} radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill={MODERN_COLORS[2]} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue by Quarter */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                Quarterly Revenue
              </CardTitle>
              <CardDescription>
                Revenue breakdown by quarter
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => handleDownload("Quarterly Revenue")}> 
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 13, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip content={(props) => <CustomTooltip {...props} />} cursor={{ fill: '#f1f5f9', opacity: 0.5 }} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
                  <Bar dataKey="value" name="Revenue" fill={MODERN_COLORS[0]} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Expenses by Category */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                Expense Categories
              </CardTitle>
              <CardDescription>
                Expenses breakdown by category
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => handleDownload("Expense Categories")}> 
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {categoryData.map((entry, index) => (
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

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            Download detailed financial reports in various formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="financial">
            <TabsList className="mb-4">
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="tax">Tax</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="financial" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 px-4 flex flex-col items-center justify-center space-y-2" onClick={() => handleDownload("Profit & Loss")}>
                  <FileText className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">Profit & Loss</p>
                    <p className="text-xs text-muted-foreground">Monthly statement</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 px-4 flex flex-col items-center justify-center space-y-2" onClick={() => handleDownload("Balance Sheet")}>
                  <FileText className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">Balance Sheet</p>
                    <p className="text-xs text-muted-foreground">Current period</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 px-4 flex flex-col items-center justify-center space-y-2" onClick={() => handleDownload("Cash Flow")}>
                  <FileText className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">Cash Flow</p>
                    <p className="text-xs text-muted-foreground">Quarterly report</p>
                  </div>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="tax" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 px-4 flex flex-col items-center justify-center space-y-2" onClick={() => handleDownload("Tax Summary")}>
                  <FileText className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">Tax Summary</p>
                    <p className="text-xs text-muted-foreground">Year to date</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto py-4 px-4 flex flex-col items-center justify-center space-y-2" onClick={() => handleDownload("Deductions")}>
                  <FileText className="h-6 w-6" />
                  <div>
                    <p className="font-medium text-sm">Deductions</p>
                    <p className="text-xs text-muted-foreground">Itemized list</p>
                  </div>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="space-y-4">
              <div className="p-4 border border-dashed rounded-lg flex flex-col items-center justify-center text-center">
                <p className="text-muted-foreground mb-2">Generate custom reports based on your specific needs</p>
                <Button>Create Custom Report</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
