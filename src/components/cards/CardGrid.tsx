
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CardData {
  id: string;
  cardholder: string;
  avatar: string;
  cardNumber: string;
  spendThisMonth: string;
  type: string;
  account: string;
  status: string;
  balance?: string;
  available?: string;
  cardColor?: string;
  fullCardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  isLocked?: boolean;
}

interface CardGridProps {
  cards: CardData[];
}

// Enhanced card data with additional properties needed for grid view
const enhanceCardData = (cards: any[]): CardData[] => {
  const cardColors = [
    'bg-gradient-to-br from-gray-800 to-gray-900',
    'bg-gradient-to-br from-blue-800 to-blue-900', 
    'bg-gradient-to-br from-purple-800 to-purple-900',
    'bg-gradient-to-br from-green-800 to-green-900',
    'bg-gradient-to-br from-red-800 to-red-900',
    'bg-gradient-to-br from-indigo-800 to-indigo-900',
    'bg-gradient-to-br from-pink-800 to-pink-900',
    'bg-gradient-to-br from-yellow-800 to-yellow-900'
  ];

  return cards.map((card, index) => ({
    ...card,
    balance: '$81,237',
    available: '$81,237',
    cardColor: cardColors[index % cardColors.length],
    fullCardNumber: '4532 1234 5678 9012',
    expiryDate: '02/30',
    cvv: '123',
    isLocked: card.status === 'Card locked'
  }));
};

export function CardGrid({ cards }: CardGridProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const enhancedCards = enhanceCardData(cards);

  const handleViewDetails = (cardId: string) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {enhancedCards.map((card) => (
        <div
          key={card.id}
          className="overflow-hidden transition-all duration-200 hover:shadow-lg"
          style={{
            border: '1px solid #FFFFFF',
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
            borderRadius: '16px'
          }}
        >
          {/* Card Visual */}
          <div className={cn(
            "p-6 relative text-white min-h-[200px] flex flex-col justify-between",
            card.cardColor
          )}>
            {card.isLocked && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
            )}
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/80">Finaci</p>
              </div>
              <div>
                <p className="text-lg font-bold">VISA</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-8 bg-yellow-400 rounded-sm"></div>
              
              <div>
                <p className="text-xl font-mono tracking-wider">
                  {card.cardNumber}
                </p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-white/70">Card Holder name</p>
                  <p className="font-medium">{card.cardholder}</p>
                </div>
                <div>
                  <p className="text-xs text-white/70">Expiry Date</p>
                  <p className="font-medium">{card.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Info */}
          <CardContent className="p-6" style={{
            background: 'rgba(255, 255, 255, 0.8)'
          }}>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className="text-xl font-bold">{card.balance}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-xl font-bold">{card.available}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Badge 
                variant={card.status === 'Active' ? 'default' : 'secondary'}
                className={cn(
                  card.status === 'Active' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-100'
                )}
              >
                {card.status}
              </Badge>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleViewDetails(card.id)}
                className="text-muted-foreground hover:text-foreground"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </div>
      ))}
    </div>
  );
}
