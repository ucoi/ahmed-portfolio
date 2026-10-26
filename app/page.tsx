import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  ExternalLink,
  FileSearch,
  GitPullRequest,
  Github,
  Globe,
  Linkedin,
  Lock,
  Mail,
  Mic,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react'

import { BackToTop } from '@/components/back-to-top'
import { Contact } from '@/components/contact'
import { CodeReviewExplorer, ReadyRoleExplorer } from '@/components/explorers'
import { FeaturedProject } from '@/components/featured-project'
import { Hero } from '@/components/hero'
import { Nav } from '@/components/nav'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SpotlightCard } from '@/components/spotlight-card'
import { TechMarquee } from '@/components/tech-marquee'

const moreProjects = [
  {
    title: 'Fitness Tracker',
    desc: "Full MERN stack fitness application with responsive UI and 10+ RESTful API endpoints. Bachelor's thesis project.",
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/ucoi/THESIS',
    demo: 'https://thesis-rust.vercel.app/',
  },
  {
    title: 'NileFlix',
    desc: 'Netflix-style streaming UI built with React. Four-person team project with Figma-to-code implementation.',
    stack: ['React', 'CSS', 'Figma'],
    github: 'https://github.com/ucoi/NileFlix-FrontEnd',
    demo: null,
  },
  {
    title: 'Weather App',
    desc: 'Weather forecasting application with public API integration. Migrated from JavaScript to TypeScript.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ucoi/weatherApp',
    demo: 'https://weather-app-bay-six-92.vercel.app/',
  },
]

const stackGroups = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', mark: 'RE' },
      { name: 'Next.js', mark: 'NX' },
      { name: 'TypeScript', mark: 'TS' },
      { name: 'Tailwind CSS', mark: 'TW' },
      { name: 'Figma', mark: 'FG' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { name: 'Node.js', mark: 'NO' },
      { name: 'Python', mark: 'PY' },
      { name: 'MongoDB', mark: 'MO' },
      { name: 'Firebase', mark: 'FB' },
    ],
  },
  {
    label: 'AI & infrastructure',
    items: [
      { name: 'Gemini AI', mark: 'GE' },
      { name: 'Vapi', mark: 'VA' },
      { name: 'Docker', mark: 'DO' },
      { name: 'pytest', mark: 'PT' },
      { name: 'Git', mark: 'GI' },
      { name: 'Vercel', mark: 'VE' },
    ],
  },
]

