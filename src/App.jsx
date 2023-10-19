import React from 'react';
import './App.module.css';
import RootLayout from './RootLayout';
import { Header } from './CommonComponents/Header/Header';
import { Footer } from './CommonComponents/Footer/Footer';
import About from './About/about';
import Contact from './Contact/contact';
import Home from './Home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </RootLayout>
      <Footer />
    </BrowserRouter>
  );
};
