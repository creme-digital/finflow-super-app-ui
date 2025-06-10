
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Filter, Download, MoreHorizontal } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

const taxHistoryData = [
  {
    date: '23/05/2025',
    issuer: 'James Hall',
    form: '1092-NEC',
    amount: 8657.41,
    status: 'Submitted'
  },
  {
    date: '23/05/2024',
    issuer: 'Rhonda Rhodes',
    form: '1029-MISC',
    amount: 342.07,
    status: 'Submitted'
  },
  {
    date: '23/05/2023',
    issuer: 'Kathy Pacheco',
    form: '1077-K',
    amount: 1486.52,
    status: 'Submitted'
  },
  {
    date: '23/05/2022',
    issuer: 'Kimberly Mastrangelo',
    form: '1092-NEC',
    amount: 5653.56,
    status: 'Submitted'
  },
  {
    date: '23/05/2021',
    issuer: 'Corina McCoy',
    form: '1029-MISC',
    amount: 1595.71,
    status: 'Submitted'
  },
  {
    date: '23/05/2020',
    issuer: 'Iva Ryan',
    form: '1077-K',
    amount: 7738.89,
    status: 'Submitted'
  },
  {
    date: '23/05/2019',
    issuer: 'Stephanie Nicol',
    form: '1092-NEC',
    amount: 8650.33,
    status: 'Submitted'
  },
  {
    date: '23/05/2018',
    issuer: 'Alex Buckmaster',
    form: '1029-MISC',
    amount: 1207.52,
    status: 'Submitted'
  },
  {
    date: '23/05/2017',
    issuer: 'Patricia Sanders',
    form: '1077-K',
    amount: 376.96,
    status: 'Submitted'
  },
  {
    date: '23/05/2016',
    issuer: 'Katie Sims',
    form: '1077-K',
    amount: 7727.07,
    status: 'Submitted'
  }
];

const Tax = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Tabs */}
        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
            <TabsList className="bg-transparent p-0 h-auto space-x-8">
              <TabsTrigger 
                value="history" 
                className="bg-transparent text-lg font-medium data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=inactive]:text-muted-foreground rounded-none pb-2"
              >
                Tax History
              </TabsTrigger>
              <TabsTrigger 
                value="estimation" 
                className="bg-transparent text-lg font-medium data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=inactive]:text-muted-foreground rounded-none pb-2"
              >
                Tax Estimation
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button className="bg-primary text-primary-foreground gap-2">
            <Plus className="w-4 h-4" />
            Tax Submission form
          </Button>
        </div>

        {/* Filters and Export */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export All
          </Button>
        </div>

        {/* Tab Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="history" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b">
                      <TableHead className="font-medium text-muted-foreground">
                        Date
                        <span className="ml-1">↕</span>
                      </TableHead>
                      <TableHead className="font-medium text-muted-foreground">Issuer</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Form</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Amount</TableHead>
                      <TableHead className="font-medium text-muted-foreground">
                        Status
                        <span className="ml-1">↕</span>
                      </TableHead>
                      <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taxHistoryData.map((item, i) => (
                      <TableRow key={i} className="border-b border-border/50">
                        <TableCell className="font-medium text-foreground py-4">
                          {item.date}
                        </TableCell>
                        <TableCell className="text-foreground py-4">
                          {item.issuer}
                        </TableCell>
                        <TableCell className="text-foreground py-4">
                          {item.form}
                        </TableCell>
                        <TableCell className="font-medium text-foreground py-4">
                          {formatCurrency(item.amount)}
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge 
                            className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
                            variant="outline"
                          >
                            {item.status}
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
          </TabsContent>
          
          <TabsContent value="estimation" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-muted-foreground">Tax Estimation</h3>
                  <p className="text-sm text-muted-foreground mt-2">Tax estimation tools and calculators will be available here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Tax;
