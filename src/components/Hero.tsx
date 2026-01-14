'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/routing';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      textAlign: 'center',
      background: 'linear-gradient(135deg, var(--background) 0%, var(--muted-bg) 100%)',
      padding: '2rem'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '4rem',
          color: 'var(--color-primary)',
          marginBottom: '1rem',
          maxWidth: '800px'
        }}
      >
        {t('title')}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: '1.5rem',
          color: 'var(--color-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px'
        }}
      >
        {t('subtitle')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/contact" style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: 'var(--color-accent)',
          color: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s',
        }}>
          {t('cta')}
        </Link>
      </motion.div>
    </section>
  );
}
