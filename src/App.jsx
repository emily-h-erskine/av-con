import React from 'react';
import './App.module.css';
import RootLayout from './RootLayout';
import { Header } from './CommonComponents/Header/Header';
import { Footer } from './CommonComponents/Footer/Footer';
import About from './About/about';
import Contact from './Contact/contact';
import Home from './Home/home';
import Event from './Event/event';
import Register from './Register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventSchedule from "./EventSchedule/eventSchedule";
import FlightSim from "./FlightSim/flightSim";
import News from "./News/newsUpdates";
import SpeakersPresenters from "./SpeakersPresenters/speakersPresenters";
import SponsorsPartners from './SponsorsPartners/sponsorsPartners';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/eventSchedule" element={<EventSchedule />} />
          <Route path="/flightSim" element={<FlightSim />} />
          <Route path="/news" element={<News />} />
          <Route path="/speakersPresenters" element={<SpeakersPresenters />} />
          <Route path="/sponsorsPartners" element={<SponsorsPartners />} />
        </Routes>
      </RootLayout>
      <Footer />
    </BrowserRouter>
  );
};
