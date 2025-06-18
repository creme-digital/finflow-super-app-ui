import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter, Download, MoreHorizontal, Plus, Receipt, CalendarCheck, FileText } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ModernBarChart } from '@/components/charts/ModernBarChart';
import { ModernPieChart } from '@/components/charts/ModernPieChart';
import { CHART_COLORS } from '@/lib/chart-config';

const Tax = () => {
  const [filters, setFilters] = useState({
    form: [] as string[],
    status: [] as string[],
    year: [] as string[]
  });

  const taxRecords = [
    {
      id: 'TAX-001',
      date: '23/05/2025',
      issuer: 'James Hall',
      form: '1092-NEC',
      amount: 8657.41,
      status: 'Submitted'
    },
    {
      id: 'TAX-002',
      date: '23/05/2024',
      issuer: 'Rhonda Rhodes',
      form: '1029-MISC',
      amount: 342.07,
      status: 'Submitted'
    },
    {
      id: 'TAX-003',
      date: '23/05/2023',
      issuer: 'Kathy Pacheco',
      form: '1077-K',
      amount: 1486.52,
      status: 'Submitted'
    },
    {
      id: 'TAX-004',
      date: '23/05/2022',
      issuer: 'Kimberly Mastrangelo',
      form: '1092-NEC',
      amount: 5653.56,
      status: 'Submitted'
    },
    {
      id: 'TAX-005',
      date: '23/05/2021',
      issuer: 'Corina McCoy',
      form: '1029-MISC',
      amount: 1595.71,
      status: 'Submitted'
    },
    {
      id: 'TAX-006',
      date: '23/05/2020',
      issuer: 'Iva Ryan',
      form: '1077-K',
      amount: 7738.89,
      status: 'Submitted'
    },
    {
      id: 'TAX-007',
      date: '23/05/2019',
      issuer: 'Stephanie Nicol',
      form: '1092-NEC',
      amount: 8650.33,
      status: 'Submitted'
    },
    {
      id: 'TAX-008',
      date: '23/05/2018',
      issuer: 'Alex Buckmaster',
      form: '1029-MISC',
      amount: 1207.52,
      status: 'Submitted'
    },
    {
      id: 'TAX-009',
      date: '23/05/2017',
      issuer: 'Patricia Sanders',
      form: '1077-K',
      amount: 376.96,
      status: 'Submitted'
    },
    {
      id: 'TAX-010',
      date: '23/05/2016',
      issuer: 'Katie Sims',
      form: '1077-K',
      amount: 7727.07,
      status: 'Submitted'
    }
  ];

  // Filter tax records based on applied filters
  const filteredTaxRecords = taxRecords.filter(record => {
    const formMatch = filters.form.length === 0 || filters.form.includes(record.form);
    const statusMatch = filters.status.length === 0 || filters.status.includes(record.status);
    const yearMatch = filters.year.length === 0 || filters.year.includes(record.date.split('/')[2]);
    return formMatch && statusMatch && yearMatch;
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      form: [],
      status: [],
      year: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.form.length + filters.status.length + filters.year.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

  // Tax estimation data - updated for reusable components
  const quarterlyData = [
    { quarter: 'Q1', estimated: 12000, actual: 11500 },
    { quarter: 'Q2', estimated: 13500, actual: 13200 },
    { quarter: 'Q3', estimated: 11800, actual: 0 },
    { quarter: 'Q4', estimated: 14200, actual: 0 }
  ];

  const taxBreakdownData = [
    { category: 'Federal Income', value: 8500, color: CHART_COLORS.primary },
    { category: 'State Income', value: 2200, color: CHART_COLORS.secondary },
    { category: 'Self Employment', value: 1750, color: CHART_COLORS.tertiary }
  ];

  const barChartDataKeys = [
    { key: 'estimated', name: 'Estimated', color: CHART_COLORS.primary },
    { key: 'actual', name: 'Actual', color: CHART_COLORS.secondary }
  ];

  return (
    <Layout
      title="Tax"
      mainContent={
        <div className="space-y-6">
          {/* Header with Cards page styling */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-foreground">Tax</h1>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export All
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Tax Submission form
              </Button>
            </div>
          </div>

          {/* Tabs with Accounts page styling */}
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="history">Tax History</TabsTrigger>
              <TabsTrigger value="estimation">Tax Estimation</TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-6">
              {/* Filters - matching Payroll page styling */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-full relative gap-2">
                        <Filter className="w-4 h-4" />
                        Filters
                        {activeFiltersCount > 0 && (
                          <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                            {activeFiltersCount}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 bg-white">
                      <DropdownMenuLabel>Filter by Form Type</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.form.includes('1092-NEC')}
                        onCheckedChange={(checked) => handleFilterChange('form', '1092-NEC', checked)}
                      >
                        1092-NEC
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.form.includes('1029-MISC')}
                        onCheckedChange={(checked) => handleFilterChange('form', '1029-MISC', checked)}
                      >
                        1029-MISC
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.form.includes('1077-K')}
                        onCheckedChange={(checked) => handleFilterChange('form', '1077-K', checked)}
                      >
                        1077-K
                      </DropdownMenuCheckboxItem>
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.status.includes('Submitted')}
                        onCheckedChange={(checked) => handleFilterChange('status', 'Submitted', checked)}
                      >
                        Submitted
                      </DropdownMenuCheckboxItem>
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuLabel>Filter by Year</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2025')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2025', checked)}
                      >
                        2025
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2024')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2024', checked)}
                      >
                        2024
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2023')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2023', checked)}
                      >
                        2023
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2022')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2022', checked)}
                      >
                        2022
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2021')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2021', checked)}
                      >
                        2021
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2020')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2020', checked)}
                      >
                        2020
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2019')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2019', checked)}
                      >
                        2019
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2018')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2018', checked)}
                      >
                        2018
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2017')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2017', checked)}
                      >
                        2017
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.year.includes('2016')}
                        onCheckedChange={(checked) => handleFilterChange('year', '2016', checked)}
                      >
                        2016
                      </DropdownMenuCheckboxItem>
                      
                      {activeFiltersCount > 0 && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={clearAllFilters} className="text-red-600">
                            Clear all filters
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <span className="text-sm text-muted-foreground">
                    {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export All
                </Button>
              </div>

              {/* Tax Records Table with Accounts page glass styling */}
              <div
                className="overflow-hidden"
                style={{
                  border: '1px solid #FFFFFF',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border">
                      <TableHead className="font-medium text-muted-foreground">Date ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Issuer</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Form</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Status ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTaxRecords.map((record) => (
                      <TableRow key={record.id} className="border-b border-border last:border-0">
                        <TableCell className="font-medium text-foreground py-4">
                          {record.date}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {record.issuer}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {record.form}
                        </TableCell>
                        <TableCell className="font-medium text-foreground py-4">
                          {formatCurrency(record.amount)}
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-green-100 text-green-800 hover:bg-green-100"
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-4">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="estimation" className="space-y-6">
              {/* Updated Top Cards to match accounting page styling */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="p-6 rounded-[16px]"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Inter' }}>$12,450</div>
                    <div className="text-sm text-muted-foreground">Estimated Tax</div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-[16px]"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Inter' }}>Jun 15, 2025</div>
                    <div className="text-sm text-muted-foreground">Next Deadline</div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-[16px]"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Inter' }}>$3,125</div>
                    <div className="text-sm text-muted-foreground">YTD Payments</div>
                  </div>
                </div>
              </div>

              {/* 2 Charts in a Row - Updated to use reusable components */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quarterly Tax Estimates Bar Chart */}
                <div
                  className="p-6 rounded-[16px]"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <h3 className="text-lg font-semibold mb-4">Quarterly Tax Estimates</h3>
                  <ModernBarChart
                    data={quarterlyData}
                    dataKeys={barChartDataKeys}
                    height={300}
                  />
                </div>

                {/* Tax Breakdown Pie Chart */}
                <div
                  className="p-6 rounded-[16px]"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <h3 className="text-lg font-semibold mb-4">Tax Breakdown</h3>
                  <ModernPieChart
                    data={taxBreakdownData}
                    height={300}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
};

export default Tax;
