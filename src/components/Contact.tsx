'use client';

import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" style={{padding: '4rem 2rem', backgroundColor: 'var(--background)'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 style={{fontSize: '2.5rem', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '2rem'}}>{t('title')}</h2>
        <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-secondary)'}}>{t('name')}</label>
            <input type="text" style={{width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ccc'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-secondary)'}}>{t('email')}</label>
            <input type="email" style={{width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ccc'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--color-secondary)'}}>{t('message')}</label>
            <textarea rows={5} style={{width: '100%', padding: '0.75rem', borderRadius: '0.25rem', border: '1px solid #ccc'}}></textarea>
          </div>
          <button type="submit" style={{
            padding: '1rem 2rem',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '1rem',
            alignSelf: 'flex-start'
          }}>
            {t('submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
