const items = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Docker',
  'Firebase',
  'Gemini AI',
  'Vapi',
  'MongoDB',
  'Tailwind CSS',
  'Vercel',
  'pytest',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-muted/70">
            {item}
          </span>
          <span className="h-1 w-1 rotate-45 bg-accent/40" />
        </span>
      ))}
    </div>
  )
}

export function TechMarquee() {
  return (
    <div
      aria-hidden
      className="border-y border-border/60 bg-surface/20"
    >
      <div className="marquee-mask overflow-hidden py-5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Track />
          <Track />
        </div>
      </div>
    </div>
  )
}
