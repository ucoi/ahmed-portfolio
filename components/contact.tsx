'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react'

import { Reveal } from './reveal'

const EMAIL = 'ahmedhisham1928@gmail.com'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = EMAIL
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 px-6 py-16 text-center md:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -top-32 left-1/2 h-[340px] w-[640px] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[110px]" />
              <div className="absolute -bottom-40 right-0 h-[300px] w-[300px] rounded-full bg-accent-2/[0.12] blur-[110px]" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xs text-accent">04</span>
                <span className="h-px w-8 bg-border" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  Contact
                </span>
              </div>

              <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Let&apos;s build something{' '}
                <span className="gradient-text">worth shipping.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">
                I&apos;m open to junior full-stack and AI-integrated roles, as
                well as interesting freelance projects. The fastest way to reach
                me is email.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${EMAIL}`} className="btn-primary w-full sm:w-auto">
                  <Mail size={17} />
                  Send an email
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn-secondary w-full sm:w-auto"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy address
                    </>
                  )}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
                <a
                  href="https://github.com/ucoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-white"
                >
                  <Github size={16} />
                  github.com/ucoi
                  <ArrowUpRight size={13} className="text-muted/60" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-hisham-03542915b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-white"
                >
                  <Linkedin size={16} />
                  LinkedIn
                  <ArrowUpRight size={13} className="text-muted/60" />
                </a>
              </div>

              <p className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Based in Hungary · open to remote EU
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
