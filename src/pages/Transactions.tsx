
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Download } from 'lucide-react';

const Transactions = () => {
  const transactions = [
    {
      id: 'TXN001',
      date: '2024-06-10',
      description: 'Payment from Acme Corp',
      amount: '+$2,500.00',
      status: 'Completed',
      type: 'Credit'
    },
    {
      id: 'TXN002',
      date: '2024-06-09',
      description: 'Office supplies purchase',
      amount: '-$299.00',
      status: 'Completed',
      type: 'Debit'
    },
    {
      id: 'TXN003',
      date: '2024-06-09',
      description: 'Salary payment to John Doe',
      amount: '-$3,500.00',
      status: 'Processing',
      type: 'Debit'
    },
    {
      id: 'TXN004',
      date: '2024-06-08',
      description: 'Client invoice payment',
      amount: '+$1,200.00',
      status: 'Completed',
      type: 'Credit'
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <PageHeader
          title="Transactions"
          subtitle="View and manage all your financial transactions in one place."
        >
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </PageHeader>
        
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search transactions..." 
              className="pl-9"
            />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.id} • {transaction.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                    
                    <span className={`font-medium ${
                      transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Transactions;
