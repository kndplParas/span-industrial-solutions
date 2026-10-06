import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { VideoSolutions } from './components/VideoSolutions';
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
      const offset = 80;
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

        {/* Dedicated Video Solutions Section */}
        <VideoSolutions onDiscussVideo={handleSelectServiceAndScroll} />

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
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#0b2545',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 990,
            transition: 'background-color 150ms ease, transform 150ms ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c5221f';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0b2545';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;
