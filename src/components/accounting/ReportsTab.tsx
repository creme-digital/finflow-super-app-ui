
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Calendar, ChevronDown, BarChart2, FileText } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

// Sample chart data
const monthlyRevenueData = [
  { month: 'Jan', revenue: 12500, expenses: 8200 },
  { month: 'Feb', revenue: 14200, expenses: 8700 },
  { month: 'Mar', revenue: 15800, expenses: 9200 },
  { month: 'Apr', revenue: 16900, expenses: 10100 },
  { month: 'May', revenue: 18100, expenses: 9800 },
  { month: 'Jun', revenue: 19500, expenses: 10700 },
];

const expenseCategoryData = [
  { name: 'Office Supplies', value: 5200 },
  { name: 'Rent', value: 12000 },
  { name: 'Utilities', value: 3800 },
  { name: 'Salaries', value: 42000 },
  { name: 'Software', value: 6500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Sample financial reports list
const availableReports = [
  { id: 'p-and-l', name: 'Profit & Loss Statement', type: 'Financial' },
  { id: 'balance-sheet', name: 'Balance Sheet', type: 'Financial' },
  { id: 'cash-flow', name: 'Cash Flow Statement', type: 'Financial' },
  { id: 'expenses', name: 'Expense Report', type: 'Operational' },
  { id: 'tax-summary', name: 'Tax Summary', type: 'Tax' },
  { id: 'invoice-aging', name: 'Accounts Receivable Aging', type: 'Operational' },
];

export function ReportsTab() {
  const [selectedReportType, setSelectedReportType] = useState('All');
  const [dateRange, setDateRange] = useState('This Month');
  
  const reportTypes = ['All', 'Financial', 'Operational', 'Tax'];
  const dateRanges = ['This Week', 'This Month', 'This Quarter', 'This Year', 'Custom'];
  
  const filteredReports = availableReports.filter(report => 
    selectedReportType === 'All' || report.type === selectedReportType
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">Financial Dashboard</h3>
          <p className="text-muted-foreground">View performance metrics and generate reports</p>
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                {dateRange}
                <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Period</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dateRanges.map(range => (
                <DropdownMenuItem 
                  key={range} 
                  onClick={() => setDateRange(range)}
                >
                  {range}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={monthlyRevenueData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  formatter={(value) => [`$${value}`, ""]} 
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#4f46e5" />
                <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseCategoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Available Reports */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Available Reports</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-8">
                <span>Type: {selectedReportType}</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {reportTypes.map(type => (
                <DropdownMenuItem 
                  key={type} 
                  onClick={() => setSelectedReportType(type)}
                >
                  {type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.name}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm">
                      <BarChart2 className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Summary metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(97000)}</div>
            <p className="text-xs text-muted-foreground mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(56700)}</div>
            <p className="text-xs text-muted-foreground mt-1">+5.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Net Profit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(40300)}</div>
            <p className="text-xs text-green-600 mt-1">+18.7% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Outstanding Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(12450)}</div>
            <p className="text-xs text-muted-foreground mt-1">3 invoices pending</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
