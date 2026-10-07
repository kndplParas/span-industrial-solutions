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
        <svg
          width={badgeSize}
          height={badgeSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ display: 'block', overflow: 'hidden', borderRadius: '50%' }}
        >
          {/* Outer Dark Green Circle Ring */}
          <circle
            cx="50"
            cy="50"
            r="46.5"
            fill="#ffffff"
            stroke={greenBorderColor}
            strokeWidth="3.2"
          />

          {/* Berry Red Circular Badge with 3 White Bridge Arches */}
          <defs>
            <clipPath id="span-inner-badge-clip">
              <circle cx="34" cy="50" r="13" />
            </clipPath>
          </defs>
          <circle cx="34" cy="50" r="13" fill={markBerryColor} />
          <g clipPath="url(#span-inner-badge-clip)">
            {/* Top bridge arch */}
            <path
              d="M 23 45 Q 34 38 45 45"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Middle bridge arch */}
            <path
              d="M 22 51 Q 34 44 46 51"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Lower bridge arch */}
            <path
              d="M 23 57 Q 34 50 45 57"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Lowercase 'span' wordmark - comfortably centered inside the green circle with safe margins */}
          <text
            x="51"
            y="55.5"
            textLength="28"
            lengthAdjust="spacingAndGlyphs"
            fill={wordmarkColor}
            fontFamily="'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="-0.5"
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
