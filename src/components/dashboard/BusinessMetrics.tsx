
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CreditCard, Users, Clock, AlertTriangle } from 'lucide-react';

const metrics = [
  {
    id: '1',
    title: 'Total Cards',
    value: '12',
    subtitle: 'Active cards',
    icon: CreditCard,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: '2',
    title: 'Total Employees',
    value: '24',
    subtitle: 'Active employees',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: '3',
    title: 'Pending Payments',
    value: '8',
    subtitle: '$12,450.00',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: '4',
    title: 'Overdue Payments',
    value: '3',
    subtitle: '$4,250.00',
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
];

interface BusinessMetricsProps {
  className?: string;
}

export function BusinessMetrics({ className }: BusinessMetricsProps) {
  return (
    <Card className={cn('card-shadow', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Business Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex items-center gap-4">
              <div className={cn('p-3 rounded-lg', metric.bgColor)}>
                <metric.icon className={cn('w-6 h-6', metric.color)} />
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">{metric.title}</div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-gray-500">{metric.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
