
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Copy, Link, Users, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ReferralTab() {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const referralLink = 'https://finflow.com/invite/user123';
  const referralCode = 'USER123';
  const referralProgress = 70; // 70% of the way to next tier
  
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
      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>
            Share this link with friends to earn rewards when they sign up
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          
          <div className="pt-2">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Referral Code:</span>
              <span className="font-mono font-medium">{referralCode}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invite Friends</CardTitle>
            <CardDescription>
              Send a referral link directly to your friends' email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleInvite} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="friend@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">Send Invitation</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Referral Tier Progress</CardTitle>
            <CardDescription>
              Refer more friends to unlock higher rewards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Tier: Silver</span>
                <span>Next: Gold</span>
              </div>
              <Progress value={referralProgress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                3 more referrals needed to reach Gold tier
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Referral Activity</CardTitle>
          <CardDescription>
            Track the status of your referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Signed up 2 days ago</p>
                </div>
              </div>
              <span className="text-green-600 font-medium">+$25.00</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Michael Brown</p>
                  <p className="text-sm text-muted-foreground">Signed up last week</p>
                </div>
              </div>
              <span className="text-green-600 font-medium">+$25.00</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">Emma Wilson</p>
                  <p className="text-sm text-muted-foreground">Pending verification</p>
                </div>
              </div>
              <span className="text-amber-600 font-medium">Pending</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Referrals</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
