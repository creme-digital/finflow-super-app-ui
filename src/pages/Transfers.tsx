import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { TransferForm } from '@/components/transfers/TransferForm';
import { TransferSummary } from '@/components/transfers/TransferSummary';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightLeft, ArrowLeft, CheckCircle2, Building2, Globe2, BanknoteIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Transfers() {
  const { toast } = useToast();
  const [transferType, setTransferType] = useState<'ach' | 'wire' | 'international'>('ach');
  const [step, setStep] = useState<'form' | 'summary'>('form');
  const [transferData, setTransferData] = useState<TransferData>({
    sourceAccount: '',
    destinationAccount: '',
    amount: '',
    memo: '',
    recipientName: '',
    recipientEmail: ''
  });

  const handleTransferTypeChange = (value: string) => {
    setTransferType(value as 'ach' | 'wire' | 'international');
    setStep('form');
  };

  const handleFormSubmit = (data: TransferData) => {
    setTransferData(data);
    setStep('summary');
  };

  const handleConfirmTransfer = () => {
    // In a real app, this would connect to an API
    toast({
      title: "Transfer initiated",
      description: `$${transferData.amount} will be sent to ${transferData.recipientName}`,
    });
    
    // Reset form
    setStep('form');
    setTransferData({
      sourceAccount: '',
      destinationAccount: '',
      amount: '',
      memo: '',
      recipientName: '',
      recipientEmail: ''
    });
  };

  const handleBack = () => {
    setStep('form');
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Transfers</h1>
          <p className="text-muted-foreground mt-1">Send money to accounts and recipients.</p>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">New Transfer</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={transferType} onValueChange={handleTransferTypeChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 p-1.5 bg-muted/50 rounded-lg h-[52px]">
                <TabsTrigger 
                  value="ach" 
                  className={cn(
                    "flex flex-row items-center gap-2 py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
                    "data-[state=active]:text-primary rounded-md h-[40px]"
                  )}
                >
                  <BanknoteIcon className="h-5 w-5" />
                  <span>ACH Transfer</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="wire"
                  className={cn(
                    "flex flex-row items-center gap-2 py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
                    "data-[state=active]:text-primary rounded-md h-[40px]"
                  )}
                >
                  <Building2 className="h-5 w-5" />
                  <span>Wire Transfer</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="international"
                  className={cn(
                    "flex flex-row items-center gap-2 py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm",
                    "data-[state=active]:text-primary rounded-md h-[40px]"
                  )}
                >
                  <Globe2 className="h-5 w-5" />
                  <span>International</span>
                </TabsTrigger>
              </TabsList>
              
              {step === 'form' ? (
                <div className="space-y-6">
                  <TransferForm 
                    transferType={transferType} 
                    onSubmit={handleFormSubmit}
                    initialData={transferData}
                  />
                  <div className="flex justify-end">
                    <Button 
                      onClick={() => handleFormSubmit(transferData)}
                      className="gap-2"
                    >
                      Continue to Review
                      <ArrowRightLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <TransferSummary 
                    data={transferData}
                    transferType={transferType}
                  />
                  
                  <div className="flex justify-between pt-6">
                    <Button 
                      variant="outline"
                      onClick={handleBack}
                      className="gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                    <Button 
                      onClick={handleConfirmTransfer}
                      className="gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Confirm Transfer
                    </Button>
                  </div>
                </div>
              )}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export interface TransferData {
  sourceAccount: string;
  destinationAccount: string;
  amount: string;
  memo: string;
  recipientName: string;
  recipientEmail: string;
  routingNumber?: string;
  accountNumber?: string;
  bankName?: string;
  swiftCode?: string;
  country?: string;
}
