import Contact from '@/components/contact'
import CareerTimeline from '@/components/career'
import Introduction from '@/components/introduction'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Layout from '@/components/layout'

const quickFacts = [
  {
    title: 'Role',
    value: 'Frontend Engineer',
    description: 'Next.js / TypeScript中心にUI実装',
    accent: 'from-emerald-500/25 to-teal-500/20',
  },
  {
    title: 'Base',
    value: 'Nagoya, Japan',
    description: '名古屋でWebサービスづくりに挑戦中',
    accent: 'from-teal-500/25 to-cyan-500/20',
  },
  {
    title: 'Focus',
    value: 'UI + Product',
    description: '使いやすさと体験価値の両立',
    accent: 'from-green-600/25 to-emerald-500/20',
  },
]

const sectionLinks = [
  { label: 'Career', href: '#career' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function AboutPage() {
  return (
    <Layout>
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(140deg,_hsl(var(--background))_30%,_hsl(var(--muted)/0.4)_100%)] px-4 py-10 shadow-[0_30px_80px_-35px_hsl(var(--foreground)/0.35)] sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_hsl(var(--primary)/0.15),_transparent_34%),radial-gradient(circle_at_80%_18%,_hsl(var(--chart-2)/0.2),_transparent_36%),radial-gradient(circle_at_80%_85%,_hsl(var(--chart-5)/0.18),_transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

        <section className="relative mb-12 rounded-3xl border border-border/70 bg-background/80 p-6 backdrop-blur-sm md:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
                ABOUT ME
              </p>
              <h1 className="text-3xl font-black leading-[1.18] md:text-5xl">
                Build beautiful
                <span className="block pb-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-700 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                技術だけでなく、使う人の気持ちまで想像したWeb体験づくりを目指しています。
                これまでのキャリア、得意領域、そして今取り組んでいることをまとめました。
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {sectionLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-[0_15px_40px_-30px_hsl(var(--foreground))]">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                CURRENT STATUS
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Open to</span>
                  <span className="text-sm font-semibold">Frontend Projects</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Favorite Stack</span>
                  <span className="text-sm font-semibold">Next.js + TypeScript</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Mindset</span>
                  <span className="text-sm font-semibold">Simple and Elegant</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-5 transition duration-200 hover:-translate-y-1"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${fact.accent} opacity-70`} />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {fact.title}
                  </p>
                  <p className="mt-2 text-lg font-extrabold">{fact.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mb-8 rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur md:p-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground">INTRODUCTION</p>
          <Introduction />
        </section>

        <div id="career" className="relative mb-8 scroll-mt-24 rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur md:p-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground">CAREER PATH</p>
          <CareerTimeline />
        </div>

        <div id="skills" className="relative mb-8 scroll-mt-24 rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur md:p-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground">SKILL SET</p>
          <Skills />
        </div>

        <div id="projects" className="relative mb-8 scroll-mt-24 rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur md:p-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground">PROJECTS</p>
          <Projects />
        </div>

        <div id="contact" className="relative scroll-mt-24 rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur md:p-10">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-muted-foreground">GET IN TOUCH</p>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

