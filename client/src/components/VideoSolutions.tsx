import React from 'react';
import {
  Video,
  Film,
  ShieldCheck,
  PlaySquare,
  Sparkles,
  Layers,
  Camera,
  Scissors,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';

interface VideoSolutionsProps {
  onDiscussVideo: (serviceType: InquiryServiceType) => void;
}

export const VideoSolutions: React.FC<VideoSolutionsProps> = ({ onDiscussVideo }) => {
  const steps = [
    {
      num: '01',
      title: 'Understand Requirement',
      desc: 'We analyze your target audience, facility boundaries, safety mandates, and communication goals.',
    },
    {
      num: '02',
      title: 'Plan Content & Script',
      desc: 'Develop structured storyboards, bilingual scripts, visual cues, and shoot schedules.',
    },
    {
      num: '03',
      title: 'Shoot / Collect Assets',
      desc: 'Deploy on-site production teams to film plant operations, or organize existing machinery photos and footage.',
    },
    {
      num: '04',
      title: 'Create & Edit',
      desc: 'Precision editing, 2D/3D animated motion graphics, voiceover sync, and safety callout highlights.',
    },
    {
      num: '05',
      title: 'Final Delivery',
      desc: 'Multi-format exports optimized for reception displays, worker orientation kiosks, web portals, and presentations.',
    },
  ];

  const offerings = [
    { name: 'Industrial Videos', icon: <Film size={18} /> },
    { name: 'Company Profile Videos', icon: <PlaySquare size={18} /> },
    { name: 'Safety Awareness Videos', icon: <ShieldCheck size={18} /> },
    { name: 'Safety Guideline Videos', icon: <FileCheck size={18} /> },
    { name: 'Training & Explainer Videos', icon: <Layers size={18} /> },
    { name: 'Process Explanation Videos', icon: <CheckCircle size={18} /> },
    { name: 'Animated Safety & Process Videos', icon: <Sparkles size={18} /> },
    { name: 'Photo & Footage Presentations', icon: <Layers size={18} /> },
    { name: 'On-site Video Shooting & Audio', icon: <Camera size={18} /> },
    { name: 'Professional Post-Production Editing', icon: <Scissors size={18} /> },
  ];

  return (
    <section id="video-solutions" className="video-section has-atmosphere" aria-label="Industrial Video Solutions">
      {/* Background Visual Atmosphere (Studio Grid, Light Prism Beams, Viewfinder Accents & Particles) */}
      <div className="video-atmosphere" aria-hidden="true">
        <div className="video-light-mesh" />
        <div className="video-beam-left" />
        <div className="video-beam-right" />
        <div className="video-orb-cyan" />
        <div className="video-orb-berry" />
        <div className="cinematic-particle cp-1" />
        <div className="cinematic-particle cp-2" />
        <div className="cinematic-particle cp-3" />
        <div className="cinematic-particle cp-4" />
        <div className="video-frame-accent video-frame-tl" />
        <div className="video-frame-accent video-frame-tr" />
        <div className="video-frame-accent video-frame-bl" />
        <div className="video-frame-accent video-frame-br" />
      </div>

      <div className="container section-content-layer">
        <div className="section-header">
          <span className="section-tag">New Capability Showcase</span>
          <h2 className="section-title">Industrial / Corporate Video Solutions</h2>
          <p className="section-subtitle">
            Transform complex industrial processes, safety protocols, and manufacturing workflows into
            clear, engaging, and professional video assets.
          </p>
        </div>

        {/* Problem vs Solution High-Contrast Box */}
        <div className="video-contrast-box">
          <div className="contrast-col problem">
            <h4>
              <AlertCircle size={20} color="#dc2626" />
              <span>The Industrial Challenge</span>
            </h4>
            <p>
              "Industrial information can be difficult to explain through text alone." Dense standard
              operating procedures, heavy machinery operation manuals, and static health and safety sheets
              frequently lead to worker misunderstanding, lengthy onboarding delays, and communication barriers.
            </p>
          </div>

          <div className="contrast-col solution">
            <h4>
              <CheckCircle size={20} color="#0284c7" />
              <span>The SPAN Solution</span>
            </h4>
            <p>
              "SPAN turns company processes, safety instructions, and technical information into
              easy-to-understand visual content." We bridge technical accuracy with professional videography
              so your workers, clients, and partners grasp critical workflows instantly.
            </p>
          </div>
        </div>

        {/* 5-Step Process */}
        <div className="process-title">Our 5-Step Production Framework</div>
        <div className="process-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-card">
              <span className="step-number">{step.num}</span>
              <div className="step-name">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Video Formats Grid */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#0b2545', fontWeight: 700 }}>
            Specialized Video Formats We Deliver
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Built specifically to meet engineering compliance and business presentation demands:
          </p>
        </div>

        <div className="video-offerings-grid">
          {offerings.map((item, idx) => (
            <div key={idx} className="video-offering-card">
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="video-cta-wrap">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onDiscussVideo('Industrial / Corporate Video Solutions')}
          >
            <Video size={16} />
            <span>Discuss Your Video Requirement</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
