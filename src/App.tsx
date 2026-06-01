import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChatbotWidget from "./components/ChatbotWidget";
import CustomCursor from "./components/CustomCursor";
import { ScrollToAnchor } from "./components/ScrollToAnchor";

// Eagerly loaded core pages
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AIAutomation from "./pages/services/AIAutomation.tsx";
import AIChatbot from "./pages/services/AIChatbot.tsx";
import Training from "./pages/Training.tsx";
import Contact from "./pages/Contact.tsx";
import PoochesPearlsProsecco from "./pages/events/PoochesPearlsProsecco.tsx";

// Lazily loaded service pages
const WorkflowAutomation = lazy(() => import("./pages/services/WorkflowAutomation.tsx"));
const AIToolsSetup = lazy(() => import("./pages/services/AIToolsSetup.tsx"));

// Lazily loaded location pages
const WestPalmBeach = lazy(() => import("./pages/locations/WestPalmBeach.tsx"));
const BocaRaton = lazy(() => import("./pages/locations/BocaRaton.tsx"));
const DelrayBeach = lazy(() => import("./pages/locations/DelrayBeach.tsx"));
const BoyntonBeach = lazy(() => import("./pages/locations/BoyntonBeach.tsx"));
const Jupiter = lazy(() => import("./pages/locations/Jupiter.tsx"));
const PalmBeachGardens = lazy(() => import("./pages/locations/PalmBeachGardens.tsx"));
const Wellington = lazy(() => import("./pages/locations/Wellington.tsx"));
const LakeWorthBeach = lazy(() => import("./pages/locations/LakeWorthBeach.tsx"));

// Lazily loaded blog pages
const BlogIndex = lazy(() => import("./pages/blog/BlogIndex.tsx"));
const Post1 = lazy(() => import("./pages/blog/Post1WhatCanAIAutomate.tsx"));
const Post2 = lazy(() => import("./pages/blog/Post2AICost.tsx"));
const Post3 = lazy(() => import("./pages/blog/Post3AIvsHiring.tsx"));
const Post4 = lazy(() => import("./pages/blog/Post4MakeComWorkflows.tsx"));
const Post5 = lazy(() => import("./pages/blog/Post5WhyAIFails.tsx"));

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
        <Suspense fallback={<div style={{ background: "#0D0D0D", minHeight: "100vh" }} />}>
          <Routes>
            {/* Core */}
            <Route path="/" element={<Index />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />

            {/* Services */}
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/ai-chatbot" element={<AIChatbot />} />
            <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
            <Route path="/services/ai-tools-setup" element={<AIToolsSetup />} />
            <Route path="/services/custom-software" element={<Navigate to="/services/ai-automation" replace />} />
            <Route path="/services/mobile-apps" element={<Navigate to="/services/ai-automation" replace />} />
            <Route path="/services/web-design" element={<Navigate to="/" replace />} />
            <Route path="/apps" element={<Navigate to="/services/ai-automation#featured-apps" replace />} />

            {/* Training & Contact */}
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />

            {/* Events */}
            <Route path="/events/pooches-pearls-prosecco" element={<PoochesPearlsProsecco />} />

            {/* Location pages */}
            <Route path="/locations/west-palm-beach" element={<WestPalmBeach />} />
            <Route path="/locations/boca-raton" element={<BocaRaton />} />
            <Route path="/locations/delray-beach" element={<DelrayBeach />} />
            <Route path="/locations/boynton-beach" element={<BoyntonBeach />} />
            <Route path="/locations/jupiter" element={<Jupiter />} />
            <Route path="/locations/palm-beach-gardens" element={<PalmBeachGardens />} />
            <Route path="/locations/wellington" element={<Wellington />} />
            <Route path="/locations/lake-worth-beach" element={<LakeWorthBeach />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/what-can-ai-automate-small-business" element={<Post1 />} />
            <Route path="/blog/ai-automation-cost-palm-beach-county" element={<Post2 />} />
            <Route path="/blog/ai-automation-vs-hiring-admin" element={<Post3 />} />
            <Route path="/blog/make-com-workflows-palm-beach-small-business" element={<Post4 />} />
            <Route path="/blog/why-ai-automation-fails-small-business" element={<Post5 />} />

            {/* Catch-all — redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <ChatbotWidget />
        <CustomCursor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
