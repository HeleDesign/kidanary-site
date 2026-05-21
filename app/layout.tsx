import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KIDANARY — Every Child Becomes the Hero',
  description: 'Premium personalized children\'s books where every child becomes the hero of their own story.',
  openGraph: {
    title: 'KIDANARY',
    description: 'Turn your child\'s memory into a story.',
    images: ['/hero-poster.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
