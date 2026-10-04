import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-portfolio-rouge-three.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ahmed Hisham | Full-Stack & AI Agent Security Developer',
  description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Python, and AI agent security / integration.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Python', 'AI Agent Security', 'AI Integration', 'Docker'],
  authors: [{ name: 'Ahmed Hisham' }],
  creator: 'Ahmed Hisham',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ahmed Hisham | Full-Stack & AI Agent Security Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Python, and AI agent security / integration.',
    siteName: 'Ahmed Hisham Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Hisham, Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Hisham | Full-Stack & AI Agent Security Developer',
    description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Python, and AI agent security / integration.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-white antialiased">
        {children}
      </body>
    </html>
  )
}
