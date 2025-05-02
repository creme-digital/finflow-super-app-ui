
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function SendPayment() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    recipient: '',
    email: '',
    amount: '',
    method: 'ach',
    memo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (value: string) => {
    setFormData(prev => ({ ...prev, method: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to a payment processing API
    toast({
      title: "Payment initiated",
      description: `$${formData.amount} will be sent to ${formData.recipient}`,
    });
    
    // Reset form
    setFormData({
      recipient: '',
      email: '',
      amount: '',
      method: 'ach',
      memo: ''
    });
  };

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Name</Label>
              <Input
                id="recipient"
                name="recipient"
                placeholder="Name or Business"
                value={formData.recipient}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Recipient Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  name="amount"
                  type="text"
                  placeholder="0.00"
                  className="pl-7"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="method">Payment Method</Label>
              <Select value={formData.method} onValueChange={handleMethodChange}>
                <SelectTrigger id="method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ach">ACH Transfer (Free)</SelectItem>
                  <SelectItem value="card">Credit/Debit Card (2% fee)</SelectItem>
                  <SelectItem value="wire">Wire Transfer ($25 fee)</SelectItem>
                  <SelectItem value="instant">Instant Transfer (1.5% fee)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="memo">Memo (Optional)</Label>
            <Input
              id="memo"
              name="memo"
              placeholder="What's this payment for?"
              value={formData.memo}
              onChange={handleChange}
            />
          </div>
          
          <Button type="submit" className="w-full">Send Payment</Button>
        </form>
      </CardContent>
    </Card>
  );
}
