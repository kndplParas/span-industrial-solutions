import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhySpan } from './components/WhySpan';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { InquiryServiceType } from './types/inquiry';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<InquiryServiceType>(
    'Workforce Management Solutions'
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 86;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceAndScroll = (serviceType: InquiryServiceType) => {
    setSelectedService(serviceType);
    scrollToSection('contact');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-root">
      {/* Header & Navigation */}
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onContact={() => scrollToSection('contact')}
        />

        {/* About Section */}
        <About />

        {/* Services Section (4 Core Verticals) */}
        <Services onSelectService={handleSelectServiceAndScroll} />

        {/* Why SPAN Section */}
        <WhySpan />

        {/* Contact Section & Working Form */}
        <Contact selectedServicePreload={selectedService} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectServiceAndScroll} />

      {/* Scroll to top floating button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="back-to-top-btn"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;
