import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Filter, Download, MoreHorizontal, UserPlus, Edit2, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const Payroll = () => {
  const [filters, setFilters] = useState({
    department: [] as string[],
    frequency: [] as string[],
    status: [] as string[]
  });

  const employees = [
    {
      id: 'EMP-001',
      name: 'James Hall',
      department: 'Engineer',
      payPeriodStart: '23/05/2024',
      salary: 8657.41,
      lastPayDate: '23/05/2024',
      frequency: 'Bi-Weekly',
      status: 'Paid'
    },
    {
      id: 'EMP-002',
      name: 'Rhonda Rhodes',
      department: 'Marketing',
      payPeriodStart: '23/05/2024',
      salary: 342.07,
      lastPayDate: '23/05/2024',
      frequency: 'Bi-Weekly',
      status: 'Paid'
    },
    {
      id: 'EMP-003',
      name: 'Kathy Pacheco',
      department: 'Design',
      payPeriodStart: '23/05/2024',
      salary: 1486.52,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    },
    {
      id: 'EMP-004',
      name: 'Kimberly Mastrangelo',
      department: 'Finance',
      payPeriodStart: '23/05/2024',
      salary: 5653.56,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    },
    {
      id: 'EMP-005',
      name: 'Corina McCoy',
      department: 'Business',
      payPeriodStart: '23/05/2024',
      salary: 1595.71,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    },
    {
      id: 'EMP-006',
      name: 'Iva Ryan',
      department: 'Project',
      payPeriodStart: '23/05/2024',
      salary: 7738.89,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    },
    {
      id: 'EMP-007',
      name: 'Stephanie Nicol',
      department: 'Product',
      payPeriodStart: '23/05/2024',
      salary: 8650.33,
      lastPayDate: '23/05/2024',
      frequency: 'Bi-Weekly',
      status: 'Paid'
    },
    {
      id: 'EMP-008',
      name: 'Alex Buckmaster',
      department: 'Product',
      payPeriodStart: '23/05/2024',
      salary: 1207.52,
      lastPayDate: '23/05/2024',
      frequency: 'Bi-Weekly',
      status: 'Paid'
    },
    {
      id: 'EMP-009',
      name: 'Patricia Sanders',
      department: 'Design',
      payPeriodStart: '23/05/2024',
      salary: 376.96,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    },
    {
      id: 'EMP-010',
      name: 'Katie Sims',
      department: 'DevOps',
      payPeriodStart: '23/05/2024',
      salary: 7727.07,
      lastPayDate: '23/05/2024',
      frequency: 'Monthly',
      status: 'Paid'
    }
  ];

  // Filter employees based on applied filters
  const filteredEmployees = employees.filter(employee => {
    const departmentMatch = filters.department.length === 0 || filters.department.includes(employee.department);
    const frequencyMatch = filters.frequency.length === 0 || filters.frequency.includes(employee.frequency);
    const statusMatch = filters.status.length === 0 || filters.status.includes(employee.status);
    return departmentMatch && frequencyMatch && statusMatch;
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
      department: [],
      frequency: [],
      status: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.department.length + filters.frequency.length + filters.status.length;
  };

  const handleEditEmployee = (employeeId: string) => {
    console.log('Edit employee:', employeeId);
    // TODO: Implement edit functionality
  };

  const handleRemoveEmployee = (employeeId: string, employeeName: string) => {
    console.log('Remove employee:', employeeId, employeeName);
    // TODO: Implement remove functionality
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Layout
      title="Payroll"
      mainContent={
        <div className="space-y-6">
          {/* Header with consistent styling */}
          <PageHeader 
            title="Payroll"
            children={
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export All
                </Button>
                <Button variant="default" size="sm" className="gap-2">
                  Run Payroll
                </Button>
                <Button variant="default" size="sm" className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Add Employee
                </Button>
              </div>
            }
          />

          {/* Tabs with Glass Effect */}
          <Tabs defaultValue="employees" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="employees">Employees</TabsTrigger>
                <TabsTrigger value="schedules">Pay Schedules</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="employees" className="space-y-6">
              {/* Filters - matching Cards page styling */}
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
                      <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Engineer')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Engineer', checked)}
                      >
                        Engineer
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Marketing')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Marketing', checked)}
                      >
                        Marketing
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Design')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Design', checked)}
                      >
                        Design
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Finance')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Finance', checked)}
                      >
                        Finance
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Business')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Business', checked)}
                      >
                        Business
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Project')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Project', checked)}
                      >
                        Project
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('Product')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'Product', checked)}
                      >
                        Product
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.department.includes('DevOps')}
                        onCheckedChange={(checked) => handleFilterChange('department', 'DevOps', checked)}
                      >
                        DevOps
                      </DropdownMenuCheckboxItem>
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuLabel>Filter by Frequency</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.frequency.includes('Bi-Weekly')}
                        onCheckedChange={(checked) => handleFilterChange('frequency', 'Bi-Weekly', checked)}
                      >
                        Bi-Weekly
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={filters.frequency.includes('Monthly')}
                        onCheckedChange={(checked) => handleFilterChange('frequency', 'Monthly', checked)}
                      >
                        Monthly
                      </DropdownMenuCheckboxItem>
                      
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                      <DropdownMenuCheckboxItem
                        checked={filters.status.includes('Paid')}
                        onCheckedChange={(checked) => handleFilterChange('status', 'Paid', checked)}
                      >
                        Paid
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

              {/* Payroll Table with Glass Effect */}
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
                      <TableHead className="font-medium text-muted-foreground">Name</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Department</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Pay Period Start Date ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Salary</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Last Pay Date ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Frequency ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Status ↕</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEmployees.map((employee) => (
                      <TableRow key={employee.id} className="border-b border-border last:border-0">
                        <TableCell className="font-medium text-foreground py-4">
                          {employee.name}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {employee.department}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {employee.payPeriodStart}
                        </TableCell>
                        <TableCell className="font-medium text-foreground py-4">
                          {formatCurrency(employee.salary)}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {employee.lastPayDate}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-4">
                          {employee.frequency}
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-green-100 text-green-800 hover:bg-green-100"
                          >
                            {employee.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={() => handleEditEmployee(employee.id)}
                                className="cursor-pointer"
                              >
                                <Edit2 className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => handleRemoveEmployee(employee.id, employee.name)}
                                className="cursor-pointer text-red-600 focus:text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Remove User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="schedules">
              <div className="text-center py-8 text-muted-foreground">
                Pay Schedules content coming soon
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="text-center py-8 text-muted-foreground">
                Payroll History content coming soon
              </div>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
};

export default Payroll;
