
import React from 'react';
import { Wallet, Send, ArrowDownLeft, ArrowUpRight, Building, TrendingUp, CreditCard, Target, Award, Zap, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrency } from '@/contexts/CurrencyContext';

const quickActions = [
  { icon: Wallet, label: 'Deposit', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Send, label: 'Send', gradient: 'from-emerald-500 to-teal-500' },
  { icon: ArrowDownLeft, label: 'Receive', gradient: 'from-purple-500 to-pink-500' },
  { icon: ArrowUpRight, label: 'Transfer', gradient: 'from-orange-500 to-red-500' }
];

const accounts = [
  { name: 'Checking Account', balance: 12450, type: 'Primary', icon: Building, color: 'from-blue-500 to-indigo-600' },
  { name: 'Savings Account', balance: 8700, type: 'High Yield', icon: Wallet, color: 'from-emerald-500 to-green-600' },
  { name: 'Investment Portfolio', balance: 15200, type: 'Growth', icon: TrendingUp, color: 'from-purple-500 to-violet-600' }
];

const recentTransactions = [
  { name: 'John Smith', amount: 125.00, type: 'received', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'Amazon Purchase', amount: -89.99, type: 'expense', color: 'bg-red-100 text-red-700' },
  { name: 'Salary Deposit', amount: 3200.00, type: 'income', color: 'bg-blue-100 text-blue-700' },
  { name: 'Coffee Shop', amount: -12.50, type: 'expense', color: 'bg-orange-100 text-orange-700' }
];

const stats = [
  { label: 'Active Cards', value: '3', icon: CreditCard, gradient: 'from-blue-500 to-cyan-500' },
  { label: 'Monthly Limit', value: '$5,000', icon: Target, gradient: 'from-emerald-500 to-teal-500' },
  { label: 'Available Credit', value: '$2,300', icon: Zap, gradient: 'from-purple-500 to-pink-500' },
  { label: 'Rewards Points', value: '1,240', icon: Award, gradient: 'from-orange-500 to-red-500' }
];

export function RightSidebarContent() {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <div className="modern-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-semibold text-foreground">Total Balance</span>
            <p className="text-sm text-muted-foreground">All accounts combined</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="text-3xl font-bold text-foreground mb-2">{formatAmount(23569)}</div>
          <div className="text-sm text-emerald-600 flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full inline-flex">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">+10.5% (+{formatAmount(908)})</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className="flex flex-col gap-2 h-auto p-4 rounded-xl border-0 bg-gradient-to-br hover:shadow-md transition-all duration-300 group"
              style={{
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                '--tw-gradient-from': 'rgba(255, 255, 255, 0.9)',
                '--tw-gradient-to': 'rgba(255, 255, 255, 0.7)',
              } as React.CSSProperties}
            >
              <div className={`w-8 h-8 bg-gradient-to-br ${action.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Accounts Overview */}
      <div className="modern-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-muted-foreground" />
          Accounts
        </h3>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.name} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white/50 to-white/30 border border-white/20 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${account.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <account.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{account.name}</div>
                  <div className="text-xs text-muted-foreground">{account.type}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-foreground">
                  {formatAmount(account.balance)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="modern-card p-4 group hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-xs font-medium text-muted-foreground mb-1">{stat.label}</div>
            <div className="text-lg font-bold text-foreground">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="modern-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-muted-foreground" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white/50 to-white/30 border border-white/20 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 ring-2 ring-white shadow-md">
                  <AvatarImage src="/placeholder.svg" alt={transaction.name} />
                  <AvatarFallback className="text-xs font-semibold bg-gradient-to-br from-slate-100 to-slate-200">
                    {transaction.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold text-foreground">{transaction.name}</div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${transaction.color}`}>
                    {transaction.type}
                  </div>
                </div>
              </div>
              <div className={`text-sm font-bold ${transaction.amount > 0 ? 'text-emerald-600' : 'text-foreground'}`}>
                {transaction.amount > 0 ? '+' : ''}{formatAmount(Math.abs(transaction.amount))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
