import React from 'react';

interface SpanLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showCorporateName?: boolean;
  showSubtitle?: boolean;
}

export const SpanLogo: React.FC<SpanLogoProps> = ({
  variant = 'dark',
  className = '',
  showCorporateName = true,
  showSubtitle,
}) => {
  const displayCorporate = showSubtitle !== undefined ? showSubtitle : showCorporateName;
  const isLight = variant === 'light';

  // Exact brand colors from official logo
  const markBerryColor = '#9e1245';
  const wordmarkColor = isLight ? '#ffffff' : '#374151';
  const corporateTextColor = isLight ? '#f1f5f9' : '#0b2545';
  const badgeTextColor = isLight ? '#94a3b8' : '#64748b';

  return (
    <div
      className={`span-logo-brand ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
      }}
    >
      {/* 1. Official SPAN Brandmark: Berry Circle with 3 White Bridge Arches + 'span' Wordmark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0,
        }}
      >
        {/* Berry Red Circular Badge with 3 White Bridge Arches */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <defs>
            <clipPath id="span-logo-badge-clip">
              <circle cx="50" cy="50" r="48" />
            </clipPath>
          </defs>
          <circle cx="50" cy="50" r="48" fill={markBerryColor} />
          <g clipPath="url(#span-logo-badge-clip)">
            {/* Top bridge arch */}
            <path
              d="M 10 38 Q 50 16 90 38"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Middle bridge arch */}
            <path
              d="M 5 56 Q 50 32 95 56"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Lower bridge arch */}
            <path
              d="M 8 74 Q 50 48 92 74"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>

        {/* Lowercase 'span' wordmark in charcoal grey from official logo */}
        <span
          style={{
            color: wordmarkColor,
            fontFamily: "var(--font-family), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: '1.9rem',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            display: 'inline-block',
          }}
        >
          span
        </span>
      </div>

      {/* 2. Full Corporate Name: 'SPAN INDUSTRIAL SOLUTIONS PVT LTD' */}
      {displayCorporate && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: `1.5px solid ${isLight ? 'rgba(255,255,255,0.2)' : '#e2e8f0'}`,
            paddingLeft: '12px',
          }}
        >
          <span
            style={{
              color: corporateTextColor,
              fontSize: '0.88rem',
              fontWeight: 800,
              letterSpacing: '0.02em',
              lineHeight: 1.2,
              textTransform: 'uppercase',
            }}
          >
            SPAN INDUSTRIAL SOLUTIONS PVT LTD
          </span>
          <span
            style={{
              color: badgeTextColor,
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            ISO 9001-2015 Certified Company
          </span>
        </div>
      )}
    </div>
  );
};
