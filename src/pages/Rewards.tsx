
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Copy, Users, Gift, TrendingUp, Check } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const RewardsMainContent = () => {
  const { formatAmount } = useCurrency();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const referralLink = 'https://meely.com/invite/user21938127';
  const referralCode = 'USER21938127';
  const referralProgress = 70;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "The referral link has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Invitation sent!",
        description: `A referral invitation has been sent to ${email}.`,
      });
      setEmail('');
    }
  };

  const rewardStats = [
    {
      icon: Gift,
      label: 'Total Rewards Earned',
      value: formatAmount(293.00),
      description: 'Lifetime earnings'
    },
    {
      icon: Users,
      label: 'Successful Referrals',
      value: '17',
      description: 'Friends who joined'
    },
    {
      icon: TrendingUp,
      label: 'Average Cashback Rate',
      value: '4.8%',
      description: 'On all transactions'
    }
  ];

  const recentReferrals = [
    {
      name: 'Sarah Johnson',
      status: 'completed',
      reward: 25.00,
      time: '2 days ago'
    },
    {
      name: 'Michael Brown',
      status: 'completed',
      reward: 25.00,
      time: 'Last week'
    },
    {
      name: 'Emma Wilson',
      status: 'pending',
      reward: 0,
      time: 'Pending verification'
    }
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Rewards"
        subtitle="Earn cashback and rewards for using our platform and referring friends"
      >
        <div className="flex gap-2">
          <Button variant="outline">
            View History
          </Button>
          <Button>
            Withdraw Rewards
          </Button>
        </div>
      </PageHeader>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewardStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-2xl font-mono font-normal tracking-tight">{stat.value}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Your Referral Link */}
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Share this link with friends to earn rewards when they sign up</div>
              <div className="flex space-x-2">
                <Input
                  value={referralLink}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleCopyLink}
                  className="shrink-0"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Referral Code:</span>
                <span className="font-mono font-medium">{referralCode}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Tier Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Referral Tier Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Refer more friends to unlock higher rewards</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Tier: Silver</span>
                  <span>Next: Gold</span>
                </div>
                <Progress value={referralProgress} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  6 more referrals needed to reach Gold tier
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Invite Friends */}
        <Card>
          <CardHeader>
            <CardTitle>Invite Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-4">Send a referral link directly to your friends' email</div>
            <form onSubmit={handleInvite} className="space-y-4">
              <Input
                type="email"
                placeholder="friend@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-full">Send Invitation</Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Referral Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReferrals.map((referral, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{referral.name}</p>
                      <p className="text-sm text-muted-foreground">{referral.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {referral.status === 'completed' ? (
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                        <span className="text-green-600 font-medium">+{formatAmount(referral.reward)}</span>
                      </div>
                    ) : (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const RewardsRightSidebarContent = () => {
  const { formatAmount } = useCurrency();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Reward Tiers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <div>
                <div className="font-medium">Bronze</div>
                <div className="text-sm text-muted-foreground">0-5 referrals</div>
              </div>
              <div className="text-sm font-medium">$15/referral</div>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div>
                <div className="font-medium">Silver</div>
                <div className="text-sm text-muted-foreground">6-15 referrals</div>
              </div>
              <div className="text-sm font-medium">$25/referral</div>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
              <div>
                <div className="font-medium">Gold</div>
                <div className="text-sm text-muted-foreground">16+ referrals</div>
              </div>
              <div className="text-sm font-medium">$35/referral</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cashback Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Dining & Restaurants</span>
            <span className="text-sm font-medium">5.0%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Gas & Transportation</span>
            <span className="text-sm font-medium">3.0%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Groceries</span>
            <span className="text-sm font-medium">2.5%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Online Shopping</span>
            <span className="text-sm font-medium">2.0%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">All Other Purchases</span>
            <span className="text-sm font-medium">1.0%</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button className="w-full" size="sm">Withdraw Rewards</Button>
          <Button className="w-full" variant="outline" size="sm">View Reward History</Button>
          <Button className="w-full" variant="outline" size="sm">Share Referral Link</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default function Rewards() {
  return (
    <Layout 
      title="Rewards" 
      showRightSidebar={true}
      mainContent={<RewardsMainContent />}
      rightSidebarContent={<RewardsRightSidebarContent />}
    />
  );
}
