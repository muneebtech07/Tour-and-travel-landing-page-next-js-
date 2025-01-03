import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Packages />
      <Features />
      <Testimonials />
      <Footer />
      <StickyContact />
    </div>
  );
}

export default App;