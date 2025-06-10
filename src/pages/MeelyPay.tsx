import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, ArrowDownToLine, CreditCard, Building, Smartphone, Zap, TrendingUp, Wallet } from 'lucide-react';
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
      showRightSidebar={false}
      mainContent={
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Total Balance Card */}
            <div 
              className="rounded-[24px] p-6"
              style={{ 
                border: '1px solid #FFFFFF',
                boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Total Balance</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-end gap-3">
                  <div className="text-4xl font-bold text-foreground">$23,569.00</div>
                  <div className="flex items-center gap-1 text-green-600 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">10.5% (+$908)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3">
                {actionButtons.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="h-auto flex flex-col gap-2 p-3 hover:bg-muted/50"
                    >
                      <IconComponent className={cn("w-5 h-5", action.color)} />
                      <span className="text-xs font-medium">{action.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Send Again Section */}
            <div 
              className="rounded-[24px] p-6"
              style={{ 
                background: 'rgba(255, 255, 255, 0.64)',
                border: '1px solid #FFFFFF'
              }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Send Again</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sendAgainUsers.map((user) => (
                  <div 
                    key={user.id} 
                    className="flex flex-col items-center gap-2 p-4 rounded-lg transition-colors cursor-pointer"
                    style={{
                      border: '1px solid #FFFFFF',
                      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
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
              <div 
                className="rounded-[24px] p-6"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.64)',
                  border: '1px solid #FFFFFF'
                }}
              >
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <h4 className="text-sm text-muted-foreground mb-2">Total Sent</h4>
                  <p className="text-3xl font-bold text-foreground">$12,918.98</p>
                </div>
              </div>
              <div 
                className="rounded-[24px] p-6"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.64)',
                  border: '1px solid #FFFFFF'
                }}
              >
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <h4 className="text-sm text-muted-foreground mb-2">Total Received</h4>
                  <p className="text-3xl font-bold text-foreground">$12,918.98</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Banks and Cards */}
          <div className="lg:col-span-1">
            <div 
              className="rounded-[24px] p-6"
              style={{ 
                background: 'rgba(255, 255, 255, 0.64)',
                border: '1px solid #FFFFFF'
              }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Banks and Cards</h3>
              <div className="space-y-4">
                {banksAndCards.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-3"
                    style={{
                      border: '1px solid #FFFFFF',
                      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
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
        </div>
      }
    />
  );
};

export default MeelyPay;
