import { ArrowUpRight, CalendarDays, Star } from 'lucide-react'

function CardChrome({ label, badge }: { label: string; badge?: string }) {  return (
    <div className="flex items-center gap-2 border-b border-border/80 px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      <span className="ml-2 truncate font-mono text-[11px] text-muted">
        {label}
      </span>
      {badge && (
        <span className="ml-auto shrink-0 rounded border border-accent/20 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
          {badge}
        </span>
      )}
    </div>
  )
}

function ScrollArea({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="relative">
      <div
        className={`thin-scrollbar max-h-[430px] overflow-y-auto pr-2 ${className}`}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0e0e12] to-transparent" />
    </div>
  )
}

export function ReadyRoleExplorer() {
  const breakdown = [
    {
      title: 'Communication Skills',
      score: 30,
      feedback:
        'The candidate interrupted the interviewer multiple times during the introduction and demonstrated a lack of basic interview etiquette.',
    },
    {
      title: 'Technical Knowledge',
      score: 0,
      feedback:
        'No technical questions were answered, and the candidate did not demonstrate knowledge of the required tech stack.',
    },
    {
      title: 'Problem-Solving',
      score: 0,
      feedback:
        'The candidate did not participate in problem-solving scenarios or demonstrate analytical thinking.',
    },
    {
      title: 'Cultural & Role Fit',
      score: 20,
      feedback:
        'The candidate was unprepared and unaware of the role and company context before the interview started.',
    },
    {
      title: 'Confidence & Clarity',
      score: 40,
      feedback:
        'The candidate asked direct questions clearly, but asking basic details about the position showed a lack of preparation.',
    },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-soft">
      <CardChrome label="ReadyRole · feedback report" badge="live example" />

      <div className="p-5">
        <h4 className="text-lg font-semibold tracking-tight text-white">
          Feedback on the Web Developer Interview
        </h4>
        <p className="mt-1.5 text-xs text-muted">
          Example report from the{' '}
          <a
            href="https://interview-agent-virid-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            live ReadyRole site
          </a>
          .
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-1 font-mono text-amber-300">
            <Star size={12} fill="currentColor" />
            18/100 overall
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
            <CalendarDays size={13} />
            Sep 12, 2026
          </span>
        </div>

        <ScrollArea className="mt-5 space-y-5">
          <section>
            <h5 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Final assessment
            </h5>
            <p className="text-xs leading-relaxed text-muted">
              The candidate showed a critical lack of preparation by failing to
              know what position and technology stack the interview pertained
              to. Interrupting the interviewer during the opening remarks
              further negatively impacted their professional impression. No
              technical capabilities or problem-solving skills were
              demonstrated.
            </p>
          </section>

          <section>
            <h5 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Breakdown of evaluation
            </h5>
            <div className="space-y-3.5">
              {breakdown.map((item, index) => (
                <div key={item.title} className="border-l border-border pl-3">
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-white">
                      {index + 1}. {item.title}
                    </span>
                    <span className="font-mono text-[11px] text-accent">
                      {item.score}/100
                    </span>
                  </div>
                  <div className="mb-2 h-1 overflow-hidden rounded-full bg-background">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-muted">
                    {item.feedback}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h5 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Strengths
            </h5>
            <ul className="list-disc pl-5 text-xs leading-relaxed text-muted">
              <li>
                Asked direct questions to clarify the interview topic and
                technology stack.
              </li>
            </ul>
          </section>

          <section>
            <h5 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Areas for improvement
            </h5>
            <ul className="list-disc space-y-1 pl-5 text-xs leading-relaxed text-muted">
              <li>
                Research the job description, company, and required tech stack
                before attending.
              </li>
              <li>
                Allow the interviewer to finish their introduction before asking
                questions.
              </li>
              <li>
                Demonstrate readiness and enthusiasm for the position being
                discussed.
              </li>
            </ul>
          </section>
        </ScrollArea>

        <div className="mt-4 border-t border-border/70 pt-3">
          <a
            href="https://interview-agent-virid-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-white"
          >
            Open the live demo
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}

export function CodeReviewExplorer() {
  const findings = [
    {
      file: 'src/auth/session.ts',
      title: 'Missing authorization check on session refresh',
      severity: 'high',
      category: 'security',
      lines: '42–58',
      snippet: 'const session = await refresh(token)\nreturn session // no role / owner check',
    },
    {
      file: 'src/api/review.ts',
      title: 'LLM JSON counts trusted without recomputation',
      severity: 'medium',
      category: 'correctness',
      lines: '88–94',
      snippet: 'return { findings, counts: model.counts }',
    },
    {
      file: 'src/lib/extract.ts',
      title: 'Git b/ prefix leaked into modified-file paths',
      severity: 'low',
      category: 'bug',
      lines: '410–418',
      snippet: 'stripPrefix(path, "a/") || stripPrefix(path, "b/")',
    },
  ]

  const severityColor: Record<string, string> = {
    high: 'text-red-400 bg-red-500/10 border-red-500/20',
    medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    low: 'text-accent bg-accent/10 border-accent/20',
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-soft">
      <CardChrome label="AI code review · findings" badge="live example" />

      <div className="p-5">
        <h4 className="text-lg font-semibold tracking-tight text-white">
          Review of owner/repo#128
        </h4>
        <p className="mt-1.5 text-xs text-muted">
          Example findings from the{' '}
          <a
            href="https://ai-code-review-agent-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            live review agent
          </a>
          .
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="rounded-md border border-border bg-background px-2 py-1 text-white">
            3 findings
          </span>
          <span className="rounded-md border border-red-500/20 bg-red-500/10 px-2 py-1 text-red-400">
            1 high
          </span>
          <span className="rounded-md border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-amber-400">
            1 medium
          </span>
          <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 text-accent">
            1 low
          </span>
        </div>

        <ScrollArea className="mt-5 space-y-3.5">
          {findings.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-background/50 p-4"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate font-mono text-[11px] text-muted">
                    {item.file}
                  </div>
                  <div className="mt-1 text-[13px] font-medium leading-snug text-white">
                    {item.title}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${severityColor[item.severity]}`}
                >
                  {item.severity}
                </span>
              </div>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-muted">
                <span>{item.category}</span>
                <span>·</span>
                <span>L{item.lines}</span>
              </div>
              <pre className="overflow-x-auto rounded-lg border border-border bg-background p-3 font-mono text-[11px] leading-relaxed text-muted">
                {item.snippet}
              </pre>
            </div>
          ))}
        </ScrollArea>

        <div className="mt-4 border-t border-border/70 pt-3">
          <a
            href="https://ai-code-review-agent-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-white"
          >
            Open the live demo
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}
