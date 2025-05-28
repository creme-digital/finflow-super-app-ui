import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Users, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2 } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const MeelyPayrollSalaries = () => {
  const { formatAmount } = useCurrency();

  const salaryMetrics = [
    {
      title: 'Average Salary',
      value: formatAmount(85000),
      change: '+3%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Total Compensation',
      value: formatAmount(13260000),
      change: '+5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Pending Reviews',
      value: '12',
      change: '-15%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Salary Bands',
      value: '8',
      change: '0%',
      trend: 'neutral',
      icon: Users
    }
  ];

  const salaryBands = [
    {
      id: 'BAND-001',
      name: 'Entry Level',
      min: 45000,
      max: 65000,
      employees: 45,
      lastUpdated: '2024-03-01'
    },
    {
      id: 'BAND-002',
      name: 'Mid Level',
      min: 65000,
      max: 95000,
      employees: 78,
      lastUpdated: '2024-03-01'
    },
    {
      id: 'BAND-003',
      name: 'Senior Level',
      min: 95000,
      max: 140000,
      employees: 33,
      lastUpdated: '2024-03-01'
    }
  ];

  const employees = [
    {
      id: 'EMP-001',
      name: 'John Smith',
      position: 'Senior Developer',
      department: 'Engineering',
      salary: 120000,
      band: 'Senior Level',
      lastReview: '2024-02-15',
      nextReview: '2024-08-15'
    },
    {
      id: 'EMP-002',
      name: 'Sarah Johnson',
      position: 'Product Manager',
      department: 'Product',
      salary: 95000,
      band: 'Mid Level',
      lastReview: '2024-01-20',
      nextReview: '2024-07-20'
    },
    {
      id: 'EMP-003',
      name: 'Michael Brown',
      position: 'Junior Developer',
      department: 'Engineering',
      salary: 55000,
      band: 'Entry Level',
      lastReview: '2024-03-01',
      nextReview: '2024-09-01'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Salary Management</h1>
            <p className="text-muted-foreground">Manage salary bands and compensation</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Salary Band
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatAmount(85000)}</div>
              <p className="text-xs text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salary Bands</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{salaryBands.length}</div>
              <p className="text-xs text-muted-foreground">Active bands</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Increase</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.5%</div>
              <p className="text-xs text-muted-foreground">Average annual raise</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Salary Bands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salaryBands.map((band) => (
                <div key={band.id} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{band.name}</h3>
                      <Badge variant="outline">{band.employees} employees</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Range: {formatAmount(band.min)} - {formatAmount(band.max)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Last Updated: {band.lastUpdated}
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
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compensation History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add compensation history chart here */}
              <p className="text-sm text-muted-foreground">No compensation history available</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MeelyPayrollSalaries; 