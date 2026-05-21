'use client'

import { useEffect, useRef } from 'react'

export default function Sparkles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const COUNT = 22
    const sparkles: HTMLDivElement[] = []

    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement('div')
      const size = Math.random() * 6 + 2
      s.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background: #D4AF37;
        clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
        opacity: 0;
        animation: sparkleFly ${Math.random() * 4 + 5}s ease-in-out ${Math.random() * 6}s infinite;
      `
      container.appendChild(s)
      sparkles.push(s)
    }

    return () => {
      sparkles.forEach(s => s.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9997, overflow: 'hidden' }}
    />
  )
}
