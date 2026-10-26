import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'

function TerminalCard() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[460px]">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0b0b11]/90 shadow-soft backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-mono text-[11px] text-muted">
            agentshield / policy.ts
          </span>
          <span className="ml-auto rounded border border-accent/20 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">
            sandboxed
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[11.5px] leading-[1.9] text-white/80">
          <code>
            <span className="text-white/30">{'// resolve the real path first'}</span>
            {'\n'}
            <span className="text-accent-2">export async function</span>{' '}
            <span className="text-accent">guard</span>
            <span className="text-white/50">{'(action: Action) {'}</span>
            {'\n'}
            {'  '}
            <span className="text-accent-2">const</span> path ={' '}
            <span className="text-accent-2">await</span> resolve(action.path)
            {'\n'}
            {'  '}
            <span className="text-accent-2">if</span> (!inside(path, SANDBOX)){' '}
            <span className="text-white/50">{'{'}</span>
            {'\n'}
            {'    '}
            <span className="text-accent-2">throw new</span>{' '}
            <span className="text-amber-300">Denied</span>(action)
            {'\n'}
            {'  '}
            <span className="text-white/50">{'}'}</span>
            {'\n'}
            {'  '}
            <span className="text-accent-2">return</span> run(action, {'{'} network:{' '}
            <span className="text-emerald-300">&apos;none&apos;</span>, fs:{' '}
            <span className="text-emerald-300">&apos;ro&apos;</span> {'}'})
            {'\n'}
            <span className="text-white/50">{'}'}</span>
            {'\n'}
            <span className="text-white/30">
              {'// 13/13 attacks blocked · 42 tests green'}
            </span>
            {'\n'}
            <span className="text-accent">❯</span>{' '}
            <span className="inline-block h-[13px] w-[7px] translate-y-[2px] animate-blink bg-accent/80" />
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-border/80 px-4 py-3 font-mono text-[10px] uppercase tracking-wider">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            tests passing
          </span>
          <span className="text-muted">no network · read-only fs</span>
        </div>
      </div>

      <div className="absolute -right-2 -top-12 hidden items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-soft backdrop-blur lg:flex">
        <ShieldCheck size={15} className="text-accent" />
        <span className="font-mono text-[11px] text-white">0 host escapes</span>
      </div>

      <div className="absolute -bottom-12 -left-2 hidden items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 shadow-soft backdrop-blur lg:flex">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15">
          <Check size={12} className="text-emerald-400" />
        </span>
        <span className="font-mono text-[11px] text-white">13-attack benchmark</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade opacity-70" />
        <div className="absolute -top-52 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[130px]" />
        <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] animate-float rounded-full bg-accent-2/[0.09] blur-[120px]" style={{ animationDuration: '13s' }} />
        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] animate-float rounded-full bg-accent/[0.05] blur-[120px]" style={{ animationDuration: '17s', animationDirection: 'reverse' }} />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pl-2.5 pr-4 text-xs backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-muted">
                Available for junior full-stack &amp; AI roles
              </span>
            </div>

            <h1 className="mt-7 text-balance text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[3.3rem] xl:text-[4.15rem]">
              I build <span className="gradient-text">intelligent</span> web
              applications.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Full-stack developer working with{' '}
              <span className="text-white">React</span>,{' '}
              <span className="text-white">Next.js</span> and{' '}
              <span className="text-white">AI integration</span> — shipping
              voice-powered products, secure agent runtimes and scalable web
              apps.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary group">
                View my work
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a href="#contact" className="btn-secondary group">
                Get in touch
                <ArrowUpRight
                  size={17}
                  className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div
            className="min-w-0 animate-fade-in lg:justify-self-end"
            style={{ animationDelay: '0.15s' }}
          >
            <TerminalCard />
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted/70 transition-colors hover:text-white md:flex"
      >
        Scroll
        <span className="h-9 w-px bg-gradient-to-b from-accent/70 to-transparent" />
      </a>
    </section>
  )
}
