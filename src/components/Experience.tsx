import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES_DATA } from '../data';
import { GraduationCap, Briefcase, CheckCircle, Calendar } from 'lucide-react';

const ACCENT = [
  { light: 'var(--blue-light)',   mid: 'var(--blue-mid)',   text: 'var(--blue)',   dot: '#3B82F6' },
  { light: 'var(--green-light)',  mid: 'var(--green-mid)',  text: 'var(--green)',  dot: '#22C55E' },
  { light: 'var(--purple-light)', mid: 'var(--purple-mid)', text: 'var(--purple)', dot: '#8B5CF6' },
];

export default function Experience() {
  const [sel, setSel] = useState(0);

  return (
    <section id="experience" style={{ background: 'var(--cream-2)', borderTop: '1.5px solid var(--border-soft)', borderBottom: '1.5px solid var(--border-soft)' }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <span className="section-label" style={{ background: 'var(--blue-light)', color: 'var(--blue)', border: '1.5px solid var(--blue-mid)' }}>
            <Calendar size={11} /> History & Timeline
          </span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            Learning journey inside and outside the classroom
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* Tab selector */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {EXPERIENCES_DATA.map((exp, idx) => {
              const c = ACCENT[idx % ACCENT.length];
              const isActive = sel === idx;
              return (
                <motion.button key={idx} onClick={() => setSel(idx)}
                  whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 1.1rem',
                    background: isActive ? c.light : 'var(--white)',
                    border: `1.5px solid ${isActive ? c.mid : 'var(--border)'}`,
                    borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.2s ease', position: 'relative', overflow: 'hidden',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'var(--shadow-xs)',
                  }}>
                  {isActive && (
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: c.dot, borderRadius: '0 2px 2px 0' }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '8px',
                      background: isActive ? c.dot : 'var(--cream-3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isActive ? 'white' : 'var(--text-muted)', flexShrink: 0,
                    }}>
                      {idx === 0 ? <GraduationCap size={16} /> : <Briefcase size={16} />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: '0 0 2px', fontFamily: 'var(--font-mono)' }}>
                        {exp.period}
                      </p>
                      <p style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--text-primary)', margin: 0,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {exp.role.split(' / ')[0]}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Detail panel */}
          <div>
            <AnimatePresence mode="wait">
              {EXPERIENCES_DATA.map((exp, idx) => {
                if (idx !== sel) return null;
                const c = ACCENT[idx % ACCENT.length];
                return (
                  <motion.div key={idx}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.28 }}
                    className="card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
                    {/* Top stripe */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.dot }} />

                    {/* Period */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px',
                      padding: '4px 12px', borderRadius: 'var(--r-full)', marginBottom: '1rem',
                      background: c.light, border: `1.5px solid ${c.mid}`, color: c.text,
                      fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={11} /> {exp.period}
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 5px' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: c.text, fontWeight: 600, fontSize: '0.85rem', margin: '0 0 1.3rem' }}>→ {exp.company}</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {exp.description.map((bullet, bidx) => (
                        <motion.div key={bidx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + bidx * 0.07 }}
                          style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <CheckCircle size={15} style={{ color: c.text, flexShrink: 0, marginTop: '2px' }} />
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>{bullet}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div style={{ marginTop: '1.25rem', paddingTop: '0.9rem', borderTop: '1.5px dashed var(--border)',
                      fontSize: '0.7rem', color: 'var(--text-placeholder)', fontFamily: 'var(--font-mono)',
                      display: 'flex', justifyContent: 'space-between' }}>
                      <span>University of Phayao · UP</span>
                      <span>#{String(idx + 1).padStart(2, '0')} / {String(EXPERIENCES_DATA.length).padStart(2, '0')}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience .section-wrap > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
