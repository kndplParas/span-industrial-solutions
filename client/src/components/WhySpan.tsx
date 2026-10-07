import React from 'react';
import {
  Factory,
  Wrench,
  UserCheck,
  Users,
  TrendingDown,
  GraduationCap,
  Video,
} from 'lucide-react';

export const WhySpan: React.FC = () => {
  const pillars = [
    {
      icon: <Factory size={22} />,
      title: 'Dedicated Industrial Focus',
      desc: 'Our operations, methodologies, and offerings are built exclusively around the genuine requirements of manufacturing and engineering plants.',
    },
    {
      icon: <Wrench size={22} />,
      title: 'Practical Zero-Capex Solutions',
      desc: 'Cost-saving tools and process optimizations are designed to generate measurable returns without requiring capital expenditure on new machinery.',
    },
    {
      icon: <UserCheck size={22} />,
      title: 'Experienced Industry Professionals',
      desc: 'Our training modules and advisory interventions are led by seasoned veterans who bring decades of real shop-floor problem solving.',
    },
    {
      icon: <Users size={22} />,
      title: 'Comprehensive Workforce Support',
      desc: 'From technical candidate screening to precise job matching, we draw upon proven staffing modes to provide reliable manpower solutions.',
    },
    {
      icon: <TrendingDown size={22} />,
      title: 'Structured Cost Reduction (GET SHRINK)',
      desc: 'Systematic targeting of hidden operational wastes across raw materials, power, manpower, overheads, and quality costs.',
    },
    {
      icon: <GraduationCap size={22} />,
      title: 'Practical Shop-Floor Training',
      desc: 'Hands-on curriculum spanning Kaizen, 5S, 7QC Tools, GD&T, and APQP to institutionalize discipline within internal engineering teams.',
    },
    {
      icon: <Video size={22} />,
      title: 'Technical Visual Communication',
      desc: 'Bridging the clarity gap by translating intricate plant procedures and safety directives into clear, professional corporate and industrial videos.',
    },
  ];

  return (
    <section id="why-span" className="section section-alt has-atmosphere" aria-label="Why Partner with SPAN">
      <div className="blueprint-dots-bg" aria-hidden="true" />
      <div className="container section-content-layer">
        <div className="section-header">
          <span className="section-tag">Synergistic Value</span>
          <h2 className="section-title">Why Partner with SPAN</h2>
          <p className="section-subtitle">
            By integrating workforce management, manufacturing cost optimization, technical training,
            and visual industrial communication under one ISO 9001:2015 certified partner, we provide
            cohesive support for long-term operational success.
          </p>
        </div>

        <div className="why-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
