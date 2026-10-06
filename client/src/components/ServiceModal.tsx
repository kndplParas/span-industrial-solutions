import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import type { InquiryServiceType } from '../types/inquiry';

export interface ServiceDetail {
  id: string;
  serviceType: InquiryServiceType;
  title: string;
  tagline: string;
  overview: string;
  keyBenefits: string[];
  scopeAndDeliverables: string[];
  specialties?: string[];
}

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onInquire: (serviceType: InquiryServiceType) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close details dialog"
        >
          <X size={20} />
        </button>

        <span className="section-tag" style={{ marginBottom: '0.5rem' }}>
          Service Specification
        </span>
        <h3 id="modal-title" style={{ fontSize: '1.6rem', color: '#0b2545', marginBottom: '0.4rem', fontWeight: 800 }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#c5221f', fontWeight: 600, marginBottom: '1.25rem' }}>
          {service.tagline}
        </p>

        <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          {service.overview}
        </p>

        {service.specialties && service.specialties.length > 0 && (
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0b2545', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Specialties & Guarantees
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {service.specialties.map((spec, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#1e293b' }}>
                  <ShieldCheck size={14} color="#c5221f" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', color: '#0b2545', marginBottom: '0.75rem', fontWeight: 700 }}>
            Key Areas & Capabilities:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
            {service.scopeAndDeliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.825rem',
                  color: '#334155',
                  backgroundColor: '#f1f5f9',
                  padding: '6px 10px',
                  borderRadius: '6px',
                }}
              >
                <CheckCircle2 size={14} color="#0b2545" style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.25rem',
            borderTop: '1px solid #e2e8f0',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Customized proposals tailored to your facility
          </span>
          <button
            type="button"
            className="btn btn-accent"
            onClick={() => {
              onInquire(service.serviceType);
              onClose();
            }}
          >
            <span>Inquire for This Service</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
