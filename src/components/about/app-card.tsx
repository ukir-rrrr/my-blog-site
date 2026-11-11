import Image from 'next/image'
import Link from 'next/link'
import type { App } from '@/data/apps'
import { cn } from '@/lib/utils'

function AppCardBody({ app }: { app: App }) {
  return (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-muted/20">
        <Image
          src={app.previewSrc}
          alt={`${app.title} のスクリーンショット`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain p-6 sm:p-8"
        />
        <div className="absolute left-4 top-4 overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm">
          <Image
            src={app.iconSrc}
            alt=""
            width={52}
            height={52}
            unoptimized
            className="h-[52px] w-[52px]"
            aria-hidden
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {app.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
          {app.status === 'coming-soon' && (
            <span className="text-xs text-muted-foreground">Coming Soon</span>
          )}
        </div>
        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {app.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {app.description}
        </p>
      </div>
    </>
  )
}

export default function AppCard({ app }: { app: App }) {
  const isLive = app.status === 'live' && app.href

  if (isLive) {
    return (
      <article className="flex min-w-0 flex-col gap-4">
        <Link
          href={app.href!}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <AppCardBody app={app} />
        </Link>
      </article>
    )
  }

  return (
    <article className={cn('flex min-w-0 flex-col gap-4')}>
      <AppCardBody app={app} />
    </article>
  )
}
