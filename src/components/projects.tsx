import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'CreativeFlow Studio',
      description: 'ブランドと、未来をデザインする。Next.js + Tailwind CSSで構築したクリエイティブエージェンシーのWebサイト。',
      image: '/de.png',
      github: 'https://github.com/ukir-rrrr',
      live: 'https://creativeflow-web-site.vercel.app/'
    },
    // {
    //   title: 'Task Management App',
    //   description: 'A React-based task management application with drag-and-drop functionality.',
    //   image: '/placeholder.svg?height=200&width=300',
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A weather dashboard using React and integrating with a weather API.',
    //   image: '/placeholder.svg?height=200&width=300',
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // }
  ]

  return (
    <section className="mb-16  max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {projects.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-2xl border border-emerald-700/20 bg-card/90 shadow-[0_20px_45px_-30px_hsl(var(--foreground))]">
                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex justify-between">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-emerald-600 transition hover:text-teal-500">
                        <Github className="inline mr-1" size={20} />
                          GitHub
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-emerald-600 transition hover:text-teal-500">
                        <ExternalLink className="inline mr-1" size={20} />
                          Live Demo
                      </a>
                    </div>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

