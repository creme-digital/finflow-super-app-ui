
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Copy, Check, Plus } from 'lucide-react';
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

  return (
    <div className="space-y-6">
      {/* Header with Cards page styling */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rewards</h1>
          <p className="text-muted-foreground">Earn rewards through referrals and track your progress</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            View History
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            Invite Friends
          </Button>
        </div>
      </div>

      {/* Stats Overview with Glass Effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="overflow-hidden"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Total Rewards Earned</div>
              <div className="text-3xl font-bold tracking-tight">{formatAmount(293.00)}</div>
            </div>
          </CardContent>
        </div>

        <div
          className="overflow-hidden"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Successful Referrals</div>
              <div className="text-3xl font-bold tracking-tight">17</div>
            </div>
          </CardContent>
        </div>

        <div
          className="overflow-hidden"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Average Cashback Rate</div>
              <div className="text-3xl font-bold tracking-tight">4.8%</div>
            </div>
          </CardContent>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Your Referral Link with Glass Effect */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <CardHeader>
              <CardTitle>Your Referral Link</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-3">Share this link with friends to earn rewards when they sign up</div>
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
              
              <div className="pt-3 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Referral Code:</span>
                  <span className="font-mono font-medium">{referralCode}</span>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Invite Friends with Glass Effect */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <CardHeader>
              <CardTitle>Invite Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">Send a referral link directly to your friends' email</div>
              <form onSubmit={handleInvite} className="space-y-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-auto px-6">Send Invitation</Button>
              </form>
            </CardContent>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Referral Tier Progress with Glass Effect */}
          <div
            className="overflow-hidden"
            style={{
              border: '1px solid #FFFFFF',
              boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <CardHeader>
              <CardTitle>Referral Tier Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-4">Refer more friends to unlock higher rewards</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Current Tier: Silver</span>
                    <span>Next: Gold</span>
                  </div>
                  <Progress value={referralProgress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    6 more referrals needed to reach gold tier
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Rewards() {
  return (
    <Layout 
      title="Reward" 
      showRightSidebar={false}
      mainContent={<RewardsMainContent />}
    />
  );
}
