import React from 'react';

interface SpanLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const SpanLogo: React.FC<SpanLogoProps> = ({
  variant = 'dark',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#ffffff' : '#0B2545';
  const subColor = isLight ? '#94a3b8' : '#c5221f';

  return (
    <div className={`brand-brand-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* SPAN Spiral Glyph Icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" stroke="#c5221f" strokeWidth="6" strokeDasharray="210 50" strokeLinecap="round" />
        <circle cx="50" cy="50" r="32" stroke="#0b2545" strokeWidth="6" strokeDasharray="140 40" strokeLinecap="round" />
        <circle cx="50" cy="50" r="18" fill="#c5221f" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: textColor,
              lineHeight: 1,
            }}
          >
            span
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: subColor,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            INDUSTRIAL
          </span>
        </div>
        {showSubtitle && (
          <span
            style={{
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: isLight ? '#cbd5e1' : '#64748b',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            Solutions Pvt Ltd • ISO 9001:2015
          </span>
        )}
      </div>
    </div>
  );
};
