import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CERTIFICATES_DATA } from '../data';
import { Award, Code2, Database, Layers, GitBranch, Palette, ExternalLink, Trophy, Star } from 'lucide-react';

const ICONS: Record<string, ReactNode> = {
  Award: <Award size={22} />, Code2: <Code2 size={22} />, Database: <Database size={22} />,
  Layers: <Layers size={22} />, GitBranch: <GitBranch size={22} />, Palette: <Palette size={22} />,
};

// Rich accent colors that match each cert
const CERT_COLORS = [
  { light: 'var(--orange-light)', mid: 'var(--orange-mid)', text: 'var(--orange)', solid: '#F97316' },
  { light: 'var(--yellow-light)', mid: 'var(--yellow-mid)', text: 'var(--yellow)', solid: '#F59E0B' },
  { light: 'var(--blue-light)',   mid: 'var(--blue-mid)',   text: 'var(--blue)',   solid: '#3B82F6' },
  { light: 'var(--teal-light)',   mid: 'var(--teal-mid)',   text: 'var(--teal)',   solid: '#14B8A6' },
  { light: 'var(--green-light)',  mid: 'var(--green-mid)',  text: 'var(--green)',  solid: '#22C55E' },
  { light: 'var(--red-light)',    mid: 'var(--red-mid)',    text: 'var(--red)',    solid: '#E84545' },
];

export default function Certificates() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" style={{ background: 'var(--cream)' }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <span className="section-label" style={{ background: 'var(--red-light)', color: 'var(--red)', border: '1.5px solid var(--red-mid)' }}>
            <Trophy size={11} /> Achievements
          </span>
          <h2 className="section-title">Certificates & Awards</h2>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            Certifications from self-learning through leading online platforms
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.1rem' }}>
          {CERTIFICATES_DATA.map((cert, idx) => {
            const c = CERT_COLORS[idx % CERT_COLORS.length];
            const isOpen = selected === cert.id;

            return (
              <motion.div key={cert.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
                onClick={() => setSelected(isOpen ? null : cert.id)}
                className="card"
                style={{
                  padding: '1.3rem', cursor: 'pointer',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  borderColor: isOpen ? c.mid : 'var(--border-soft)',
                  boxShadow: isOpen ? `var(--shadow-md)` : 'var(--shadow-xs)',
                  position: 'relative', overflow: 'hidden',
                }}
                id={`cert-${cert.id}`}
              >
                {/* Top stripe */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.solid, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }} />

                {/* Icon + Issuer row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.9rem', paddingTop: '4px' }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: 'var(--r-md)',
                    background: c.light, border: `1.5px solid ${c.mid}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.text, flexShrink: 0,
                  }}>
                    {ICONS[cert.icon] ?? <Award size={22} />}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'block', padding: '3px 10px', borderRadius: 'var(--r-full)',
                      fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                      background: c.light, border: `1.5px solid ${c.mid}`, color: c.text, marginBottom: '3px',
                    }}>
                      {cert.issuer}
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '0.97rem', color: 'var(--text-primary)', margin: '0 0 6px', lineHeight: 1.4 }}>
                  {cert.title}
                </h3>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '8px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} style={{ color: i < 4 ? c.solid : 'var(--cream-3)', fill: i < 4 ? c.solid : 'var(--cream-3)' }} />
                  ))}
                </div>

                {/* Expandable desc */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.8,
                        paddingTop: '0.8rem', marginTop: '6px', borderTop: '1.5px dashed var(--border)',
                        marginBottom: '10px',
                      }}>
                        {cert.description}
                      </p>
                      {cert.credentialUrl && /\.(png|jpe?g|svg|webp)/i.test(cert.credentialUrl) && (
                        <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid var(--border-soft)' }}>
                          <img src={cert.credentialUrl} alt={cert.title} style={{ width: '100%', display: 'block' }} />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer hint + link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-placeholder)' }}>
                    {isOpen ? 'Click to hide' : 'Click for details'}
                  </span>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '4px 10px', borderRadius: 'var(--r-full)',
                        background: c.light, border: `1.5px solid ${c.mid}`, color: c.text,
                        fontSize: '0.72rem', fontWeight: 600, textDecoration: 'none',
                        transition: 'filter 0.15s',
                      }}>
                      <ExternalLink size={10} /> View Credential
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: '2.5rem', padding: '1.25rem 2rem',
            background: 'var(--white)', border: '1.5px solid var(--border)',
            borderRadius: 'var(--r-xl)', display: 'flex', justifyContent: 'center',
            gap: '3rem', flexWrap: 'wrap', boxShadow: 'var(--shadow-xs)',
          }}>
          {[
            { value: `${CERTIFICATES_DATA.length}`, label: 'Certificates', color: 'var(--red)' },
            { value: '3+',             label: 'Platforms', color: 'var(--blue)' },
            { value: '2024–2025',       label: 'Timeline',   color: 'var(--green)' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.9rem', fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
