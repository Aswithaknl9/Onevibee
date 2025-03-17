import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Bar/Navbar";
import Footer from "./Bar/Footer";
import Home from "./Pages/Home";
import background from "./assets/background.png";
import Products from "./Pages/Products";
import Referrals from "./Pages/Referrals";
import Contact from "./Pages/Contact";

const App = () => {
  useEffect(() => {
    document.title = "Onevibe Group"; 

    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.href = "/favicon.ico"; 
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat overflow-auto"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
