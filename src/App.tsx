import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Transcript from './components/Transcript';
import Certificates from './components/Certificates';
import { ArrowUp, Heart } from 'lucide-react';

import avatarImg from './assets/images/avatar.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'experience', 'certificates'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(element);
      return { observer, element };
    });
    return () => { observers.forEach((o) => { if (o) o.observer.unobserve(o.element); }); };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)', position: 'relative' }}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero avatarUrl={avatarImg} />
        <Projects />
        <Skills />
        <Experience />
        <Transcript />
        <Certificates />
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--cream-2)',
        borderTop: '1.5px solid var(--border-soft)',
        padding: '2.5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          {/* Cute dots row */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {['var(--red)', 'var(--yellow)', 'var(--green)', 'var(--blue)', 'var(--purple)', 'var(--pink)'].map((c, i) => (
              <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            My Portfolio
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Made with <Heart size={13} style={{ color: 'var(--red)', fill: 'var(--red)' }} /> by Developer
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 100,
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'var(--text-primary)', color: 'var(--cream)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--shadow-lg)',
            }}
            id="scroll-to-top-btn"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
