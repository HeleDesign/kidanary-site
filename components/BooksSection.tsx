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
        <div style={{ position: 'relative', aspectRatio: '4/5', background: book.gradient, display: 'flex', alignItems: 'center
