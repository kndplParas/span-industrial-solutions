import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { SpanLogo } from './SpanLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="header" role="banner">
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
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
            >
              Services
            </a>
            <a
              href="#video-solutions"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('video-solutions');
              }}
            >
              Video Solutions
            </a>
            <a
              href="#why-span"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('why-span');
              }}
            >
              Why SPAN
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              Contact
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
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              About SPAN
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
            >
              Our 4 Core Services
            </a>
          </li>
          <li>
            <a
              href="#video-solutions"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('video-solutions');
              }}
            >
              Industrial Video Solutions
            </a>
          </li>
          <li>
            <a
              href="#why-span"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('why-span');
              }}
            >
              Why Choose SPAN
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              Contact & Offices
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
