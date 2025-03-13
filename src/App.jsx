import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Bar/Navbar";
import Footer from "./Bar/Footer";
import Home from "./Pages/Home";
import background from "./assets/background.png";
import Products from "./Pages/Products";
import Referrals from "./Pages/Referrals";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div
      className="max-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
       
      </Router>
    </div>
  );
};

export default App;
