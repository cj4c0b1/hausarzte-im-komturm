'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--background)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--color-primary)'}}>
        <Link href="/">Hausärzte im Komturm</Link>
      </div>
      <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap'}}>
        <ul style={{display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap'}}>
          <li><Link href="/">{t('home')}</Link></li>
          <li><Link href="/services">{t('services')}</Link></li>
          <li><Link href="/about">{t('about')}</Link></li>
          <li><Link href="/opening-hours">{t('openingHours')}</Link></li>
          <li><Link href="/online-services">{t('onlineServices')}</Link></li>
          <li><Link href="/news">{t('news')}</Link></li>
          <li><Link href="/contact" style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            borderRadius: '0.25rem'
          }}>{t('contact')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
