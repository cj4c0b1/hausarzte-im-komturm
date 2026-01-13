'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/routing';

const languages = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'pt', label: 'PT', flag: '🇵🇹' },
  { code: 'es', label: 'ES', flag: '🇪🇸' }
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          style={{
            padding: '0.5rem 0.75rem',
            border: locale === lang.code ? '2px solid var(--color-primary)' : '1px solid #ddd',
            borderRadius: '0.25rem',
            backgroundColor: locale === lang.code ? 'var(--color-accent-light)' : 'white',
            color: locale === lang.code ? 'var(--color-primary)' : 'var(--color-secondary)',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: locale === lang.code ? 'bold' : 'normal',
            transition: 'all 0.2s'
          }}
          title={lang.label}
        >
          {lang.flag} {lang.label}
        </button>
      ))}
    </div>
  );
}
