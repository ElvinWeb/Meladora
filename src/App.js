import { React } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import GardensPage from "./routes/GardensPage";
import ProductsPage from "./routes/ProductsPage";
import ServicesPage from "./routes/ServicesPage";
import ResponsibilityPage from "./routes/ResponsibilityPage";
import ContactPage from "./routes/ContactPage";
import SearchPage from "./routes/SearchPage";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gardens" element={<GardensPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productID" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/responsibility" element={<ResponsibilityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
