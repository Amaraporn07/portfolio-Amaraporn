import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Zap, Server, Database, GitBranch, Palette, Code2, Layers, FileCode } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />, Zap: <Zap size={20} />, Layers: <Layers size={20} />,
  Server: <Server size={20} />, Database: <Database size={20} />, FileCode: <FileCode size={20} />,
  GitBranch: <GitBranch size={20} />, Palette: <Palette size={20} />,
};

// Rotate through accent colors
const COLORS = [
  { light: 'var(--red-light)',    mid: 'var(--red-mid)',    text: 'var(--red)',    bar: '#E84545' },
  { light: 'var(--blue-light)',   mid: 'var(--blue-mid)',   text: 'var(--blue)',   bar: '#3B82F6' },
  { light: 'var(--green-light)',  mid: 'var(--green-mid)',  text: 'var(--green)',  bar: '#22C55E' },
  { light: 'var(--yellow-light)', mid: 'var(--yellow-mid)', text: 'var(--yellow)', bar: '#F59E0B' },
  { light: 'var(--purple-light)', mid: 'var(--purple-mid)', text: 'var(--purple)', bar: '#8B5CF6' },
  { light: 'var(--pink-light)',   mid: 'var(--pink-mid)',   text: 'var(--pink)',   bar: '#EC4899' },
  { light: 'var(--teal-light)',   mid: 'var(--teal-mid)',   text: 'var(--teal)',   bar: '#14B8A6' },
  { light: 'var(--orange-light)', mid: 'var(--orange-mid)', text: 'var(--orange)', bar: '#F97316' },
];

const catLabel: Record<string, string> = {
  all: 'All', frontend: 'Frontend', backend: 'Backend',
  database: 'Database', devops: 'DevOps', design: 'Design', ai: 'AI/ML',
};

export default function Skills() {
  const [active, setActive] = useState('all');
  const cats = ['all', ...Array.from(new Set(SKILLS_DATA.map(s => s.category)))];
  const filtered = active === 'all' ? SKILLS_DATA : SKILLS_DATA.filter(s => s.category === active);

  return (
    <section id="skills" style={{ background: 'var(--cream)' }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <span className="section-label" style={{ background: 'var(--yellow-light)', color: 'var(--yellow)', border: '1.5px solid var(--yellow-mid)' }}>
            <Zap size={11} /> Technical Skills
          </span>
          <h2 className="section-title">Skills</h2>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            Technologies and tools from university courses and self-learning
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: '6px 16px', borderRadius: 'var(--r-full)',
                border: `1.5px solid ${active === cat ? 'var(--text-primary)' : 'var(--border)'}`,
                background: active === cat ? 'var(--text-primary)' : 'var(--white)',
                color: active === cat ? 'var(--cream)' : 'var(--text-secondary)',
                fontWeight: active === cat ? 700 : 500, fontSize: '0.82rem',
                cursor: 'pointer', transition: 'all 0.18s', fontFamily: 'var(--font-body)',
                boxShadow: 'var(--shadow-xs)',
              }}>
              {catLabel[cat] ?? cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {filtered.map((skill, idx) => {
            const c = COLORS[idx % COLORS.length];
            const pct = (skill.level / 5) * 100;

            return (
              <motion.div key={skill.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
                className="card"
                style={{ padding: '1.3rem', transition: 'transform 0.25s, box-shadow 0.25s' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', marginBottom: '0.9rem' }}>
                  {/* Icon */}
                  <div style={{
                    width: '44px', height: '44px', borderRadius: 'var(--r-md)',
                    background: c.light, border: `1.5px solid ${c.mid}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.text, flexShrink: 0,
                  }}>
                    {ICONS[skill.icon] ?? <Code2 size={20} />}
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', margin: '0 0 3px' }}>
                      {skill.name}
                    </h3>
                    <span style={{
                      padding: '2px 9px', borderRadius: 'var(--r-full)', fontSize: '0.67rem',
                      fontWeight: 700, fontFamily: 'var(--font-mono)',
                      background: c.light, border: `1px solid ${c.mid}`, color: c.text,
                    }}>
                      {catLabel[skill.category] ?? skill.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.7, marginBottom: '0.9rem' }}>
                  {skill.description}
                </p>

                {/* Skill bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Proficiency</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: c.text, fontFamily: 'var(--font-mono)' }}>
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.04, ease: 'easeOut' }}
                      style={{ height: '100%', borderRadius: 'var(--r-full)', background: c.bar }}
                    />
                  </div>
                  {/* Dots */}
                  <div style={{ display: 'flex', gap: '5px', marginTop: '6px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} style={{
                        width: '7px', height: '7px', borderRadius: '50%',
                        background: i < skill.level ? c.bar : 'var(--cream-3)',
                        transition: 'background 0.3s',
                      }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
