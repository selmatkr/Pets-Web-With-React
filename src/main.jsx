import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "../component/about/about.jsx";
import Header from "../component/header/header.jsx";
import Donation from "../component/donation/donation.jsx";
import Sterilization from "../component/sterilization/sterilization.jsx";
import Blog from "../component/blog/blogs.jsx";
import Contact from "../component/contact/contact.jsx";
import DonationSystem from "../component/donationsystem/donationSystem.jsx";
import Payment from "../component/payment/payment.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sterilization" element={<Sterilization/>} />
      <Route path="/donationsystem" element={<DonationSystem />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </BrowserRouter>
);
