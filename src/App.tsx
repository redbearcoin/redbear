import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LocaleProvider } from "@/i18n";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import HowToBuy from "./pages/HowToBuy";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pages = [
  { path: "", element: <Index /> },
  { path: "about", element: <About /> },
  { path: "tokenomics", element: <Tokenomics /> },
  { path: "how-to-buy", element: <HowToBuy /> },
  { path: "community", element: <Community /> },
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LocaleProvider>
            <ScrollToTop />
            <Routes>
              {/* Default (en) routes */}
              <Route element={<Layout />}>
                {pages.map((p) => (
                  <Route
                    key={p.path}
                    path={p.path === "" ? "/" : `/${p.path}`}
                    element={p.element}
                  />
                ))}
              </Route>

              {/* Locale-prefixed routes (e.g. /ja/about, /zh-cn/tokenomics) */}
              <Route path="/:lang" element={<Layout />}>
                {pages.map((p) => (
                  <Route
                    key={`lang-${p.path}`}
                    index={p.path === ""}
                    path={p.path || undefined}
                    element={p.element}
                  />
                ))}
              </Route>

              {/* Two-part locales like pt-pt, zh-cn, zh-tw */}
              <Route path="/:langA-:langB" element={<Layout />}>
                {pages.map((p) => (
                  <Route
                    key={`lang2-${p.path}`}
                    index={p.path === ""}
                    path={p.path || undefined}
                    element={p.element}
                  />
                ))}
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </LocaleProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
