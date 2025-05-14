
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserPlus, Calendar, BadgeDollarSign, FileText } from 'lucide-react';
import { AddEmployeeModal } from './AddEmployeeModal';
import { EmployeeTable } from './EmployeeTable';
import { PayScheduleTable } from './PayScheduleTable';
import { PayrollHistoryTable } from './PayrollHistoryTable';

export const PayrollDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3 card-gradient rounded-t-lg">
            <CardTitle>Employees</CardTitle>
            <CardDescription>Active employees on payroll</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl pb-2 font-semibold">12</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3 flex card-gradient rounded-t-lg">
            <CardTitle>Next Pay Date</CardTitle>
            <CardDescription>Upcoming payroll schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl pb-2 font-semibold">May 15, 2025</div>
            <p className="text-xs text-muted-foreground">13 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3 card-gradient rounded-t-lg  ">
            <CardTitle>Monthly Payroll</CardTitle>
            <CardDescription>Current month estimate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl pb-2 font-semibold">$38,450</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="employees" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="schedules">Pay Schedules</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="employees" className="mt-6">
          <EmployeeTable />
        </TabsContent>
        <TabsContent value="schedules" className="mt-6">
          <PayScheduleTable />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <PayrollHistoryTable />
        </TabsContent>
      </Tabs>

      <AddEmployeeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};
