'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Mail, Phone, Calendar } from 'lucide-react';

export default function OnlineServicesPage() {
  const t = useTranslations('OnlineServices');

  return (
    <main>
      <Navbar />
      <section style={{padding: '4rem 2rem', minHeight: '70vh', backgroundColor: 'var(--background)'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '3rem'}}>
            {t('title')}
          </h1>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {/* Prescription Renewal */}
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Mail size={32} color="var(--color-primary)" />
              </div>
              <h2 style={{fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>
                {t('prescription.title')}
              </h2>
              <p style={{color: 'var(--color-secondary)', marginBottom: '1.5rem', lineHeight: '1.6'}}>
                {t('prescription.description')}
              </p>
              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--color-accent-light)',
                borderRadius: '0.25rem',
                marginBottom: '0.5rem'
              }}>
                <p style={{color: 'var(--color-primary)', fontWeight: '600'}}>
                  {t('prescription.email')}
                </p>
              </div>
              <div style={{
                padding: '1rem',
                backgroundColor: 'var(--color-accent-light)',
                borderRadius: '0.25rem'
              }}>
                <p style={{color: 'var(--color-primary)', fontWeight: '600'}}>
                  {t('prescription.phone')}
                </p>
              </div>
            </div>

            {/* Online Booking */}
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Calendar size={32} color="var(--color-primary)" />
              </div>
              <h2 style={{fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem'}}>
                {t('booking.title')}
              </h2>
              <p style={{color: 'var(--color-secondary)', lineHeight: '1.6'}}>
                {t('booking.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
