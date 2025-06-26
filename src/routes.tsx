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
import Crypto from './pages/Crypto';
import Payroll from './pages/Payroll';
import Tax from './pages/Tax';
import Payments from './pages/Payments';
import Rewards from './pages/Rewards';
import Settings from './pages/Settings';
import Overview from './pages/Overview';
import MeelyPay from './pages/MeelyPay';

// Keep lazy loading for less commonly used pages
const CryptoTrade = React.lazy(() => import('./pages/crypto-trade'));
const CryptoDetail = React.lazy(() => import('./pages/crypto/[symbol]'));
const CryptoDetailNew = React.lazy(() => import('./pages/CryptoDetail'));
const CryptoHoldings = React.lazy(() => import('./pages/crypto/holdings'));
const TradingDashboard = React.lazy(() => import('./pages/TradingDashboard'));
const TradingStockDetail = React.lazy(() => import('./pages/TradingStockDetail'));
const Bookkeeping = React.lazy(() => import('./pages/bookkeeping'));
const Invoicing = React.lazy(() => import('./pages/invoicing'));
const InvoiceCreate = React.lazy(() => import('./pages/invoice-create'));
const Reports = React.lazy(() => import('./pages/reports'));
const Customers = React.lazy(() => import('./pages/customers'));
const Subscriptions = React.lazy(() => import('./pages/Subscriptions'));
const Insurance = React.lazy(() => import('./pages/Insurance'));
const Integrations = React.lazy(() => import('./pages/Integrations'));
const MerchantAccount = React.lazy(() => import('./pages/MerchantAccount'));
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
const MeelyTradeStockDetail = React.lazy(() => import('./pages/meelytrade/StockDetail'));
const ComponentShowcase = React.lazy(() => import('./pages/ComponentShowcase'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Commonly used pages - no lazy loading */}
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Index />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transfers" element={<Transfers />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/accounting" element={<Accounting />} />
      <Route path="/accounting/dashboard" element={<AccountingDashboard />} />
      <Route path="/payroll" element={<Payroll />} />
      <Route path="/tax" element={<Tax />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/meelypay" element={<MeelyPay />} />
      <Route path="/meely-pay" element={<MeelyPay />} />
      
      {/* Less commonly used pages - keep lazy loading with Suspense */}
      <Route path="/crypto-trade" element={
        <Suspense fallback={<div>Loading...</div>}>
          <CryptoTrade />
        </Suspense>
      } />
      <Route path="/crypto/:symbol" element={
        <Suspense fallback={<div>Loading...</div>}>
          <CryptoDetail />
        </Suspense>
      } />
      <Route path="/crypto/detail/:symbol" element={
        <Suspense fallback={<div>Loading...</div>}>
          <CryptoDetailNew />
        </Suspense>
      } />
      <Route path="/crypto/holdings" element={
        <Suspense fallback={<div>Loading...</div>}>
          <CryptoHoldings />
        </Suspense>
      } />
      <Route path="/trading" element={
        <Suspense fallback={<div>Loading...</div>}>
          <TradingDashboard />
        </Suspense>
      } />
      <Route path="/trading-dashboard" element={
        <Suspense fallback={<div>Loading...</div>}>
          <TradingDashboard />
        </Suspense>
      } />
      <Route path="/trading/stocks/:symbol" element={
        <Suspense fallback={<div>Loading...</div>}>
          <TradingStockDetail />
        </Suspense>
      } />
      <Route path="/bookkeeping" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Bookkeeping />
        </Suspense>
      } />
      <Route path="/invoicing" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Invoicing />
        </Suspense>
      } />
      <Route path="/invoice-create" element={
        <Suspense fallback={<div>Loading...</div>}>
          <InvoiceCreate />
        </Suspense>
      } />
      <Route path="/accounting/create-invoice" element={
        <Suspense fallback={<div>Loading...</div>}>
          <InvoiceCreate />
        </Suspense>
      } />
      <Route path="/reports" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Reports />
        </Suspense>
      } />
      <Route path="/customers" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Customers />
        </Suspense>
      } />
      <Route path="/subscriptions" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Subscriptions />
        </Suspense>
      } />
      <Route path="/insurance" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Insurance />
        </Suspense>
      } />
      <Route path="/integrations" element={
        <Suspense fallback={<div>Loading...</div>}>
          <Integrations />
        </Suspense>
      } />
      <Route path="/merchant-account" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MerchantAccount />
        </Suspense>
      } />
      <Route path="/meelypay/dashboard" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayDashboard />
        </Suspense>
      } />
      <Route path="/meelypay/transactions" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayTransactions />
        </Suspense>
      } />
      <Route path="/meelypay/payments" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayPayments />
        </Suspense>
      } />
      <Route path="/meelypay/payouts" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayPayouts />
        </Suspense>
      } />
      <Route path="/meelypay/processing" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayProcessing />
        </Suspense>
      } />
      <Route path="/meelypay/disputes" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayDisputes />
        </Suspense>
      } />
      <Route path="/meelypay/checkout" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayCheckout />
        </Suspense>
      } />
      <Route path="/meelypay/currency" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayCurrency />
        </Suspense>
      } />
      <Route path="/meelypay/invoices" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayInvoices />
        </Suspense>
      } />
      <Route path="/meelypay/integrations" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayIntegrations />
        </Suspense>
      } />
      <Route path="/meelypay/developers" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayDevelopers />
        </Suspense>
      } />
      <Route path="/meelypayroll/dashboard" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollDashboard />
        </Suspense>
      } />
      <Route path="/meelypayroll/employees" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollEmployees />
        </Suspense>
      } />
      <Route path="/meelypayroll/contractors" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollContractors />
        </Suspense>
      } />
      <Route path="/meelypayroll/salaries" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollSalaries />
        </Suspense>
      } />
      <Route path="/meelypayroll/benefits" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollBenefits />
        </Suspense>
      } />
      <Route path="/meelypayroll/time" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollTime />
        </Suspense>
      } />
      <Route path="/meelypayroll/tax" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollTax />
        </Suspense>
      } />
      <Route path="/meelypayroll/compliance" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollCompliance />
        </Suspense>
      } />
      <Route path="/meelypayroll/alerts" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyPayrollAlerts />
        </Suspense>
      } />
      <Route path="/meelytrade/dashboard" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeDashboard />
        </Suspense>
      } />
      <Route path="/meelytrade/stocks" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeStocks />
        </Suspense>
      } />
      <Route path="/meelytrade/stocks/:symbol" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeStockDetail />
        </Suspense>
      } />
      <Route path="/meelytrade/crypto" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeCrypto />
        </Suspense>
      } />
      <Route path="/meelytrade/watchlists" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeWatchlists />
        </Suspense>
      } />
      <Route path="/meelytrade/holdings" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeHoldings />
        </Suspense>
      } />
      <Route path="/meelytrade/news" element={
        <Suspense fallback={<div>Loading...</div>}>
          <MeelyTradeNews />
        </Suspense>
      } />
      <Route path="/showcase" element={
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentShowcase />
        </Suspense>
      } />
      <Route path="*" element={
        <Suspense fallback={<div>Loading...</div>}>
          <NotFound />
        </Suspense>
      } />
    </Routes>
  );
};