function Divider() {
  return (
    <div className="my-14 h-px bg-gradient-to-r from-transparent via-border to-transparent md:my-16" />
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <a
        href="#content"
        className="sr-only rounded-md bg-accent px-4 py-2 font-medium text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <div
        aria-hidden
        className="noise pointer-events-none fixed inset-0 z-[55] opacity-[0.025]"
      />

      <Nav />

      <div id="content">
        <Hero />
        <TechMarquee />

        <section id="projects" className="relative py-20 md:py-28">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                index="01"
                eyebrow="Selected work"
                title="Featured projects"
                description="Three projects that show how I think about AI, security and product — from architecture to deployment."
              />
            </Reveal>

            <div className="mt-16 md:mt-20">
              <FeaturedProject
                index="01"
                label="AI agent security"
                title="AgentShield"
                description="A Python runtime that lets an AI agent act on files and commands without being able to harm the host machine."
                features={[
                  {
                    icon: Shield,
                    label: 'Policy check',
                    desc: 'Resolves real file paths before any action',
                  },
                  {
                    icon: Lock,
                    label: 'Locked container',
                    desc: 'No network, read-only FS, CPU/mem/process/time limits',
                  },
                  {
                    icon: FileSearch,
                    label: 'Audit log',
                    desc: 'Every decision written for later review',
                  },
                  {
                    icon: Check,
                    label: '13-attack benchmark',
                    desc: 'Policy only vs sandbox only vs both',
                  },
                ]}
                highlightsTitle="Security design"
                highlights={[
                  {
                    title: 'Defense in stages.',
                    body: 'Started with a deliberately naive policy (5 of 6 attacks slipped through), then a hardened version (0 of 6), with every attack kept as a regression test.',
                  },
                  {
                    title: '13-attack benchmark.',
                    body: 'Run across three setups — policy only, sandbox only, and both. Policy-only let 5 attacks through; the container stopped all 13.',
                  },
                  {
                    title: 'Documented gap & mitigation.',
                    body: 'Flagged an unresolved case — files an agent plants in a shared folder that fire later on the host. Added a snapshot/diff check that flags risky files, with its limits written down.',
                  },
                  {
                    title: '42 tests passing.',
                    body: 'Prototype, tested against a scripted agent, not a real LLM.',
                  },
                ]}
                stack={['Python', 'Docker', 'pytest']}
                stats={[
                  { value: '13/13', label: 'attacks blocked' },
                  { value: '42', label: 'tests passing' },
                  { value: '0', label: 'host escapes' },
                ]}
                repo="https://github.com/ucoi/agentshield"
                note="Command-line project — no live demo"
                visual={
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 to-accent-2/10 blur-2xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
                      <Image
                        src="/agentshield-thumbnail.png"
                        alt="AgentShield — security sandbox for AI agents"
                        width={1200}
                        height={900}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                }
              />

              <Divider />

              <FeaturedProject
                index="02"
                label="Voice AI product"
                title="ReadyRole"
                description="AI-powered voice interview platform that conducts mock job interviews through real-time conversation. Practice interviews, get instant feedback, and improve your communication skills."
                features={[
                  {
                    icon: Mic,
                    label: 'Live voice conversation',
                    desc: 'Real-time AI interview via Vapi SDK',
                  },
                  {
                    icon: Sparkles,
                    label: 'Dynamic questions',
                    desc: 'Tailored questions generated via Gemini AI',
                  },
                  {
                    icon: Database,
                    label: 'Firebase auth',
                    desc: 'Secure authentication with the Admin SDK',
                  },
                  {
                    icon: Zap,
                    label: 'AI feedback engine',
                    desc: 'Instant scoring across 5 categories',
                  },
                ]}
                highlightsTitle="Key architecture decisions"
                highlights={[
                  {
                    title: 'Sub-500ms voice pipeline.',
                    body: 'Integrated Vapi WebSockets directly to enable natural interruptions and instant response times.',
                  },
                  {
                    title: 'Structured Gemini evaluation.',
                    body: 'Used the Vercel AI SDK with strict Zod schema validation to guarantee structured 5-category scoring.',
                  },
                  {
                    title: 'Secure server-side auth.',
                    body: 'Combined Firebase Client with the Admin SDK in Next.js Server Actions to protect interview data and API tokens.',
                  },
                ]}
                stack={[
                  'Next.js',
                  'TypeScript',
                  'Firebase',
                  'Vapi',
                  'Gemini AI',
                  'Vercel AI SDK',
                  'Zod',
                ]}
                stats={[
                  { value: '<500ms', label: 'voice round-trip' },
                  { value: '5', label: 'scoring categories' },
                  { value: '100%', label: 'schema-validated' },
                ]}
                demo="https://interview-agent-virid-seven.vercel.app/"
                repo="https://github.com/ucoi/Interview_Agent"
                visual={<ReadyRoleExplorer />}
                reversed
              />

              <Divider />

              <FeaturedProject
                index="03"
                label="Developer tooling"
                title="AI Code Review Agent"
                description="Paste a GitHub PR URL and get a structured review: unified diffs are parsed into hunks, sent to an LLM with prompt-injection defense, then validated with Zod before anything reaches the UI."
                features={[
                  {
                    icon: GitPullRequest,
                    label: 'GitHub PR parsing',
                    desc: 'Fetches unified diffs via the GitHub REST API',
                  },
                  {
                    icon: Shield,
                    label: 'Injection-safe prompts',
                    desc: 'Wraps diff content as untrusted data in delimiters',
                  },
                  {
                    icon: FileSearch,
                    label: 'Zod validation + repair',
                    desc: 'Strict schema with a one-pass JSON repair retry',
                  },
                  {
                    icon: Lock,
                    label: 'Secure server-side keys',
                    desc: 'The LLM API key never reaches the client',
                  },
                ]}
                highlightsTitle="Pipeline architecture"
                highlights={[
                  {
                    title: 'Diff → chunks.',
                    body: 'Parses unified diffs, skips lockfiles/minified/binary files, and strips git a/ b/ prefixes correctly.',
                  },
                  {
                    title: 'Prompt injection defense.',
                    body: 'Wraps the diff in explicit delimiters and instructs the LLM to ignore embedded instructions in code.',
                  },
                  {
                    title: 'Validated JSON output.',
                    body: 'Results validated against Zod with one repair attempt; counts are recomputed server-side, not trusted from the model.',
                  },
                ]}
                stack={[
                  'Next.js 16',
                  'TypeScript',
                  'React',
                  'Tailwind',
                  'Zod',
                  'Vitest',
                  'GitHub API',
                  'LLM API',
                  'Vercel',
                ]}
                stats={[
                  { value: '3', label: 'severity levels' },
                  { value: '1-pass', label: 'JSON repair retry' },
                  { value: '0', label: 'keys client-side' },
                ]}
                demo="https://ai-code-review-agent-ten.vercel.app/"
                repo="https://github.com/ucoi/ai-code-review-agent"
                visual={<CodeReviewExplorer />}
              />
            </div>

            <div className="mt-28">
              <Reveal>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-border" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                        Also built
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      More projects
                    </h3>
                  </div>
                  <a
                    href="https://github.com/ucoi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-1.5 text-sm text-muted transition-colors hover:text-white sm:inline-flex"
                  >
                    All repos
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {moreProjects.map((project, index) => (
                  <Reveal key={project.title} delay={index * 100} className="h-full">
                    <SpotlightCard className="card-glow hover-lift group relative flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-6">
                      <div className="flex items-start justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-accent">
                          <Code2 size={18} />
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-muted/40 transition-all duration-300 group-hover:text-accent"
                        />
                      </div>

                      <h4 className="mt-5 text-lg font-semibold text-white">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:underline focus-visible:outline-none"
                        >
                          {project.title}
                        </a>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {project.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-border/70 pt-5 text-xs">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-white"
                        >
                          <Github size={14} />
                          Code
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-white"
                          >
                            <Globe size={14} />
                            Live demo
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="border-t border-border/60 bg-surface/20 py-20 md:py-28"
        >
          <div className="container-page">
            <Reveal>
              <SectionHeading
                index="02"
                eyebrow="Toolkit"
                title="Tools I reach for"
                description="The technologies I use to ship modern web applications, secure runtimes and AI-powered products."
              />
            </Reveal>

            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {stackGroups.map((group, groupIndex) => (
                <Reveal key={group.label} delay={groupIndex * 100}>
                  <div>
                    <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {group.label}
                    </div>
                    <div className="grid gap-2">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="group flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-3.5 py-3 transition-colors hover:border-accent/25 hover:bg-surface"
                        >
                          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background font-mono text-[10px] tracking-wide text-accent">
                            {item.mark}
                          </span>
                          <span className="text-sm text-white/85">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-border/60 py-20 md:py-28"
        >
          <div className="container-page">
            <Reveal>
              <SectionHeading
                index="03"
                eyebrow="About"
                title="A bit about me"
              />
            </Reveal>

            <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <div className="space-y-4 leading-relaxed text-muted">
                  <p>
                    I&apos;m a Junior Full-Stack Developer and Computer Science
                    Engineering graduate from the University of Debrecen,
                    Hungary. Stipendium Hungaricum Scholar.
                  </p>
                  <p>
                    I specialize in building React and Next.js applications with
                    modern backend technologies. Recently I&apos;ve been focusing
                    on AI integration — building applications that leverage voice
                    AI, LLMs and intelligent automation.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and learning
                    continuously. Currently open to junior full-stack or
                    AI-integrated development roles.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-white"
                >
                  Work with me
                  <ArrowUpRight size={15} />
                </a>
              </Reveal>

              <div className="space-y-3">
                {[
                  {
                    icon: Terminal,
                    title: 'BSc Computer Science Engineering',
                    desc: 'University of Debrecen · 2022–2026',
                  },
                  {
                    icon: Zap,
                    title: 'Stipendium Hungaricum Scholar',
                    desc: 'Competitive merit scholarship',
                  },
                  {
                    icon: Globe,
                    title: 'Based in Hungary',
                    desc: 'Open to remote EU opportunities',
                  },
                  {
                    icon: Sparkles,
                    title: 'Currently building',
                    desc: 'AgentShield — a secure runtime for AI agents',
                  },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={index * 90}>
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/25 hover:bg-surface">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-accent">
                        <item.icon size={18} />
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted">{item.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>

      <footer className="border-t border-border">
        <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface font-mono text-[11px] font-semibold text-accent">
              AH
            </span>
            <span className="text-sm text-muted">
              © 2026 Ahmed Hisham
            </span>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
            aria-label="Footer"
          >
            <a href="#projects" className="transition-colors hover:text-white">
              Projects
            </a>
            <a href="#stack" className="transition-colors hover:text-white">
              Stack
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/ucoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-white"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-hisham-03542915b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-white"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:ahmedhisham1928@gmail.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-white"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  )
}
