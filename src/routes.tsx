
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Accounting from './pages/Accounting';
import AccountingDashboard from './pages/accounting-dashboard';
import InvoiceBuilder from './pages/invoice-builder';
import Accounts from './pages/Accounts';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import Transfers from './pages/Transfers';
import Expenses from './pages/Expenses';
const Crypto = React.lazy(() => import('./pages/Crypto'));
const CryptoTrade = React.lazy(() => import('./pages/crypto-trade'));
const CryptoDetail = React.lazy(() => import('./pages/crypto/[symbol]'));
const CryptoHoldings = React.lazy(() => import('./pages/crypto/holdings'));
const TradingDashboard = React.lazy(() => import('./pages/TradingDashboard'));
const Bookkeeping = React.lazy(() => import('./pages/bookkeeping'));
const Invoicing = React.lazy(() => import('./pages/invoicing'));
const InvoiceCreate = React.lazy(() => import('./pages/invoice-create'));
const Reports = React.lazy(() => import('./pages/reports'));
const Customers = React.lazy(() => import('./pages/customers'));
const Payroll = React.lazy(() => import('./pages/Payroll'));
const Tax = React.lazy(() => import('./pages/Tax'));
const Payments = React.lazy(() => import('./pages/Payments'));
const Rewards = React.lazy(() => import('./pages/Rewards'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Overview = React.lazy(() => import('./pages/Overview'));
const Subscriptions = React.lazy(() => import('./pages/Subscriptions'));
const Insurance = React.lazy(() => import('./pages/Insurance'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const MerchantAccount = React.lazy(() => import('./pages/MerchantAccount'));
const MeelyPay = React.lazy(() => import('./pages/MeelyPay'));
const MeelyPayDashboard = React.lazy(() => import('./pages/meelypay/Dashboard'));
const MeelyPayTransactions = React.lazy(() => import('./pages/meelypay/Transactions'));
const MeelyPayPayments = React.lazy(() => import('./pages/meelypay/Payments'));
const MeelyPayPayouts = React.lazy(() => import('./pages/meelypay/Payouts'));
const MeelyPayProcessing = React.lazy(() => import('./pages/meelypay/Processing'));
const MeelyPayDisputes = React.lazy(() => import('./pages/meelypay/Disputes'));
const MeelyPayCheckout = React.lazy(() => import('./pages/meelypay/Checkout'));
const MeelyPayCurrency = React.lazy(() => import('./pages/meelypay/Currency'));
const MeelyPayInvoices = React.lazy(() => import('./pages/meelypay/Invoices'));
const MeelyPayIntegrations = React.lazy(() => import('./pages/meelypay/Integrations'));
const MeelyPayDevelopers = React.lazy(() => import('./pages/meelypay/Developers'));
const MeelyPayrollDashboard = React.lazy(() => import('./pages/meelypayroll/Dashboard'));
const MeelyPayrollEmployees = React.lazy(() => import('./pages/meelypayroll/Employees'));
const MeelyPayrollContractors = React.lazy(() => import('./pages/meelypayroll/Contractors'));
const MeelyPayrollSalaries = React.lazy(() => import('./pages/meelypayroll/Salaries'));
const MeelyPayrollBenefits = React.lazy(() => import('./pages/meelypayroll/Benefits'));
const MeelyPayrollTime = React.lazy(() => import('./pages/meelypayroll/Time'));
const MeelyPayrollTax = React.lazy(() => import('./pages/meelypayroll/Tax'));
const MeelyPayrollCompliance = React.lazy(() => import('./pages/meelypayroll/Compliance'));
const MeelyPayrollAlerts = React.lazy(() => import('./pages/meelypayroll/Alerts'));
const MeelyTradeDashboard = React.lazy(() => import('./pages/meelytrade/Dashboard'));
const MeelyTradeStocks = React.lazy(() => import('./pages/meelytrade/Stocks'));
const MeelyTradeCrypto = React.lazy(() => import('./pages/meelytrade/Crypto'));
const MeelyTradeWatchlists = React.lazy(() => import('./pages/meelytrade/Watchlists'));
const MeelyTradeHoldings = React.lazy(() => import('./pages/meelytrade/Holdings'));
const MeelyTradeNews = React.lazy(() => import('./pages/meelytrade/News'));
const ComponentShowcase = React.lazy(() => import('./pages/ComponentShowcase'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Index />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/crypto-trade" element={<CryptoTrade />} />
        <Route path="/crypto/:symbol" element={<CryptoDetail />} />
        <Route path="/crypto/holdings" element={<CryptoHoldings />} />
        <Route path="/trading" element={<TradingDashboard />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/accounting/dashboard" element={<AccountingDashboard />} />
        <Route path="/accounting/create-invoice" element={<InvoiceCreate />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/invoice-create" element={<InvoiceCreate />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/merchant-account" element={<MerchantAccount />} />
        <Route path="/meelypay" element={<MeelyPay />} />
        <Route path="/meely-pay" element={<MeelyPay />} />
        <Route path="/meelypay/dashboard" element={<MeelyPayDashboard />} />
        <Route path="/meelypay/transactions" element={<MeelyPayTransactions />} />
        <Route path="/meelypay/payments" element={<MeelyPayPayments />} />
        <Route path="/meelypay/payouts" element={<MeelyPayPayouts />} />
        <Route path="/meelypay/processing" element={<MeelyPayProcessing />} />
        <Route path="/meelypay/disputes" element={<MeelyPayDisputes />} />
        <Route path="/meelypay/checkout" element={<MeelyPayCheckout />} />
        <Route path="/meelypay/currency" element={<MeelyPayCurrency />} />
        <Route path="/meelypay/invoices" element={<MeelyPayInvoices />} />
        <Route path="/meelypay/integrations" element={<MeelyPayIntegrations />} />
        <Route path="/meelypay/developers" element={<MeelyPayDevelopers />} />
        <Route path="/meelypayroll/dashboard" element={<MeelyPayrollDashboard />} />
        <Route path="/meelypayroll/employees" element={<MeelyPayrollEmployees />} />
        <Route path="/meelypayroll/contractors" element={<MeelyPayrollContractors />} />
        <Route path="/meelypayroll/salaries" element={<MeelyPayrollSalaries />} />
        <Route path="/meelypayroll/benefits" element={<MeelyPayrollBenefits />} />
        <Route path="/meelypayroll/time" element={<MeelyPayrollTime />} />
        <Route path="/meelypayroll/tax" element={<MeelyPayrollTax />} />
        <Route path="/meelypayroll/compliance" element={<MeelyPayrollCompliance />} />
        <Route path="/meelypayroll/alerts" element={<MeelyPayrollAlerts />} />
        <Route path="/meelytrade/dashboard" element={<MeelyTradeDashboard />} />
        <Route path="/meelytrade/stocks" element={<MeelyTradeStocks />} />
        <Route path="/meelytrade/crypto" element={<MeelyTradeCrypto />} />
        <Route path="/meelytrade/watchlists" element={<MeelyTradeWatchlists />} />
        <Route path="/meelytrade/holdings" element={<MeelyTradeHoldings />} />
        <Route path="/meelytrade/news" element={<MeelyTradeNews />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
