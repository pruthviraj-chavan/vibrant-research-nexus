
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Conferences from "./pages/Conferences";
import AboutUs from "./pages/AboutUs";
import Editorial from "./pages/Editorial";
import SubmitPaper from "./pages/SubmitPaper";
import Archives from "./pages/Archives";
import PaperDetail from "./pages/PaperDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/submit" element={<SubmitPaper />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/paper/:paperId" element={<PaperDetail />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
