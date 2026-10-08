import React, { useState, useEffect, useRef } from 'react';
import {
  Car,
  Cog,
  Boxes,
  Cpu,
  Wrench,
  Layers,
  TrendingDown,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface MetricItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  badge: string;
}

const METRICS: MetricItem[] = [
  {
    value: '20%–30%',
    prefix: '',
    suffix: '',
    label: 'Cost & Waste Reduction',
    description: 'Targeted reduction in hidden manufacturing waste through our proprietary GET SHRINK methodology with Zero Capex.',
    icon: <TrendingDown size={24} />,
    accentColor: '#c5221f',
    badge: 'GET SHRINK Framework',
  },
  {
    value: '10,000+',
    numericTarget: 10000,
    suffix: '+',
    label: 'Screened Talent Pool',
    description: 'Pre-evaluated machine operators, QA inspectors, technical associates, and industrial engineering manpower.',
    icon: <Users size={24} />,
    accentColor: '#0284c7',
    badge: 'On-Demand Industrial Staffing',
  },
  {
    value: 'ISO 9001:2015',
    label: 'Standardized Quality System',
    description: 'Certified processes ensuring procedural discipline, continuous audits, and consistent service delivery.',
    icon: <Award size={24} />,
    accentColor: '#15803d',
    badge: 'International Standard',
  },
  {
    value: '100%',
    numericTarget: 100,
    suffix: '%',
    label: 'Statutory Compliance Guarantee',
    description: 'Flawless adherence to labor laws, PF, ESIC, Factory Act regulations, and workplace safety protocols.',
    icon: <ShieldCheck size={24} />,
    accentColor: '#0b2545',
    badge: 'Zero Risk For Principals',
  },
];

interface SectorItem {
  name: string;
  subtext: string;
  icon: React.ReactNode;
}

const SECTORS: SectorItem[] = [
  {
    name: 'Automotive & Tier-1 OEMs',
    subtext: 'Press shop, chassis, powertrain & assembly',
    icon: <Car size={20} />,
  },
  {
    name: 'Precision & Heavy Engineering',
    subtext: 'CNC/VMC machining, forging & tool rooms',
    icon: <Cog size={20} />,
  },
  {
    name: 'Packaging, Plastics & Polymers',
    subtext: 'Injection molding, blow molding & corrugation',
    icon: <Boxes size={20} />,
  },
  {
    name: 'Electrical & Electronics Assembly',
    subtext: 'SMT lines, wiring harnesses & panels',
    icon: <Cpu size={20} />,
  },
  {
    name: 'Fabrication, Fasteners & Metalwork',
    subtext: 'Sheet metal, welding & cold forging',
    icon: <Wrench size={20} />,
  },
  {
    name: 'FMCG & Consumer Manufacturing',
    subtext: 'High-speed bottling, packaging & warehousing',
    icon: <Layers size={20} />,
  },
];

export const TrustMetricsBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countProgress, setCountProgress] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth count animation when section becomes visible
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCountProgress(ease);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="trust-metrics-section"
      aria-label="Manufacturing Sectors and Operational Impact Metrics"
    >
      <div className="container">
        {/* Top Header: Trust statement */}
        <div className="trust-header-row">
          <div className="trust-badge-pill">
            <CheckCircle2 size={14} color="#15803d" />
            <span>Industrial Footprint & Proven Value Delivery</span>
          </div>
          <h2 className="trust-main-heading">
            Driving Measurable Operational Impact Across Indian Manufacturing
          </h2>
          <p className="trust-sub-heading">
            We partner with plant heads, operations leaders, and HR directors to eliminate hidden shop-floor waste,
            deliver deployment-ready technical manpower, and establish ISO-standard quality culture.
          </p>
        </div>

        {/* 1. Impact Metrics Grid (4 Highlight Cards) */}
        <div className="metrics-grid">
          {METRICS.map((metric, index) => {
            let displayVal = metric.value;
            if (metric.numericTarget && isVisible) {
              const currentNumber = Math.round(metric.numericTarget * countProgress);
              displayVal = `${currentNumber.toLocaleString()}${metric.suffix || ''}`;
            }

            return (
              <div
                key={index}
                className="metric-card"
                style={{
                  borderTop: `3px solid ${metric.accentColor}`,
                }}
              >
                <div className="metric-card-top">
                  <div
                    className="metric-icon-wrap"
                    style={{
                      backgroundColor: `${metric.accentColor}12`,
                      color: metric.accentColor,
                    }}
                  >
                    {metric.icon}
                  </div>
                  <span className="metric-badge-tag">{metric.badge}</span>
                </div>

                <div
                  className="metric-value"
                  style={{ color: metric.accentColor }}
                >
                  {displayVal}
                </div>

                <div className="metric-label">{metric.label}</div>
                <p className="metric-desc">{metric.description}</p>
              </div>
            );
          })}
        </div>

        {/* 2. Key Industrial Sectors Ribbon / Grid */}
        <div className="sectors-wrapper">
          <div className="sectors-banner-title">
            <span>Specialized Experience Across Core Manufacturing Sectors:</span>
          </div>

          <div className="sectors-grid">
            {SECTORS.map((sector, idx) => (
              <div key={idx} className="sector-chip">
                <div className="sector-chip-icon">{sector.icon}</div>
                <div className="sector-chip-text">
                  <span className="sector-chip-name">{sector.name}</span>
                  <span className="sector-chip-sub">{sector.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
