
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IntegrationCategory } from '@/components/integrations/IntegrationCategory';
import { ecommerceIntegrations, accountingIntegrations, hrIntegrations, paymentIntegrations } from '@/components/integrations/integrationData';

export function IntegrationsDashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-5 md:w-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ecommerce">eCommerce</TabsTrigger>
          <TabsTrigger value="accounting">Accounting</TabsTrigger>
          <TabsTrigger value="hr">HR</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-8">
            <IntegrationCategory 
              title="eCommerce" 
              integrations={ecommerceIntegrations} 
            />
            <IntegrationCategory 
              title="Accounting" 
              integrations={accountingIntegrations} 
            />
            <IntegrationCategory 
              title="HR & Payroll" 
              integrations={hrIntegrations} 
            />
            <IntegrationCategory 
              title="Payments" 
              integrations={paymentIntegrations} 
            />
          </div>
        </TabsContent>

        <TabsContent value="ecommerce" className="mt-6">
          <IntegrationCategory 
            title="eCommerce" 
            integrations={ecommerceIntegrations} 
          />
        </TabsContent>

        <TabsContent value="accounting" className="mt-6">
          <IntegrationCategory 
            title="Accounting" 
            integrations={accountingIntegrations} 
          />
        </TabsContent>

        <TabsContent value="hr" className="mt-6">
          <IntegrationCategory 
            title="HR & Payroll" 
            integrations={hrIntegrations} 
          />
        </TabsContent>

        <TabsContent value="payments" className="mt-6">
          <IntegrationCategory 
            title="Payments" 
            integrations={paymentIntegrations} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
