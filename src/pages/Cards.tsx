
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Plus, Filter, List, Grid2x2, MoreHorizontal, Trash2, ArrowRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CardGrid } from '@/components/cards/CardGrid';
import { AddCardDialog } from '@/components/cards/AddCardDialog';
import { DeleteCardsDialog } from '@/components/cards/DeleteCardsDialog';
import { CardDetailsSheet } from '@/components/cards/CardDetailsSheet';

// Statistics data
const cardStats = [
  { label: 'Total Card', value: 12, key: 'total' },
  { label: 'Physical Card', value: 8, key: 'physical' },
  { label: 'Virtual Card', value: 4, key: 'virtual' },
  { label: 'Personal Card', value: 6, key: 'personal' },
  { label: 'Business Card', value: 6, key: 'business' }
];

// Sample card data for table
const cardsData = [
  {
    id: '1',
    cardholder: 'James Hall',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$8,657.41',
    type: 'Virtual',
    account: 'Ops / Payroll',
    status: 'Active'
  },
  {
    id: '2',
    cardholder: 'Rhonda Rhodes',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$342.07',
    type: 'Physical',
    account: 'Credit account',
    status: 'Active'
  },
  {
    id: '3',
    cardholder: 'Kathy Pacheco',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$1,486.52',
    type: 'Virtual',
    account: 'AP',
    status: 'Active'
  },
  {
    id: '4',
    cardholder: 'Kimberly Mastrangelo',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$5,653.56',
    type: 'Physical',
    account: 'Ops / Payroll',
    status: 'Active'
  },
  {
    id: '5',
    cardholder: 'Corina McCoy',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$1,595.71',
    type: 'Virtual',
    account: 'Credit account',
    status: 'Active'
  },
  {
    id: '6',
    cardholder: 'Iva Ryan',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$7,738.89',
    type: 'Physical',
    account: 'AP',
    status: 'Card locked'
  },
  {
    id: '7',
    cardholder: 'Stephanie Nicol',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$8,650.33',
    type: 'Virtual',
    account: 'Ops / Payroll',
    status: 'Active'
  },
  {
    id: '8',
    cardholder: 'Alex Buckmaster',
    avatar: '/placeholder.svg',
    cardNumber: '•••• •••• •••• 1237',
    spendThisMonth: '$1,207.52',
    type: 'Physical',
    account: 'Ops / Payroll',
    status: 'Active'
  }
];

