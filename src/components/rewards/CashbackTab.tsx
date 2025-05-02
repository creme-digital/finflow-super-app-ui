
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Percent } from 'lucide-react';

export function CashbackTab() {
  const cashbackData = [
    { category: 'Online Shopping', rate: 3.5, amount: 45.20 },
    { category: 'Travel', rate: 2.0, amount: 32.75 },
    { category: 'Groceries', rate: 1.5, amount: 18.30 },
    { category: 'Restaurants', rate: 2.5, amount: 24.25 },
  ];

  const monthlyGoal = 75; // 75% towards monthly cashback goal

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Cashback Goal</CardTitle>
          <CardDescription>
            Track your progress towards this month's cashback goal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">$120.50 earned</span>
              <span className="text-sm font-medium">Goal: $150</span>
            </div>
            <Progress value={monthlyGoal} className="h-2" />
            <p className="text-sm text-muted-foreground">
              $29.50 more to reach your monthly goal
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cashback by Category</CardTitle>
          <CardDescription>
            See where you're earning the most cashback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cashbackData.map((item) => (
              <div key={item.category} className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Percent className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{item.category}</p>
                    <p className="text-sm text-muted-foreground">{item.rate}% cashback rate</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">${item.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">View Transaction Details</Button>
          <div className="text-right">
            <p className="font-medium">Total Cashback</p>
            <p className="text-lg font-bold text-green-600">$120.50</p>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cashback Boost Offers</CardTitle>
          <CardDescription>
            Limited-time increased cashback rates at select merchants
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg bg-amber-50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Amazon</p>
                  <p className="text-sm text-muted-foreground">Online Shopping</p>
                </div>
                <span className="text-amber-600 font-bold">5% back</span>
              </div>
              <p className="text-sm mt-2">Valid until May 31, 2025</p>
            </div>
            
            <div className="p-4 border rounded-lg bg-blue-50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Delta Airlines</p>
                  <p className="text-sm text-muted-foreground">Travel</p>
                </div>
                <span className="text-blue-600 font-bold">4% back</span>
              </div>
              <p className="text-sm mt-2">Valid until June 15, 2025</p>
            </div>
            
            <div className="p-4 border rounded-lg bg-green-50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Whole Foods</p>
                  <p className="text-sm text-muted-foreground">Groceries</p>
                </div>
                <span className="text-green-600 font-bold">3% back</span>
              </div>
              <p className="text-sm mt-2">Valid until May 20, 2025</p>
            </div>
            
            <div className="p-4 border rounded-lg bg-purple-50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Starbucks</p>
                  <p className="text-sm text-muted-foreground">Restaurants</p>
                </div>
                <span className="text-purple-600 font-bold">4% back</span>
              </div>
              <p className="text-sm mt-2">Valid until June 30, 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
