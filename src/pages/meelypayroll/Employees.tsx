import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Users, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2, Mail, Phone, MapPin } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const MeelyPayrollEmployees = () => {
  const { formatAmount } = useCurrency();

  const employeeMetrics = [
    {
      title: 'Total Employees',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Average Tenure',
      value: '2.5 years',
      change: '+0.3',
      trend: 'up',
      icon: Clock
    },
    {
      title: 'Departments',
      value: '8',
      change: '+1',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Open Positions',
      value: '5',
      change: '-2',
      trend: 'down',
      icon: AlertCircle
    }
  ];

  const employees = [
    {
      id: 'EMP-001',
      name: 'John Smith',
      position: 'Senior Developer',
      department: 'Engineering',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      startDate: '2022-01-15',
      status: 'active',
      salary: 120000
    },
    {
      id: 'EMP-002',
      name: 'Sarah Johnson',
      position: 'Product Manager',
      department: 'Product',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      startDate: '2023-03-01',
      status: 'active',
      salary: 95000
    },
    {
      id: 'EMP-003',
      name: 'Michael Brown',
      position: 'Junior Developer',
      department: 'Engineering',
      email: 'michael.brown@company.com',
      phone: '+1 (555) 345-6789',
      location: 'Remote',
      startDate: '2024-01-10',
      status: 'active',
      salary: 55000
    }
  ];

  const departments = [
    {
      id: 'DEPT-001',
      name: 'Engineering',
      employees: 45,
      manager: 'John Smith',
      budget: 5400000
    },
    {
      id: 'DEPT-002',
      name: 'Product',
      employees: 25,
      manager: 'Sarah Johnson',
      budget: 3000000
    },
    {
      id: 'DEPT-003',
      name: 'Marketing',
      employees: 15,
      manager: 'Emily Davis',
      budget: 1800000
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Employee Management</h1>
            <p className="text-muted-foreground">Manage employee information and records</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$85,000</div>
              <p className="text-xs text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Active departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Hires</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Employee Directory</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search employees..." className="pl-8" />
                </div>
                <Button variant="outline">Filter</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add employee list/table here */}
              <p className="text-sm text-muted-foreground">No employees found</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add department overview here */}
                <p className="text-sm text-muted-foreground">No department data available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add recent activity list here */}
                <p className="text-sm text-muted-foreground">No recent activity</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MeelyPayrollEmployees; 