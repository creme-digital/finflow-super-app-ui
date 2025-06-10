
import React from 'react';
import { Wallet, Send, ArrowDownLeft, ArrowUpRight, Building, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrency } from '@/contexts/CurrencyContext';

const quickActions = [
  { icon: Wallet, label: 'Deposit', color: 'bg-blue-50 text-blue-600' },
  { icon: Send, label: 'Send', color: 'bg-green-50 text-green-600' },
  { icon: ArrowDownLeft, label: 'Receive', color: 'bg-purple-50 text-purple-600' },
  { icon: ArrowUpRight, label: 'Transfer', color: 'bg-orange-50 text-orange-600' }
];

const accounts = [
  { name: 'Checking Account', balance: 12450, type: 'Primary', icon: Building },
  { name: 'Savings Account', balance: 8700, type: 'High Yield', icon: Wallet },
  { name: 'Investment Portfolio', balance: 15200, type: 'Growth', icon: TrendingUp }
];

const recentTransactions = [
  { name: 'John Smith', amount: 125.00, type: 'received' },
  { name: 'Amazon Purchase', amount: -89.99, type: 'expense' },
  { name: 'Salary Deposit', amount: 3200.00, type: 'income' },
  { name: 'Coffee Shop', amount: -12.50, type: 'expense' }
];

const stats = [
  { label: 'Active Cards', value: '3' },
  { label: 'Monthly Limit', value: '$5,000' },
  { label: 'Available Credit', value: '$2,300' },
  { label: 'Rewards Points', value: '1,240' }
];

export function RightSidebarContent() {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-900">Total Balance</span>
        </div>
        <div className="mb-4">
          <div className="text-2xl font-semibold text-gray-900">{formatAmount(23569)}</div>
          <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
            <span>↑ 10.5% (+{formatAmount(908)})</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className="flex flex-col gap-1 h-auto p-3 border border-gray-200 hover:bg-gray-50"
            >
              <action.icon className={`w-4 h-4 ${action.color}`} />
              <span className="text-xs text-gray-600">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Accounts Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Accounts</h3>
        <div className="space-y-3">
          {accounts.map((account) => (
            <div key={account.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <account.icon className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{account.name}</div>
                  <div className="text-xs text-gray-500">{account.type}</div>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">
                {formatAmount(account.balance)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
            <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" alt={transaction.name} />
                  <AvatarFallback className="text-xs">
                    {transaction.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{transaction.type}</div>
                </div>
              </div>
              <div className={`text-sm font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                {transaction.amount > 0 ? '+' : ''}{formatAmount(Math.abs(transaction.amount))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
