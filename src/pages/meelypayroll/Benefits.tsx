import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Users, DollarSign, Clock, AlertCircle, TrendingUp, TrendingDown, Calendar, Edit2, Trash2, Heart, Shield, Home, Car, Briefcase } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';

const MeelyPayrollBenefits = () => {
  const { formatAmount } = useCurrency();

  const benefitMetrics = [
    {
      title: 'Total Enrolled',
      value: '142',
      change: '+8%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Monthly Cost',
      value: formatAmount(85000),
      change: '+5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Coverage Rate',
      value: '91%',
      change: '+2%',
      trend: 'up',
      icon: Shield
    },
    {
      title: 'Pending Changes',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: AlertCircle
    }
  ];

  const benefits = [
    {
      id: 'BEN-001',
      name: 'Health Insurance',
      type: 'Medical',
      provider: 'Blue Cross',
      coverage: 'Family',
      monthlyCost: 1200,
      status: 'active',
      enrollmentPeriod: '2024-01-01 to 2024-12-31'
    },
    {
      id: 'BEN-002',
      name: 'Dental Insurance',
      type: 'Dental',
      provider: 'Delta Dental',
      coverage: 'Individual',
      monthlyCost: 150,
      status: 'active',
      enrollmentPeriod: '2024-01-01 to 2024-12-31'
    },
    {
      id: 'BEN-003',
      name: 'Vision Insurance',
      type: 'Vision',
      provider: 'VSP',
      coverage: 'Family',
      monthlyCost: 75,
      status: 'active',
      enrollmentPeriod: '2024-01-01 to 2024-12-31'
    }
  ];

  const plans = [
    {
      id: 'PLAN-001',
      name: 'Basic Health Plan',
      type: 'Medical',
      provider: 'Blue Cross',
      monthlyCost: 800,
      coverage: 'Individual',
      features: ['Primary Care', 'Specialist Visits', 'Prescription Drugs']
    },
    {
      id: 'PLAN-002',
      name: 'Premium Health Plan',
      type: 'Medical',
      provider: 'Blue Cross',
      monthlyCost: 1200,
      coverage: 'Family',
      features: ['Primary Care', 'Specialist Visits', 'Prescription Drugs', 'Dental', 'Vision']
    },
    {
      id: 'PLAN-003',
      name: 'Comprehensive Plan',
      type: 'Medical',
      provider: 'Blue Cross',
      monthlyCost: 1500,
      coverage: 'Family',
      features: ['Primary Care', 'Specialist Visits', 'Prescription Drugs', 'Dental', 'Vision', 'Mental Health']
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Benefits Management</h1>
            <p className="text-muted-foreground">Manage employee benefits and coverage</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Benefit
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Available benefits</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Total participants</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,500</div>
              <p className="text-xs text-muted-foreground">Total benefits cost</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Enrollment</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">30 days</div>
              <p className="text-xs text-muted-foreground">Until next period</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Benefit Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add benefit plans list here */}
              <p className="text-sm text-muted-foreground">No benefit plans available</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add enrollment status here */}
                <p className="text-sm text-muted-foreground">No enrollment data available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Claims History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add claims history here */}
                <p className="text-sm text-muted-foreground">No claims history available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MeelyPayrollBenefits; 