'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-primary)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p>&copy; {new Date().getFullYear()} Hausärzte im Komturm. Alle Rechte vorbehalten.</p>
    </footer>
  );
}
