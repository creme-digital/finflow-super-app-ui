
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, Activity, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useCurrency } from '@/contexts/CurrencyContext';

// Portfolio performance data
const portfolioData = [
  { month: 'Jan', value: 65000 },
  { month: 'Feb', value: 68000 },
  { month: 'Mar', value: 70000 },
  { month: 'Apr', value: 72000 },
  { month: 'May', value: 69000 },
  { month: 'Jun', value: 74000 },
  { month: 'Jul', value: 78000 },
  { month: 'Aug', value: 80000 },
  { month: 'Sep', value: 77000 },
  { month: 'Oct', value: 85000 },
  { month: 'Nov', value: 88000 },
  { month: 'Dec', value: 91800 },
];

// Recent transactions data
const recentTransactions = [
  {
    id: 'CTX-001',
    date: '2024-06-15',
    type: 'Buy',
    asset: 'Apple Inc. (AAPL)',
    amount: '10',
    price: 175.50,
    total: -1755.00,
    status: 'completed'
  },
  {
    id: 'CTX-002',
    date: '2024-06-14',
    type: 'Sell',
    asset: 'Tesla Inc. (TSLA)',
    amount: '5',
    price: 245.75,
    total: 1228.75,
    status: 'completed'
  },
  {
    id: 'CTX-003',
    date: '2024-06-13',
    type: 'Buy',
    asset: 'Microsoft Corp. (MSFT)',
    amount: '3',
    price: 415.32,
    total: -1245.96,
    status: 'completed'
  },
  {
    id: 'CTX-004',
    date: '2024-06-12',
    type: 'Transfer',
    asset: 'Amazon.com Inc. (AMZN)',
    amount: '2',
    price: 178.25,
    total: 356.50,
    status: 'pending'
  },
];

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-[#EDEDF1]">
        <p className="text-sm font-medium mb-1" style={{ color: '#6D6D74' }}>{label}</p>
        <p style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 14, fontWeight: 400, letterSpacing: '-0.28px' }}>
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function PortfolioAssetsTable() {
  const { formatAmount } = useCurrency();

  const portfolioValue = 91800.00;

  return (
    <div className="space-y-6">
      {/* Portfolio Value Chart Section */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="text-[#6D6D74] text-sm mb-2">Portfolio value this month</div>
            <div className="text-4xl font-bold mb-6">{formatAmount(portfolioValue)}</div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={portfolioData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
                  activeDot={{ r: 6, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Transactions</h3>
          </div>

          <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow style={{ background: '#F8F8FA' }}>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">ID</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Date</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Type</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Asset</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Amount</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Price</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Total</TableHead>
                  <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {transaction.type === 'Buy' && <ArrowDown className="w-4 h-4 text-green-500" />}
                        {transaction.type === 'Sell' && <ArrowUp className="w-4 h-4 text-red-500" />}
                        {transaction.type === 'Transfer' && <ArrowUp className="w-4 h-4 text-blue-500" />}
                        <span className={
                          transaction.type === 'Buy' ? 'text-green-600' :
                          transaction.type === 'Sell' ? 'text-red-600' : 'text-blue-600'
                        }>
                          {transaction.type}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.asset}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell className="font-mono">{formatAmount(transaction.price)}</TableCell>
                    <TableCell className={`font-mono ${transaction.total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.total >= 0 ? '+' : ''}{formatAmount(Math.abs(transaction.total))}
                    </TableCell>
                    <TableCell>
                      <span
                        style={{
                          borderRadius: 20,
                          fontWeight: 500,
                          fontSize: 12,
                          padding: '4px 12px',
                          display: 'inline-block',
                          background: transaction.status === 'completed' ? '#dcfce7' : '#fef3c7',
                          color: transaction.status === 'completed' ? '#166534' : '#92400e',
                        }}
                      >
                        {transaction.status === 'completed' ? 'Complete' : 'Pending'}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
