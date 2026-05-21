'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Scene {
  id: string
  start: number
  peak: number
  end: number
  pretitle?: string
  headline: string
  sub?: string
  isCta?: boolean
}

const SCENES: Scene[] = [
  { id: 's1', start: 0.05, peak: 0.10, end: 0.18, pretitle: 'A Story For Every Child', headline: 'Turn Their Memory\nInto A Story' },
  { id: 's2', start: 0.20, peak: 0.25, end: 0.33, headline: 'A cherished moment.\nTheir photo. A quiet dream.', sub: 'Woven together into pages that feel like magic.' },
  { id: 's3', start: 0.40, peak: 0.45, end: 0.53, pretitle: 'Illustrated Just For Them', headline: 'Every page, drawn\nto match their smile' },
  { id: 's4', start: 0.60, peak: 0.65, end: 0.73, headline: 'Not just a book.\nA bedtime ritual.', sub: "Stories they'll ask for night after night, year after year." },
  { id: 's5', start: 0.82, peak: 0.88, end: 1.00, pretitle: 'Begin The Adventure', headline: 'Create Their Story', isCta: true },
]

const SCROLL_PULSE_CSS = `@keyframes scrollPulse { 0%, 100% { transform: scaleY(1); opacity: 0.5; } 50% { transform: scaleY(1.4); opacity: 1; } }`

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sceneRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    video.load()
    const onMeta = () => { video.pause(); video.currentTime = 0 }
    video.addEventListener('loadedmetadata', onMeta)

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=3000',
      scrub: 1,
      onUpdate(self) {
        const p = self.progress
        if (scrollHintRef.current) {
          scrollHintRef.current.style.opacity = p < 0.04 ? '1' : String(Math.max(0, 1 - (p - 0.04) * 20))
        }
        if (video.duration && !isNaN(video.duration)) {
          const target = p * video.duration
          if (Math.abs(video.currentTime - target) > 0.05) {
            video.currentTime = target
          }
        }
        SCENES.forEach(({ id, start, peak, end }) => {
          const el = sceneRefs.current.get(id)
          if (!el) return
          let alpha = 0, ty = 0
          if (p >= start && p < peak) { const t = (p - start) / (peak - start); alpha = t; ty = (1 - t) * 30 }
          else if (p >= peak && p < end) { const t = (p - peak) / (end - peak); alpha = 1 - t; ty = -t * 20 }
          el.style.opacity = String(alpha)
          el.style.transform = `translateY(${ty}px)`
        })
      },
    })

    return () => { video.removeEventListener('loadedmetadata', onMeta); st.kill() }
  }, [])

  const setSceneRef = (id: string) => (el: HTMLDivElement | null) => { if (el) sceneRefs.current.set(id, el) }

  return (
    <section ref={sectionRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        <video ref={videoRef} src="/hero.mp4" muted playsInline preload="auto" poster="/hero-poster.jpg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.28))', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,0.55) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', pointerEvents: 'none' }}>
          {SCENES.map(({ id, pretitle, headline, sub, isCta }) => (
            <div key={id} ref={setSceneRef(id)} style={{ position: 'absolute', width: '90%', maxWidth: 820, opacity: 0, pointerEvents: isCta ? 'all' : 'none' }}>
              {pretitle && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9B8E8', display: 'block', marginBottom: 20 }}>{pretitle}</span>}
              <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontStyle: sub && !isCta ? 'italic' : 'normal', fontSize: sub ? 'clamp(1.6rem,3.5vw,3rem)' : 'clamp(2.6rem,5.5vw,5rem)', lineHeight: 1.1, color: '#FFFFFF', textShadow: '0 2px 32px rgba(0,0,0,0.3)', whiteSpace: 'pre-line', margin: 0 }}>{headline}</h1>
              {sub && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.85rem,1.5vw,1rem)', fontWeight: 300, color: 'rgba(255,255,255,0.78)', letterSpacing: '0.08em', marginTop: 18, lineHeight: 1.8 }}>{sub}</p>}
              {isCta && <a href="#books" style={{ display: 'inline-block', marginTop: 44, padding: '18px 56px', border: '1px solid #D4AF37', color: '#D4AF37', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.5s, color 0.5s', pointerEvents: 'all', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#D4AF37'; e.currentTarget.style.color = '#2D2D2D' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#D4AF37' }}>Start Creating — It's Magical</a>}
            </div>
          ))}
        </div>
        <div ref={scrollHintRef} style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-5
