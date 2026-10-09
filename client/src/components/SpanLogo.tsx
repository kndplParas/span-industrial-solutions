import React from 'react';

interface SpanLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showCorporateName?: boolean;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const SpanLogo: React.FC<SpanLogoProps> = ({
  variant = 'dark',
  className = '',
  showCorporateName = true,
  showSubtitle,
  size = 'md',
}) => {
  const displayCorporate = showSubtitle !== undefined ? showSubtitle : showCorporateName;
  const isLight = variant === 'light';

  // Text colors based on light/dark mode
  const corporateTextColor = isLight ? '#ffffff' : '#0b2545';
  const badgeTextColor = isLight ? '#cbd5e1' : '#475569';

  // Proportional sizing for circular seal
  const badgeSize = size === 'sm' ? 40 : size === 'lg' ? 54 : 48;

  return (
    <div
      className={`span-logo-brand ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {/* 1. Official SPAN Circular Seal Emblem from official logo */}
      <div
        className="span-emblem-seal"
        style={{
          width: `${badgeSize}px`,
          height: `${badgeSize}px`,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isLight
            ? '0 2px 8px rgba(0, 0, 0, 0.25)'
            : '0 1px 4px rgba(11, 37, 69, 0.08)',
          flexShrink: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <img
          src="/span-logo.png"
          alt="SPAN Industrial Solutions Emblem"
          width={badgeSize}
          height={badgeSize}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '50%',
            display: 'block',
          }}
        />
      </div>

      {/* 2. Full Corporate Name & ISO Certification */}
      {displayCorporate && (
        <div
          className="span-corporate-text-wrap"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            lineHeight: 1.2,
          }}
        >
          <span
            className="span-corporate-title"
            style={{
              color: corporateTextColor,
              fontSize: size === 'sm' ? '0.82rem' : '0.94rem',
              fontWeight: 700,
              letterSpacing: '0.015em',
              textTransform: 'uppercase',
              lineHeight: 1.18,
            }}
          >
            SPAN INDUSTRIAL SOLUTIONS PVT LTD
          </span>
          <span
            className="span-corporate-cert"
            style={{
              color: badgeTextColor,
              fontSize: size === 'sm' ? '0.64rem' : '0.74rem',
              fontWeight: 500,
              letterSpacing: '0.025em',
              marginTop: '2px',
            }}
          >
            ISO 9001:2015 Certified Company
          </span>
        </div>
      )}
    </div>
  );
};
