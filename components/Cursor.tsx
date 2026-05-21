'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const mx = useRef(window.innerWidth / 2)
  const my = useRef(window.innerHeight / 2)
  const cx = useRef(mx.current)
  const cy = useRef(my.current)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
    }

    document.addEventListener('mousemove', onMove)

    const lerp = () => {
      cx.current += (mx.current - cx.current) * 0.12
      cy.current += (my.current - cy.current) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = cx.current + 'px'
        cursorRef.current.style.top = cy.current + 'px'
      }
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + 'px'
        dotRef.current.style.top = my.current + 'px'
      }
      rafRef.current = requestAnimationFrame(lerp)
    }
    rafRef.current = requestAnimationFrame(lerp)

    const interactables = document.querySelectorAll('a, button, .book-card')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () =>
        gsap.to(cursorRef.current, { scale: 1.8, duration: 0.4, ease: 'power2.out' })
      )
      el.addEventListener('mouseleave', () =>
        gsap.to(cursorRef.current, { scale: 1, duration: 0.4, ease: 'power2.out' })
      )
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%,-50%)' }}
      >
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
          <polygon
            points="14,2 16.5,10.5 25.5,10.5 18.5,16 21,24.5 14,19 7,24.5 9.5,16 2.5,10.5 11.5,10.5"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        ref={dotRef}
        id="cursor-dot"
        style={{
          position: 'fixed', width: 5, height: 5,
          background: '#D4AF37', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 10000,
          transform: 'translate(-50%,-50%)',
        }}
      />
    </>
  )
}
