import React from 'react';
import { SpanLogo } from './SpanLogo';
import { Mail, Phone } from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';

interface FooterProps {
  onSelectService: (serviceType: InquiryServiceType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollTo = (id: string) => {
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
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Profile */}
          <div>
            <SpanLogo variant="light" showSubtitle={false} />
            <div style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="footer-badge">ISO 9001:2015 Certified</span>
            </div>
            <p className="footer-desc">
              SPAN Industrial Solutions Pvt Ltd, founded in 2021, delivers targeted workforce management,
              manufacturing cost optimization (GET SHRINK), specialized engineering training, and
              industrial video solutions for manufacturing and corporate organizations.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="footer-col-title">Our Verticals</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Workforce Management Solutions');
                  }}
                >
                  Workforce Management
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Guaranteed Saving Program');
                  }}
                >
                  Guaranteed Saving (GET SHRINK)
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService('Experts Training for Industries');
                  }}
                >
                  Industrial Experts Training
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#video-solutions"
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

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('home');
                  }}
                >
                  Home Overview
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('about');
                  }}
                >
                  About SPAN
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#video-solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('video-solutions');
                  }}
                >
                  Video Solutions Workflow
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#why-span"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('why-span');
                  }}
                >
                  Why Partner With Us
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices */}
          <div>
            <h4 className="footer-col-title">Office Locations</h4>
            <div className="footer-office-item">
              <strong>Uttarakhand Office:</strong>
              C5 Rampur Road, Preet Vihar, Rudrapur, US Nagar, Uttarakhand - 263153
            </div>
            <div className="footer-office-item">
              <strong>NCR Office:</strong>
              2nd Floor, Unit No-E-90, Sector-07, Noida, UP - 201301
            </div>

            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={13} color="#f87171" />
                <a href="mailto:sales@spansol.com" style={{ color: '#cbd5e1' }}>sales@spansol.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} color="#f87171" />
                <span style={{ color: '#cbd5e1' }}>0120-4484500 &bull; 9045085537</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} SPAN Industrial Solutions Pvt Ltd. All rights reserved.
          </div>
          <div>
            Corporate Registration: Founded 2021 &bull; ISO 9001:2015 Certified
          </div>
        </div>
      </div>
    </footer>
  );
};
