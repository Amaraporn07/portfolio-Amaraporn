import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Github, ExternalLink, ChevronDown, ChevronUp, Code2, CheckCircle, Layers, Folder } from 'lucide-react';

// Map project color → CSS vars
const C = {
  purple: { light: 'var(--purple-light)', mid: 'var(--purple-mid)', text: 'var(--purple)', bar: 'var(--purple)' },
  pink:   { light: 'var(--pink-light)',   mid: 'var(--pink-mid)',   text: 'var(--pink)',   bar: 'var(--pink)' },
  blue:   { light: 'var(--blue-light)',   mid: 'var(--blue-mid)',   text: 'var(--blue)',   bar: 'var(--blue)' },
  teal:   { light: 'var(--teal-light)',   mid: 'var(--teal-mid)',   text: 'var(--teal)',   bar: 'var(--teal)' },
  orange: { light: 'var(--orange-light)', mid: 'var(--orange-mid)', text: 'var(--orange)', bar: 'var(--orange)' },
} as const;

const categoryLabel: Record<string, string> = {
  all: 'All', fullstack: 'Full-Stack', backend: 'Back-End',
  mobile: 'Mobile', design: 'Design', other: 'Other',
};

const tagColorCycle = ['tag-red','tag-blue','tag-green','tag-yellow','tag-purple','tag-teal','tag-orange','tag-pink'];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const cats = ['all', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];
  const filtered = filter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ background: 'var(--cream-2)', borderTop: '1.5px solid var(--border-soft)', borderBottom: '1.5px solid var(--border-soft)' }}>
      <div className="section-wrap">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <span className="section-label" style={{ background: 'var(--green-light)', color: 'var(--green)', border: '1.5px solid var(--green-mid)' }}>
            <Code2 size={11} /> Portfolio Showcase
          </span>
          <h2 className="section-title">Proud Projects</h2>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            Real projects developed during studies, both individual and group works
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {cats.map(cat => (
            <button key={cat} onClick={() => { setFilter(cat); setExpanded(null); }}
              style={{
                padding: '6px 18px', borderRadius: 'var(--r-full)',
                border: `1.5px solid ${filter === cat ? 'var(--text-primary)' : 'var(--border)'}`,
                background: filter === cat ? 'var(--text-primary)' : 'var(--white)',
                color: filter === cat ? 'var(--cream)' : 'var(--text-secondary)',
                fontWeight: filter === cat ? 700 : 500, fontSize: '0.84rem', cursor: 'pointer',
                transition: 'all 0.18s ease', fontFamily: 'var(--font-body)',
                boxShadow: 'var(--shadow-xs)',
              }}>
              {categoryLabel[cat] ?? cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '1.25rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const c = C[project.color as keyof typeof C] ?? C.blue;
              const isOpen = expanded === project.id;

              return (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="card" style={{ display: 'flex', flexDirection: 'column' }}
                  id={`project-card-${project.id}`}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '4px', background: c.text, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }} />

                  <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {/* Category + Status */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        padding: '3px 11px', borderRadius: 'var(--r-full)',
                        fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                        background: c.light, border: `1.5px solid ${c.mid}`, color: c.text,
                      }}>
                        {project.category.toUpperCase()}
                      </span>
                      {project.status === 'completed' && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: 'var(--green)', fontWeight: 600 }}>
                          <CheckCircle size={12} /> Completed
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>

                    {/* Desc */}
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {project.tags.map((tag, ti) => (
                        <span key={tag} className={`tag ${tagColorCycle[ti % tagColorCycle.length]}`}>{tag}</span>
                      ))}
                    </div>

                    {/* Expandable */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ paddingTop: '0.85rem', borderTop: '1.5px dashed var(--border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Long desc */}
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.8,
                              padding: '0.75rem', background: 'var(--cream-2)', borderRadius: 'var(--r-md)',
                              border: '1.5px solid var(--border-soft)', margin: 0 }}>
                              {project.longDescription}
                            </p>
                            {/* Features */}
                            {project.features && (
                              <div>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                  Key Features
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                  {project.features.map((f, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', alignItems: 'flex-start' }}>
                                      <span style={{ color: c.text, flexShrink: 0, marginTop: '1px' }}>✦</span>
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {/* Stack */}
                            {project.architecture && (
                              <div>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                  🔧 Tech Stack
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                  {project.architecture.map((a, i) => (
                                    <div key={i} style={{
                                      fontSize: '0.75rem', color: 'var(--text-secondary)',
                                      fontFamily: 'var(--font-mono)', padding: '5px 10px',
                                      background: 'var(--cream-2)', borderRadius: 'var(--r-sm)',
                                      border: '1px solid var(--border-soft)',
                                    }}>→ {a}</div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer */}
                  <div style={{
                    padding: '0.9rem 1.4rem',
                    borderTop: '1.5px solid var(--border-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'var(--cream)',
                    borderRadius: '0 0 var(--r-lg) var(--r-lg)',
                  }}>
                    <button onClick={() => setExpanded(isOpen ? null : project.id)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 600,
                        display: 'flex', alignItems: 'center', gap: '4px',
                        fontFamily: 'var(--font-body)', transition: 'color 0.15s',
                      }}>
                      {isOpen ? 'Show less' : 'Details'}
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {project.repositories ? (
                        project.repositories.map(repo => (
                          <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer"
                            style={{
                              display: 'flex', alignItems: 'center', gap: '5px',
                              padding: '5px 12px', borderRadius: 'var(--r-full)',
                              background: 'var(--cream-2)', border: '1.5px solid var(--border)',
                              color: 'var(--text-primary)', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
                            }}>
                            <Github size={13} /> {repo.name}
                          </a>
                        ))
                      ) : project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer"
                          style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            padding: '5px 12px', borderRadius: 'var(--r-full)',
                            background: 'var(--cream-2)', border: '1.5px solid var(--border)',
                            color: 'var(--text-primary)', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
                          }}>
                          <Github size={13} /> Code
                        </a>
                      ) : null}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer"
                          style={{
                            display: 'flex', alignItems: 'center', gap: '5px',
                            padding: '5px 12px', borderRadius: 'var(--r-full)',
                            background: c.light, border: `1.5px solid ${c.mid}`, color: c.text,
                            fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none',
                          }}>
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
