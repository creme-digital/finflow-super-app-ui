import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, Download, FileText, Receipt } from 'lucide-react';
import { TaxEstimatesTab } from './TaxEstimatesTab';
import { TaxDeadlinesTab } from './TaxDeadlinesTab';
import { TaxFormsTab } from './TaxFormsTab';

export const TaxDashboard = () => {
  const [activeTab, setActiveTab] = useState('estimates');

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
          <div className="flex-1 flex flex-col items-start md:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <Receipt className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Estimated Taxes</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$12,450</div>
          </div>
          <div className="flex-1 flex flex-col items-start md:px-6">
            <div className="flex items-center gap-2 mb-2">
              <CalendarCheck className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Next Deadline</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>Jun 15, 2025</div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-6">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
              <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>YTD Payments</span>
            </div>
            <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>$3,125</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="estimates" value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                value="estimates"
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
                Tax Estimates
              </TabsTrigger>
              <TabsTrigger
                value="deadlines"
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
                Deadlines
              </TabsTrigger>
              <TabsTrigger
                value="forms"
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
                Tax Forms
              </TabsTrigger>
            </TabsList>
            <TabsContent value="estimates" className="mt-6">
              <TaxEstimatesTab />
            </TabsContent>
            <TabsContent value="deadlines" className="mt-6">
              <TaxDeadlinesTab />
            </TabsContent>
            <TabsContent value="forms" className="mt-6">
              <TaxFormsTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
