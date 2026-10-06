import React from 'react';

interface SpanLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showCorporateName?: boolean;
  showSubtitle?: boolean;
  size?: number;
}

export const SpanLogo: React.FC<SpanLogoProps> = ({
  variant = 'dark',
  className = '',
  showCorporateName = true,
  showSubtitle,
  size = 58,
}) => {
  const displayCorporate = showSubtitle !== undefined ? showSubtitle : showCorporateName;
  const isLight = variant === 'light';

  return (
    <div
      className={`span-logo-brand ${isLight ? 'span-logo-light' : 'span-logo-dark'} ${className}`}
      role="img"
      aria-label="SPAN Industrial Solutions Pvt Ltd"
    >
      {/* Official SPAN Circular Emblem Badge */}
      <div className="span-logo-badge-wrap">
        <img
          src="/span-logo.png"
          alt="SPAN Emblem"
          width={size}
          height={size}
          className="span-logo-badge-img"
          style={{ width: `${size}px`, height: `${size}px` }}
          loading="eager"
        />
      </div>

      {/* Corporate Name & ISO Certification */}
      {displayCorporate && (
        <div className="span-corporate-text">
          <span className="corporate-title">
            <span className="corporate-name-main">SPAN INDUSTRIAL SOLUTIONS</span>
            <span className="corporate-name-suffix"> PVT LTD</span>
          </span>
          <span className="corporate-subtitle">
            <span className="iso-status-dot" aria-hidden="true" />
            <span>ISO 9001:2015 Certified Company</span>
          </span>
        </div>
      )}
    </div>
  );
};


