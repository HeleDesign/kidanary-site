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
  { id: 's1', start: 0.05, peak: 0.10, end: 0.18, pretitle: 'A Story
