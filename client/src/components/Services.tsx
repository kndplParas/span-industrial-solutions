import React, { useState } from 'react';
import {
  Users,
  TrendingDown,
  GraduationCap,
  Video,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';
import { ServiceModal, type ServiceDetail } from './ServiceModal';

interface ServicesProps {
  onSelectService: (serviceType: InquiryServiceType) => void;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'workforce-management',
    serviceType: 'Workforce Management Solutions',
    title: 'Workforce Management Solutions',
    tagline: 'Precision industrial staffing & role-matched candidate recruitment',
    overview:
      'SPAN bridges the gap between industrial employers and qualified candidates. We pick the most suitable personnel to fit the exact operational requirements, qualifications, and experience demanded by plant and corporate positions. Leveraging our established background in US staffing and screening approaches, we deploy innovative evaluation techniques that align candidate competencies with employer expectations.',
    keyBenefits: [
      'Tailored role matching by technical qualifications and experience',
      'Rigorous multi-stage candidate screening methodology',
      'US staffing background bringing best-practice recruitment workflows',
      'Rapid turnaround for plant, technical, and operational vacancies',
    ],
    scopeAndDeliverables: [
      'Industrial Plant Staffing',
      'Technical Screening & Skill Checks',
      'Engineering Role Placement',
      'Operational Workforce Onboarding',
      'US Staffing Standards Alignment',
      'Talent Pipeline Sourcing',
    ],
    specialties: [
      'Customized candidate qualification verification',
      'Structured screening aligned with employer requirements',
      'End-to-end recruitment lifecycle coordination',
    ],
  },
  {
    id: 'guaranteed-saving',
    serviceType: 'Guaranteed Saving Program',
    title: 'Guaranteed Saving Program (GET SHRINK)',
    tagline: '5 Proven tools to reduce manufacturing cost by 20% to 30%',
    overview:
      'The GET SHRINK program focuses on identifying and cutting hidden wastes across manufacturing operations without capital expenditure. By applying five targeted operational tools, SPAN works alongside plant managers to uncover systemic inefficiencies and drive assured cost reductions within committed timeframes.',
    keyBenefits: [
      '20% to 30% manufacturing cost reduction (as stated by company)',
      'Zero Capex involved — optimizing existing equipment and workflows',
      'Assured results delivered within a committed, specific timeframe',
      'Maintenance-focused and process-driven waste reduction',
    ],
    scopeAndDeliverables: [
      'Raw Material Optimization',
      'Manpower Productivity & Allocation',
      'Electricity & Energy Conservation',
      'Overheads Streamlining',
      'Cost of Poor Quality (COPQ) Elimination',
      'Shop-Floor Process Fine-Tuning',
    ],
    specialties: [
      'No Capex Involved',
      'Assured results in specific time frame',
      'Process, operations & maintenance fine-tuning',
      'Uncovering hidden manufacturing wastes',
    ],
  },
  {
    id: 'experts-training',
    serviceType: 'Experts Training for Industries',
    title: 'Experts Training for Industries',
    tagline: 'Managed shop-floor & engineering programs led by industry veterans',
    overview:
      'We manage continuous learning programs for engineering professionals and factory employees, taught directly by leading experts who have spent decades serving across core industries. Because real operational growth comes from practicing proven manufacturing methodologies, our modules focus on tangible shop-floor application rather than mere classroom theory.',
    keyBenefits: [
      'Mentorship by seasoned veterans with decades of hands-on industry experience',
      'Practical engineering drawing and GD&T blueprint interpretation',
      'Proven quality frameworks including Kaizen, 5S, and 7QC tools',
      'Measurable improvement in shop-floor discipline and defect reduction',
    ],
    scopeAndDeliverables: [
      'Kaizen Concept & Continuous Improvement',
      '7QC Tools & Root-Cause Analysis',
      '5S Concept & Workplace Organization',
      'Industrial Drawing Study & Blueprint Reading',
      'GD & T (Geometric Dimensioning & Tolerancing)',
      'Inventory Control & Store Management',
      'Functional Analysis & Planning',
      'Quality Management Systems',
      'Production Management & Line Balancing',
      'APQP (Advanced Product Quality Planning)',
    ],
    specialties: [
      'Direct instruction by seasoned industry experts',
      '10 specialized operational & engineering modules',
      'Applicable across automotive, fabrication, and manufacturing sectors',
    ],
  },
  {
    id: 'video-solutions',
    serviceType: 'Industrial / Corporate Video Solutions',
    title: 'Industrial / Corporate Video Solutions',
    tagline: 'Transform complex industrial operations into engaging visual media',
    overview:
      'Industrial processes, safety compliance protocols, and technical machinery can be difficult to communicate through text or manuals alone. SPAN produces clear, high-impact industrial and corporate visual content that helps companies showcase facilities, educate operators, enforce safety protocols, and communicate value to clients and stakeholders.',
    keyBenefits: [
      'Simplifies complex engineering workflows and plant operations',
      'Standardizes safety compliance through engaging video guidelines',
      'Combines on-site footage, photos, and animated explainer graphics',
      'End-to-end production: from concept and scripting to shooting and final edit',
    ],
    scopeAndDeliverables: [
      'Company Profile Videos',
      'Industrial Videos & Plant Walkthroughs',
      'Safety Videos & Protocol Modules',
      'Safety Guideline Videos for Workers & Visitors',
      'Training & Explainer Videos',
      'Process Explanation Videos',
      'Animated & AI-assisted Explainer Modules',
      'Photo + Video Presentations',
      'On-site Video Shooting & Field Production',
      'Professional Video Editing & Sound Mixing',
    ],
    specialties: [
      'Complete end-to-end video lifecycle execution',
      'Engineered specifically for manufacturing and industrial audiences',
      'High-clarity safety & standard operating procedure (SOP) visuals',
    ],
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="section has-atmosphere" aria-label="SPAN Core Services">
      {/* Background Visual Atmosphere (4-Spectrum Quadrant Glows, Dual Rotating Rings, Floating Bubbles & Particles) */}
      <div className="services-atmosphere" aria-hidden="true">
        <div className="services-radial-glow" />
        <div className="services-quad-glow sq-cyan" />
        <div className="services-quad-glow sq-berry" />
        <div className="services-quad-glow sq-amber" />
        <div className="services-quad-glow sq-sky" />
        <div className="services-ring-1" />
        <div className="services-ring-2" />
        <div className="services-bubble sb-1" />
        <div className="services-bubble sb-2" />
        <div className="services-particle sp-1" />
        <div className="services-particle sp-2" />
        <div className="services-particle sp-3" />
        <div className="services-particle sp-4" />
        <div className="grid-crosshair crosshair-tl">+</div>
        <div className="grid-crosshair crosshair-tr">+</div>
        <div className="grid-crosshair crosshair-bl">+</div>
        <div className="grid-crosshair crosshair-br">+</div>
      </div>

      <div className="container section-content-layer">
        <div className="section-header">
          <span className="section-tag">Four Core Verticals</span>
          <h2 className="section-title">Our Industrial & Business Services</h2>
          <p className="section-subtitle">
            SPAN provides four specialized service offerings designed to optimize manufacturing
            operations, upskill personnel, source top talent, and communicate complex processes visually.
          </p>
        </div>

        <div className="services-grid">
          {/* SERVICE 1: Workforce Management */}
          <div className="service-card">
            <div className="service-card-top">
              <span className="service-card-tag">Vertical 01 &bull; Staffing</span>
              <div className="service-card-icon-wrap">
                <Users size={28} />
              </div>
              <h3 className="service-card-title">Workforce Management Solutions</h3>
              <p className="service-card-desc">
                Matching industrial employers with suitable candidates based on technical qualifications,
                verified experience, and precise job requirements. Built on proven US staffing and
                screening methodologies.
              </p>

              <ul className="service-features-list">
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>Custom employer-candidate requirement alignment</span>
                </li>
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>Rigorous multi-tier screening & qualification checks</span>
                </li>
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>US staffing background with creative hiring modes</span>
                </li>
              </ul>

              <div className="service-pills-row">
                <span className="service-sub-pill">Role Matching</span>
                <span className="service-sub-pill">Technical Staffing</span>
                <span className="service-sub-pill">US Staffing Mode</span>
              </div>
            </div>

            <div className="service-card-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedService(SERVICES_DATA[0])}
              >
                <span>Learn More</span>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onSelectService('Workforce Management Solutions')}
              >
                <span>Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* SERVICE 2: Guaranteed Saving Program */}
          <div className="service-card highlight">
            <div className="service-card-top">
              <span className="service-card-tag" style={{ color: '#c5221f' }}>
                Vertical 02 &bull; GET SHRINK
              </span>
              <div className="service-card-icon-wrap">
                <TrendingDown size={28} />
              </div>
              <h3 className="service-card-title">Guaranteed Saving Program</h3>
              <p className="service-card-desc">
                <strong>GET SHRINK:</strong> 5 Tools to reduce manufacturing costs by 20% to 30% (as stated by
                company). Identifies hidden wastes and optimizes operations with zero capital expenditure.
              </p>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #fecaca',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  marginBottom: '1rem',
                  fontSize: '0.8rem',
                  color: '#991b1b',
                  fontWeight: 600,
                }}
              >
                Specialty: No Capex Involved &bull; Assured results in specific timeframe
              </div>

              <div className="service-pills-row">
                <span className="service-sub-pill">Raw Material</span>
                <span className="service-sub-pill">Manpower</span>
                <span className="service-sub-pill">Electricity</span>
                <span className="service-sub-pill">Overheads</span>
                <span className="service-sub-pill">Cost of Poor Quality</span>
              </div>
            </div>

            <div className="service-card-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedService(SERVICES_DATA[1])}
              >
                <span>Learn More</span>
              </button>
              <button
                type="button"
                className="btn btn-accent btn-sm"
                onClick={() => onSelectService('Guaranteed Saving Program')}
              >
                <span>Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* SERVICE 3: Experts Training for Industries */}
          <div className="service-card">
            <div className="service-card-top">
              <span className="service-card-tag">Vertical 03 &bull; Upskilling</span>
              <div className="service-card-icon-wrap">
                <GraduationCap size={28} />
              </div>
              <h3 className="service-card-title">Experts Training for Industries</h3>
              <p className="service-card-desc">
                Comprehensive training programs for engineering professionals and shop-floor employees,
                mentored directly by industry veterans with decades of hands-on manufacturing expertise.
              </p>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0b2545', textTransform: 'uppercase', marginBottom: '6px' }}>
                  10 Core Training Modules:
                </div>
                <div className="service-pills-row">
                  <span className="service-sub-pill">Kaizen Concept</span>
                  <span className="service-sub-pill">7QC Tools</span>
                  <span className="service-sub-pill">5S Concept</span>
                  <span className="service-sub-pill">Industrial Drawing Study</span>
                  <span className="service-sub-pill">GD & T</span>
                  <span className="service-sub-pill">Inventory Control</span>
                  <span className="service-sub-pill">Functional Analysis</span>
                  <span className="service-sub-pill">Quality Management</span>
                  <span className="service-sub-pill">Production Management</span>
                  <span className="service-sub-pill">APQP</span>
                </div>
              </div>
            </div>

            <div className="service-card-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedService(SERVICES_DATA[2])}
              >
                <span>Learn More</span>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onSelectService('Experts Training for Industries')}
              >
                <span>Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* SERVICE 4: Video Solutions */}
          <div className="service-card">
            <div className="service-card-top">
              <span className="service-card-tag" style={{ color: '#0284c7' }}>
                Vertical 04 &bull; Media & Visuals
              </span>
              <div className="service-card-icon-wrap">
                <Video size={28} />
              </div>
              <h3 className="service-card-title">Industrial / Corporate Video Solutions</h3>
              <p className="service-card-desc">
                Transform complex industrial processes, safety guidelines, and company information into
                clear, professional, and engaging visual content for companies and industrial clients.
              </p>

              <ul className="service-features-list">
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>Industrial plant walkthroughs & company profiles</span>
                </li>
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>Mandatory safety awareness & worker guideline videos</span>
                </li>
                <li className="service-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>On-site video shooting, animated explainers & editing</span>
                </li>
              </ul>

              <div className="service-pills-row">
                <span className="service-sub-pill">Company Profile</span>
                <span className="service-sub-pill">Safety Videos</span>
                <span className="service-sub-pill">Process Explanation</span>
                <span className="service-sub-pill">On-site Shooting</span>
              </div>
            </div>

            <div className="service-card-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedService(SERVICES_DATA[3])}
              >
                <span>Learn More</span>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onSelectService('Industrial / Corporate Video Solutions')}
              >
                <span>Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(type) => {
          setSelectedService(null);
          onSelectService(type);
        }}
      />
    </section>
  );
};
