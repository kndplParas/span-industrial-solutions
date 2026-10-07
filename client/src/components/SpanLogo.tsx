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
          padding: '0 4px',
          boxShadow: isLight
            ? '0 2px 8px rgba(0, 0, 0, 0.25)'
            : '0 1px 4px rgba(11, 37, 69, 0.08)',
          flexShrink: 0,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <svg
          width={badgeSize - 8}
          height={badgeSize - 8}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          {/* Berry Red Circular Badge with 3 White Bridge Arches */}
          <g transform="translate(14, 28)">
            <defs>
              <clipPath id="span-inner-badge-clip">
                <circle cx="20" cy="22" r="19" />
              </clipPath>
            </defs>
            <circle cx="20" cy="22" r="19" fill={markBerryColor} />
            <g clipPath="url(#span-inner-badge-clip)">
              {/* Top bridge arch */}
              <path
                d="M 5 17 Q 20 8 35 17"
                stroke="#ffffff"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Middle bridge arch */}
              <path
                d="M 3 24 Q 20 15 37 24"
                stroke="#ffffff"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Lower bridge arch */}
              <path
                d="M 4 31 Q 20 22 36 31"
                stroke="#ffffff"
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          {/* Lowercase 'span' wordmark in charcoal grey */}
          <text
            x="54"
            y="57"
            fill={wordmarkColor}
            fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="26"
            fontWeight="700"
            letterSpacing="-0.8"
          >
            span
          </text>
        </svg>
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
