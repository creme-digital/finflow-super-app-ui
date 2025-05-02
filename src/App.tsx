
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import Transfers from "./pages/Transfers";
import Expenses from "./pages/Expenses";
import Accounting from "./pages/Accounting";
import Payroll from "./pages/Payroll";
import Tax from "./pages/Tax";
import Payments from "./pages/Payments";
import Crypto from "./pages/Crypto";
import Rewards from "./pages/Rewards";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
