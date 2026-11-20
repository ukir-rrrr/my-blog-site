import Link from 'next/link'
import type { Project } from '@/data/projects'
import ProjectCarousel from './project-carousel'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-w-0 flex-col gap-4">
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <ProjectCarousel images={project.images} alt={project.title} />

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground/80 sm:text-xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
      </Link>
    </article>
  )
}
