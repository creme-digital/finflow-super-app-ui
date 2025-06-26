
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Wallet, Building2, Mail, Phone, MapPin, DollarSign, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

interface MerchantAccount {
  name: string;
  type: string;
  balance: string;
  accountNumber: string;
  routingNumber: string;
  icon: string;
}

interface MerchantAccountDrawerProps {
  account: MerchantAccount | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MerchantAccountDrawer({ account, open, onOpenChange }: MerchantAccountDrawerProps) {
  if (!account) return null;

  // Mock additional data for the drawer
  const accountDetails = {
    status: 'Active',
    dateCreated: 'March 15, 2024',
    lastActivity: '2 hours ago',
    totalTransactions: 1247,
    monthlyVolume: '$125,847.32',
    email: 'contact@techgadget.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, San Francisco, CA 94105',
    businessType: 'E-commerce',
    taxId: '12-3456789',
    website: 'www.techgadget.com'
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[480px] sm:w-[540px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <SheetTitle className="text-xl font-semibold">{account.name}</SheetTitle>
                <p className="text-sm text-muted-foreground">Merchant Account Details</p>
              </div>
            </div>
          </SheetHeader>

          <Separator />

          {/* Content */}
          <div className="flex-1 overflow-auto p-6 space-y-6">
            {/* Account Overview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account Overview</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Current Balance</span>
                  </div>
                  <div className="text-2xl font-bold">{account.balance}</div>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Monthly Volume</span>
                  </div>
                  <div className="text-2xl font-bold">{accountDetails.monthlyVolume}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                  {accountDetails.status}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Account Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Account Number</span>
                  <span className="text-sm font-medium">{account.accountNumber}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Routing Number</span>
                  <span className="text-sm font-medium">{account.routingNumber}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Account Type</span>
                  <span className="text-sm font-medium">{account.type}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Business Type</span>
                  <span className="text-sm font-medium">{accountDetails.businessType}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tax ID</span>
                  <span className="text-sm font-medium">{accountDetails.taxId}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{accountDetails.email}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{accountDetails.phone}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{accountDetails.address}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Activity Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Account Activity
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Date Created</span>
                  <span className="text-sm font-medium">{accountDetails.dateCreated}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Last Activity</span>
                  <span className="text-sm font-medium">{accountDetails.lastActivity}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Transactions</span>
                  <span className="text-sm font-medium">{accountDetails.totalTransactions.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t bg-muted/20">
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                Download Statement
              </Button>
              <Button className="flex-1">
                Manage Account
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
