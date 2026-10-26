export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  index?: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
      >
        {index && (
          <span className="font-mono text-xs text-accent">{index}</span>
        )}
        <span className="h-px w-8 bg-border" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  )
}
