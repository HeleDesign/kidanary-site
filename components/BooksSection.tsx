'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

interface Book {
  id: number
  title: string
  genre: string
  desc: string
  price: string
  gradient: string
  glowColor: string
  emoji: string
  src: string
}

const BOOKS: Book[] = [
  { id: 1, title: 'The Magical Stardust Forest', genre: 'Fantasy Adventure', desc: 'A brave young explorer discovers a hidden forest where every star has a name — and one star has been waiting just for them.', price: '$49', gradient: 'linear-gradient(145deg,#E8F0D8,#C8DFB4)', glowColor: 'rgba(201,184,232,0.4)', emoji: '🌟', src: '/books/stardust-forest.png' },
  { id: 2, title: 'The Dream Keeper', genre: 'Bedtime Classic', desc: 'Every night a little guardian collects the sweetest dreams — until the night they must save their very own dreamland from fading away.', price: '$49', gradient: 'linear-gradient(145deg,#D8E8F0,#B4C8DF)', glowColor: 'rgba(180,200,223,0.45)', emoji: '🌙', src: '/books/dream-keeper.png' },
  { id: 3, title: 'Eternal Legends', genre: 'Epic Quest', desc: "An ancient prophecy foretold a hero would rise — and now the whole kingdom discovers it's been about your child all along.", price: '$49', gradient: 'linear-gradient(145deg,#F0D8E8,#DFB4C8)', glowColor: 'rgba(223,180,200,0.45)', emoji: '⚔️', src: '/books/eternal-legends.png' },
]

const CARD_STYLES = `.book-card:hover { box-shadow: 0 32px 80px rgba(45,45,45,0.14), 0 0 0 1px rgba(212,175,55,0.25); } .book-glow { opacity: 0; transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1); pointer-events: none; } .book-card:hover .book-glow { opacity: 1; } .book-card:hover .book-arrow { background: #D4AF37; color: #2D2D2D; transform: rotate(45deg); }`

function BookCard({ book, index }: { book: Book; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) / r.width
    const y = (e.clientY - r.top - r.height / 2) / r.height
    gsap.to(cardRef.current, { rotateY: x * 8, rotateX: -y * 5, duration: 0.5, ease: 'power2.out', transformPerspective: 800 })
  }
  const handleMouseLeave = () => {
    if (!cardRef.current) return
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1,0.6)' })
  }
  return (
    <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}>
      <div ref={cardRef} className="book-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ background: '#fff', borderRadius: 2, overflow: 'hidden', transformStyle: 'preserve-3d', transition: 'box-shadow 0.6s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{ position: 'relative', aspectRatio: '4/5', background: book.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', padding: 32 }}>
            <div style={{ fontSize: 72, marginBottom: 12, opacity: 0.6 }}>{book.emoji}</div>
            <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.3rem', fontStyle: 'italic', color: 'rgba(45,45,45,0.65)', lineHeight: 1.3 }}>{book.title}</div>
            <div style={{ marginTop: 20, width: 70, height: 70, borderRadius: '50%', background: 'rgba(201,184,232,0.35)', border: '2px dashed rgba(201,184,232,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(45,45,45,0.45)', margin: '20px auto 0' }}>Your Child</div>
          </div>
          <div className="book-glow" style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%,${book.glowColor},transparent 70%)` }} />
        </div>
        <div style={{ padding: '28px 28px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'linear-gradient(135deg,rgba(201,184,232,0.2),rgba(245,213,197,0.2))', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 40, padding: '5px 14px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A7F74', marginBottom: 14 }}>
            <span style={{ color: '#D4AF37', fontSize: 9 }}>&#10022;</span>
            {book.genre}
          </div>
          <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.55rem', fontWeight: 400, color: '#2D2D2D', marginBottom: 10, lineHeight: 1.2 }}>{book.title}</h3>
          <p style={{ fontFamily: 'Inter,sans-serif', fontSize: '0.82rem', fontWeight: 300, color: '#8A7F74', lineHeight: 1.8, marginBottom: 24 }}>{book.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(212,175,55,0.12)', paddingTop: 18 }}>
            <div>
              <span style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A7F74' }}>Starting from</span>
              <strong style={{ display: 'block', fontFamily: 'Cormorant Garamond,serif', fontSize: '1.05rem', fontStyle: 'italic', fontWeight: 500, color: '#2D2D2D' }}>{book.price}</strong>
            </div>
            <div className="book-arrow" style={{ width: 36, height: 36, border: '1px solid rgba(212,175,55,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: 14, transition: 'background 0.4s, transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}>{'\u2192'}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function BooksSection() {
  return (
    <section id="books" style={{ padding: '140px 48px 120px', background: 'linear-gradient(180deg,#FAF7F2 0%,#E8E4F0 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72, flexWrap: 'wrap', gap: 24 }}>
        <div>
          <motion.span className="section-eyebrow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Our Collection</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }} style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: 'clamp(2rem,4vw,3.6rem)', fontWeight: 400, color: '#2D2D2D', lineHeight: 1.15, marginBottom: 18 }}>
            Stories as unique<br />as your child
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{ fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: 300, color: '#8A7F74', lineHeight: 1.9, maxWidth: 500 }}>
            Each book is a world built around one extraordinary child — your child. Choose a story, add their name and photo, and watch the magic unfold.
          </motion.p>
        </div>
        <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ fontFamily: 'Inter', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#2D2D2D', textDecoration: 'none', borderBottom: '1px solid #D4AF37', paddingBottom: 4 }}>View All Titles</motion.a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32 }}>
        {BOOKS.map((book, i) => (<BookCard key={book.id} book={book} index={i} />))}
      </div>
      <style>{CARD_STYLES}</style>
    </section>
  )
}
