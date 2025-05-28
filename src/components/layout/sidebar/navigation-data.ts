import { LayoutDashboard, Search, Wallet, CreditCard, ArrowRightLeft, ReceiptText, FileText, Bitcoin, Award, Layers, Settings, CalendarCheck, DollarSign, BookOpen, FileBarChart2, Gift, Link2, Send, Download, Repeat2, UserCog, User, House, TrendingUp } from 'lucide-react';

// Define the navigation item type
export type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

// Define a category type with its navigation items
export type NavCategory = {
  title?: string; // optional for group 1
  collapsible?: boolean;
  items: NavItem[];
};

// Create navigation categories
export const navCategories: NavCategory[] = [
  // Group 1: No headline, not collapsible
  {
    items: [
      { title: 'Search', href: '/search', icon: Search },
      { title: 'Dashboard', href: '/', icon: LayoutDashboard },
    ]
  },
  // Group 2: Bank
  {
    title: 'MeelyPay',
    collapsible: true,
    items: [
      { title: 'MeelyPay Home', href: '/accounts', icon: House },
      { title: 'Cards', href: '/cards', icon: CreditCard },
      { title: 'Transfers', href: '/transfers', icon: ArrowRightLeft },
      { title: 'Payments', href: '/payments', icon: DollarSign },
      { title: 'Expenses', href: '/expenses', icon: ReceiptText },
    ]
  },
  // Group 3: Accounting
  {
    title: 'MeelyBooks',
    collapsible: true,
    items: [
      { title: 'MeelyBooks Home', href: '/accounting-dashboard', icon: House },
      { title: 'Bookkeeping', href: '/bookkeeping', icon: BookOpen },
      { title: 'Invoicing', href: '/invoicing', icon: FileText },
      { title: 'Customers', href: '/customers', icon: User },
      { title: 'Reports', href: '/reports', icon: FileBarChart2 },
      { title: 'Tax', href: '/tax', icon: CalendarCheck },
    ]
  },
  // Group 4: Payroll
  {
    title: 'MeelyPayroll',
    collapsible: true,
    items: [
      { title: 'MeelyPayroll Home', href: '/payroll', icon: House },
    ]
  },
  // Group 5: Trading
  {
    title: 'MeelyTrade',
    collapsible: true,
    items: [
      { title: 'MeelyCypto Portfolio', href: '/crypto', icon: TrendingUp },
      { title: 'Holdings', href: '/crypto/holdings', icon: Wallet },
      { title: 'Buy Crypto', href: '/crypto/trade', icon: Wallet },
      { title: 'Market', href: '/crypto/market', icon: Repeat2 },
    ]
  },
  // Group 6: Crypto
  {
    title: 'MeelyCrypto',
    collapsible: true,
    items: [
      { title: 'MeelyCypto Portfolio', href: '/crypto', icon: TrendingUp },
      { title: 'Holdings', href: '/crypto/holdings', icon: Wallet },
      { title: 'Buy Crypto', href: '/crypto/trade', icon: Wallet },
      { title: 'Market', href: '/crypto/market', icon: Repeat2 },
    ]
  },
  // Group 7: Account
  {
    title: 'Account',
    collapsible: true,
    items: [
      { title: 'Rewards', href: '/rewards', icon: Gift },
      { title: 'Integrations', href: '/integrations', icon: Link2 },
      { title: 'Settings', href: '/settings', icon: Settings },
    ]
  },
];
