
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, CreditCard, Send, Plus, MoreVertical } from 'lucide-react';

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  return (
    <Card className={cn('card-shadow card-gradient', className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-muted/50">
            <Send className="w-5 h-5 text-fintech-purple" />
            <span>Send Money</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-muted/50">
            <ArrowRightLeft className="w-5 h-5 text-fintech-purple" />
            <span>Transfer</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-muted/50">
            <CreditCard className="w-5 h-5 text-fintech-purple" />
            <span>Cards</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2 hover:bg-muted/50">
            <Plus className="w-5 h-5 text-fintech-purple" />
            <span>New Account</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
