
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, Download, MoreHorizontal } from 'lucide-react';

const InsuranceMainContent = () => {
  const [activeTab, setActiveTab] = useState('applied');
  const [filters, setFilters] = useState({
    status: [] as string[],
    form: [] as string[]
  });

  const insuranceData = [
    {
      date: '23/05/2025',
      issuer: 'James Hall',
      form: '1092-NEC',
      amount: '$8,657.41',
      status: 'Submitted'
    },
    {
      date: '23/05/2024',
      issuer: 'Rhonda Rhodes',
      form: '1029-MISC',
      amount: '$342.07',
      status: 'Submitted'
    },
    {
      date: '23/05/2023',
      issuer: 'Kathy Pacheco',
      form: '1077-K',
      amount: '$1,486.52',
      status: 'Submitted'
    },
    {
      date: '23/05/2022',
      issuer: 'Kimberly Mastrangelo',
      form: '1092-NEC',
      amount: '$5,653.56',
      status: 'Submitted'
    },
    {
      date: '23/05/2021',
      issuer: 'Corina McCoy',
      form: '1029-MISC',
      amount: '$1,595.71',
      status: 'Submitted'
    },
    {
      date: '23/05/2020',
      issuer: 'Iva Ryan',
      form: '1077-K',
      amount: '$7,738.89',
      status: 'Submitted'
    },
    {
      date: '23/05/2019',
      issuer: 'Stephanie Nicol',
      form: '1092-NEC',
      amount: '$8,650.33',
      status: 'Submitted'
    },
    {
      date: '23/05/2018',
      issuer: 'Alex Buckmaster',
      form: '1029-MISC',
      amount: '$1,207.52',
      status: 'Submitted'
    },
    {
      date: '23/05/2017',
      issuer: 'Patricia Sanders',
      form: '1077-K',
      amount: '$376.96',
      status: 'Submitted'
    },
    {
      date: '23/05/2016',
      issuer: 'Katie Sims',
      form: '1077-K',
      amount: '$7,727.07',
      status: 'Submitted'
    }
  ];

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
      status: [],
      form: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.status.length + filters.form.length;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="space-y-6">
      {/* Header with Cards page styling */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-foreground">Insurance</h1>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Plus className="w-4 h-4" />
            Claim Insurance
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Apply Insurance
          </Button>
        </div>
      </div>

      {/* Tabs with Accounts page styling */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="applied" className="data-[state=active]:bg-background data-[state=active]:text-blue-600">
            Applied Insurance
          </TabsTrigger>
          <TabsTrigger value="claim" className="data-[state=active]:bg-background">
            Claim Insurance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="applied" className="space-y-4">
          {/* Filters and Export - matching Payroll page styling */}
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
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.status.includes('Submitted')}
                    onCheckedChange={(checked) => handleFilterChange('status', 'Submitted', checked)}
                  >
                    Submitted
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Form</DropdownMenuLabel>
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
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>

          {/* Table with Accounts page glass styling */}
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
                <TableRow className="border-b">
                  <TableHead className="text-left font-medium">Date</TableHead>
                  <TableHead className="text-left font-medium">Issuer</TableHead>
                  <TableHead className="text-left font-medium">Form</TableHead>
                  <TableHead className="text-left font-medium">Amount</TableHead>
                  <TableHead className="text-left font-medium">Status</TableHead>
                  <TableHead className="text-left font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {insuranceData.map((item, index) => (
                  <TableRow key={index} className="border-b last:border-b-0">
                    <TableCell className="font-medium">{item.date}</TableCell>
                    <TableCell>{item.issuer}</TableCell>
                    <TableCell>{item.form}</TableCell>
                    <TableCell className="font-medium">{item.amount}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="claim" className="space-y-4">
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
            <CardContent className="p-8 text-center">
              <div className="text-muted-foreground">
                <p>No claim insurance data available</p>
              </div>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Insurance() {
  return (
    <Layout 
      title="Insurance" 
      showRightSidebar={false}
      mainContent={<InsuranceMainContent />}
    />
  );
}
