
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Users, Clock, AlertTriangle } from 'lucide-react';

const stats = [
  {
    title: 'Total Cards',
    value: '24',
    icon: CreditCard,
    color: 'bg-blue-500'
  },
  {
    title: 'Total Employees',
    value: '156',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    title: 'Pending Payments',
    value: '8',
    icon: Clock,
    color: 'bg-yellow-500'
  },
  {
    title: 'Overdue Payments',
    value: '3',
    icon: AlertTriangle,
    color: 'bg-red-500'
  }
];

export function StatsOverviewSection() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="overflow-hidden" style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.title}</div>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
