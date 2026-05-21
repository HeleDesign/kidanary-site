import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import { ProcessSection, TestimonialSection, Footer } from '@/components/Sections'

// Lazy-load heavy client components
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false })
const Sparkles = dynamic(() => import('@/components/Sparkles'), { ssr: false })
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false })
const BooksSection = dynamic(() => import('@/components/BooksSection'), { ssr: false })

export default function Home() {
  return (
    <>
      <Cursor />
      <Sparkles />
      <Navbar />
      <main>
        <HeroSection />
        <BooksSection />
        <ProcessSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  )
}
