import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Overview from './pages/Overview';
import Accounts from './pages/Accounts';
import Cards from './pages/Cards';
import Transfers from './pages/Transfers';
import MeelyPay from './pages/MeelyPay';
import Expenses from './pages/Expenses';
import Accounting from './pages/Accounting';
import Transactions from './pages/Transactions';
import Payroll from './pages/Payroll';
import Tax from './pages/Tax';
import Crypto from './pages/Crypto';
import Rewards from './pages/Rewards';
import Integrations from './pages/Integrations';
import Insurance from './pages/Insurance';
import TradingDashboard from './pages/TradingDashboard';
import MerchantAccount from './pages/MerchantAccount';
import Subscriptions from './pages/Subscriptions';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

// Keep existing sub-pages for backward compatibility
import Bookkeeping from './pages/bookkeeping';
import Invoicing from './pages/invoicing';
import Reports from './pages/reports';
import InvoiceCreate from './pages/invoice-create';
import CryptoTrade from './pages/crypto-trade';
import CoinDetail from './pages/crypto/[symbol]';
import AccountingDashboard from './pages/accounting-dashboard';
import ComponentShowcase from './pages/ComponentShowcase';
import Customers from './pages/customers';
import Holdings from './pages/crypto/holdings';

// MeelyPay routes
import MeelyPayDashboard from './pages/meelypay/Dashboard';
import MeelyPayCurrency from './pages/meelypay/Currency';
import MeelyPayTransactions from './pages/meelypay/Transactions';
import MeelyPayProcessing from './pages/meelypay/Processing';
import MeelyPayPayments from './pages/meelypay/Payments';
import MeelyPayInvoices from './pages/meelypay/Invoices';
import MeelyPayPayouts from './pages/meelypay/Payouts';
import MeelyPayCheckout from './pages/meelypay/Checkout';
import MeelyPayDisputes from './pages/meelypay/Disputes';
import MeelyPayDevelopers from './pages/meelypay/Developers';
import MeelyPayIntegrations from './pages/meelypay/Integrations';

// MeelyTrade routes
import MeelyTradeDashboard from './pages/meelytrade/Dashboard';
import MeelyTradeHoldings from './pages/meelytrade/Holdings';
import MeelyTradeStocks from './pages/meelytrade/Stocks';
import MeelyTradeCrypto from './pages/meelytrade/Crypto';
import MeelyTradeWatchlists from './pages/meelytrade/Watchlists';
import MeelyTradeNews from './pages/meelytrade/News';

// MeelyPayroll routes
import MeelyPayrollDashboard from './pages/meelypayroll/Dashboard';
import MeelyPayrollSalaries from './pages/meelypayroll/Salaries';
import MeelyPayrollTax from './pages/meelypayroll/Tax';
import MeelyPayrollEmployees from './pages/meelypayroll/Employees';
import MeelyPayrollTime from './pages/meelypayroll/Time';
import MeelyPayrollBenefits from './pages/meelypayroll/Benefits';
import MeelyPayrollContractors from './pages/meelypayroll/Contractors';
import MeelyPayrollCompliance from './pages/meelypayroll/Compliance';
import MeelyPayrollAlerts from './pages/meelypayroll/Alerts';

export const AppRoutes = () => (
  <Routes>
    {/* Main navigation routes */}
    <Route path="/" element={<Index />} />
    <Route path="/overview" element={<Overview />} />
    <Route path="/accounts" element={<Accounts />} />
    <Route path="/cards" element={<Cards />} />
    <Route path="/transfers" element={<Transfers />} />
    <Route path="/meely-pay" element={<MeelyPay />} />
    <Route path="/expenses" element={<Expenses />} />
    <Route path="/accounting" element={<Accounting />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/payroll" element={<Payroll />} />
    <Route path="/tax" element={<Tax />} />
    <Route path="/crypto" element={<Crypto />} />
    <Route path="/rewards" element={<Rewards />} />
    <Route path="/integrations" element={<Integrations />} />
    <Route path="/insurance" element={<Insurance />} />
    <Route path="/trading-dashboard" element={<TradingDashboard />} />
    <Route path="/merchant-account" element={<MerchantAccount />} />
    <Route path="/subscriptions" element={<Subscriptions />} />
    <Route path="/settings" element={<Settings />} />

    {/* Keep existing sub-pages for backward compatibility */}
    <Route path="/bookkeeping" element={<Bookkeeping />} />
    <Route path="/invoicing" element={<Invoicing />} />
    <Route path="/invoice-create" element={<InvoiceCreate />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/crypto/trade" element={<CryptoTrade />} />
    <Route path="/crypto/trade/:symbol" element={<CoinDetail />} />
    <Route path="/crypto/holdings" element={<Holdings />} />
    <Route path="/accounting-dashboard" element={<AccountingDashboard />} />
    <Route path="/_components" element={<ComponentShowcase />} />
    <Route path="/customers" element={<Customers />} />

    {/* MeelyPay routes */}
    <Route path="/meelypay" element={<MeelyPayDashboard />} />
    <Route path="/meelypay/currency" element={<MeelyPayCurrency />} />
    <Route path="/meelypay/transactions" element={<MeelyPayTransactions />} />
    <Route path="/meelypay/processing" element={<MeelyPayProcessing />} />
    <Route path="/meelypay/payments" element={<MeelyPayPayments />} />
    <Route path="/meelypay/invoices" element={<MeelyPayInvoices />} />
    <Route path="/meelypay/payouts" element={<MeelyPayPayouts />} />
    <Route path="/meelypay/checkout" element={<MeelyPayCheckout />} />
    <Route path="/meelypay/disputes" element={<MeelyPayDisputes />} />
    <Route path="/meelypay/developers" element={<MeelyPayDevelopers />} />
    <Route path="/meelypay/integrations" element={<MeelyPayIntegrations />} />

    {/* MeelyTrade routes */}
    <Route path="/meelytrade" element={<MeelyTradeDashboard />} />
    <Route path="/meelytrade/holdings" element={<MeelyTradeHoldings />} />
    <Route path="/meelytrade/stocks" element={<MeelyTradeStocks />} />
    <Route path="/meelytrade/crypto" element={<MeelyTradeCrypto />} />
    <Route path="/meelytrade/watchlists" element={<MeelyTradeWatchlists />} />
    <Route path="/meelytrade/news" element={<MeelyTradeNews />} />

    {/* MeelyPayroll routes */}
    <Route path="/meelypayroll" element={<MeelyPayrollDashboard />} />
    <Route path="/meelypayroll/salaries" element={<MeelyPayrollSalaries />} />
    <Route path="/meelypayroll/tax" element={<MeelyPayrollTax />} />
    <Route path="/meelypayroll/employees" element={<MeelyPayrollEmployees />} />
    <Route path="/meelypayroll/time" element={<MeelyPayrollTime />} />
    <Route path="/meelypayroll/benefits" element={<MeelyPayrollBenefits />} />
    <Route path="/meelypayroll/contractors" element={<MeelyPayrollContractors />} />
    <Route path="/meelypayroll/compliance" element={<MeelyPayrollCompliance />} />
    <Route path="/meelypayroll/alerts" element={<MeelyPayrollAlerts />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
