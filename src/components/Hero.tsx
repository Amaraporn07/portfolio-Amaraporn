import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download, Github, Linkedin, Mail, Sparkles, GraduationCap,
  Star, Code2, FileText, X, Printer, BookOpen, Coffee
} from 'lucide-react';

interface HeroProps { avatarUrl: string; }

const roles = ['Web Developer', 'UI Enthusiast', 'Database Designer', 'CS Student'];

export default function Hero({ avatarUrl }: HeroProps) {
  const [showModal, setShowModal] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const fullText = '3rd Year Computer Science Student';

  // Typing effect
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) { setTyped(fullText.slice(0, ++i)); }
      else clearInterval(t);
    }, 65);
    return () => clearInterval(t);
  }, []);

  // Role rotation
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(p => (p + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const accentColors = [
    { label: 'HTML/CSS', color: 'var(--red)',    bg: 'var(--red-light)',    border: 'var(--red-mid)' },
    { label: 'React',    color: 'var(--blue)',   bg: 'var(--blue-light)',   border: 'var(--blue-mid)' },
    { label: 'Node.js',  color: 'var(--green)',  bg: 'var(--green-light)',  border: 'var(--green-mid)' },
    { label: 'MySQL',    color: 'var(--yellow)', bg: 'var(--yellow-light)', border: 'var(--yellow-mid)' },
    { label: 'Figma',    color: 'var(--purple)', bg: 'var(--purple-light)', border: 'var(--purple-mid)' },
  ];

  return (
    <section id="hero" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle dots bg */}
      <div className="dots-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />


      <div className="section-wrap" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>

          {/* ── Left: Text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="section-label" style={{ background: 'var(--yellow-light)', color: 'var(--yellow)', border: '1.5px solid var(--yellow-mid)' }}>
                <Sparkles size={11} /> Portfolio 2025
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
              <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                <span style={{ color: 'var(--text-primary)' }}>
                  My Portfolio
                </span>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.72em', marginTop: '4px' }}>
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Typed subtitle */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>
                {typed}
                <span style={{ borderLeft: '2px solid var(--blue)', marginLeft: '2px', animation: 'fade-in 0.8s ease infinite alternate' }}>&nbsp;</span>
              </p>
              <div style={{ height: '28px', overflow: 'hidden', marginTop: '4px' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIdx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0,  opacity: 1 }}
                    exit={{ y: -20,  opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                  >
                    {roles[roleIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* University chip */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px', borderRadius: 'var(--r-lg)',
                background: 'var(--white)', border: '1.5px solid var(--border)',
                boxShadow: 'var(--shadow-xs)',
              }}>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px',
                  background: 'var(--blue-light)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: 'var(--blue)', flexShrink: 0,
                }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0 }}>University of Phayao</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.77rem', margin: 0 }}>Computer Science · 3rd Year</p>
                </div>
              </div>
            </motion.div>


            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}
              style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <button className="btn btn-primary" onClick={() => setShowModal(true)} id="view-resume-btn">
                <FileText size={16} /> View Resume
              </button>
              <div style={{ display: 'flex', gap: '6px', marginLeft: '4px' }}>
                {[
                  { icon: <Github size={17} />, href: 'https://github.com',   bg: 'var(--text-primary)', fg: 'var(--cream)', label: 'GitHub' },
                  { icon: <Linkedin size={17}/>, href: 'https://linkedin.com', bg: 'var(--blue)',          fg: '#fff',         label: 'LinkedIn' },
                ].map(s => (
                  <motion.a
                    key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.9 }}
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: s.bg, color: s.fg, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      textDecoration: 'none', boxShadow: 'var(--shadow-sm)',
                    }}
                    id={`hero-${s.label.toLowerCase()}`}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── Right: Avatar Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
            className="float-anim"
          >
            <div style={{ position: 'relative', width: '300px' }}>
              {/* Main card */}
              <div style={{
                background: 'var(--white)', borderRadius: 'var(--r-xl)',
                border: '1.5px solid var(--border)', boxShadow: 'var(--shadow-lg)',
                padding: '1.5rem', overflow: 'visible', position: 'relative',
              }}>
                {/* Avatar */}
                <div style={{
                  borderRadius: 'var(--r-lg)', overflow: 'hidden',
                  aspectRatio: '3/4', marginBottom: '1.2rem',
                  background: 'var(--cream-2)',
                  border: '1.5px solid var(--border-soft)',
                }}>
                  <img src={avatarUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {/* Name */}
                <div style={{ textAlign: 'center' }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0 0 2px' }}>
                    My Portfolio
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', margin: '0 0 0.9rem' }}>Web Developer</p>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-placeholder)', fontSize: '0.8rem' }}>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            ↓ Scroll down for more
          </motion.span>
        </motion.div>
      </div>

      {/* ── Resume Modal ── */}
      <AnimatePresence>
        {showModal && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(28,25,23,0.5)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
          }}>
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              style={{
                background: 'var(--white)', borderRadius: 'var(--r-xl)',
                width: '100%', maxWidth: '660px', maxHeight: '90vh',
                overflowY: 'auto', boxShadow: 'var(--shadow-hover)',
                border: '1.5px solid var(--border)',
              }}
            >
              {/* Modal Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem', borderBottom: '1.5px solid var(--border-soft)',
                position: 'sticky', top: 0, background: 'var(--white)', borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
                zIndex: 1,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'var(--blue-light)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: 'var(--blue)',
                  }}>
                    <FileText size={16} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Resume</span>
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button onClick={() => window.print()} className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
                    <Printer size={13} /> Print
                  </button>
                  <button onClick={() => setShowModal(false)} style={{
                    background: 'var(--red-light)', border: '1.5px solid var(--red-mid)', borderRadius: '8px',
                    padding: '6px', cursor: 'pointer', color: 'var(--red)', display: 'flex',
                  }}>
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Resume Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', paddingBottom: '1.25rem', borderBottom: '1.5px solid var(--border-soft)' }}>
                  <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.9rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>
                    My Portfolio
                  </h2>
                  <p style={{ color: 'var(--blue)', fontWeight: 700, margin: '0 0 10px', fontSize: '0.9rem' }}>
                    Web Developer · 3rd Year CS
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>dev@example.com</span>
                    <span>University of Phayao</span>
                    <span>GPA 3.28</span>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Education</h3>
                  <div style={{ padding: '1rem', background: 'var(--blue-light)', border: '1.5px solid var(--blue-mid)', borderRadius: 'var(--r-md)' }}>
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 3px', fontSize: '0.92rem' }}>University of Phayao</p>
                    <p style={{ color: 'var(--text-secondary)', margin: '0 0 2px', fontSize: '0.83rem' }}>Bachelor of Science in Computer Science · 3rd Year</p>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.77rem', fontFamily: 'var(--font-mono)' }}>2023 - Present | GPA: 3.28</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Skills</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                    {[
                      { label: 'Frontend', items: 'HTML, CSS, JavaScript, React, Vue', color: 'red' },
                      { label: 'Backend',  items: 'Node.js, Express, PHP',              color: 'green' },
                      { label: 'Database', items: 'MySQL, PostgreSQL, SQLite',           color: 'blue' },
                      { label: 'Tools',    items: 'Git, GitHub, Figma, VS Code',         color: 'purple' },
                    ].map(s => (
                      <div key={s.label} style={{
                        padding: '0.7rem 0.9rem', background: 'var(--cream-2)',
                        border: '1.5px solid var(--border)', borderRadius: 'var(--r-md)',
                      }}>
                        <p style={{ fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 2px', fontSize: '0.78rem' }}>{s.label}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.73rem', fontFamily: 'var(--font-mono)' }}>{s.items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h3 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Key Projects</h3>
                  {[
                    { name: 'Student Portal System', tech: 'React + Node.js + MySQL',        dot: 'var(--red)' },
                    { name: 'E-Commerce Platform',   tech: 'Next.js + TypeScript + Postgres', dot: 'var(--blue)' },
                    { name: 'Library System',         tech: 'PHP + MySQL + Bootstrap',         dot: 'var(--green)' },
                  ].map(p => (
                    <div key={p.name} style={{
                      display: 'flex', gap: '10px', padding: '0.6rem 0',
                      borderBottom: '1px dashed var(--border)',
                    }}>
                      <div style={{ width: '3px', background: p.dot, borderRadius: '99px', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontWeight: 700, color: 'var(--text-primary)', margin: 0, fontSize: '0.83rem' }}>{p.name}</p>
                        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.73rem', fontFamily: 'var(--font-mono)' }}>{p.tech}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
