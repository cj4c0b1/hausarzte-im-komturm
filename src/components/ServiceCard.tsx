import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid var(--border-color)',
        flex: '1 1 300px',
        maxWidth: '350px'
      }}
    >
      {icon && <div style={{marginBottom: '1rem', color: 'var(--color-primary)'}}>{icon}</div>}
      <h3 style={{fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-primary)'}}>{title}</h3>
      <p style={{color: 'var(--color-secondary)'}}>{description}</p>
    </motion.div>
  );
}
