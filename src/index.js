import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import "react-notifications/lib/notifications.css";
import CookieConsent from "react-cookie-consent";

// Pages
import Home from './Routes/Home/Home.tsx';
import Tour from './Routes/Tour/Tour.tsx';
import About from './Routes/About/About.tsx';
import Contact from './Routes/Contact/Contact.tsx';
import TourDetails from './Routes/Tour/TourDetails.tsx';
import NotFound from './Routes/404.tsx';

import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx';
import BookingForm from './Routes/Booking/BookingForm.tsx';
import BookingConfirm from './Routes/Booking/BookingConfirm.tsx';
import Privacy from './Routes/Privacy/Privacy.tsx';
import Conditions from './Routes/TermsAndConditions/Conditions.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/tour/:id/book" element={<BookingForm />} />
        <Route
          path="/tour/:id/book/success/:date/:number"
          element={<BookingConfirm />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-and-conditions' element={<Conditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="userConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Router>
  </React.StrictMode>
);
