import React from 'react';
import {
  Factory,
  Wrench,
  UserCheck,
  Users,
  TrendingDown,
  GraduationCap,
  Video,
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
} from 'lucide-react';

export const WhySpan: React.FC = () => {
  // Primary Strategic Pillars (Tier 1: High-Level Differentiators)
  const primaryPillars = [
    {
      id: 'industrial-focus',
      code: 'PILLAR // 01',
      category: 'OPERATIONAL DNA',
      title: 'Dedicated Industrial Focus',
      desc: 'Our operations, methodologies, and offerings are built exclusively around the genuine requirements of manufacturing and engineering plants.',
      icon: <Factory size={26} />,
      highlights: [
        'Exclusively manufacturing & plant-centric',
        'Direct shop-floor domain alignment',
        'No generic corporate theory',
      ],
      featured: false,
    },
    {
      id: 'zero-capex',
      code: 'PILLAR // 02',
      category: 'MAXIMUM CLIENT ROI',
      badge: 'CORE VALUE PROPOSITION',
      title: 'Practical Zero-Capex Solutions',
      desc: 'Cost-saving tools and process optimizations are designed to generate measurable returns without requiring capital expenditure on new machinery.',
      icon: <Wrench size={26} />,
      highlights: [
        'Unlocks hidden capacity in existing assets',
        'Direct bottom-line waste reduction',
        'Fast payback with zero new equipment buy-in',
      ],
      featured: true,
    },
    {
      id: 'seasoned-veterans',
      code: 'PILLAR // 03',
      category: 'PRACTITIONER-LED',
      title: 'Experienced Industry Professionals',
      desc: 'Our training modules and advisory interventions are led by seasoned veterans who bring decades of real shop-floor problem solving.',
      icon: <UserCheck size={26} />,
      highlights: [
        'Led by veteran plant & quality directors',
        'Real-world diagnostic troubleshooting',
        'Hands-on implementation on your shop floor',
      ],
      featured: false,
    },
  ];

  // Integrated Execution Capabilities (Tier 2: Specialized Functional Delivery)
  const functionalCapabilities = [
    {
      code: 'VERT // 01',
      title: 'Comprehensive Workforce Support',
      tag: 'Staffing & Technical Deployment',
      desc: 'From technical candidate screening to precise job matching, we draw upon proven staffing modes to provide reliable manpower solutions.',
      icon: <Users size={20} />,
      deliverables: 'Candidate Screening · Engineering Sourcing · Manpower Alignment',
    },
    {
      code: 'VERT // 02',
      title: 'Structured Cost Reduction (GET SHRINK)',
      tag: 'Guaranteed Savings Program',
      desc: 'Systematic targeting of hidden operational wastes across raw materials, power, manpower, overheads, and quality costs.',
      icon: <TrendingDown size={20} />,
      deliverables: 'Raw Materials · Power Consumption · Overheads · Quality Loss',
    },
    {
      code: 'VERT // 03',
      title: 'Practical Shop-Floor Training',
      tag: 'Internal Capability Building',
      desc: 'Hands-on curriculum spanning Kaizen, 5S, 7QC Tools, GD&T, and APQP to institutionalize discipline within internal engineering teams.',
      icon: <GraduationCap size={20} />,
      deliverables: 'Kaizen · 5S · 7QC Tools · GD&T · APQP Modules',
    },
    {
      code: 'VERT // 04',
      title: 'Technical Visual Communication',
      tag: 'Clarity & Standardization',
      desc: 'Bridging the clarity gap by translating intricate plant procedures and safety directives into clear, professional corporate and industrial videos.',
      icon: <Video size={20} />,
      deliverables: 'SOP Modules · Plant Walkthroughs · Safety Guidelines',
    },
  ];

  return (
    <section id="why-span" className="why-span-section" aria-label="Why Partner with SPAN">
      <div className="container">
        {/* SECTION INTRO */}
        <div className="why-span-header">
          <div className="why-span-eyebrow">
            <ShieldCheck size={14} className="eyebrow-icon" />
            <span>THE SPAN PARTNERSHIP ADVANTAGE</span>
          </div>

          <h2 className="why-span-title">
            Why Partner with <span className="title-highlight">SPAN</span>
          </h2>

          <p className="why-span-subtitle">
            By integrating workforce management, manufacturing cost optimization, technical training,
            and visual industrial communication under one ISO 9001:2015 certified partner, we provide
            cohesive support for long-term operational success.
          </p>

          {/* Trust Anchor Bar */}
          <div className="why-span-trust-bar">
            <div className="trust-anchor-item">
              <Award size={16} className="trust-anchor-icon" />
              <span>ISO 9001:2015 Certified Organization</span>
            </div>
            <div className="trust-anchor-sep" aria-hidden="true" />
            <div className="trust-anchor-item">
              <Zap size={16} className="trust-anchor-icon" />
              <span>Zero-Capex Operational Methodology</span>
            </div>
            <div className="trust-anchor-sep" aria-hidden="true" />
            <div className="trust-anchor-item">
              <Factory size={16} className="trust-anchor-icon" />
              <span>Shop-Floor Tested Engineering Solutions</span>
            </div>
          </div>
        </div>

        {/* TIER 1: PRIMARY STRATEGIC PILLARS (3-Column Heroic Cards) */}
        <div className="why-span-tier-label">
          <span className="tier-tag">STRATEGIC DIFFERENTIATORS</span>
          <span className="tier-line" aria-hidden="true" />
        </div>

        <div className="why-pillars-grid">
          {primaryPillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`why-pillar-card ${pillar.featured ? 'is-featured' : ''}`}
            >
              {/* Engineering Corner Markers */}
              <span className="corner-bracket top-left" aria-hidden="true" />
              <span className="corner-bracket top-right" aria-hidden="true" />

              <div className="pillar-header">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <div className="pillar-meta">
                  <span className="pillar-code">{pillar.code}</span>
                  <span className="pillar-category">{pillar.category}</span>
                </div>
              </div>

              {pillar.badge && <div className="pillar-featured-badge">{pillar.badge}</div>}

              <h3 className="pillar-title">{pillar.title}</h3>

              <p className="pillar-desc">{pillar.desc}</p>

              <div className="pillar-highlights-list">
                {pillar.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="pillar-highlight-item">
                    <CheckCircle2 size={14} className="highlight-check-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pillar-card-footer">
                <span className="footer-status-pill">
                  <span className="status-dot" aria-hidden="true" />
                  Verified Value Delivery
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TIER 2: INTEGRATED EXECUTION CAPABILITIES (4-Column Balanced Grid) */}
        <div className="why-span-bridge">
          <div className="bridge-header-wrap">
            <span className="tier-tag">INTEGRATED EXECUTION VERTICALS</span>
            <h3 className="bridge-heading">
              Four Interconnected Domains Deployed for Measurable Factory Results
            </h3>
          </div>
          <span className="tier-line" aria-hidden="true" />
        </div>

        <div className="why-capabilities-grid">
          {functionalCapabilities.map((item, idx) => (
            <div key={idx} className="why-cap-card">
              <div className="cap-card-top">
                <div className="cap-icon-box">{item.icon}</div>
                <span className="cap-code">{item.code}</span>
              </div>

              <span className="cap-tag">{item.tag}</span>

              <h4 className="cap-title">{item.title}</h4>

              <p className="cap-desc">{item.desc}</p>

              <div className="cap-deliverable-wrap">
                <span className="deliverable-label">Key Focus:</span>
                <span className="deliverable-text">{item.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
