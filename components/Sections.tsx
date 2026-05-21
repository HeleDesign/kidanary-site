'use client'

import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Choose a Story', desc: 'Browse our curated library of magical worlds, from enchanted forests to cosmic adventures, each waiting for its hero.' },
  { n: '02', title: 'Add Their Details', desc: 'Upload their photo, enter their name, and share one special memory or dream. Our artists do the rest.' },
  { n: '03', title: 'We Craft The Magic', desc: 'Our illustrators bring your child into every page — their face, their world, their story. Entirely unique, entirely theirs.' },
  { n: '04', title: 'Delivered With Love', desc: 'A premium hardcover arrives at your door, wrapped as a gift, ready for the very first bedtime reading.' },
]

export function ProcessSection() {
  return (
    <section id="process" style={{ padding: '140px 48px', background: '#E8E4F0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 580 }}>
        <motion.span
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          The Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.6rem)', fontWeight: 400, color: '#2D2D2D', lineHeight: 1.15, marginBottom: 0 }}
        >
          From a spark of an idea<br />to a keepsake forever
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 2, marginTop: 72, border: '1px solid rgba(212,175,55,0.1)' }}>
        {STEPS.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="process-step"
            style={{
              padding: '48px 36px',
              background: 'rgba(250,247,242,0.5)',
              borderRight: '1px solid rgba(212,175,55,0.1)',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.5s',
            }}
          >
            <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '4rem', fontWeight: 300, color: 'rgba(212,175,55,0.15)', lineHeight: 1, marginBottom: 20 }}>
              {step.n}
            </div>
            <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.4rem', fontWeight: 400, color: '#2D2D2D', marginBottom: 12 }}>
              {step.title}
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', fontWeight: 300, color: '#8A7F74', lineHeight: 1.85 }}>
              {step.desc}
            </p>
            <div className="step-line" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
              background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)',
              transform: 'scaleX(0)',
              transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
            }} />
          </motion.div>
        ))}
      </div>
      <style>{`.process-step:hover { background: rgba(250,247,242,0.9) !important; } .process-step:hover .step-line { transform: scaleX(1); }`}</style>
    </section>
  )
}

const STATS = [
  { value: '12,000+', label: 'Stories Created' },
  { value: '48+', label: 'Countries' },
  { value: '4.98★', label: 'Average Rating' },
]

export function TestimonialSection() {
  return (
    <section id="testimonial" style={{ padding: '140px 48px', background: '#2D2D2D', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{
        position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'Cormorant Garamond,serif', fontSize: '30rem',
        color: 'rgba(212,175,55,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
      }}>
        &ldquo;
      </div>
      <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)', margin: '0 auto 48px' }} />
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.92)', lineHeight: 1.4, maxWidth: 820, margin: '0 auto 32px', position: 'relative', zIndex: 1 }}
      >
        "The moment my daughter saw herself on the cover — really <em>saw</em> herself, as the hero — she burst into tears. Then I did too."
      </motion.blockquote>
      <p style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', position: 'relative', zIndex: 1 }}>
        — Sofia Martínez, mother of Isabella, 6
      </p>
      <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg,transparent,#D4AF37,transparent)', margin: '28px auto 48px' }} />
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>
        {STATS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '2.8rem', fontWeight: 400, color: '#D4AF37' }}>{value}</div>
            <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const FOOTER_LINKS = {
  Stories: ['The Magical Stardust Forest', 'The Dream Keeper', 'Eternal Legends', 'View All Titles'],
  Company: ['Our Story', 'Illustrators', 'Press', 'Careers'],
  Support: ['FAQ', 'Shipping', 'Returns', 'Contact Us'],
}
const LANGS = ['EN', 'ES', 'DE', 'FR', 'AR', 'TR', 'FA']

export function Footer() {
  return (
    <footer style={{ background: '#3D3A38', padding: '80px 48px 48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 56, flexWrap: 'wrap', gap: 40 }}>
        <div>
          <img src="/kidanary.svg" alt="KIDANARY" style={{ height: 36, filter: 'brightness(10) saturate(0)', opacity: 0.85, marginBottom: 16, display: 'block' }} />
          <p style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>
            Every child becomes the hero.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <h4 style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>{col}</h4>
              {links.map(l => <a key={l} href="#" style={{ display: 'block', fontFamily: 'Inter', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12 }}>{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)', marginBottom: 32 }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <p style={{ fontFamily: 'Inter', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
          © 2025 KIDANARY. All rights reserved. Crafted with love.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          {LANGS.map((l, i) => (
            <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <button style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', border: 'none', background: 'none', cursor: 'none' }}>
                {l}
              </button>
              {i < LANGS.length - 1 && <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: 10 }}>·</span>}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Instagram', 'TikTok', 'Pinterest'].map(s => (
            <a key={s} href="#" aria-label={s} style={{
              width: 34, height: 34, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
              fontFamily: 'Inter', fontSize: 10, transition: 'border-color 0.3s, color 0.3s',
            }}>
              {s[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
