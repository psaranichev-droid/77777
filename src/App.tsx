import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ShowroomPage } from "./pages/ShowroomPage";
import DesignPaperPage from "./pages/DesignPaperPage";
import CatalogPage from "./pages/CatalogPage";
import CustomCuttingPage from "./pages/CustomCuttingPage";
import ProductPage from "./pages/ProductPage";
import { CartDrawer } from "./components/CartDrawer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/showroom" element={<ShowroomPage />} />
              <Route path="/design-paper" element={<DesignPaperPage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/custom-cutting" element={<CustomCuttingPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Ensure default export compatibility if needed, though usually named is fine if index.tsx uses named import.
// Let's check main.tsx later if it fails.
export default App;
