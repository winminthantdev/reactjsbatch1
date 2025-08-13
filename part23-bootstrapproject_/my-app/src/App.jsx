import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CustomerPage from "./pages/CustomerPage";
import FurniturePage from "./pages/FurniturePage";
import PropertyPage from "./pages/PropertyPage";
import ServicePage from "./pages/ServicePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/properties" element={<PropertyPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/furnitures" element={<FurniturePage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
