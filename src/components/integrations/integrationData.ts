
import { ShoppingCart, ShoppingBag, FileText, Building, FileX, FilePlus, FileMinus, LinkIcon, Link2, Link2Off, ChartBar, ChartPie } from 'lucide-react';
import { Integration } from './types';

export const ecommerceIntegrations: Integration[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    icon: ShoppingCart,
    description: 'Connect your Shopify store to automatically import sales and inventory data.',
    category: 'ecommerce',
    popular: true,
    connected: false,
  },
  {
    id: 'amazon',
    name: 'Amazon',
    icon: ShoppingBag,
    description: 'Sync your Amazon seller account to track sales and manage fulfillment.',
    category: 'ecommerce',
    popular: true,
    connected: false,
  },
  {
    id: 'ebay',
    name: 'eBay',
    icon: ShoppingBag,
    description: 'Connect your eBay seller account to track listings and sales data.',
    category: 'ecommerce',
    connected: false,
  },
];

export const accountingIntegrations: Integration[] = [
  {
    id: 'xero',
    name: 'Xero',
    icon: FileText,
    description: 'Connect your Xero account to sync financial data and automate bookkeeping.',
    category: 'accounting',
    popular: true,
    connected: true,
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    icon: FilePlus,
    description: 'Import transactions and export financial reports to QuickBooks.',
    category: 'accounting',
    popular: true,
    connected: false,
  },
  {
    id: 'freshbooks',
    name: 'FreshBooks',
    icon: FileMinus,
    description: 'Sync invoices and expenses with your FreshBooks account.',
    category: 'accounting',
    connected: false,
  },
  {
    id: 'wave',
    name: 'Wave',
    icon: FileX,
    description: 'Connect to Wave for seamless accounting and invoicing.',
    category: 'accounting',
    connected: false,
  },
];

export const hrIntegrations: Integration[] = [
  {
    id: 'gusto',
    name: 'Gusto',
    icon: Building,
    description: 'Sync payroll, benefits, and HR data with your Gusto account.',
    category: 'hr',
    popular: true,
    connected: false,
  },
  {
    id: 'bamboohr',
    name: 'BambooHR',
    icon: FileText,
    description: 'Manage employee data and HR processes through BambooHR integration.',
    category: 'hr',
    connected: false,
  },
  {
    id: 'adp',
    name: 'ADP',
    icon: ChartBar,
    description: 'Connect with ADP for payroll processing and workforce management.',
    category: 'hr',
    connected: false,
  },
];

export const paymentIntegrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    icon: Link2,
    description: 'Process payments and manage subscriptions with Stripe integration.',
    category: 'payments',
    popular: true,
    connected: true,
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: LinkIcon,
    description: 'Connect your PayPal account to process payments and track transactions.',
    category: 'payments',
    popular: true,
    connected: false,
  },
  {
    id: 'square',
    name: 'Square',
    icon: Link2Off,
    description: 'Integrate with Square for in-person and online payment processing.',
    category: 'payments',
    connected: false,
  },
  {
    id: 'plaid',
    name: 'Plaid',
    icon: ChartPie,
    description: 'Securely connect bank accounts and financial data through Plaid.',
    category: 'payments',
    connected: false,
  },
];
