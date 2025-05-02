
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CardDetails } from '@/components/cards/CardDetails';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Grid2x2, List } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Sample card data
const sampleCards = [
  {
    id: '1',
    name: 'Personal Debit Card',
    type: 'Physical',
    category: 'Personal',
    cardNumber: '•••• •••• •••• 4281',
    fullCardNumber: '4532 1111 2222 4281',
    expiryDate: '12/25',
    cvv: '123',
    cardholderName: 'John Smith',
    balance: '$2,458.50',
    available: '$2,458.50',
    isLocked: false,
    cardColor: 'bg-gradient-to-r from-fintech-purple to-fintech-light-purple'
  },
  {
    id: '2',
    name: 'Business Credit Card',
    type: 'Physical',
    category: 'Business',
    cardNumber: '•••• •••• •••• 7829',
    fullCardNumber: '5412 3333 4444 7829',
    expiryDate: '06/27',
    cvv: '456',
    cardholderName: 'John Smith',
    balance: '$5,872.30',
    available: '$9,127.70',
    creditLimit: '$15,000.00',
    isLocked: false,
    cardColor: 'bg-gradient-to-r from-fintech-blue to-sky-400'
  },
  {
    id: '3',
    name: 'Virtual Shopping Card',
    type: 'Virtual',
    category: 'Personal',
    cardNumber: '•••• •••• •••• 1543',
    fullCardNumber: '4532 5555 6666 1543',
    expiryDate: '09/26',
    cvv: '789',
    cardholderName: 'John Smith',
    balance: '$350.00',
    available: '$350.00',
    isLocked: true,
    cardColor: 'bg-gradient-to-r from-fintech-success to-green-400'
  },
  {
    id: '4',
    name: 'Business Expense Card',
    type: 'Virtual',
    category: 'Business',
    cardNumber: '•••• •••• •••• 9217',
    fullCardNumber: '5412 7777 8888 9217',
    expiryDate: '03/27',
    cvv: '321',
    cardholderName: 'John Smith',
    balance: '$1,250.75',
    available: '$3,749.25',
    creditLimit: '$5,000.00',
    isLocked: false,
    cardColor: 'bg-gradient-to-r from-orange-500 to-amber-400'
  }
];

export default function Cards() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Filter cards based on active tab
  const filteredCards = activeTab === 'all' 
    ? sampleCards 
    : sampleCards.filter(card => {
        if (activeTab === 'physical') return card.type === 'Physical';
        if (activeTab === 'virtual') return card.type === 'Virtual';
        if (activeTab === 'personal') return card.category === 'Personal';
        if (activeTab === 'business') return card.category === 'Business';
        return true;
      });

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cards</h1>
        <div className="flex items-center gap-4">
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'grid' | 'list')} className="border rounded-md">
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <Grid2x2 className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <List className="h-5 w-5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all">All Cards</TabsTrigger>
          <TabsTrigger value="physical">Physical</TabsTrigger>
          <TabsTrigger value="virtual">Virtual</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className={cn(
        "grid gap-6",
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      )}>
        {filteredCards.map(card => (
          <CardDetails 
            key={card.id} 
            card={card} 
            viewMode={viewMode}
            isSelected={selectedCard === card.id}
            onSelect={() => setSelectedCard(card.id === selectedCard ? null : card.id)}
          />
        ))}
      </div>
    </Layout>
  );
}
