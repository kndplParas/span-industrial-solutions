import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ChevronRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { SpanLogo } from './SpanLogo';

interface NavItem {
  id: string;
  label: string;
  desc?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', desc: 'Overview & Capabilities' },
  { id: 'about', label: 'About', desc: 'Company Profile & Leadership' },
  { id: 'services', label: 'Services', desc: '4 Core Industrial Verticals' },
  { id: 'why-span', label: 'Why SPAN', desc: 'Client Benefits & Track Record' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = ['home', 'about', 'services', 'why-span'];
      const scrollPosition = window.scrollY + 130;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 86;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      role="banner"
    >
      <div className="container header-container">
        <div className="header-inner">
          {/* Brand Logo & Corporate Identity */}
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

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  <span className="nav-indicator" aria-hidden="true" />
                </a>
              );
            })}
          </nav>

          {/* Action Area: Primary CTA & Mobile Toggle */}
          <div className="header-actions">
            <button
              type="button"
              className="header-cta-btn"
              onClick={() => scrollTo('contact')}
              aria-label="Contact SPAN Industrial Solutions"
            >
              <PhoneCall size={14} className="header-cta-icon" aria-hidden="true" />
              <span>Contact SPAN</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-title">Navigation Menu</div>
            <div className="mobile-drawer-iso">
              <ShieldCheck size={13} color="#16a34a" />
              <span>ISO 9001:2015</span>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <div className="mobile-nav-text">
                      <span className="mobile-nav-label">{item.label}</span>
                      {item.desc && (
                        <span className="mobile-nav-sub">{item.desc}</span>
                      )}
                    </div>
                    <ChevronRight size={16} className="mobile-nav-arrow" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-actions">
            <button
              type="button"
              className="mobile-drawer-cta"
              onClick={() => scrollTo('contact')}
            >
              <PhoneCall size={15} />
              <span>Inquire & Contact SPAN</span>
            </button>

            {/* Quick Contact Info Strip */}
            <div className="mobile-contact-strip">
              <a href="tel:01204484500" className="mobile-contact-strip-item">
                <Phone size={13} />
                <span>0120-4484500</span>
              </a>
              <span className="mobile-contact-sep">•</span>
              <a href="mailto:sales@spansol.com" className="mobile-contact-strip-item">
                <Mail size={13} />
                <span>sales@spansol.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

