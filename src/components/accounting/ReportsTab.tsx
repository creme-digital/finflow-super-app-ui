
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Chart,
  ChartContainer, 
  ChartTooltip,
  ChartTooltipContent,
  ChartSeries, 
  ChartLine, 
  ChartLineSeries,
  ChartBar, 
  ChartBarSeries,
  ChartAxis
} from '@/components/ui/chart';
import { BarChart2, FileText, Download, ChartPieIcon } from 'lucide-react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';

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
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
          <CardDescription>
            Comparison of monthly income and expenses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Chart className="h-[300px]">
            <ChartContainer>
              <ChartTooltip>
                <ChartTooltipContent className="bg-background border border-border" />
              </ChartTooltip>
              <ChartBarSeries
                data={monthlyData}
                xAxis="month"
                category="Income & Expenses"
                stack
              >
                <ChartBar name="income" valueKey="income" color="#8b5cf6" />
                <ChartBar name="expenses" valueKey="expenses" color="#f97316" />
              </ChartBarSeries>
              <ChartAxis />
            </ChartContainer>
          </Chart>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={() => handleDownload("Income vs Expenses")}>
            <Download className="mr-2 h-4 w-4" /> Download Report
          </Button>
        </CardFooter>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue by Quarter */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5" /> Quarterly Revenue
            </CardTitle>
            <CardDescription>
              Revenue breakdown by quarter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart className="h-[250px]">
              <ChartContainer>
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartBarSeries
                  data={quarterlyData}
                  xAxis="name"
                  category="Revenue"
                >
                  <ChartBar valueKey="value" color="#8b5cf6" />
                </ChartBarSeries>
                <ChartAxis />
              </ChartContainer>
            </Chart>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" onClick={() => handleDownload("Quarterly Revenue")}>
              <FileText className="mr-2 h-4 w-4" /> PDF
            </Button>
          </CardFooter>
        </Card>

        {/* Expenses by Category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartPieIcon className="h-5 w-5" /> Expense Categories
            </CardTitle>
            <CardDescription>
              Expenses breakdown by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart className="h-[250px]">
              <ChartContainer>
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
                <ChartBarSeries
                  data={categoryData}
                  xAxis="name"
                  category="Expenses"
                >
                  <ChartBar valueKey="value" color="#f97316" />
                </ChartBarSeries>
                <ChartAxis />
              </ChartContainer>
            </Chart>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" onClick={() => handleDownload("Expense Categories")}>
              <FileText className="mr-2 h-4 w-4" /> PDF
            </Button>
          </CardFooter>
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
