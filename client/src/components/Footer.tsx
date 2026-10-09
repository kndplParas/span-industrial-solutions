import React, { useState } from 'react';
import { SpanLogo } from './SpanLogo';
import { Mail, Phone, Lock, ShieldCheck, ArrowRight } from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';
import { NDAModal } from './NDAModal';

interface FooterProps {
  onSelectService: (serviceType: InquiryServiceType) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [isNdaModalOpen, setIsNdaModalOpen] = useState(false);

  const handleScrollToContact = () => {
    const elem = document.getElementById('contact');
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
    <>
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
                Self-Paced Learning through industrial visual solutions for manufacturing and corporate organizations.
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
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService('Self-Paced Learning & Video Solutions');
                    }}
                  >
                    Self-Paced Learning & Video Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: NDA & Confidentiality (Interactive Card & Dialog Trigger) */}
            <div>
              <h4 className="footer-col-title">Client Confidentiality</h4>
              <div
                className="footer-nda-card"
                onClick={() => setIsNdaModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsNdaModalOpen(true);
                  }
                }}
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '12px',
                }}
              >
                {/* Image Thumbnail with Badge */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    marginBottom: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <img
                    src="/nda-confidentiality.jpg"
                    alt="Mutual NDA & Non-Disclosure Agreement"
                    style={{
                      width: '100%',
                      height: '95px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '6px',
                      left: '6px',
                      backgroundColor: 'rgba(11, 37, 69, 0.92)',
                      backdropFilter: 'blur(4px)',
                      color: '#f87171',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Lock size={10} />
                    <span>Mutual NDA</span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>IP & Data Protection</span>
                  <ShieldCheck size={14} color="#38bdf8" />
                </div>
                <p style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.4, margin: '0 0 8px 0' }}>
                  Every plant audit, drawing review & staffing engagement is bound by our bilateral NDA.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.74rem',
                    color: '#f87171',
                    fontWeight: 600,
                  }}
                >
                  <span>View NDA Protocols</span>
                  <ArrowRight size={12} />
                </div>
              </div>
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

              <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <Mail size={13} color="#f87171" style={{ flexShrink: 0 }} />
                  <a href="mailto:sales@spansol.com" style={{ color: '#cbd5e1', wordBreak: 'break-all' }}>sales@spansol.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <Phone size={13} color="#f87171" style={{ flexShrink: 0 }} />
                  <div style={{ color: '#cbd5e1', display: 'flex', flexWrap: 'wrap', gap: '4px 6px' }}>
                    <a href="tel:01204484500" style={{ color: '#cbd5e1', textDecoration: 'none' }}>0120-4484500</a>
                    <span>&bull;</span>
                    <a href="tel:+919045085537" style={{ color: '#cbd5e1', textDecoration: 'none' }}>9045085537</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div>
              &copy; {CURRENT_YEAR} SPAN Industrial Solutions Pvt Ltd. All rights reserved.
            </div>
            <div>
              Corporate Registration: Founded 2021 &bull; ISO 9001:2015 Certified
            </div>
          </div>
        </div>
      </footer>

      {/* NDA Interactive Details Modal */}
      <NDAModal
        isOpen={isNdaModalOpen}
        onClose={() => setIsNdaModalOpen(false)}
        onRequestNDA={() => {
          setIsNdaModalOpen(false);
          handleScrollToContact();
        }}
      />
    </>
  );
};
