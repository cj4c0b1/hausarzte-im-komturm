'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

const doctors = [
  {
    key: 'rieckmann',
    image: 'https://hik-freiburg.de/images/tillrieckmann.jpg'
  },
  {
    key: 'meiser',
    image: 'https://hik-freiburg.de/images/frederikmeiser.jpg'
  },
  {
    key: 'gentzsch',
    image: 'https://hik-freiburg.de/images/sabrinagentzsch.jpg'
  },
  {
    key: 'adolf',
    image: 'https://hik-freiburg.de/images/bildfolgt.jpg'
  },
  {
    key: 'knoll',
    image: 'https://hik-freiburg.de/images/bildfolgt.jpg'
  }
];

export default function AboutPage() {
  const t = useTranslations('Team');

  return (
    <main>
      <Navbar />
      <section style={{padding: '4rem 2rem', minHeight: '70vh', backgroundColor: 'var(--background)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '1rem'}}>
            {t('title')}
          </h1>
          <p style={{textAlign: 'center', color: 'var(--color-secondary)', marginBottom: '4rem', fontSize: '1.1rem'}}>
            Hausärzte im Komturm - Karlsruher Straße 3, 79108 Freiburg
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e1e4e8'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                  backgroundColor: '#f7fafc'
                }}>
                  <img 
                    src={doctor.image} 
                    alt={t(`${doctor.key}.name`)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{padding: '1.5rem'}}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: 'var(--color-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {t(`${doctor.key}.name`)}
                  </h3>
                  <p style={{
                    color: 'var(--color-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {t(`${doctor.key}.title`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
