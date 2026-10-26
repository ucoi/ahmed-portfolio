'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, Menu, X } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#stack', label: 'Stack', id: 'stack' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight

      setScrolled(y > 12)
      setProgress(max > 0 ? Math.min(1, y / max) : 0)

      let current = ''
      const threshold = 140
      for (const link of links) {
        const section = document.getElementById(link.id)
        if (section && section.getBoundingClientRect().top <= threshold) {
          current = link.id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress */}
      <div className="h-[2px] w-full">
        <div
          className="h-full bg-gradient-to-r from-accent via-accent to-accent-2"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header
        className={`transition-colors duration-300 ${
          scrolled
            ? 'border-b border-border/80 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/25 bg-accent/10 font-mono text-[13px] font-semibold text-accent transition-colors group-hover:bg-accent/15">
              AH
            </span>
            <span className="whitespace-nowrap text-sm font-medium tracking-tight text-white">
              Ahmed Hisham
              <span className="hidden text-muted lg:inline">
                {' '}
                · Full-Stack Developer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === link.id
                    ? 'bg-white/[0.06] text-white'
                    : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ucoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 w-9 place-items-center rounded-lg border border-transparent text-muted transition-colors hover:border-border hover:text-white sm:grid"
            >
              <Github size={17} />
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-background transition-colors hover:bg-white/90 sm:inline-flex"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-white lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <nav className="container-page flex flex-col py-3" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-background"
              >
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}
