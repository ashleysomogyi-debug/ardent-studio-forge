import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AIAutomation from "./pages/services/AIAutomation.tsx";
import AIChatbot from "./pages/services/AIChatbot.tsx";

import Training from "./pages/Training.tsx";
import PoochesPearlsProsecco from "./pages/events/PoochesPearlsProsecco.tsx";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChatbotWidget from "./components/ChatbotWidget";
import CustomCursor from "./components/CustomCursor";
import { ScrollToAnchor } from "./components/ScrollToAnchor";

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.length > 1 && location.pathname.endsWith("/")) {
      navigate(location.pathname.slice(0, -1) + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrailingSlashRedirect />
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/ai-chatbot" element={<AIChatbot />} />
          <Route path="/services/custom-software" element={<Navigate to="/apps" replace />} />
          <Route path="/services/mobile-apps" element={<Navigate to="/apps" replace />} />
          <Route path="/services/web-design" element={<Navigate to="/" replace />} />
          <Route path="/apps" element={<Navigate to="/services/ai-automation#featured-apps" replace />} />
          <Route path="/training" element={<Training />} />
          <Route path="/events/pooches-pearls-prosecco" element={<PoochesPearlsProsecco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatbotWidget />
        <CustomCursor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
