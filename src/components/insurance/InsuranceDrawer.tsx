
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InsuranceData {
  date: string;
  issuer: string;
  form: string;
  amount: string;
  status: string;
}

interface InsuranceDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  insurance: InsuranceData | null;
}

export function InsuranceDrawer({ open, onOpenChange, insurance }: InsuranceDrawerProps) {
  if (!insurance) return null;

  // Mock data for policy details (in real app would come from API based on selected insurance)
  const policyDetails = {
    insuranceType: 'Health',
    policyNumber: 'HLTH-2025-0392',
    status: 'Active',
    coveragePeriod: 'Jan 1, 2025 – Dec 31, 2025',
    insuredPerson: 'Rafat Khan'
  };

  const coverageDetails = [
    { label: 'Hospitalization', value: '$50,000/year' },
    { label: 'Outpatient Consultations', value: '$1,000/year' },
    { label: 'Prescription Medications', value: '$500/year' },
    { label: 'Maternity (if applicable)', value: 'Not Covered' },
    { label: 'Annual Health Check-up', value: '1 Free Check-up' }
  ];

  // Mock transaction data
  const transactions = [
    {
      date: '23/05/2025',
      status: 'Paid',
      cardDetails: 'Mastercard •••• 7182',
      amount: '$8,657.41'
    },
    {
      date: '23/04/2025',
      status: 'Paid',
      cardDetails: 'Mastercard •••• 7182',
      amount: '$8,657.41'
    },
    {
      date: '23/03/2025',
      status: 'Paid',
      cardDetails: 'Mastercard •••• 7182',
      amount: '$8,657.41'
    }
  ];

  const getStatusBadgeStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'paid':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'inactive':
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100';
      case 'expired':
      case 'failed':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Insurance Details</SheetTitle>
          <SheetDescription>
            View detailed information about this insurance policy
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Policy Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Policy Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Insurance Type</span>
                  <span className="font-medium">{policyDetails.insuranceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Policy Number</span>
                  <span className="font-medium">{policyDetails.policyNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="secondary" className={getStatusBadgeStyles(policyDetails.status)}>
                    {policyDetails.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coverage Period</span>
                  <span className="font-medium">{policyDetails.coveragePeriod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Insured Person</span>
                  <span className="font-medium">{policyDetails.insuredPerson}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coverage Details */}
          <Card>
            <CardHeader>
              <CardTitle>Coverage Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {coverageDetails.map((coverage, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{coverage.label}</span>
                    <span className="font-medium">{coverage.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Premiums/Transactions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Premiums</h3>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="font-semibold">{transaction.date}</div>
                        <div className="text-sm text-muted-foreground">{transaction.cardDetails}</div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-semibold">{transaction.amount}</div>
                        <Badge variant="secondary" className={getStatusBadgeStyles(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
