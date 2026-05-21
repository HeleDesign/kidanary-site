'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-500"
      style={{
        padding: scrolled ? '16px 48px' : '24px 48px',
        background: scrolled ? 'rgba(250,247,242,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : 'none',
      }}
    >
      <Image
        src="/kidanary.svg"
        alt="KIDANARY"
        width={160}
        height={scrolled ? 32 : 42}
        priority
        style={{
          height: scrolled ? 32 : 42,
          width: 'auto',
          transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1)',
          mixBlendMode: 'multiply',
        }}
      />
      <ul className="hidden md:flex gap-9 list-none items-center">
        {['Collection', 'How It Works', 'Stories'].map(item => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-sans text-[11px] font-normal tracking-[0.25em] uppercase text-charcoal no-underline transition-colors duration-300 hover:text-gold relative group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-500 ease-luxury group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#books"
            className="border border-gold text-gold px-7 py-2.5 text-[11px] tracking-[0.2em] uppercase no-underline transition-all duration-500 hover:bg-gold hover:text-charcoal"
          >
            Create Now
          </Link>
        </li>
      </ul>
    </nav>
  )
}
