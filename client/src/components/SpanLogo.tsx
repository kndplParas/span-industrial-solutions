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
  const redBrandColor = '#b91c1c';
  const corporateTextColor = isLight ? '#ffffff' : '#0b2545';
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
      {/* 1. Official PDF Brandmark: Concentric Red Spiral Glyph + lowercase 'span' */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          flexShrink: 0,
        }}
      >
        {/* Exact Red Spiral / Swirl Glyph from PDF */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          {/* Outer concentric curve */}
          <path
            d="M50 8 C73.196 8 92 26.804 92 50 C92 73.196 73.196 92 50 92 C26.804 92 8 73.196 8 50 C8 32.5 19 17.5 35 11"
            stroke={redBrandColor}
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Middle concentric curve */}
          <path
            d="M50 22 C65.464 22 78 34.536 78 50 C78 65.464 65.464 78 50 78 C34.536 78 22 65.464 22 50 C22 39 29.5 29 40 24.5"
            stroke={redBrandColor}
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          {/* Inner concentric curve */}
          <path
            d="M50 36 C57.732 36 64 42.268 64 50 C64 57.732 57.732 64 50 64 C42.268 64 36 57.732 36 50 C36 44 40.5 39 46.5 37.5"
            stroke={redBrandColor}
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Core dot */}
          <circle cx="50" cy="50" r="5" fill={redBrandColor} />
        </svg>

        {/* The exact lowercase 'span' wordmark in red from PDF */}
        <span
          style={{
            color: redBrandColor,
            fontFamily: "var(--font-family), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: '1.9rem',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            display: 'inline-block',
          }}
        >
          span
        </span>
      </div>

      {/* 2. Full Corporate Name from PDF: 'SPAN INDUSTRIAL SOLUTIONS PVT LTD' */}
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
