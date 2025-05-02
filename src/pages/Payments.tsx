
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PaymentsDashboard } from '@/components/payments/PaymentsDashboard';
import { SendPayment } from '@/components/payments/SendPayment';
import { RequestPayment } from '@/components/payments/RequestPayment';
import { PaymentsHistory } from '@/components/payments/PaymentsHistory';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">Manage payments, view history, and track metrics.</p>
        </div>

        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="send">Send Payment</TabsTrigger>
            <TabsTrigger value="receive">Request Money</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <PaymentsDashboard />
          </TabsContent>

          <TabsContent value="send" className="mt-6">
            <SendPayment />
          </TabsContent>

          <TabsContent value="receive" className="mt-6">
            <RequestPayment />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <PaymentsHistory />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Payments;
