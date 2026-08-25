import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

const navItems = [
  { id: 'hero',         label: 'Home' },
  { id: 'projects',     label: 'Projects' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
];

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,253,245,0.92)' : 'var(--cream)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1.5px solid var(--border-soft)' : '1.5px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '0 1.5rem', height: '66px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('hero')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          id="nav-logo"
        >
          {/* Cute circle logo */}
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'var(--text-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1rem',
            color: 'var(--cream)',
            boxShadow: '0 2px 6px rgba(28,25,23,0.15)',
          }}>
            P
          </div>
          <span style={{
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.01em',
          }}>
            Portfolio
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '4px' }} className="desktop-nav">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--r-full)',
                  border: 'none',
                  background: isActive ? 'var(--text-primary)' : 'transparent',
                  color: isActive ? 'var(--cream)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
                id={`nav-${item.id}`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'var(--cream-2)', border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-sm)', padding: '6px', cursor: 'pointer', color: 'var(--text-primary)',
          }}
          id="mobile-menu-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              overflow: 'hidden',
              background: 'var(--cream)',
              borderTop: '1.5px solid var(--border-soft)',
            }}
          >
            <div style={{ padding: '0.75rem 1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItems.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    style={{
                      background: isActive ? 'var(--cream-2)' : 'transparent',
                      border: 'none', borderRadius: 'var(--r-sm)',
                      padding: '0.7rem 1rem',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.95rem', cursor: 'pointer', textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
