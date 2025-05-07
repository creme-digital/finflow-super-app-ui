
import { LayoutDashboard, Wallet, CreditCard, ArrowRightLeft, ReceiptText, FileText, Bitcoin, Award, Layers, Settings, CalendarCheck, DollarSign } from 'lucide-react';

// Define the navigation item type
export type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

// Define a category type with its navigation items
export type NavCategory = {
  title: string;
  items: NavItem[];
};

// Create navigation categories
export const navCategories: NavCategory[] = [
  {
    title: 'Fintech',
    items: [
      {
        title: 'Dashboard',
        href: '/',
        icon: LayoutDashboard
      }, 
      {
        title: 'Accounts',
        href: '/accounts',
        icon: Wallet
      }, 
      {
        title: 'Cards',
        href: '/cards',
        icon: CreditCard
      }, 
      {
        title: 'Transfers',
        href: '/transfers',
        icon: ArrowRightLeft
      }, 
      {
        title: 'Payments',
        href: '/payments',
        icon: DollarSign
      }, 
      {
        title: 'Expenses',
        href: '/expenses',
        icon: ReceiptText
      }, 
      {
        title: 'Accounting',
        href: '/accounting',
        icon: FileText
      }, 
      {
        title: 'Payroll',
        href: '/payroll',
        icon: FileText
      }, 
      {
        title: 'Tax',
        href: '/tax',
        icon: CalendarCheck
      }, 
      {
        title: 'Crypto',
        href: '/crypto',
        icon: Bitcoin
      }, 
      {
        title: 'Rewards',
        href: '/rewards',
        icon: Award
      }, 
      {
        title: 'Integrations',
        href: '/integrations',
        icon: Layers
      }, 
      {
        title: 'Settings',
        href: '/settings',
        icon: Settings
      }
    ]
  }
  // Additional categories can be added here
];
