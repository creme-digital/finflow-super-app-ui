
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Download, Edit2, FileText, Calendar, DollarSign, User } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface TaxRecord {
  id: string;
  date: string;
  issuer: string;
  form: string;
  amount: number;
  status: string;
}

interface TaxRecordDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  record: TaxRecord | null;
}

export const TaxRecordDrawer: React.FC<TaxRecordDrawerProps> = ({
  open,
  onOpenChange,
  record
}) => {
  if (!record) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Tax Record Details</SheetTitle>
          <SheetDescription>
            View and manage tax record information
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Record ID and Status */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Record ID</p>
              <p className="text-lg font-semibold">{record.id}</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
              {record.status}
            </Badge>
          </div>

          <Separator />

          {/* Record Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Date Submitted</p>
                <p className="text-sm">{record.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Issuer</p>
                <p className="text-sm">{record.issuer}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Form Type</p>
                <p className="text-sm">{record.form}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Amount</p>
                <p className="text-lg font-semibold">{formatCurrency(record.amount)}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Additional Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Tax year: {record.date.split('/')[2]}</p>
              <p>• Submission method: Electronic filing</p>
              <p>• Processing status: Completed</p>
              <p>• Last updated: {record.date}</p>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <Button className="w-full" variant="default">
              <Download className="w-4 h-4 mr-2" />
              Download Form
            </Button>
            <Button className="w-full" variant="outline">
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Record
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
