import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight, Check, Cpu, Github } from 'lucide-react'

import { Reveal } from './reveal'

export type ProjectFeature = {
  icon: LucideIcon
  label: string
  desc: string
}

export type ProjectHighlight = {
  title: string
  body: string
}

export function FeaturedProject({
  index,
  label,
  title,
  description,
  features,
  stats,
  highlights,
  highlightsTitle,
  stack,
  demo,
  repo,
  note,
  visual,
  reversed = false,
}: {
  index: string
  label: string
  title: string
  description: string
  features: ProjectFeature[]
  stats?: { value: string; label: string }[]
  highlights: ProjectHighlight[]
  highlightsTitle: string
  stack: string[]
  demo?: string
  repo?: string
  note?: string
  visual: ReactNode
  reversed?: boolean
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal className={`min-w-0 ${reversed ? 'lg:order-2' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="h-px w-6 bg-border" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {label}
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h3>

        <p className="mt-4 text-pretty leading-relaxed text-muted">
          {description}
        </p>

        {stats && stats.length > 0 && (
          <dl className="mt-6 grid grid-cols-3 gap-4 rounded-xl border border-border bg-surface/40 px-5 py-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse ${
                  index > 0 ? 'border-l border-border pl-4' : ''
                }`}
              >
                <dt className="mt-1 text-[11px] leading-snug text-muted">
                  {stat.label}
                </dt>
                <dd className="font-mono text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="group flex gap-3 rounded-xl border border-border/80 bg-surface/50 p-3.5 transition-colors hover:border-accent/25 hover:bg-surface"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <feature.icon size={15} />
              </span>
              <div>
                <div className="text-[13px] font-medium text-white">
                  {feature.label}
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted">
                  {feature.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface/40 p-5">
          <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            <Cpu size={13} />
            {highlightsTitle}
          </div>
          <ul className="space-y-2.5">
            {highlights.map((highlight) => (
              <li
                key={highlight.title}
                className="flex gap-2.5 text-xs leading-relaxed text-muted"
              >
                <Check size={13} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <strong className="font-medium text-white">
                    {highlight.title}
                  </strong>{' '}
                  {highlight.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group !px-4 !py-2.5 text-[13px]"
            >
              Live demo
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2.5 text-[13px]"
            >
              <Github size={15} />
              View code
            </a>
          )}
          {note && <span className="text-xs text-muted">{note}</span>}
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className={`min-w-0 ${reversed ? 'lg:order-1' : ''}`}
      >
        {visual}
      </Reveal>
    </div>
  )
}
