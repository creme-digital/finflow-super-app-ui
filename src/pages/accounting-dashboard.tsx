import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, FileText, Users, BarChart3, PiggyBank, Wallet, Plus, ChevronRight } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/formatters';

const incomeExpenseData = [
  { month: 'Jan', income: 12000, expense: 8000 },
  { month: 'Feb', income: 15000, expense: 9000 },
  { month: 'Mar', income: 14000, expense: 9500 },
  { month: 'Apr', income: 17000, expense: 11000 },
  { month: 'May', income: 16000, expense: 10500 },
  { month: 'Jun', income: 18000, expense: 12000 },
  { month: 'Jul', income: 17500, expense: 11500 },
  { month: 'Aug', income: 19000, expense: 13000 },
  { month: 'Sep', income: 20000, expense: 14000 },
  { month: 'Oct', income: 21000, expense: 14500 },
  { month: 'Nov', income: 22000, expense: 15000 },
  { month: 'Dec', income: 23000, expense: 15500 },
];

const topExpenses = [
  { name: 'Office Rent', amount: 12000 },
  { name: 'Software Subscriptions', amount: 8000 },
  { name: 'Contractors', amount: 6500 },
  { name: 'Marketing', amount: 4200 },
  { name: 'Utilities', amount: 3200 },
];

const topClients = [
  { name: 'Acme Corp', amount: 25000 },
  { name: 'Globex Inc', amount: 18000 },
  { name: 'Soylent LLC', amount: 15000 },
  { name: 'Initech', amount: 12000 },
  { name: 'Umbrella Co', amount: 9000 },
];

const bankAccounts = [
  {
    name: 'Business Checking',
    balance: 24500.23,
    transactions: [
      { date: '2024-06-10', description: 'Stripe Payout', amount: 3200 },
      { date: '2024-06-09', description: 'Office Rent', amount: -2000 },
      { date: '2024-06-08', description: 'Amazon Web Services', amount: -350 },
    ],
  },
  {
    name: 'Savings',
    balance: 120000.0,
    transactions: [
      { date: '2024-06-07', description: 'Interest', amount: 50 },
      { date: '2024-06-01', description: 'Transfer from Checking', amount: 10000 },
    ],
  },
  {
    name: 'Payroll',
    balance: 8000.5,
    transactions: [
      { date: '2024-06-05', description: 'Payroll Run', amount: -5000 },
      { date: '2024-06-01', description: 'Transfer from Checking', amount: 5000 },
    ],
  },
];

