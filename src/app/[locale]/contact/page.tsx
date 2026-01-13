'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div style={{minHeight: '70vh'}}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
