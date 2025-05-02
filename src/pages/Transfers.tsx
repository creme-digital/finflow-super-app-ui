
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { TransferForm } from '@/components/transfers/TransferForm';
import { TransferSummary } from '@/components/transfers/TransferSummary';
import { useToast } from '@/components/ui/use-toast';

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
          <h1 className="text-3xl font-bold tracking-tight">Transfers</h1>
          <p className="text-muted-foreground mt-1">Send money to accounts and recipients.</p>
        </div>
        
        <Tabs value={transferType} onValueChange={handleTransferTypeChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="ach">ACH Transfer</TabsTrigger>
            <TabsTrigger value="wire">Wire Transfer</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>
          
          {step === 'form' ? (
            <TransferForm 
              transferType={transferType} 
              onSubmit={handleFormSubmit}
              initialData={transferData}
            />
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
                >
                  Back
                </Button>
                <Button 
                  onClick={handleConfirmTransfer}
                >
                  Confirm Transfer
                </Button>
              </div>
            </div>
          )}
        </Tabs>
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
