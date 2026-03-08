import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
