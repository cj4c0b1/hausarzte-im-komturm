'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Clock, AlertCircle } from 'lucide-react';

export default function OpeningHoursPage() {
  const t = useTranslations('OpeningHours');

  const schedule = [
    { day: 'monday', morning: '08:00 – 13:00', afternoon: '14:00 – 17:00' },
    { day: 'tuesday', morning: '08:00 – 13:00', afternoon: '14:00 – 17:00' },
    { day: 'wednesday', morning: '08:00 – 13:00', afternoon: '' },
    { day: 'thursday', morning: '08:00 – 13:00', afternoon: '14:00 – 18:30' },
    { day: 'friday', morning: '08:00 – 12:00', afternoon: '' },
    { day: 'saturday', morning: '', afternoon: '' },
    { day: 'sunday', morning: '', afternoon: '' }
  ];

  return (
    <main>
      <Navbar />
      <section style={{padding: '4rem 2rem', minHeight: '70vh', backgroundColor: 'var(--background)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <Clock size={64} color="var(--color-primary)" style={{margin: '0 auto 1rem'}} />
            <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.5rem'}}>
              {t('title')}
            </h1>
            <p style={{color: 'var(--color-secondary)', fontSize: '1.1rem'}}>
              {t('subtitle')}
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e1e4e8'
          }}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{backgroundColor: 'var(--color-accent-light)', borderBottom: '2px solid var(--color-primary)'}}>
                  <th style={{padding: '1rem', textAlign: 'left', color: 'var(--color-primary)', fontWeight: 'bold'}}>
                    {t('subtitle')}
                  </th>
                  <th style={{padding: '1rem', textAlign: 'center', color: 'var(--color-primary)', fontWeight: 'bold'}}>
                    {t('morning')}
                  </th>
                  <th style={{padding: '1rem', textAlign: 'center', color: 'var(--color-primary)', fontWeight: 'bold'}}>
                    {t('afternoon')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={item.day} style={{
                    borderBottom: index < schedule.length - 1 ? '1px solid #e1e4e8' : 'none',
                    backgroundColor: index % 2 === 0 ? 'white' : '#f7fafc'
                  }}>
                    <td style={{padding: '1rem', fontWeight: '600', color: 'var(--color-secondary)'}}>
                      {t(item.day)}
                    </td>
                    <td style={{padding: '1rem', textAlign: 'center', color: 'var(--foreground)'}}>
                      {item.morning || <span style={{color: '#999'}}>{t('closed')}</span>}
                    </td>
                    <td style={{padding: '1rem', textAlign: 'center', color: 'var(--foreground)'}}>
                      {item.afternoon || <span style={{color: '#999'}}>{t('closed')}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '0.5rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start'
          }}>
            <AlertCircle size={24} color="#856404" style={{flexShrink: 0, marginTop: '0.25rem'}} />
            <div>
              <h3 style={{color: '#856404', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                {t('emergency')}
              </h3>
              <p style={{color: '#856404', marginBottom: '0.5rem'}}>
                {t('emergencyText')}
              </p>
              <p style={{color: '#856404', fontWeight: 'bold'}}>
                {t('emergencyPhone')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
