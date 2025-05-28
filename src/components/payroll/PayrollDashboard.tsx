import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserPlus, Calendar, BadgeDollarSign, FileText, Users, CalendarCheck, Download } from 'lucide-react';
import { AddEmployeeModal } from './AddEmployeeModal';
import { EmployeeTable } from './EmployeeTable';
import { PayScheduleTable } from './PayScheduleTable';
import { PayrollHistoryTable } from './PayrollHistoryTable';

export const PayrollDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tab, setTab] = useState('employees');

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
          <div className="flex-1 flex flex-col items-start md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Employees</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>12</div>
          </div>
          <div className="flex-1 flex flex-col items-start md:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Next Pay Date</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>May 15, 2025</div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-6">
            <div className="flex items-center gap-2 mb-2">
              <BadgeDollarSign className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Monthly Payroll</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$38,450</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList
                style={{
                  display: 'inline-flex',
                  padding: 3,
                  alignItems: 'center',
                  gap: 2,
                  borderRadius: 8,
                  background: '#F8F8FA',
                }}
              >
                <TabsTrigger
                  value="employees"
                  style={{
                    display: 'flex',
                    padding: '6px 8px',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: 6,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    letterSpacing: '-0.02em',
                    fontWeight: 500,
                  }}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
                >
                  Employees
                </TabsTrigger>
                <TabsTrigger
                  value="schedules"
                  style={{
                    display: 'flex',
                    padding: '6px 8px',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: 6,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    letterSpacing: '-0.02em',
                    fontWeight: 500,
                  }}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
                >
                  Pay Schedules
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  style={{
                    display: 'flex',
                    padding: '6px 8px',
                    alignItems: 'center',
                    gap: 8,
                    borderRadius: 6,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    letterSpacing: '-0.02em',
                    fontWeight: 500,
                  }}
                  className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
                >
                  History
                </TabsTrigger>
              </TabsList>
              {tab === 'employees' && (
                <Button onClick={() => setIsModalOpen(true)} variant="secondary">
                  <UserPlus className="mr-1 h-4 w-4" />
                  Add Employee
                </Button>
              )}
              {tab === 'schedules' && (
                <Button variant="secondary">
                  <CalendarCheck className="mr-1 h-4 w-4" />
                  Create Schedule
                </Button>
              )}
              {tab === 'history' && (
                <Button variant="secondary">
                  <Download className="mr-1 h-4 w-4" />
                  Download
                </Button>
              )}
            </div>
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
        </CardContent>
      </Card>

      <AddEmployeeModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};
