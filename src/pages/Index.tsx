
import React from 'react';
import { ModernLayout } from '@/components/layout/ModernLayout';
import { ModernPageHeader } from '@/components/modern/ModernPageHeader';
import { MetricCard } from '@/components/modern/MetricCard';
import { Button } from '@/components/ui/button';
import { 
  WalletCards, 
  TrendingUp, 
  TrendingDown, 
  ChartColumnIncreasing,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardPage = () => {
  return (
    <ModernLayout>
      <div className="space-y-8">
        <ModernPageHeader
          title="Dashboard"
          subtitle="Welcome back! Here's an overview of your finances."
        >
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            New Account
          </Button>
        </ModernPageHeader>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Balance"
            value="$104,400.00"
            change="+5.2%"
            changeType="positive"
            icon={WalletCards}
          />
          <MetricCard
            title="Monthly Income"
            value="$32,400.00"
            change="+2.3%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-green-600"
          />
          <MetricCard
            title="Monthly Expenses"
            value="$12,800.00"
            change="+4.1%"
            changeType="negative"
            icon={TrendingDown}
            iconColor="text-red-600"
          />
          <MetricCard
            title="Cash Flow"
            value="$19,600.00"
            change="+1.7%"
            changeType="positive"
            icon={ChartColumnIncreasing}
            iconColor="text-blue-600"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Spending Overview */}
          <div className="lg:col-span-2">
            <div className="modern-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Spending Overview</h3>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
              <div className="h-80 flex items-center justify-center text-muted-foreground border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <ChartColumnIncreasing className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                  <p>Spending chart will be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="modern-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <ArrowUpRight className="w-4 h-4" />
                  Send Money
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <ArrowDownRight className="w-4 h-4" />
                  Request Payment
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <DollarSign className="w-4 h-4" />
                  Pay Bills
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="modern-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { type: 'income', amount: '+$2,400', description: 'Salary deposit', time: '2 hours ago' },
                  { type: 'expense', amount: '-$89', description: 'Grocery shopping', time: '5 hours ago' },
                  { type: 'income', amount: '+$150', description: 'Freelance payment', time: '1 day ago' }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                    <span className={cn(
                      'text-sm font-semibold',
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    )}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Accounts Overview */}
          <div className="modern-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Accounts</h3>
            <div className="space-y-3">
              {[
                { name: 'Checking Account', balance: '$45,230', type: 'checking' },
                { name: 'Savings Account', balance: '$28,900', type: 'savings' },
                { name: 'Investment Account', balance: '$30,270', type: 'investment' }
              ].map((account, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{account.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{account.type}</p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{account.balance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="modern-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Cards</h3>
            <div className="space-y-3">
              {[
                { name: 'Meely Visa', last4: '4532', spending: '$1,240' },
                { name: 'Business Card', last4: '8901', spending: '$890' }
              ].map((card, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{card.name}</p>
                    <p className="text-xs text-muted-foreground">•••• {card.last4}</p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{card.spending}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="modern-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Goals</h3>
            <div className="space-y-4">
              {[
                { name: 'Emergency Fund', current: 8500, target: 10000 },
                { name: 'Vacation', current: 2400, target: 5000 }
              ].map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-foreground">{goal.name}</p>
                      <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};

export default DashboardPage;
