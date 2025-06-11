import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, Filter, Download, MoreHorizontal, UserPlus } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const Payroll = () => {
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

  return (
    <Layout
      title="Payroll"
      mainContent={
        <div className="space-y-6">
          {/* Header with Cards styling */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Payroll</h1>
              <p className="text-muted-foreground">Manage employee payroll and schedules</p>
            </div>
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
          </div>

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
              {/* Filters Row */}
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Department
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Pay Period
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Frequency
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  Status
                  <ChevronDown className="w-4 h-4" />
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
                    {employees.map((employee) => (
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
