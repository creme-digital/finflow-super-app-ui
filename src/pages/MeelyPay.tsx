
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, ArrowDownToLine, CreditCard, Building, Smartphone, Zap, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data for Send Again users
const sendAgainUsers = [
  {
    id: '1',
    name: 'Kathy Pacheco',
    avatar: '/placeholder.svg',
    initials: 'KP'
  },
  {
    id: '2',
    name: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg',
    initials: 'KM'
  },
  {
    id: '3',
    name: 'Corina McCoy',
    avatar: '/placeholder.svg',
    initials: 'CM'
  },
  {
    id: '4',
    name: 'Stephanie Nicol',
    avatar: '/placeholder.svg',
    initials: 'SN'
  }
];

// Sample data for Banks and Cards
const banksAndCards = [
  {
    id: '1',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••0009',
    balance: '$5,612'
  },
  {
    id: '2',
    name: 'DIME Community Bank',
    type: 'Saving',
    accountNumber: '••••••0009',
    balance: '$566,712'
  },
  {
    id: '3',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••0549',
    balance: '$566,712'
  },
  {
    id: '4',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••2309',
    balance: '$170,000'
  },
  {
    id: '5',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••9909',
    balance: '$566,712'
  },
  {
    id: '6',
    name: 'DIME Community Bank',
    type: 'Checking',
    accountNumber: '••••••34569',
    balance: '$566,712'
  }
];

const actionButtons = [
  { icon: Send, label: 'Send', color: 'text-blue-600' },
  { icon: ArrowDownToLine, label: 'Receive', color: 'text-green-600' },
  { icon: CreditCard, label: 'Add Card', color: 'text-purple-600' },
  { icon: Building, label: 'Pay to Bank', color: 'text-orange-600' },
  { icon: Smartphone, label: 'Pay Phone', color: 'text-pink-600' },
  { icon: Zap, label: 'Utility', color: 'text-yellow-600' }
];

const MeelyPay = () => {
  return (
    <Layout
      title="Meely Pay"
      showRightSidebar={true}
      rightSidebarContent={
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Banks and Cards</h3>
            <div className="space-y-3">
              {banksAndCards.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.type} {item.accountNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Balance:</p>
                    <p className="text-sm font-semibold text-foreground">{item.balance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      mainContent={
        <div className="space-y-8">
          {/* Total Balance Card */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm text-muted-foreground">Total Balance</span>
              </div>
              <div className="flex items-end gap-3">
                <h2 className="text-4xl font-bold text-foreground">$23,569.00</h2>
                <div className="flex items-center gap-1 text-green-600 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">10.5% (+$908)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {actionButtons.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex flex-col gap-2 hover:bg-muted/50"
                >
                  <IconComponent className={cn("w-6 h-6", action.color)} />
                  <span className="text-xs font-medium">{action.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Send Again Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Send Again</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sendAgainUsers.map((user) => (
                <div key={user.id} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium text-center text-foreground">{user.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total Sent and Received */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-sm text-muted-foreground mb-2">Total Sent</h4>
                <p className="text-3xl font-bold text-foreground">$12,918.98</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-sm text-muted-foreground mb-2">Total Received</h4>
                <p className="text-3xl font-bold text-foreground">$12,918.98</p>
              </CardContent>
            </Card>
          </div>
        </div>
      }
    />
  );
};

export default MeelyPay;
