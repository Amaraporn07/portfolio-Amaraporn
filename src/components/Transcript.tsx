import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, X, Maximize2 } from 'lucide-react';
import transcriptImg from '../assets/images/transcript.png';

export default function Transcript() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <section id="transcript" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}
        >
          <span className="section-label" style={{ background: 'var(--yellow-light)', color: 'var(--yellow)', border: '1.5px solid var(--yellow-mid)' }}>
            <FileText size={11} /> Academic Records
          </span>
          <h2 className="section-title">Transcript</h2>
          <p className="section-sub" style={{ marginTop: '0.8rem' }}>
            My academic performance and coursework
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="card"
            style={{ 
              cursor: 'pointer', 
              width: '100%', 
              maxWidth: '700px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              gap: '1rem',
              background: 'var(--cream-2)',
              border: '3px solid var(--black)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}
          >
            {/* GPAX Badge */}
            <div style={{
              position: 'absolute', top: '-15px', right: '-15px',
              background: 'var(--yellow)', color: 'var(--black)',
              border: '3px solid var(--black)', borderRadius: '16px',
              padding: '0.5rem 1.25rem', fontWeight: 900, fontSize: '1.25rem',
              boxShadow: '4px 4px 0px 0px var(--black)',
              transform: 'rotate(5deg)',
              zIndex: 10
            }}>
              GPAX 3.28
            </div>

            <div style={{
              width: '100%', 
              border: '3px solid var(--black)', borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '4px 4px 0px 0px var(--black)',
              marginBottom: '0.5rem',
              background: '#fff'
            }}>
              <img 
                src={transcriptImg} 
                alt="Transcript Preview" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Transcript</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>Click to view full transcript document</p>
            
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px', 
              fontWeight: 800, fontSize: '0.9rem', marginTop: '1rem',
              color: 'var(--black)', background: 'var(--yellow)', 
              padding: '0.6rem 1.25rem', border: '2.5px solid var(--black)',
              boxShadow: '3px 3px 0px 0px var(--black)',
              borderRadius: '8px'
            }}>
              <Maximize2 size={16} strokeWidth={3} /> Expand
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <div 
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.85)', zIndex: 9999,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '2rem'
              }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'var(--cream)',
                  width: '100%', maxWidth: '1000px', height: '85vh',
                  border: '4px solid var(--black)',
                  boxShadow: '8px 8px 0px 0px var(--black)',
                  borderRadius: '16px',
                  display: 'flex', flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div style={{
                  padding: '1.25rem 1.5rem', borderBottom: '4px solid var(--black)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'var(--yellow)'
                }}>
                  <h3 style={{ fontWeight: 900, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={20} /> Academic Transcript
                  </h3>
                  <button 
                    onClick={() => setIsOpen(false)}
                    style={{
                      background: 'var(--red)', border: '3px solid var(--black)',
                      width: '40px', height: '40px', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: 'white',
                      boxShadow: '3px 3px 0px 0px var(--black)',
                      transition: 'transform 0.1s'
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0px, 0px)'}
                  >
                    <X size={22} strokeWidth={3} />
                  </button>
                </div>
                <div style={{ flex: 1, background: '#f0f0f0', position: 'relative', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
                  <img 
                    src={transcriptImg} 
                    alt="Transcript"
                    style={{ maxWidth: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
