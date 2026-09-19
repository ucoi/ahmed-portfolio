'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2,
  Sparkles,
  Mic,
  Zap,
  Database,
  Terminal,
  Globe,
  ArrowRight,
  Cpu,
  Check,
  Star,
  CalendarDays
} from 'lucide-react'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function ReadyRoleExplorer() {
  const breakdown = [
    {
      title: 'Communication Skills',
      score: 30,
      feedback: 'The candidate interrupted the interviewer multiple times during the introduction and demonstrated a lack of basic interview etiquette.',
    },
    {
      title: 'Technical Knowledge',
      score: 0,
      feedback: 'No technical questions were answered, and the candidate did not demonstrate knowledge of the required tech stack.',
    },
    {
      title: 'Problem-Solving',
      score: 0,
      feedback: 'The candidate did not participate in problem-solving scenarios or demonstrate analytical thinking.',
    },
    {
      title: 'Cultural & Role Fit',
      score: 20,
      feedback: 'The candidate was unprepared and unaware of the role and company context before the interview started.',
    },
    {
      title: 'Confidence & Clarity',
      score: 40,
      feedback: 'The candidate asked direct questions clearly, but asking basic details about the position showed a lack of preparation.',
    },
  ]

  return (
    <div className="relative bg-surface border border-border rounded-2xl p-6 glow overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-muted font-mono ml-2">ReadyRole Feedback Report</span>
        </div>
        <span className="text-xs font-mono text-accent">WEBSITE EXAMPLE</span>
      </div>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-white">Feedback on the Web Developer Interview</h4>
        <p className="mt-2 text-xs text-muted">
          Example feedback report from the{' '}
          <a
            href="https://interview-agent-virid-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-dim transition-colors"
          >
            live ReadyRole website
          </a>
          .
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5 text-accent">
            <Star size={14} fill="currentColor" />
            Overall Impression: <strong className="text-white">18/100</strong>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            Sep 12, 2026 · 5:11 PM
          </span>
        </div>
      </div>

      <div className="space-y-5 max-h-[520px] overflow-y-auto pr-2">
        <section>
          <h5 className="text-sm font-semibold text-accent mb-2">Final Assessment</h5>
          <p className="text-xs leading-relaxed text-muted">
            The candidate showed a critical lack of preparation by failing to know what position and technology stack the interview pertained to. Interrupting the interviewer during the opening remarks further negatively impacted their professional impression. No technical capabilities or problem-solving skills were demonstrated.
          </p>
        </section>

        <section>
          <h5 className="text-sm font-semibold text-accent mb-3">Breakdown of Evaluation</h5>
          <div className="space-y-4">
            {breakdown.map((item, index) => (
              <div key={item.title} className="border-l border-border pl-3">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="text-xs font-medium text-white">{index + 1}. {item.title}</span>
                  <span className="text-xs font-mono text-accent">{item.score}/100</span>
                </div>
                <p className="text-xs leading-relaxed text-muted">{item.feedback}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h5 className="text-sm font-semibold text-accent mb-2">Strengths</h5>
          <ul className="list-disc pl-5 text-xs leading-relaxed text-muted">
            <li>Asked direct questions to clarify the interview topic and technology stack.</li>
          </ul>
        </section>
        <section>
          <h5 className="text-sm font-semibold text-accent mb-2">Areas for Improvement</h5>
          <ul className="list-disc pl-5 space-y-1 text-xs leading-relaxed text-muted">
            <li>Research the job description, company, and required tech stack before attending.</li>
            <li>Allow the interviewer to finish their introduction before asking questions.</li>
            <li>Demonstrate readiness and enthusiasm for the position being discussed.</li>
          </ul>
        </section>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://interview-agent-virid-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent hover:text-accent-dim transition-colors"
          >
            Back to Dashboard →
          </a>
        </div>
      </div>
    </div>
  )
}

function Reveal({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href')

    if (!href || !href.startsWith('#')) {
      return
    }

    const targetId = href.slice(1)
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.pushState(null, '', href)
  }

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#"
            onClick={handleSmoothScroll}
            className="text-xl font-bold gradient-text animate-fade-in"
          >
            AH
          </a>
          <div className="flex gap-8 items-center animate-fade-in">
            <a href="#projects" onClick={handleSmoothScroll} className="text-muted hover:text-white transition-colors text-sm">Projects</a>
            <a href="#stack" onClick={handleSmoothScroll} className="text-muted hover:text-white transition-colors text-sm">Stack</a>
            <a href="#contact" onClick={handleSmoothScroll} className="text-muted hover:text-white transition-colors text-sm">Contact</a>
            <a
              href="/resume.pdf"
              download="Ahmed_Hisham_CV.pdf"
              className="text-muted hover:text-white transition-colors text-sm"
            >
              Resume
            </a>
            <a 
              href="https://github.com/ucoi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8 animate-fade-in">
            <Sparkles size={14} className="text-accent" />
            <span className="text-sm text-muted">AI-Integrated Full-Stack Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            I build intelligent<br />
            <span className="gradient-text">web applications</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full-Stack Developer specializing in{' '}
            <span className="text-white">React</span>,{' '}
            <span className="text-white">Next.js</span>, and{' '}
            <span className="text-white">AI integration</span>.
            <br />
            Creating voice-powered experiences and scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#projects"
              onClick={handleSmoothScroll}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-dim transition-all duration-300 glow"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

        </div>
      </section>

      <section id="projects" className="py-32 px-6 scroll-mt-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <span className="text-accent text-sm font-mono uppercase tracking-wider">Featured Project</span>
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ReadyRole
              </h2>
              <p className="text-xl text-muted mb-6 leading-relaxed">
                AI-powered voice interview platform that conducts mock job interviews through real-time conversation. 
                Practice interviews, get instant feedback, and improve your communication skills.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Mic, label: 'Live Voice Conversation', desc: 'Real-time AI interview via Vapi SDK' },
                  { icon: Sparkles, label: 'Dynamic Question Generation', desc: 'Tailored questions via Gemini AI' },
                  { icon: Database, label: 'Firebase Authentication', desc: 'Secure auth with Admin SDK' },
                  { icon: Zap, label: 'AI Feedback Engine', desc: 'Instant scoring across 5 categories' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-surface rounded-lg border border-border hover:border-accent/30 transition-colors">
                    <feature.icon size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">{feature.label}</div>
                      <div className="text-xs text-muted">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-5 bg-surface/80 border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-white">
                  <Cpu size={16} className="text-accent" />
                  <span>Key Architecture Decisions</span>
                </div>
                <div className="space-y-2.5 text-xs text-muted leading-relaxed">
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white font-medium">Sub-500ms Voice Pipeline:</strong> Integrated Vapi WebSockets directly to enable natural interruptions and instant response times.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white font-medium">Structured Gemini AI Evaluation:</strong> Used Vercel AI SDK with strict Zod schema validation to guarantee 100% structured 5-category scoring.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white font-medium">Secure Server-Side Auth:</strong> Combined Firebase Client with Admin SDK on Next.js Server Actions to protect interview data and API tokens.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'TypeScript', 'Firebase', 'Vapi', 'Gemini AI', 'Vercel AI SDK', 'Zod'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-surface border border-border rounded-full text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://interview-agent-virid-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-dim transition-colors"
                >
                  <Globe size={18} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/ucoi/Interview_Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-white font-semibold rounded-lg hover:border-accent/50 transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl opacity-50" />
                <ReadyRoleExplorer />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h3 className="text-3xl font-bold mb-12 text-center">
              More Projects
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Fitness Tracker',
                desc: 'Full MERN stack fitness application with responsive UI and 10+ RESTful API endpoints. Bachelor\'s thesis project.',
                stack: ['MongoDB', 'Express', 'React', 'Node.js'],
                github: 'https://github.com/ucoi/THESIS',
                demo: 'https://thesis-rust.vercel.app/',
              },
              {
                title: 'NileFlix',
                desc: 'Netflix-style streaming UI built with React. 4-person team project with Figma-to-code implementation.',
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
            ].map((project, i) => (
              <Reveal key={project.title} delay={i * 100}>
                <div className="flex flex-col justify-between h-full p-6 bg-background border border-border rounded-xl hover:border-accent/30 transition-all duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <Code2 size={24} className="text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-dim transition-colors ml-auto"
                      >
                        <Globe size={14} />
                        Live Demo
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-32 px-6 scroll-mt-28">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Stack I Work With</h3>
              <p className="text-muted">Tools and technologies I use to build modern web applications</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: 'TS' },
              { name: 'Node.js', icon: '⬢' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'Firebase', icon: '🔥' },
              { name: 'Tailwind CSS', icon: '🌊' },
              { name: 'Gemini AI', icon: '✨' },
              { name: 'Vapi', icon: '🎙️' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Git', icon: '📦' },
              { name: 'Figma', icon: '🎨' },
            ].map((tech, i) => (
              <Reveal key={tech.name} delay={i * 50}>
                <div className="flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors">
                  <span className="text-2xl mb-2">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h3 className="text-3xl font-bold mb-6">About Me</h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;m a Junior Full-Stack Developer and Computer Science Engineering graduate from the University of Debrecen,
                  Hungary. Stipendium Hungaricum Scholar.
                </p>
                <p>
                  I specialize in building React and Next.js applications with modern backend technologies. 
                  Recently, I&apos;ve been focusing on AI integration — building applications that leverage voice AI,
                  LLMs, and intelligent automation.
                </p>
                <p>
                  I believe in writing clean, maintainable code and learning continuously. 
                  Currently open to junior full-stack or AI-integrated development roles.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              <Reveal delay={100}>
                <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
                  <Terminal size={20} className="text-accent" />
                  <div>
                    <div className="font-medium text-sm">BSc Computer Science Engineering</div>
                    <div className="text-xs text-muted">University of Debrecen • 2022–2026</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
                  <Zap size={20} className="text-accent" />
                  <div>
                    <div className="font-medium text-sm">Stipendium Hungaricum Scholar</div>
                    <div className="text-xs text-muted">Competitive merit scholarship</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
                  <Globe size={20} className="text-accent" />
                  <div>
                    <div className="font-medium text-sm">Based in Hungary</div>
                    <div className="text-xs text-muted">Open to remote-EU opportunities</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h3 className="text-4xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-xl text-muted mb-12 max-w-xl mx-auto">
              Looking for a junior full-stack developer? I&apos;m open to opportunities and interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ahmedhisham1928@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-dim transition-colors glow"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://github.com/ucoi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-lg hover:border-accent/50 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ahmed-hisham-03542915b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-lg hover:border-accent/50 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">
            © 2026 Ahmed Hisham. Built with Next.js and Tailwind CSS.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/ucoi" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ahmed-hisham-03542915b" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ahmedhisham1928@gmail.com" className="text-muted hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
