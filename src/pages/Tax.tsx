
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter, Download, Plus } from 'lucide-react';
import { TaxHistoryTab } from '@/components/tax/TaxHistoryTab';
import { TaxEstimationTab } from '@/components/tax/TaxEstimationTab';

const Tax = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <Layout
      title="Tax"
      mainContent={
        <div className="space-y-6">
          <PageHeader title="">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Tax Submission form
            </Button>
          </PageHeader>

          <Tabs defaultValue="history" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="grid w-fit grid-cols-2 bg-muted/20">
                <TabsTrigger value="history" className="data-[state=active]:bg-background">
                  Tax History
                </TabsTrigger>
                <TabsTrigger value="estimation" className="data-[state=active]:bg-background">
                  Tax Estimation
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export All
                </Button>
              </div>
            </div>

            <TabsContent value="history" className="space-y-4">
              <TaxHistoryTab />
            </TabsContent>

            <TabsContent value="estimation" className="space-y-4">
              <TaxEstimationTab />
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
};

export default Tax;
