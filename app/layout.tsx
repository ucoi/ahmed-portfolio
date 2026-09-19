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

export const metadata: Metadata = {
  title: 'Ahmed Hisham | Full-Stack Developer',
  description: 'Junior Full-Stack Developer specializing in React, Next.js, TypeScript, and AI-integrated web applications.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'AI Integration', 'Firebase'],
  authors: [{ name: 'Ahmed Hisham' }],
  creator: 'Ahmed Hisham',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ahmed Hisham | Full-Stack Developer',
    description: 'Junior Full-Stack Developer specializing in React, Next.js, TypeScript, and AI-integrated web applications.',
    siteName: 'Ahmed Hisham Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Hisham | Full-Stack Developer',
    description: 'Junior Full-Stack Developer specializing in React, Next.js, TypeScript, and AI-integrated web applications.',
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
