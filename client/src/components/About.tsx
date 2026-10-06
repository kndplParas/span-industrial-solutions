import React from 'react';
import { CheckCircle2, MapPin, Mail, Phone, Building2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    'Engineering Services',
    'Business Outsourcing',
    'Workforce Solutions',
    'Technical Support',
    'Industrial Training',
    'Manufacturing Cost Optimization',
  ];

  return (
    <section id="about" className="section section-alt" aria-label="About SPAN Industrial Solutions">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Corporate Profile</span>
          <h2 className="section-title">About SPAN Industrial Solutions</h2>
          <p className="section-subtitle">
            Founded in 2021 as an ISO 9001:2015 certified organization committed to driving operational
            excellence, technical enablement, and meaningful balance across industrial ecosystems.
          </p>
        </div>

        <div className="about-grid">
          {/* Company Story & Positioning */}
          <div className="about-story">
            <h3>Bridging Industrial Expertise & Operational Needs</h3>
            <p>
              SPAN Industrial Solutions Pvt Ltd was established with a clear mandate: to make engineering
              services an engaging, innovative, and outcome-oriented domain. We combine strategic business
              outsourcing, operational consulting, and technical mentorship to support both seasoned manufacturing
              enterprises and emerging professionals seeking essential industrial exposure.
            </p>
            <p>
              As an ISO 9001:2015 certified company, we hold ourselves to rigorous quality benchmarks. Our
              methodology focuses on zero-capex interventions, practical shop-floor diagnostics, and
              customized workforce alignments that translate directly into reduced operational friction and
              enhanced productivity.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#0b2545', marginBottom: '0.75rem' }}>
                Core Focus Verticals:
              </h4>
              <div className="about-pillars-grid">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="pillar-item">
                    <CheckCircle2 size={16} className="pillar-check" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '2rem',
                padding: '1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <ShieldCheck size={28} color="#0b2545" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: '#334155' }}>
                <strong style={{ color: '#0b2545', display: 'block' }}>ISO 9001:2015 Certified Standards</strong>
                Every engagement follows systematic protocols, transparent documentation, and verified milestones.
              </div>
            </div>
          </div>

          {/* Physical Presence & Contact Data from PDF */}
          <div className="offices-wrap">
            <h3 style={{ fontSize: '1.25rem', color: '#0b2545', marginBottom: '0.5rem' }}>
              Office Locations & Connectivity
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
              Strategically positioned in northern manufacturing and commercial hubs to support our industrial clients:
            </p>

            {/* Uttarakhand Office Card */}
            <div className="office-card">
              <div className="office-card-header">
                <Building2 size={20} color="#0b2545" />
                <div className="office-card-title">Uttarakhand Office</div>
              </div>
              <p className="office-address">
                C5 Rampur Road, Preet Vihar, Rudrapur, US Nagar, Uttarakhand - 263153
              </p>
              <div className="office-contact-row">
                <div className="contact-line">
                  <MapPin size={14} color="#64748b" />
                  <span>Rudrapur Industrial Corridor</span>
                </div>
              </div>
            </div>

            {/* NCR Office Card */}
            <div className="office-card">
              <div className="office-card-header">
                <Building2 size={20} color="#0b2545" />
                <div className="office-card-title">NCR Office</div>
              </div>
              <p className="office-address">
                2nd Floor, Unit No-E-90, Sector-07, Noida, Uttar Pradesh - 201301
              </p>
              <div className="office-contact-row">
                <div className="contact-line">
                  <MapPin size={14} color="#64748b" />
                  <span>Noida Industrial Area, Delhi NCR</span>
                </div>
              </div>
            </div>

            {/* Unified Direct Touchpoints */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0b2545', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Direct Inquiries
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="#c5221f" />
                  <a href="mailto:sales@spansol.com" style={{ color: '#0b2545', fontWeight: 600 }}>
                    sales@spansol.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="#c5221f" />
                  <span style={{ color: '#334155' }}>
                    0120-4484500 &bull; 9045085537 &bull; 8449368000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
