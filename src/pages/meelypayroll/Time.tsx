import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, Clock, Calendar as CalendarIcon, Users, AlertCircle } from 'lucide-react';

const MeelyPayrollTime = () => {
  const timeEntries = [
    {
      id: 'TIME-001',
      date: '2024-03-15',
      employee: 'John Doe',
      project: 'Website Redesign',
      hours: 8.5,
      status: 'approved',
      type: 'regular'
    },
    {
      id: 'TIME-002',
      date: '2024-03-14',
      employee: 'Jane Smith',
      project: 'Mobile App Development',
      hours: 7.5,
      status: 'pending',
      type: 'regular'
    },
    {
      id: 'TIME-003',
      date: '2024-03-13',
      employee: 'Bob Johnson',
      project: 'Client Support',
      hours: 4.0,
      status: 'approved',
      type: 'overtime'
    }
  ];

  const attendanceRecords = [
    {
      id: 'ATT-001',
      date: '2024-03-15',
      employee: 'John Doe',
      clockIn: '09:00 AM',
      clockOut: '05:30 PM',
      status: 'present'
    },
    {
      id: 'ATT-002',
      date: '2024-03-14',
      employee: 'Jane Smith',
      clockIn: '08:45 AM',
      clockOut: '05:15 PM',
      status: 'present'
    },
    {
      id: 'ATT-003',
      date: '2024-03-13',
      employee: 'Bob Johnson',
      clockIn: '09:30 AM',
      clockOut: '04:45 PM',
      status: 'late'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Time Management</h1>
            <p className="text-muted-foreground">Track time and manage attendance</p>
          </div>
          <Button>
            <Clock className="mr-2 h-4 w-4" />
            Clock In/Out
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">Currently working</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Off Requests</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Pending approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Time Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add time tracking table here */}
              <p className="text-sm text-muted-foreground">No time entries found</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Time Off Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add time off calendar here */}
                <p className="text-sm text-muted-foreground">No upcoming time off</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add attendance summary here */}
                <p className="text-sm text-muted-foreground">No attendance data available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MeelyPayrollTime; 