
import { LucideIcon, Home, Eye, Wallet, CreditCard, ArrowRightLeft, DollarSign, Receipt, Calculator, List, Users, FileText, Coins, Gift, Link, Shield, TrendingUp, Building2, Layers, Settings, LogOut } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

// Main navigation items
export const mainNavigation: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    title: 'Overview',
    href: '/overview',
    icon: Eye,
  },
  {
    title: 'Accounts',
    href: '/accounts',
    icon: Wallet,
  },
  {
    title: 'Cards',
    href: '/cards',
    icon: CreditCard,
  },
  {
    title: 'Transfers',
    href: '/transfers',
    icon: ArrowRightLeft,
  },
  {
    title: 'Meely Pay',
    href: '/meely-pay',
    icon: DollarSign,
  },
  {
    title: 'Expenses',
    href: '/expenses',
    icon: Receipt,
  },
  {
    title: 'Accounting',
    href: '/accounting',
    icon: Calculator,
  },
  {
    title: 'Transactions',
    href: '/transactions',
    icon: List,
  },
  {
    title: 'Payroll',
    href: '/payroll',
    icon: Users,
  },
  {
    title: 'Tax',
    href: '/tax',
    icon: FileText,
  },
  {
    title: 'Crypto',
    href: '/crypto',
    icon: Coins,
  },
  {
    title: 'Reward',
    href: '/rewards',
    icon: Gift,
  },
  {
    title: 'Integrations',
    href: '/integrations',
    icon: Link,
  },
  {
    title: 'Insurance',
    href: '/insurance',
    icon: Shield,
  },
  {
    title: 'Trading Dashboard',
    href: '/trading-dashboard',
    icon: TrendingUp,
  },
  {
    title: 'Merchant Account',
    href: '/merchant-account',
    icon: Building2,
  },
  {
    title: 'Subscriptions',
    href: '/subscriptions',
    icon: Layers,
  },
];

// Settings navigation that appears at the bottom
export const settingsNav: NavItem[] = [
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
  {
    title: 'Logout',
    href: '/logout',
    icon: LogOut,
  },
];