export default function Cards() {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [addCardDialogOpen, setAddCardDialogOpen] = useState(false);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<typeof cardsData[0] | null>(null);
  const [filters, setFilters] = useState({
    status: [] as string[],
    type: [] as string[],
    account: [] as string[]
  });

  // Filter cards based on active tab and applied filters
  const filteredCards = cardsData.filter(card => {
    // Tab filtering
    let tabMatch = true;
    if (activeTab !== 'all') {
      if (activeTab === 'physical') tabMatch = card.type === 'Physical';
      else if (activeTab === 'virtual') tabMatch = card.type === 'Virtual';
      else if (activeTab === 'personal') tabMatch = card.account.includes('Personal');
      else if (activeTab === 'business') tabMatch = card.account.includes('Business') || card.account.includes('Ops');
    }

    // Additional filters
    const statusMatch = filters.status.length === 0 || filters.status.includes(card.status);
    const typeMatch = filters.type.length === 0 || filters.type.includes(card.type);
    const accountMatch = filters.account.length === 0 || filters.account.includes(card.account);

    return tabMatch && statusMatch && typeMatch && accountMatch;
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      status: [],
      type: [],
      account: []
    });
  };

  const getActiveFiltersCount = () => {
    return filters.status.length + filters.type.length + filters.account.length;
  };

  const handleCardSelect = (cardId: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedCards(prev => [...prev, cardId]);
    } else {
      setSelectedCards(prev => prev.filter(id => id !== cardId));
    }
  };

  const handleSelectAll = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedCards(filteredCards.map(card => card.id));
    } else {
      setSelectedCards([]);
    }
  };

  const handleDeleteCards = () => {
    // Handle delete logic here
    console.log('Deleting cards:', selectedCards);
    setSelectedCards([]);
    setDeleteDialogOpen(false);
    // In a real app, you would call an API to delete the cards
  };

  const handleCardClick = (card: typeof cardsData[0]) => {
    setSelectedCard(card);
    setCardDetailsOpen(true);
  };

  const isAllSelected = filteredCards.length > 0 && selectedCards.length === filteredCards.length;
  const isSomeSelected = selectedCards.length > 0 && selectedCards.length < filteredCards.length;
  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Layout
      title="Cards"
      mainContent={
        <div className="space-y-6">
          {/* Header with Create Card button */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-foreground">Cards</h1>
            <Button onClick={() => setAddCardDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Card
            </Button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-5 gap-4">
            {cardStats.map((stat) => (
              <div
                key={stat.key}
                className="flex flex-col overflow-hidden"
                style={{
                  border: '1px solid #FFFFFF',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Card</TabsTrigger>
              <TabsTrigger value="physical">Physical</TabsTrigger>
              <TabsTrigger value="virtual">Virtual</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Filters and View Controls */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {selectedCards.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setDeleteDialogOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 rounded-full"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete {selectedCards.length} Card{selectedCards.length > 1 ? 's' : ''}
                </Button>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-full relative">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white">
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.status.includes('Active')}
                    onCheckedChange={(checked) => handleFilterChange('status', 'Active', checked)}
                  >
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.status.includes('Card locked')}
                    onCheckedChange={(checked) => handleFilterChange('status', 'Card locked', checked)}
                  >
                    Card locked
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.type.includes('Physical')}
                    onCheckedChange={(checked) => handleFilterChange('type', 'Physical', checked)}
                  >
                    Physical
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.type.includes('Virtual')}
                    onCheckedChange={(checked) => handleFilterChange('type', 'Virtual', checked)}
                  >
                    Virtual
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuLabel>Filter by Account</DropdownMenuLabel>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('Ops / Payroll')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'Ops / Payroll', checked)}
                  >
                    Ops / Payroll
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('Credit account')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'Credit account', checked)}
                  >
                    Credit account
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.account.includes('AP')}
                    onCheckedChange={(checked) => handleFilterChange('account', 'AP', checked)}
                  >
                    AP
                  </DropdownMenuCheckboxItem>
                  
                  {activeFiltersCount > 0 && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={clearAllFilters} className="text-red-600">
                        Clear all filters
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-sm text-muted-foreground">
                {activeFiltersCount > 0 ? `${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} applied` : 'No filters applied'}
              </span>
            </div>
            <div 
              className="inline-flex h-10 items-center justify-center rounded-full p-1"
              style={{
                border: '1px solid #FFFFFF',
                boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <button
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                  viewMode === 'list' 
                    ? "bg-white text-[#292EE9] shadow-sm" 
                    : "text-muted-foreground"
                )}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                  viewMode === 'grid' 
                    ? "bg-white text-[#292EE9] shadow-sm" 
                    : "text-muted-foreground"
                )}
                onClick={() => setViewMode('grid')}
              >
                <Grid2x2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards Display - Conditional rendering based on view mode */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card) => {
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
                const cardColor = cardColors[parseInt(card.id) % cardColors.length];

                return (
                  <div
                    key={card.id}
                    className="overflow-hidden transition-all duration-200 hover:shadow-lg cursor-pointer"
                    style={{
                      border: '1px solid #FFFFFF',
                      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                      borderRadius: '16px',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    onClick={() => handleCardClick(card)}
                  >
                    {/* Card Visual */}
                    <div className={cn(
                      "p-6 relative text-white min-h-[200px] flex flex-col justify-between",
                      cardColor
                    )}>
                      {card.status === 'Card locked' && (
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
                            <p className="font-medium">02/30</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <CardContent 
                      className="p-6" 
                      style={{
                        background: 'rgba(255, 255, 255, 0.4)'
                      }}
                    >
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Balance</p>
                          <p className="text-xl font-bold">$81,237</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Available</p>
                          <p className="text-xl font-bold">$81,237</p>
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
                          className="text-muted-foreground hover:text-foreground"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                );
              })}
            </div>
          ) : (
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <input 
                        type="checkbox" 
                        className="rounded"
                        checked={isAllSelected}
                        ref={(el) => {
                          if (el) el.indeterminate = isSomeSelected;
                        }}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                    </TableHead>
                    <TableHead>Cardholder</TableHead>
                    <TableHead>Card</TableHead>
                    <TableHead>Spend this month</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCards.map((card) => (
                    <TableRow 
                      key={card.id} 
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handleCardClick(card)}
                    >
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <input 
                          type="checkbox" 
                          className="rounded"
                          checked={selectedCards.includes(card.id)}
                          onChange={(e) => handleCardSelect(card.id, e.target.checked)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{card.cardholder}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-5 bg-primary rounded-sm"></div>
                          <span className="font-mono text-sm">{card.cardNumber}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{card.spendThisMonth}</TableCell>
                      <TableCell>{card.type}</TableCell>
                      <TableCell>{card.account}</TableCell>
                      <TableCell>
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
                      </TableCell>
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Add Card Dialog */}
          <AddCardDialog
            open={addCardDialogOpen}
            onOpenChange={setAddCardDialogOpen}
          />

          {/* Delete Cards Confirmation Dialog */}
          <DeleteCardsDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            selectedCount={selectedCards.length}
            onConfirm={handleDeleteCards}
          />

          {/* Card Details Sheet */}
          <CardDetailsSheet
            open={cardDetailsOpen}
            onOpenChange={setCardDetailsOpen}
            card={selectedCard}
          />
        </div>
      }
    />
  );
}
