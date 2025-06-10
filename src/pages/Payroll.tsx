
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Download, MoreHorizontal, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { AddEmployeeModal } from '@/components/payroll/AddEmployeeModal';
import { formatCurrency } from '@/lib/formatters';

const Payroll = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('employees');

  const employees = [
    { name: 'James Hall', department: 'Engineer', payPeriodStart: '23/05/2024', salary: 8657.41, lastPayDate: '23/05/2024', frequency: 'Bi-Weekly', status: 'Paid' },
    { name: 'Rhonda Rhodes', department: 'Marketing', payPeriodStart: '23/05/2024', salary: 342.07, lastPayDate: '23/05/2024', frequency: 'Bi-Weekly', status: 'Paid' },
    { name: 'Kathy Pacheco', department: 'Design', payPeriodStart: '23/05/2024', salary: 1486.52, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
    { name: 'Kimberly Mastrangelo', department: 'Finance', payPeriodStart: '23/05/2024', salary: 5653.56, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
    { name: 'Corina McCoy', department: 'Business', payPeriodStart: '23/05/2024', salary: 1595.71, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
    { name: 'Iva Ryan', department: 'Project', payPeriodStart: '23/05/2024', salary: 7738.89, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
    { name: 'Stephanie Nicol', department: 'Product', payPeriodStart: '23/05/2024', salary: 8650.33, lastPayDate: '23/05/2024', frequency: 'Bi-Weekly', status: 'Paid' },
    { name: 'Alex Buckmaster', department: 'Product', payPeriodStart: '23/05/2024', salary: 1207.52, lastPayDate: '23/05/2024', frequency: 'Bi-Weekly', status: 'Paid' },
    { name: 'Patricia Sanders', department: 'Design', payPeriodStart: '23/05/2024', salary: 376.96, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
    { name: 'Katie Sims', department: 'DevOps', payPeriodStart: '23/05/2024', salary: 7727.07, lastPayDate: '23/05/2024', frequency: 'Monthly', status: 'Paid' },
  ];

  const tabs = [
    { id: 'employees', label: 'Employees' },
    { id: 'schedules', label: 'Pay Schedules' },
    { id: 'history', label: 'History' }
  ];

  return (
    <Layout>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">Payroll</h1>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-blue-600 font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Run Payroll
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-b bg-muted/20">
                  <TableHead className="font-medium text-muted-foreground py-4">Name</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Department</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Pay Period Start Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Salary</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Last Pay Date</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Frequency</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Status</TableHead>
                  <TableHead className="font-medium text-muted-foreground py-4">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={index} className="border-b border-border/50 hover:bg-muted/30">
                    <TableCell className="font-medium text-foreground py-4">
                      {employee.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {employee.department}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {employee.payPeriodStart}
                    </TableCell>
                    <TableCell className="font-medium text-foreground py-4">
                      {formatCurrency(employee.salary)}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {employee.lastPayDate}
                    </TableCell>
                    <TableCell className="text-muted-foreground py-4">
                      {employee.frequency}
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge 
                        className="bg-green-100 text-green-700 hover:bg-green-100"
                        style={{
                          backgroundColor: '#D1FAE5',
                          color: '#065F46',
                          border: 'none'
                        }}
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
          </CardContent>
        </Card>

        <AddEmployeeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </Layout>
  );
};

export default Payroll;