const AccountingDashboard = () => {
  // Example data
  const totalIncome = 120000;
  const totalExpenses = 45000;
  const totalInvoiced = 90000;
  const incomeChange = '+8.2%';
  const expenseChange = '+2.1%';
  const invoicedChange = '+5.0%';

  const expenseTotal = topExpenses.reduce((sum, e) => sum + e.amount, 0);
  const clientTotal = topClients.reduce((sum, c) => sum + c.amount, 0);
  const expenseColors = ['#FF6B6B', '#F7B267', '#FFD166', '#B8B8FF', '#E4D8D8'];
  const clientColors = ['#6050EA', '#A3A1FB', '#B8B8FF', '#C7BFFF', '#E4D8D8'];

  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="MeelyBooks Home"
          subtitle="Your business finances at a glance."
        />
        {/* Top summary card */}
        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* Total Income */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Income</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatCurrency(totalIncome)}</div>
                <div className="text-green-600 text-sm">{incomeChange}</div>
              </div>
            </div>
            {/* Total Expenses */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Total Expenses</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatCurrency(totalExpenses)}</div>
                <div className="text-red-600 text-sm">{expenseChange}</div>
              </div>
            </div>
            {/* Invoiced */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Invoiced</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatCurrency(totalInvoiced)}</div>
                <div className="text-green-600 text-sm">{invoicedChange}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Income vs Expense Graph - full width */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Income vs Expense (per month)</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium" style={{ color: '#6D6D74' }}>
                <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-[#6050EA]"></span>Income</span>
                <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-[#E5D2C7]"></span>Expense</span>
              </div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incomeExpenseData} barCategoryGap={40} barSize={26} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#EDEDF1" strokeDasharray={4} vertical={false} />
                  <XAxis dataKey="month" stroke="#6D6D74" tick={{ fontSize: 12, fill: '#6D6D74' }} axisLine={{ stroke: '#EDEDF1' }} tickLine={false} />
                  <YAxis stroke="#6D6D74" tick={{ fontSize: 12, fill: '#6D6D74' }} axisLine={{ stroke: '#EDEDF1' }} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: 8, 
                      background: '#FFF', 
                      color: '#6D6D74', 
                      fontSize: 12, 
                      boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
                      border: 'none',
                      padding: '8px 12px',
                    }} 
                    labelStyle={{ color: '#6D6D74', fontSize: 12, marginBottom: 2 }} 
                    itemStyle={{ color: '#6D6D74', fontSize: 12 }} 
                  />
                  <Bar dataKey="income" fill="#6050EA" radius={[6, 6, 0, 0]} name="Income" />
                  <Bar dataKey="expense" fill="#E4D8D8" radius={[6, 6, 0, 0]} name="Expense"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        {/* Top 5 Expenses and Top 5 Clients in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top 5 Expenses - Donut Chart left, list right */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Top 5 Expenses</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <PieChart width={140} height={140} className="mx-auto md:mx-0" style={{ flexShrink: 0 }}>
                  <Pie
                    data={topExpenses}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={65}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={2}
                  >
                    {topExpenses.map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={expenseColors[i % expenseColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <ul className="w-full">
                  {topExpenses.map((exp, i) => (
                    <li key={i} className="flex items-center justify-between text-sm py-2 border-b border-[#EDEDF1] last:border-0">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: expenseColors[i % expenseColors.length] }}></span>
                        <span className="font-medium text-black">{exp.name}</span>
                      </div>
                      <span style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 16, fontWeight: 400, letterSpacing: '-0.32px' }}>
                        -{formatCurrency(exp.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* Top 5 Clients */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Top 5 Clients</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <PieChart width={140} height={140} className="mx-auto md:mx-0" style={{ flexShrink: 0 }}>
                  <Pie
                    data={topClients}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={65}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={2}
                  >
                    {topClients.map((entry, i) => (
                      <Cell key={`cell-client-${i}`} fill={clientColors[i % clientColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <ul className="w-full">
                  {topClients.map((client, i) => (
                    <li key={i} className="flex items-center justify-between text-sm py-2 border-b border-[#EDEDF1] last:border-0">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: clientColors[i % clientColors.length] }}></span>
                        <span className="font-medium text-black">{client.name}</span>
                      </div>
                      <span style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 16, fontWeight: 400, letterSpacing: '-0.32px' }}>
                        {formatCurrency(client.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* This Year's Result and This Year's Tax in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* This Year's Result */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <PiggyBank className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>This Year's Result</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatCurrency(75000)}</div>
                <div className="text-green-600 text-sm">+12.0%</div>
              </div>
            </CardContent>
          </Card>
          {/* This Year's Tax */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>This Year's Tax</span>
              </div>
              <div className="flex items-center gap-4">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatCurrency(18000)}</div>
                <div className="text-red-600 text-sm">+3.5%</div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Bank Accounts with Transactions - full width at bottom */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Wallet className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Bank Accounts</span>
              </div>
              <Button variant="secondary" size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                New account
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bankAccounts.map((account, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-[#EDEDF1]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium" 
                        style={{ 
                          background: account.name === 'Business Checking' ? '#6050EA' : 
                                    account.name === 'Savings' ? '#10B981' : '#F59E0B'
                        }}>
                        {account.name.charAt(0)}
                      </div>
                      <span className="text-base font-medium text-black">{account.name}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#6D6D74]" />
                  </div>
                  <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 24, fontWeight: 400, letterSpacing: '-0.48px' }}>
                    {formatCurrency(account.balance)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default AccountingDashboard; 