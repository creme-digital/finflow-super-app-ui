import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, LockOpen, Eye, EyeOff, Sliders } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface CardControlsProps {
  cardId: string;
  isLocked: boolean;
  showCardDetails: boolean;
  onToggleCardDetails: () => void;
  onLockChange: (locked: boolean) => void;
}

export function CardControls({ 
  cardId, 
  isLocked, 
  showCardDetails,
  onToggleCardDetails,
  onLockChange
}: CardControlsProps) {
  const [spendingLimit, setSpendingLimit] = useState('1000');
  const [openLimitDialog, setOpenLimitDialog] = useState(false);
  const { toast } = useToast();

  const handleToggleLock = () => {
    onLockChange(!isLocked);
    toast({
      title: isLocked ? "Card unlocked" : "Card locked",
      description: isLocked 
        ? "Your card has been unlocked and is now active." 
        : "Your card has been locked for security.",
      variant: "default",
    });
  };

  const handleSetLimit = () => {
    toast({
      title: "Spending limit updated",
      description: `Your card spending limit is now $${spendingLimit}.`,
      variant: "default",
    });
    setOpenLimitDialog(false);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-between">
      <Button 
        variant="outline" 
        size="sm" 
        className={cn(
          "flex-1",
          isLocked && "text-amber-600 border-amber-600"
        )}
        onClick={handleToggleLock}
      >
        {isLocked ? (
          <>
            <Lock className="mr-2 h-4 w-4" />
            Unlock Card
          </>
        ) : (
          <>
            <LockOpen className="mr-2 h-4 w-4" />
            Lock Card
          </>
        )}
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="flex-1"
        onClick={onToggleCardDetails}
      >
        {showCardDetails ? (
          <>
            <EyeOff className="mr-2 h-4 w-4" />
            Hide Details
          </>
        ) : (
          <>
            <Eye className="mr-2 h-4 w-4" />
            Show Details
          </>
        )}
      </Button>

      <Dialog open={openLimitDialog} onOpenChange={setOpenLimitDialog}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex-1">
            <Sliders className="mr-2 h-4 w-4" />
            Set Limits
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Set Card Limits</DialogTitle>
            <DialogDescription>
              Configure spending limits and transaction restrictions for this card.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="spending-limit" className="text-right">
                Daily Limit
              </Label>
              <div className="col-span-3 relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
                <Input 
                  id="spending-limit" 
                  value={spendingLimit} 
                  onChange={(e) => setSpendingLimit(e.target.value)}
                  className="pl-6" 
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="countries" className="text-right">
                Countries
              </Label>
              <Input id="countries" placeholder="All countries" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="merchants" className="text-right">
                Merchants
              </Label>
              <Input id="merchants" placeholder="All merchants" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenLimitDialog(false)}>Cancel</Button>
            <Button onClick={handleSetLimit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
