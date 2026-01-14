'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/routing';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ServiceCard from '../../components/ServiceCard';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { Stethoscope, Heart, Activity, Clock } from 'lucide-react';

export default function Home() {
  const t = useTranslations('Services');
  const tHours = useTranslations('OpeningHours');

  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Quick Opening Hours */}
      <section style={{padding: '3rem 2rem', backgroundColor: 'var(--color-accent-light)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <Clock size={48} color="var(--color-primary)" style={{margin: '0 auto 1rem'}} />
          <h2 style={{fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1.5rem'}}>
            {tHours('title')}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            <div style={{padding: '1rem', backgroundColor: 'var(--background)', borderRadius: '0.5rem'}}>
              <strong>{tHours('monday')} - {tHours('thursday')}</strong><br/>
              08:00 - 13:00 & 14:00 - 17:00*
            </div>
            <div style={{padding: '1rem', backgroundColor: 'var(--background)', borderRadius: '0.5rem'}}>
              <strong>{tHours('friday')}</strong><br/>
              08:00 - 12:00
            </div>
          </div>
          <Link href="/opening-hours" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            borderRadius: '0.25rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            {tHours('subtitle')}
          </Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{padding: '4rem 2rem', backgroundColor: 'var(--background)'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '3rem'}}>
            {t('title')}
          </h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
            <ServiceCard 
              title={t('general.title')} 
              description={t('general.description')} 
              icon={<Stethoscope size={48} />} 
            />
            <ServiceCard 
              title={t('internal.title')} 
              description={t('internal.description')} 
              icon={<Heart size={48} />} 
            />
            <ServiceCard 
              title={t('preventive.title')} 
              description={t('preventive.description')} 
              icon={<Activity size={48} />} 
            />
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
