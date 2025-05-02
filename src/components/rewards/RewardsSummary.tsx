
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, BadgePercent } from "lucide-react";

export function RewardsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-fintech-light-purple/10">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-fintech-purple" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">$120.50</h3>
            <p className="text-sm text-muted-foreground">Total Rewards Earned</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-fintech-light-purple/10">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-fintech-purple" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">7</h3>
            <p className="text-sm text-muted-foreground">Successful Referrals</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-fintech-light-purple/10">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4">
            <BadgePercent className="h-6 w-6 text-fintech-purple" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">2.5%</h3>
            <p className="text-sm text-muted-foreground">Average Cashback Rate</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
