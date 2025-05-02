
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CryptoPortfolio } from '@/components/crypto/CryptoPortfolio';
import { CryptoSend } from '@/components/crypto/CryptoSend';
import { CryptoReceive } from '@/components/crypto/CryptoReceive';
import { CryptoTrade } from '@/components/crypto/CryptoTrade';

const Crypto = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Crypto Wallet</h1>
          <p className="text-muted-foreground">Manage your cryptocurrency portfolio, send, receive and trade digital assets.</p>
        </div>

        <Tabs defaultValue="portfolio" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="send">Send</TabsTrigger>
            <TabsTrigger value="receive">Receive</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="mt-6">
            <CryptoPortfolio />
          </TabsContent>

          <TabsContent value="send" className="mt-6">
            <CryptoSend />
          </TabsContent>

          <TabsContent value="receive" className="mt-6">
            <CryptoReceive />
          </TabsContent>

          <TabsContent value="trade" className="mt-6">
            <CryptoTrade />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Crypto;
