
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Calendar, DollarSign, Building2, Clock, Mail, AlertCircle, Edit, Trash2 } from 'lucide-react';

interface SubscriptionItem {
  date: string;
  account: string;
  productName: string;
  amount: string;
  status: string;
  method: string;
}

interface SubscriptionDetailsDrawerProps {
  subscription: SubscriptionItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionDetailsDrawer({ subscription, open, onOpenChange }: SubscriptionDetailsDrawerProps) {
  if (!subscription) return null;

  // Mock additional data for the drawer
  const subscriptionDetails = {
    serviceName: 'Premium Subscription',
    category: 'Software',
    billingCycle: 'Monthly',
    description: 'Premium features and advanced tools for enhanced productivity',
    nextPayment: 'June 2, 2025',
    startDate: 'January 15, 2024',
    email: 'billing@example.com',
    website: 'www.example.com',
    totalPaid: '$12,485.20',
    paymentHistory: 15
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="!w-[800px] !max-w-[800px] !sm:max-w-[800px] p-0" side="right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <SheetTitle className="text-xl font-semibold">{subscription.productName}</SheetTitle>
                <p className="text-sm text-muted-foreground">Subscription Details</p>
              </div>
            </div>
          </SheetHeader>

          <Separator />

          {/* Content */}
          <div className="flex-1 overflow-auto p-6 space-y-6">
            {/* Subscription Overview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Subscription Overview</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Current Amount</span>
                  </div>
                  <div className="text-2xl font-bold">{subscription.amount}</div>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Next Payment</span>
                  </div>
                  <div className="text-2xl font-bold text-sm">{subscriptionDetails.nextPayment}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge 
                  variant="secondary" 
                  className={
                    subscription.status === 'Received' 
                      ? "bg-green-100 text-green-700 hover:bg-green-100" 
                      : subscription.status === 'Pending' 
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100" 
                      : subscription.status === 'Failed' 
                      ? "bg-red-100 text-red-700 hover:bg-red-100" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                  }
                >
                  {subscription.status}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Subscription Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Subscription Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Service Name</span>
                  <span className="text-sm font-medium">{subscriptionDetails.serviceName}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <span className="text-sm font-medium">{subscriptionDetails.category}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Billing Cycle</span>
                  <span className="text-sm font-medium">{subscriptionDetails.billingCycle}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Payment Method</span>
                  <span className="text-sm font-medium">{subscription.method}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Account</span>
                  <span className="text-sm font-medium">{subscription.account}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment History */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Payment History
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Start Date</span>
                  <span className="text-sm font-medium">{subscriptionDetails.startDate}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Last Payment</span>
                  <span className="text-sm font-medium">{subscription.date}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Payments</span>
                  <span className="text-sm font-medium">{subscriptionDetails.paymentHistory}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Paid</span>
                  <span className="text-sm font-medium">{subscriptionDetails.totalPaid}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Website</div>
                    <div className="text-sm text-muted-foreground">{subscriptionDetails.website}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Billing Email</div>
                    <div className="text-sm text-muted-foreground">{subscriptionDetails.email}</div>
                  </div>
                </div>
                
                {subscriptionDetails.description && (
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Description</div>
                      <div className="text-sm text-muted-foreground">{subscriptionDetails.description}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t bg-muted/20">
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 gap-2">
                <Edit className="w-4 h-4" />
                Edit Subscription
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Trash2 className="w-4 h-4" />
                Cancel Subscription
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
