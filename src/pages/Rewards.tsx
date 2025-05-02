
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReferralTab } from '@/components/rewards/ReferralTab';
import { CashbackTab } from '@/components/rewards/CashbackTab';
import { RewardsSummary } from '@/components/rewards/RewardsSummary';
import { useState } from 'react';

const Rewards = () => {
  const [activeTab, setActiveTab] = useState('referral');

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Rewards</h1>
          <p className="text-muted-foreground">Earn cashback and rewards for using our platform and referring friends.</p>
        </div>

        <RewardsSummary />

        <Tabs defaultValue="referral" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="referral">Referrals</TabsTrigger>
            <TabsTrigger value="cashback">Cashback</TabsTrigger>
          </TabsList>

          <TabsContent value="referral" className="mt-6">
            <ReferralTab />
          </TabsContent>

          <TabsContent value="cashback" className="mt-6">
            <CashbackTab />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Rewards;
