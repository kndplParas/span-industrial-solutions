import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { SpanLogo } from './SpanLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  React.useEffect(() => {
    const handleScroll = () => {
      // 1. Header elevation blur state
      setIsScrolled(window.scrollY > 15);

      // 2. Scrollspy active section detection
      const scrollPos = window.scrollY + 100;
      const sections = [
        { id: 'home', target: 'home' },
        { id: 'about', target: 'about' },
        { id: 'services', target: 'services' },
        { id: 'video-solutions', target: 'services' }, // Map to services vertical
        { id: 'why-span', target: 'why-span' },
        { id: 'contact', target: 'contact' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header-inner">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="header-brand"
            aria-label="SPAN Industrial Solutions Home"
          >
            <SpanLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              aria-current={activeSection === 'home' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              About
            </a>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              aria-current={activeSection === 'services' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
            >
              Services
            </a>
            <a
              href="#why-span"
              className={`nav-link ${activeSection === 'why-span' ? 'active' : ''}`}
              aria-current={activeSection === 'why-span' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('why-span');
              }}
            >
              Why SPAN
            </a>
          </nav>

          {/* Action CTA */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-primary btn-sm header-cta"
              onClick={() => scrollTo('contact')}
            >
              <PhoneCall size={15} />
              <span>Contact SPAN</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-list">
          <li>
            <a
              href="#home"
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
            >
              <span>Home</span>
              {activeSection === 'home' && <span className="mobile-nav-dot" />}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              <span>About SPAN</span>
              {activeSection === 'about' && <span className="mobile-nav-dot" />}
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
            >
              <span>Our Services</span>
              {activeSection === 'services' && <span className="mobile-nav-dot" />}
            </a>
          </li>
          <li>
            <a
              href="#why-span"
              className={`mobile-nav-link ${activeSection === 'why-span' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo('why-span');
              }}
            >
              <span>Why Choose SPAN</span>
              {activeSection === 'why-span' && <span className="mobile-nav-dot" />}
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={() => scrollTo('contact')}
        >
          <PhoneCall size={16} />
          <span>Inquire Now</span>
        </button>
      </div>
    </header>
  );
};
