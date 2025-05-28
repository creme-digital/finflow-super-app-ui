import { LucideIcon, Home, Wallet, CreditCard, LineChart, Receipt, Calculator, FileText, Banknote, Coins, Gift, Settings, Link, AlertTriangle, Users, Clock, Building2, Shield, Briefcase, BarChart3, List, Newspaper, TrendingUp, Building, FileCheck, Timer, Heart, UserPlus, AlertCircle, LogOut } from 'lucide-react';

export type Product = 'main' | 'meelypay' | 'meelytrade' | 'meelypayroll';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface ProductNav {
  id: Product;
  name: string;
  items: NavItem[];
}

// Global settings navigation that appears at the bottom of the sidebar
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

export const products: ProductNav[] = [
  {
    id: 'main',
    name: 'Main',
    items: [
      {
        title: 'Dashboard',
        href: '/',
        icon: Home,
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
        title: 'Credit & Capital',
        href: '/credit',
        icon: LineChart,
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
        title: 'Tax',
        href: '/tax',
        icon: FileText,
      },
      {
        title: 'Payments',
        href: '/payments',
        icon: Banknote,
      },
      {
        title: 'Rewards',
        href: '/rewards',
        icon: Gift,
      },
      {
        title: 'Integrations',
        href: '/integrations',
        icon: Link,
      },
    ],
  },
  {
    id: 'meelypay',
    name: 'MeelyPay',
    items: [
      {
        title: 'Dashboard',
        href: '/meelypay',
        icon: Home,
      },
      {
        title: 'Multi-currency',
        href: '/meelypay/currency',
        icon: Coins,
      },
      {
        title: 'Transactions',
        href: '/meelypay/transactions',
        icon: Receipt,
      },
      {
        title: 'Credit/Debit + ACH',
        href: '/meelypay/processing',
        icon: CreditCard,
      },
      {
        title: 'Payments',
        href: '/meelypay/payments',
        icon: Banknote,
      },
      {
        title: 'Invoices',
        href: '/meelypay/invoices',
        icon: FileText,
      },
      {
        title: 'Payouts',
        href: '/meelypay/payouts',
        icon: Wallet,
      },
      {
        title: 'Checkout Links',
        href: '/meelypay/checkout',
        icon: Link,
      },
      {
        title: 'Disputes & Fraud',
        href: '/meelypay/disputes',
        icon: AlertTriangle,
      },
      {
        title: 'Developers',
        href: '/meelypay/developers',
        icon: Settings,
      },
      {
        title: 'Integrations',
        href: '/meelypay/integrations',
        icon: Link,
      },
    ],
  },
  {
    id: 'meelytrade',
    name: 'MeelyTrade',
    items: [
      {
        title: 'Dashboard',
        href: '/meelytrade',
        icon: Home,
      },
      {
        title: 'Holdings',
        href: '/meelytrade/holdings',
        icon: BarChart3,
      },
      {
        title: 'Stock List',
        href: '/meelytrade/stocks',
        icon: List,
      },
      {
        title: 'Crypto List',
        href: '/meelytrade/crypto',
        icon: Coins,
      },
      {
        title: 'Watchlists',
        href: '/meelytrade/watchlists',
        icon: TrendingUp,
      },
      {
        title: 'News & Insights',
        href: '/meelytrade/news',
        icon: Newspaper,
      },
    ],
  },
  {
    id: 'meelypayroll',
    name: 'MeelyPayroll',
    items: [
      {
        title: 'Dashboard',
        href: '/meelypayroll',
        icon: Home,
      },
      {
        title: 'Salaries',
        href: '/meelypayroll/salaries',
        icon: Banknote,
      },
      {
        title: 'Tax',
        href: '/meelypayroll/tax',
        icon: Calculator,
      },
      {
        title: 'Employees',
        href: '/meelypayroll/employees',
        icon: Users,
      },
      {
        title: 'Time Tracking',
        href: '/meelypayroll/time',
        icon: Clock,
      },
      {
        title: 'Benefits',
        href: '/meelypayroll/benefits',
        icon: Heart,
      },
      {
        title: 'Contractors',
        href: '/meelypayroll/contractors',
        icon: UserPlus,
      },
      {
        title: 'Compliance',
        href: '/meelypayroll/compliance',
        icon: Shield,
      },
      {
        title: 'Alerts',
        href: '/meelypayroll/alerts',
        icon: AlertCircle,
      },
    ],
  },
]; 