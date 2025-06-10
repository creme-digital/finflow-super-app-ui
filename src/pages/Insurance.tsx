
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, Download, MoreHorizontal } from 'lucide-react';

const InsuranceMainContent = () => {
  const [activeTab, setActiveTab] = useState('applied');

  const insuranceData = [
    {
      date: '23/05/2025',
      issuer: 'James Hall',
      form: '1092-NEC',
      amount: '$8,657.41',
      status: 'Submitted'
    },
    {
      date: '23/05/2024',
      issuer: 'Rhonda Rhodes',
      form: '1029-MISC',
      amount: '$342.07',
      status: 'Submitted'
    },
    {
      date: '23/05/2023',
      issuer: 'Kathy Pacheco',
      form: '1077-K',
      amount: '$1,486.52',
      status: 'Submitted'
    },
    {
      date: '23/05/2022',
      issuer: 'Kimberly Mastrangelo',
      form: '1092-NEC',
      amount: '$5,653.56',
      status: 'Submitted'
    },
    {
      date: '23/05/2021',
      issuer: 'Corina McCoy',
      form: '1029-MISC',
      amount: '$1,595.71',
      status: 'Submitted'
    },
    {
      date: '23/05/2020',
      issuer: 'Iva Ryan',
      form: '1077-K',
      amount: '$7,738.89',
      status: 'Submitted'
    },
    {
      date: '23/05/2019',
      issuer: 'Stephanie Nicol',
      form: '1092-NEC',
      amount: '$8,650.33',
      status: 'Submitted'
    },
    {
      date: '23/05/2018',
      issuer: 'Alex Buckmaster',
      form: '1029-MISC',
      amount: '$1,207.52',
      status: 'Submitted'
    },
    {
      date: '23/05/2017',
      issuer: 'Patricia Sanders',
      form: '1077-K',
      amount: '$376.96',
      status: 'Submitted'
    },
    {
      date: '23/05/2016',
      issuer: 'Katie Sims',
      form: '1077-K',
      amount: '$7,727.07',
      status: 'Submitted'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold">Insurance</h1>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white">
            <Plus className="w-4 h-4" />
            Claim Insurance
          </Button>
          <Button variant="default" className="gap-2">
            <Plus className="w-4 h-4" />
            Apply Insurance
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-fit grid-cols-2 bg-muted/30">
          <TabsTrigger value="applied" className="data-[state=active]:bg-background data-[state=active]:text-blue-600">
            Applied Insurance
          </TabsTrigger>
          <TabsTrigger value="claim" className="data-[state=active]:bg-background">
            Claim Insurance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="applied" className="space-y-4">
          {/* Filters and Export */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>

          {/* Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b">
                    <TableHead className="text-left font-medium">Date</TableHead>
                    <TableHead className="text-left font-medium">Issuer</TableHead>
                    <TableHead className="text-left font-medium">Form</TableHead>
                    <TableHead className="text-left font-medium">Amount</TableHead>
                    <TableHead className="text-left font-medium">Status</TableHead>
                    <TableHead className="text-left font-medium">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {insuranceData.map((item, index) => (
                    <TableRow key={index} className="border-b last:border-b-0">
                      <TableCell className="font-medium">{item.date}</TableCell>
                      <TableCell>{item.issuer}</TableCell>
                      <TableCell>{item.form}</TableCell>
                      <TableCell className="font-medium">{item.amount}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claim" className="space-y-4">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-muted-foreground">
                <p>No claim insurance data available</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Insurance() {
  return (
    <Layout 
      title="Insurance" 
      showRightSidebar={false}
      mainContent={<InsuranceMainContent />}
    />
  );
}
