import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrendingUp, Clock, AlertTriangle, Plus, FileText } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const summaryData = [
  {
    label: 'Overpaid Amount',
    value: 1200.50,
    icon: <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />, // purple
    color: '#6050EA',
  },
  {
    label: 'Delayed Payments',
    value: 3200.00,
    icon: <Clock className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />, // yellow
    color: '#F59E0B',
  },
  {
    label: 'Unpaid Amount',
    value: 5400.75,
    icon: <AlertTriangle className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />, // red
    color: '#FF6B6B',
  },
];

const invoices = [
  {
    number: 'INV-001',
    company: 'Acme Corp',
    name: 'John Doe',
    amount: 1200.50,
    status: 'Sent',
    date: '2024-06-01',
    expiry: '2024-06-15',
  },
  {
    number: 'INV-002',
    company: 'Globex Inc',
    name: 'Jane Smith',
    amount: 3200.00,
    status: 'Late',
    date: '2024-05-15',
    expiry: '2024-05-30',
  },
  {
    number: 'INV-003',
    company: 'Soylent LLC',
    name: 'Alice Brown',
    amount: 5400.75,
    status: 'Unpaid',
    date: '2024-06-10',
    expiry: '2024-06-25',
  },
  {
    number: 'INV-004',
    company: 'Initech',
    name: 'Bob White',
    amount: 2100.00,
    status: 'Paid',
    date: '2024-05-01',
    expiry: '2024-05-15',
  },
  {
    number: 'INV-005',
    company: 'Umbrella Co',
    name: 'Carol Black',
    amount: 1800.00,
    status: 'Sent',
    date: '2024-06-12',
    expiry: '2024-06-27',
  },
];

const statusStyles = {
  Sent:   { bg: '#E3E3EA', color: '#0B062F' },
  Late:   { bg: '#EBC9C9', color: '#1D0202' },
  Unpaid: { bg: '#DADADA', color: '#2C2C2C' },
  Paid:   { bg: '#C9EBCC', color: '#021B0D' },
};

const Invoicing = () => {
  const [tab, setTab] = useState('active');
  const navigate = useNavigate();

  const filteredInvoices = tab === 'active'
    ? invoices.filter(inv => inv.status === 'Sent' || inv.status === 'Unpaid' || inv.status === 'Late')
    : invoices;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header row with title and button */}
        <PageHeader
          title="Invoicing"
          subtitle="Create, send, and manage your invoices."
        >
          <Button variant="default" size="sm" className="gap-2" onClick={() => navigate('/invoice-create')}>
            <Plus className="w-4 h-4" />
            New Invoice
          </Button>
        </PageHeader>
        {/* Top number cards as one big card with dividers */}
        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {summaryData.map((item, i) => (
              <div key={i} className={"flex-1 flex flex-col items-start " + (i === 0 ? 'md:pr-6' : i === summaryData.length - 1 ? 'md:pl-6' : 'md:px-6')}>
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>{item.label}</span>
                </div>
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>
                  {formatCurrency(item.value)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Table with tabs */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Invoices</span>
              </div>
              <Tabs value={tab} onValueChange={setTab} className="">
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
                    value="active"
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
                    Active Invoices
                  </TabsTrigger>
                  <TabsTrigger
                    value="all"
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
                    All Invoices
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsContent value={tab} className="p-0">
                <div className="overflow-x-auto">
                  <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
                    <Table className="min-w-full text-sm">
                      <TableHeader>
                        <TableRow style={{ background: '#F8F8FA' }}>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Invoice Number</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Customer Company</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Customer Name</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Amount</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Status</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Invoice Date</TableHead>
                          <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-left">Expiry Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredInvoices.map((inv, i) => (
                          <TableRow key={i} className="border-b border-[#EDEDF1] last:border-0 hover:bg-[#F8F8FA] transition-colors">
                            <TableCell className="py-4 px-3 font-mono text-[#6D6D74]">{inv.number}</TableCell>
                            <TableCell className="py-4 px-3">{inv.company}</TableCell>
                            <TableCell className="py-4 px-3">{inv.name}</TableCell>
                            <TableCell className="py-4 px-3 font-mono text-black">{formatCurrency(inv.amount)}</TableCell>
                            <TableCell className="py-4 px-3">
                              <Badge
                                bgColor={statusStyles[inv.status].bg}
                                textColor={statusStyles[inv.status].color}
                                style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}
                              >
                                {inv.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="py-2 px-3">{inv.date}</TableCell>
                            <TableCell className="py-2 px-3">{inv.expiry}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Invoicing; 