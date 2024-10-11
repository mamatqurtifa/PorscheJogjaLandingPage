// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavbarSection from './NavbarSection';
import Client from './Client';
import About from './About';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Hero from './Hero';
import ProductList from './ProductList';


export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavbarSection className={scrolled ? 'shadow-md' : ''} />
      <Hero />
      <Client />
      <About />
      <ProductList />
      <ContactSection />
      <Footer />
    </div>
  );
}
