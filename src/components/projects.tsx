'use client'

import Image from 'next/image'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const projects = [
  {
    title: 'CreativeFlow Studio',
    description: 'ブランドと、未来をデザインする。Next.js + Tailwind CSSで構築したクリエイティブエージェンシーのWebサイト。',
    image: '/de.png',
    tag: 'Agency Site',
    github: 'https://github.com/ukir-rrrr',
    live: 'https://creativeflow-web-site.vercel.app/',
  },
  {
    title: 'NAGI-凪',
    description: '自然派ラーメンブランド。Next.js + Tailwind CSSで構築したWebサイト。',
    image: '/ramen.png',
    tag: 'Restaurant Site',
    github: 'https://github.com/ukir-rrrr',
    live: 'https://ramen-website-psi.vercel.app/',
  },
]

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('[data-card]') as HTMLElement
    const gap = 24
    const amount = (card?.offsetWidth ?? 320) + gap
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          aria-label="前へ"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/90 shadow-md backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-500 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory -mx-6 px-6 md:-mx-10 md:px-10"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              data-card
              className="snap-center shrink-0 w-[calc(100vw-80px)] sm:w-[360px] overflow-hidden rounded-2xl border border-emerald-700/20 bg-card/90 shadow-[0_20px_45px_-30px_hsl(var(--foreground)/0.5)] transition duration-200 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-emerald-500/30 bg-background/80 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 backdrop-blur">
                  {project.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between border-t border-border/60 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-emerald-600 transition hover:text-teal-500"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="snap-center shrink-0 w-[calc(100vw-80px)] sm:w-[360px] flex items-center justify-center rounded-2xl border border-dashed border-border/60 text-sm text-muted-foreground">
            Coming soon...
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label="次へ"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-3 flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/90 shadow-md backdrop-blur transition hover:border-emerald-500/50 hover:text-emerald-500 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
