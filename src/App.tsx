import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnalysisProjects from "./pages/AnalysisProjects";
import DataAnalysisManagement from "./pages/DataAnalysisManagement";
import DataVisualization from "./pages/DataVisualization";
import GetInTouch from "./pages/GetInTouch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/analysis-projects" element={<AnalysisProjects />} />
          <Route path="/projects/data-analysis-and-management" element={<DataAnalysisManagement />} />
          <Route path="/projects/data-visualization" element={<DataVisualization />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
