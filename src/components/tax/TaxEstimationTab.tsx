
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

export const TaxEstimationTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="fintech-card">
          <CardHeader className="fintech-card-header flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="fintech-heading-3">
              Quarterly Estimate
            </CardTitle>
            <Calculator className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="fintech-card-content">
            <div className="fintech-mono text-2xl font-bold text-primary">{formatCurrency(12450)}</div>
            <p className="fintech-body mt-1">
              Q2 2024 estimated payment
            </p>
          </CardContent>
        </Card>
        
        <Card className="fintech-card">
          <CardHeader className="fintech-card-header flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="fintech-heading-3">
              YTD Payments
            </CardTitle>
            <FileText className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="fintech-card-content">
            <div className="fintech-mono text-2xl font-bold text-primary">{formatCurrency(3125)}</div>
            <p className="fintech-body mt-1">
              Total paid this year
            </p>
          </CardContent>
        </Card>
        
        <Card className="fintech-card">
          <CardHeader className="fintech-card-header flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="fintech-heading-3">
              Next Deadline
            </CardTitle>
            <Calendar className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="fintech-card-content">
            <div className="fintech-mono text-2xl font-bold text-primary">Jun 15</div>
            <p className="fintech-body mt-1">
              Q2 2024 payment due
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Tax Estimation Calculator</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content space-y-4">
          <p className="fintech-body">
            Use our tax estimation calculator to plan your quarterly payments and avoid penalties.
          </p>
          <Button className="fintech-button-primary">
            Open Calculator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
