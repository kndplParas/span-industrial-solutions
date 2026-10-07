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

  // Exact brand colors from official logo & user screenshot
  const greenBorderColor = '#1a4d2e';
  const markBerryColor = '#9e1245';
  const wordmarkColor = '#374151';
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
      {/* 1. Official SPAN Circular Seal Emblem with Dark Green Ring Border */}
      <div
        className="span-emblem-seal"
        style={{
          width: `${badgeSize}px`,
          height: `${badgeSize}px`,
          borderRadius: '50%',
          border: `2px solid ${greenBorderColor}`,
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isLight
            ? '0 2px 8px rgba(0, 0, 0, 0.25)'
            : '0 1px 4px rgba(11, 37, 69, 0.08)',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: size === 'sm' ? '2px' : '3px',
            transform: 'translateY(-0.5px)',
          }}
        >
          {/* Berry Red Circular Badge with 3 White Bridge Arches */}
          <svg
            width={size === 'sm' ? 14 : size === 'lg' ? 20 : 17}
            height={size === 'sm' ? 14 : size === 'lg' ? 20 : 17}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ flexShrink: 0, display: 'block' }}
          >
            <defs>
              <clipPath id="span-inner-badge-clip">
                <circle cx="50" cy="50" r="48" />
              </clipPath>
            </defs>
            <circle cx="50" cy="50" r="48" fill={markBerryColor} />
            <g clipPath="url(#span-inner-badge-clip)">
              <path
                d="M 10 38 Q 50 16 90 38"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 5 56 Q 50 32 95 56"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 8 74 Q 50 48 92 74"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </svg>

          {/* Lowercase 'span' wordmark - 100% fully visible, crisp and unclipped */}
          <span
            style={{
              color: wordmarkColor,
              fontFamily:
                "var(--font-family), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: size === 'sm' ? '0.78rem' : size === 'lg' ? '1.05rem' : '0.92rem',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            span
          </span>
        </div>
      </div>

      {/* 2. Full Corporate Name & ISO Certification */}
      {displayCorporate && (
        <div
          className="span-corporate-text-wrap"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            lineHeight: 1.25,
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
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
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
              whiteSpace: 'nowrap',
            }}
          >
            ISO 9001:2015 Certified Company
          </span>
        </div>
      )}
    </div>
  );
};
