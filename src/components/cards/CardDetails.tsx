
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CardControls } from './CardControls';
import { TransactionList } from './TransactionList';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CardDetailsProps {
  card: {
    id: string;
    name: string;
    type: string;
    category: string;
    cardNumber: string;
    fullCardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
    balance: string;
    available: string;
    creditLimit?: string;
    isLocked: boolean;
    cardColor: string;
  };
  viewMode: 'grid' | 'list';
  isSelected: boolean;
  onSelect: () => void;
}

export function CardDetails({ card, viewMode, isSelected, onSelect }: CardDetailsProps) {
  const [showCardInfo, setShowCardInfo] = useState(false);
  const [transactionsOpen, setTransactionsOpen] = useState(false);
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-200",
      viewMode === 'list' ? 'flex flex-col md:flex-row' : '',
      isSelected && 'ring-2 ring-primary'
    )}>
      <div className={cn(
        viewMode === 'list' ? 'w-full md:w-1/3' : 'w-full'
      )}>
        <CardHeader className={cn(
          "p-6",
          card.cardColor,
          card.isLocked && "opacity-80"
        )}>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-medium text-lg">{card.name}</p>
              <p className="text-white/80 text-sm">{card.type} • {card.category}</p>
            </div>
            <CreditCard className="h-6 w-6 text-white" />
          </div>
          
          <div className="mt-6 mb-2">
            <p className="text-white text-lg font-mono">
              {showCardInfo ? card.fullCardNumber : card.cardNumber}
            </p>
            <div className="flex justify-between mt-4 text-white">
              <div>
                <p className="text-xs text-white/70">VALID THRU</p>
                <p className="font-mono">{card.expiryDate}</p>
              </div>
              <div>
                <p className="text-xs text-white/70">CVV</p>
                <p className="font-mono">{showCardInfo ? card.cvv : '***'}</p>
              </div>
            </div>
          </div>
          
          <p className="text-white text-sm mt-4">{card.cardholderName}</p>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Balance</p>
              <p className="font-semibold">{card.balance}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Available</p>
              <p className="font-semibold">{card.available}</p>
            </div>
            {card.creditLimit && (
              <div>
                <p className="text-sm text-muted-foreground">Limit</p>
                <p className="font-semibold">{card.creditLimit}</p>
              </div>
            )}
          </div>
          
          <CardControls 
            cardId={card.id}
            isLocked={card.isLocked} 
            showCardDetails={showCardInfo}
            onToggleCardDetails={() => setShowCardInfo(!showCardInfo)}
          />
        </CardContent>
      </div>
      
      <div className={cn(
        viewMode === 'list' ? 'w-full md:w-2/3 border-t md:border-t-0 md:border-l' : 'w-full border-t'
      )}>
        <Collapsible open={transactionsOpen} onOpenChange={setTransactionsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="flex w-full justify-between p-4 rounded-none border-b"
            >
              Recent Transactions
              {transactionsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <TransactionList cardId={card.id} />
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {viewMode === 'grid' && (
        <CardFooter className="p-4 bg-muted/30 flex justify-between">
          <p className="text-sm">
            {card.isLocked ? 
              <span className="text-amber-600 font-medium">Card Locked</span> :
              <span className="text-fintech-success font-medium">Active</span>
            }
          </p>
          <Button variant="outline" size="sm" onClick={onSelect}>
            {isSelected ? "Hide Details" : "View Details"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
