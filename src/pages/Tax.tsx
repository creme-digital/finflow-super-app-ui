
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

  // Tax estimation data
  const quarterlyData = [
    { quarter: 'Q1', estimated: 12000, actual: 11500 },
    { quarter: 'Q2', estimated: 13500, actual: 13200 },
    { quarter: 'Q3', estimated: 11800, actual: 0 },
    { quarter: 'Q4', estimated: 14200, actual: 0 }
  ];

  const taxBreakdownData = [
    { category: 'Federal Income', value: 8500, color: '#292EE9' },
    { category: 'State Income', value: 2200, color: '#6366F1' },
    { category: 'Self Employment', value: 1750, color: '#8B5CF6' }
  ];

  const chartConfig = {
    estimated: {
      label: "Estimated",
      color: "#292EE9",
    },
    actual: {
      label: "Actual", 
      color: "#10B981",
    },
  };

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
              {/* 3 Numbers at Top */}
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
                  <div className="flex items-center gap-2 mb-2">
                    <Receipt className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                    <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Estimated Tax</span>
                  </div>
                  <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$12,450</div>
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
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarCheck className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                    <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Next Deadline</span>
                  </div>
                  <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>Jun 15, 2025</div>
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
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                    <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>YTD Payments</span>
                  </div>
                  <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$3,125</div>
                </div>
              </div>

              {/* 2 Charts in a Row */}
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
                  <div style={{ height: '300px' }}>
                    <ChartContainer config={chartConfig} className="w-full h-full">
                      <BarChart 
                        data={quarterlyData} 
                        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                        barCategoryGap="20%"
                      >
                        <defs>
                          <linearGradient id="estimatedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={chartConfig.estimated.color} stopOpacity={0.8} />
                            <stop offset="100%" stopColor={chartConfig.estimated.color} stopOpacity={0.3} />
                          </linearGradient>
                          <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={chartConfig.actual.color} stopOpacity={0.8} />
                            <stop offset="100%" stopColor={chartConfig.actual.color} stopOpacity={0.3} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.4} />
                        <XAxis 
                          dataKey="quarter" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 12, fill: '#64748b', fontFamily: 'Inter' }} 
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 12, fill: '#64748b', fontFamily: 'Inter' }} 
                          width={50}
                          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                        />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                        />
                        <Bar 
                          dataKey="estimated" 
                          fill="url(#estimatedGradient)"
                          radius={[4, 4, 0, 0]} 
                          maxBarSize={40}
                          name="Estimated"
                        />
                        <Bar 
                          dataKey="actual" 
                          fill="url(#actualGradient)"
                          radius={[4, 4, 0, 0]} 
                          maxBarSize={40}
                          name="Actual"
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>
                  
                  {/* Modern Legend */}
                  <div className="flex gap-6 mt-4 justify-center">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: chartConfig.estimated.color }}
                      />
                      <span className="text-sm text-muted-foreground font-medium">Estimated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: chartConfig.actual.color }}
                      />
                      <span className="text-sm text-muted-foreground font-medium">Actual</span>
                    </div>
                  </div>
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
                  <div style={{ height: '300px' }}>
                    <ChartContainer config={{}} className="w-full h-full">
                      <PieChart>
                        <defs>
                          {taxBreakdownData.map((entry, index) => (
                            <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor={entry.color} stopOpacity={0.8} />
                              <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
                            </linearGradient>
                          ))}
                        </defs>
                        <Pie
                          data={taxBreakdownData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          innerRadius={40}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {taxBreakdownData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={`url(#gradient-${index})`}
                            />
                          ))}
                        </Pie>
                        <ChartTooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                                  <p className="font-semibold text-sm mb-1">{data.category}</p>
                                  <p className="text-sm">
                                    <span className="font-medium">${data.value.toLocaleString()}</span>
                                    <span className="text-muted-foreground ml-2">
                                      ({((data.value / taxBreakdownData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%)
                                    </span>
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                      </PieChart>
                    </ChartContainer>
                  </div>
                  
                  {/* Modern Legend */}
                  <div className="space-y-2 mt-4">
                    {taxBreakdownData.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: entry.color }}
                          />
                          <span className="text-sm text-muted-foreground font-medium">{entry.category}</span>
                        </div>
                        <span className="text-sm font-semibold">${entry.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
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
