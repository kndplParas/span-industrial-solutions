import React from 'react';
import { SpanLogo } from './SpanLogo';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';

interface FooterProps {
  onSelectService: (serviceType: InquiryServiceType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollTo = (id: string) => {
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

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* 1. TOP CONTACT STRIP */}
        <div className="footer-top-strip">
          <div className="footer-top-content">
            <h3 className="footer-top-headline">
              READY TO DISCUSS YOUR INDUSTRIAL REQUIREMENTS?
            </h3>
            <p className="footer-top-subline">
              Workforce support, cost optimization, industrial training and visual communication.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="footer-top-cta-btn"
          >
            <span>CONTACT SPAN</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER */}
        <div className="footer-main-grid">
          {/* COLUMN 1 — BRAND */}
          <div className="footer-col-brand">
            <div className="footer-brand-logo">
              <SpanLogo variant="light" size={46} showCorporateName={true} showSubtitle={false} />
            </div>

            <div className="footer-brand-cert">
              <ShieldCheck size={14} className="cert-check-icon" />
              <span>ISO 9001:2015 CERTIFIED COMPANY</span>
            </div>

            <p className="footer-brand-desc">
              SPAN Industrial Solutions Pvt Ltd delivers targeted workforce management,
              manufacturing cost optimization (GET SHRINK), specialized engineering training, and
              industrial video solutions for manufacturing and corporate organizations.
            </p>
          </div>

          {/* COLUMN 2 — OUR VERTICALS */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">OUR VERTICALS</h4>
            <ul className="footer-link-list">
              <li>
                <a
                  href="#services"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Workforce Management Solutions');
                  }}
                >
                  Workforce Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Guaranteed Saving Program');
                  }}
                >
                  Guaranteed Saving (GET SHRINK)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Experts Training for Industries');
                  }}
                >
                  Industrial Experts Training
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Industrial / Corporate Video Solutions');
                  }}
                >
                  Industrial Video Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — COMPANY */}
          <div className="footer-col-nav">
            <h4 className="footer-col-heading">COMPANY</h4>
            <ul className="footer-link-list">
              <li>
                <a
                  href="#home"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('home');
                  }}
                >
                  Home Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-text-link"
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
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('services');
                  }}
                >
                  Core Services
                </a>
              </li>
              <li>
                <a
                  href="#why-span"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('why-span');
                  }}
                >
                  Why Partner With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-text-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                >
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div className="footer-col-contact">
            <h4 className="footer-col-heading">CONTACT</h4>

            <div className="footer-contact-entry">
              <div className="contact-label-row">
                <MapPin size={14} className="contact-red-icon" />
                <span className="contact-office-title">Uttarakhand Office</span>
              </div>
              <p className="contact-address-text">
                C5 Rampur Road, Preet Vihar, Rudrapur, US Nagar, Uttarakhand - 263153
              </p>
            </div>

            <div className="footer-contact-entry">
              <div className="contact-label-row">
                <MapPin size={14} className="contact-red-icon" />
                <span className="contact-office-title">NCR Office</span>
              </div>
              <p className="contact-address-text">
                2nd Floor, Unit No-E-90, Sector-07, Noida, UP - 201301
              </p>
            </div>

            <div className="footer-direct-lines">
              <div className="direct-comm-row">
                <Mail size={14} className="contact-red-icon" />
                <a href="mailto:sales@spansol.com" className="direct-comm-link">
                  sales@spansol.com
                </a>
              </div>

              <div className="direct-comm-row">
                <Phone size={14} className="contact-red-icon" />
                <div className="direct-phone-group">
                  <a href="tel:01204484500" className="direct-comm-link">0120-4484500</a>
                  <span className="phone-bullet">&bull;</span>
                  <a href="tel:9045085537" className="direct-comm-link">9045085537</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="bottom-bar-left">
            &copy; {new Date().getFullYear()} SPAN Industrial Solutions Pvt Ltd. All rights reserved.
          </div>
          <div className="bottom-bar-right">
            Founded 2021 &bull; ISO 9001:2015 Certified Company
          </div>
        </div>
      </div>
    </footer>
  );
};
