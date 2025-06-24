
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/formatters';
import { Calendar, User, FileText, DollarSign, RefreshCw, MoreHorizontal } from 'lucide-react';

interface Invoice {
  date: string;
  status: string;
  customer: string;
  amount: number;
  invoiceNo: string;
  invoiceDate: string;
  recurring: string;
}

interface InvoiceDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice | null;
}

const statusStyles = {
  'Overdue': { bg: '#FEF2F2', color: '#991B1B' },
  'Not due yet': { bg: '#EFF6FF', color: '#1E40AF' },
  'Paid': { bg: '#F0FDF4', color: '#166534' },
  'Processing': { bg: '#FEF3C7', color: '#92400E' },
  'Canceled': { bg: '#F3F4F6', color: '#374151' },
};

export function InvoiceDetailsDrawer({ open, onOpenChange, invoice }: InvoiceDetailsDrawerProps) {
  if (!invoice) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-semibold">Invoice Details</SheetTitle>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
          <SheetDescription className="text-left">
            Complete details for invoice #{invoice.invoiceNo}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Status and Amount */}
          <div className="flex items-center justify-between">
            <Badge
              style={{
                backgroundColor: statusStyles[invoice.status]?.bg,
                color: statusStyles[invoice.status]?.color,
                borderRadius: 6,
                fontWeight: 500,
                fontSize: 12,
                padding: '4px 12px',
              }}
            >
              {invoice.status}
            </Badge>
            <div className="text-right">
              <div className="text-2xl font-bold">{formatCurrency(invoice.amount)}</div>
              <div className="text-sm text-muted-foreground">Total Amount</div>
            </div>
          </div>

          <Separator />

          {/* Invoice Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Invoice Information</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Invoice Number</div>
                  <div className="text-sm text-muted-foreground">#{invoice.invoiceNo}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Customer</div>
                  <div className="text-sm text-muted-foreground">{invoice.customer}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Invoice Date</div>
                  <div className="text-sm text-muted-foreground">{invoice.invoiceDate}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <DollarSign className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Amount</div>
                  <div className="text-sm text-muted-foreground">{formatCurrency(invoice.amount)}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <RefreshCw className="w-5 h-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">Recurring</div>
                  <div className="text-sm text-muted-foreground">{invoice.recurring}</div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Actions</h3>
            <div className="flex flex-col gap-2">
              <Button className="w-full">
                View Full Invoice
              </Button>
              <Button variant="outline" className="w-full">
                Send Reminder
              </Button>
              <Button variant="outline" className="w-full">
                Mark as Paid
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
