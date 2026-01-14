'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Stethoscope, Heart, Activity } from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <main>
      <Navbar />
      <section style={{padding: '4rem 2rem', minHeight: '70vh'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '3rem'}}>
            {t('title')}
          </h1>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
            {/* General Practice */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e1e4e8'
            }}>
              <div style={{
                padding: '2rem',
                backgroundColor: 'var(--color-accent-light)',
                borderBottom: '2px solid var(--color-primary)'
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <Stethoscope size={40} color="var(--color-primary)" />
                  <div>
                    <h2 style={{fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem'}}>
                      {t('general.title')}
                    </h2>
                    <p style={{color: 'var(--color-secondary)'}}>
                      {t('general.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{padding: '2rem'}}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {t.raw('general.items') && t.raw('general.items').map((item: string, index: number) => (
                    <li key={index} style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#f7fafc',
                      borderLeft: '3px solid var(--color-accent)',
                      borderRadius: '0.25rem'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Internal Medicine */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e1e4e8'
            }}>
              <div style={{
                padding: '2rem',
                backgroundColor: 'var(--color-accent-light)',
                borderBottom: '2px solid var(--color-primary)'
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <Heart size={40} color="var(--color-primary)" />
                  <div>
                    <h2 style={{fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem'}}>
                      {t('internal.title')}
                    </h2>
                    <p style={{color: 'var(--color-secondary)'}}>
                      {t('internal.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{padding: '2rem'}}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {t.raw('internal.items') && t.raw('internal.items').map((item: string, index: number) => (
                    <li key={index} style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: '#f7fafc',
                      borderLeft: '3px solid var(--color-accent)',
                      borderRadius: '0.25rem'
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Preventive Care */}
            <div style={{
            backgroundColor: 'var(--card-bg)',
            padding: '2.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--border-color)',
            marginBottom: '3rem'
          }}>    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <Activity size={40} color="var(--color-primary)" />
                <div>
                  <h2 style={{fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '0.5rem'}}>
                    {t('preventive.title')}
                  </h2>
                  <p style={{color: 'var(--color-secondary)'}}>
                    {t('preventive.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
