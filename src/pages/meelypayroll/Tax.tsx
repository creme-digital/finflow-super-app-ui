
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Download, Filter, Plus, Search, FileText, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2 } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const MeelyPayrollTax = () => {
  const { formatAmount } = useCurrency();

  const [filters, setFilters] = useState({
    type: [] as string[],
    status: [] as string[],
    period: [] as string[]
  });

  const taxMetrics = [
    {
      title: 'Total Tax Withheld',
      value: formatAmount(3250000),
      change: '+8%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Pending Filings',
      value: '3',
      change: '-25%',
      trend: 'down',
      icon: FileText
    },
    {
      title: 'Upcoming Deadlines',
      value: '5',
      change: '-2',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Compliance Score',
      value: '98%',
      change: '+2%',
      trend: 'up',
      icon: AlertCircle
    }
  ];

  const taxFiling = [
    {
      id: 'TAX-001',
      type: 'Federal Income Tax',
      period: 'Q1 2024',
      amount: 1250000,
      status: 'filed',
      dueDate: '2024-04-15',
      filedDate: '2024-04-01'
    },
    {
      id: 'TAX-002',
      type: 'State Income Tax',
      period: 'Q1 2024',
      amount: 450000,
      status: 'filed',
      dueDate: '2024-04-15',
      filedDate: '2024-04-01'
    },
    {
      id: 'TAX-003',
      type: 'Social Security',
      period: 'Q1 2024',
      amount: 850000,
      status: 'filed',
      dueDate: '2024-04-15',
      filedDate: '2024-04-01'
    }
  ];

  const upcomingFiling = [
    {
      id: 'TAX-004',
      type: 'Federal Income Tax',
      period: 'Q2 2024',
      amount: 1250000,
      status: 'pending',
      dueDate: '2024-07-15'
    },
    {
      id: 'TAX-005',
      type: 'State Income Tax',
      period: 'Q2 2024',
      amount: 450000,
      status: 'pending',
      dueDate: '2024-07-15'
    }
  ];

  // Filter tax filings based on applied filters
  const filteredTaxFiling = taxFiling.filter(filing => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(filing.type);
    const statusMatch = filters.status.length === 0 || filters.status.includes(filing.status);
    const periodMatch = filters.period.length === 0 || filters.period.includes(filing.period);
    return typeMatch && statusMatch && periodMatch;
  });

  const filteredUpcomingFiling = upcomingFiling.filter(filing => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(filing.type);
    const statusMatch = filters.status.length === 0 || filters.status.includes(filing.status);
    const periodMatch = filters.period.length === 0 || filters.period.includes(filing.period);
    return typeMatch && statusMatch && periodMatch;
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
      type: [],
      status: [],
      period: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.type.length + filters.status.length + filters.period.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tax Management</h1>
            <p className="text-muted-foreground">Manage tax filings and compliance</p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            New Filing
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Filings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Due this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tax Liabilities</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,200</div>
              <p className="text-xs text-muted-foreground">Current quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Compliant</div>
              <p className="text-xs text-muted-foreground">All filings up to date</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Filings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add recent filings table here */}
              <p className="text-sm text-muted-foreground">No recent filings</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tax Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add tax documents list here */}
                <p className="text-sm text-muted-foreground">No tax documents available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add tax calendar here */}
                <p className="text-sm text-muted-foreground">No upcoming tax events</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="filed" className="space-y-4">
          <TabsList>
            <TabsTrigger value="filed">Filed Returns</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Filings</TabsTrigger>
            <TabsTrigger value="reports">Tax Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="filed" className="space-y-4">
            {/* Filters - matching Cards page styling */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full relative">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white">
                    <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('Federal Income Tax')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'Federal Income Tax', checked)}
                    >
                      Federal Income Tax
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('State Income Tax')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'State Income Tax', checked)}
                    >
                      State Income Tax
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('Social Security')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'Social Security', checked)}
                    >
                      Social Security
                    </DropdownMenuCheckboxItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.status.includes('filed')}
                      onCheckedChange={(checked) => handleFilterChange('status', 'filed', checked)}
                    >
                      Filed
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.status.includes('pending')}
                      onCheckedChange={(checked) => handleFilterChange('status', 'pending', checked)}
                    >
                      Pending
                    </DropdownMenuCheckboxItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuLabel>Filter by Period</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.period.includes('Q1 2024')}
                      onCheckedChange={(checked) => handleFilterChange('period', 'Q1 2024', checked)}
                    >
                      Q1 2024
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.period.includes('Q2 2024')}
                      onCheckedChange={(checked) => handleFilterChange('period', 'Q2 2024', checked)}
                    >
                      Q2 2024
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
              <div className="flex gap-2">
                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button className="w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  New Filing
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredTaxFiling.map((filing) => (
                <Card key={filing.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{filing.type}</h3>
                          <Badge variant="outline">{filing.period}</Badge>
                          <Badge variant="secondary">{filing.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Amount: {formatAmount(filing.amount)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          Filed: {filing.filedDate}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {/* Filters - matching Cards page styling */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-full relative">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-white">
                    <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('Federal Income Tax')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'Federal Income Tax', checked)}
                    >
                      Federal Income Tax
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('State Income Tax')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'State Income Tax', checked)}
                    >
                      State Income Tax
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.type.includes('Social Security')}
                      onCheckedChange={(checked) => handleFilterChange('type', 'Social Security', checked)}
                    >
                      Social Security
                    </DropdownMenuCheckboxItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.status.includes('filed')}
                      onCheckedChange={(checked) => handleFilterChange('status', 'filed', checked)}
                    >
                      Filed
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.status.includes('pending')}
                      onCheckedChange={(checked) => handleFilterChange('status', 'pending', checked)}
                    >
                      Pending
                    </DropdownMenuCheckboxItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuLabel>Filter by Period</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                      checked={filters.period.includes('Q1 2024')}
                      onCheckedChange={(checked) => handleFilterChange('period', 'Q1 2024', checked)}
                    >
                      Q1 2024
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={filters.period.includes('Q2 2024')}
                      onCheckedChange={(checked) => handleFilterChange('period', 'Q2 2024', checked)}
                    >
                      Q2 2024
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
              <Button className="w-full md:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Filing
              </Button>
            </div>

            <div className="grid gap-4">
              {filteredUpcomingFiling.map((filing) => (
                <Card key={filing.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{filing.type}</h3>
                          <Badge variant="outline">{filing.period}</Badge>
                          <Badge variant="secondary">{filing.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Estimated Amount: {formatAmount(filing.amount)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due: {filing.dueDate}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tax Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Quarterly Tax Summary</h4>
                        <p className="text-sm text-muted-foreground">Q1 2024</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Annual Tax Report</h4>
                        <p className="text-sm text-muted-foreground">2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tax Compliance Report</h4>
                        <p className="text-sm text-muted-foreground">Updated monthly</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Employee Tax Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">W-2 Forms</h4>
                        <p className="text-sm text-muted-foreground">2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">1099 Forms</h4>
                        <p className="text-sm text-muted-foreground">2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Tax Withholding Forms</h4>
                        <p className="text-sm text-muted-foreground">Current</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MeelyPayrollTax;
