import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutComponent } from "./components/LayoutComponent";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { PortfolioPage } from "./pages/portfolio/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route index element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
