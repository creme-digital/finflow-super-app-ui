
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText, Calendar } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

export const TaxEstimationTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4 pb-3 min-h-[40px] border-b border-border transition-all duration-300">
            <CardTitle className="text-base font-medium text-card-foreground flex items-center gap-2 transition-all duration-300">
              Quarterly Estimate
            </CardTitle>
            <Calculator className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="p-4 transition-all duration-300">
            <div className="font-mono text-2xl font-bold text-primary">{formatCurrency(12450)}</div>
            <p className="text-sm text-secondary mt-1">
              Q2 2024 estimated payment
            </p>
          </CardContent>
        </Card>
        
        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4 pb-3 min-h-[40px] border-b border-border transition-all duration-300">
            <CardTitle className="text-base font-medium text-card-foreground flex items-center gap-2 transition-all duration-300">
              YTD Payments
            </CardTitle>
            <FileText className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="p-4 transition-all duration-300">
            <div className="font-mono text-2xl font-bold text-primary">{formatCurrency(3125)}</div>
            <p className="text-sm text-secondary mt-1">
              Total paid this year
            </p>
          </CardContent>
        </Card>
        
        <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)] transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4 pb-3 min-h-[40px] border-b border-border transition-all duration-300">
            <CardTitle className="text-base font-medium text-card-foreground flex items-center gap-2 transition-all duration-300">
              Next Deadline
            </CardTitle>
            <Calendar className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent className="p-4 transition-all duration-300">
            <div className="font-mono text-2xl font-bold text-primary">Jun 15</div>
            <p className="text-sm text-secondary mt-1">
              Q2 2024 payment due
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-[12px] bg-card text-card-foreground shadow-[0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1.5px_rgba(221,221,228,0.25)] transition-all duration-300">
        <CardHeader className="px-4 pt-4 pb-3 min-h-[40px] border-b border-border transition-all duration-300">
          <CardTitle className="text-2xl font-semibold tracking-tight text-primary">Tax Estimation Calculator</CardTitle>
        </CardHeader>
        <CardContent className="p-4 transition-all duration-300 space-y-4">
          <p className="text-sm text-secondary">
            Use our tax estimation calculator to plan your quarterly payments and avoid penalties.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 font-medium transition-colors shadow-[0px_-4px_8px_-4px_rgba(0,0,0,0.08)_inset,0px_0px_0px_1px_rgba(0,0,0,0.04)_inset,0px_3px_4px_-3px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(221,221,228,0.25)]">
            Open Calculator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
