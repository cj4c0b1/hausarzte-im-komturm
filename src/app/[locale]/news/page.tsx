'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Newspaper, Calendar } from 'lucide-react';

export default function NewsPage() {
  const t = useTranslations('News');
  const newsItems = t.raw('items') || [];

  return (
    <main>
      <Navbar />
      <section style={{padding: '4rem 2rem', minHeight: '70vh', backgroundColor: 'var(--background)'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <Newspaper size={64} color="var(--color-primary)" style={{margin: '0 auto 1rem'}} />
            <h1 style={{fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.5rem'}}>
              {t('title')}
            </h1>
          </div>

          {newsItems.length > 0 ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              {newsItems.map((item: any, index: number) => (
                <article key={index} style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    color: 'var(--color-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h2 style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-primary)',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>
                    {item.title}
                  </h2>
                  <div style={{
                    color: 'var(--foreground)',
                    lineHeight: '1.7',
                    whiteSpace: 'pre-line'
                  }}>
                    {item.content}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div style={{
              backgroundColor: 'var(--card-bg)',
              padding: '3rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <p style={{color: 'var(--color-secondary)', fontSize: '1.1rem'}}>
                {t('noNews')}
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
