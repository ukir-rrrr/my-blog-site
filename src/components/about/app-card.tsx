import Image from 'next/image'
import Link from 'next/link'
import type { App } from '@/data/apps'
import { cn } from '@/lib/utils'

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M13.614 4.899H10.1v1.083h3.266L5.186 14.186l.766.766 8.203-8.226V10.038h1.083V6.524c0-.43-.171-.843-.476-1.148a1.62 1.62 0 0 0-1.148-.476Z"
        fill="currentColor"
      />
    </svg>
  )
}

function AppCardContents({ app }: { app: App }) {
  return (
    <>
      <div
        className="about-app-cover-top"
        style={{ backgroundColor: app.accentColor }}
      >
        <div className="about-app-cover-curve" aria-hidden />
        <div className="about-app-media">
          <div className="about-app-shot-frame">
            <Image
              src={app.previewSrc}
              alt=""
              width={160}
              height={200}
              unoptimized
              className="about-app-shot"
              aria-hidden
            />
          </div>
          <div className="about-app-icon-frame">
            <Image
              src={app.iconSrc}
              alt=""
              width={64}
              height={64}
              unoptimized
              className="about-app-icon"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="about-app-cover-bottom">
        <header className="space-y-3">
          <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
            {app.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {app.description}
          </p>
        </header>
      </div>
    </>
  )
}

export default function AppCard({ app }: { app: App }) {
  const isLive = app.status === 'live' && app.href
  const pocketClass = cn(
    'about-app-pocket',
    app.status === 'coming-soon' && 'about-app-pocket--soon',
  )

  const shelf = (
    <div className="about-app-shelf-wrap" aria-hidden>
      <div className="about-app-shelf">
        {isLive ? (
          <span className="about-app-shelf-icon-btn">
            <ExternalLinkIcon className="h-4 w-4 text-foreground" />
          </span>
        ) : (
          <span className="about-app-shelf-pill">Coming Soon</span>
        )}
      </div>
    </div>
  )

  if (isLive) {
    return (
      <article className="about-app-item">
        <div className={pocketClass}>
          <Link
            href={app.href!}
            target="_blank"
            rel="noopener noreferrer"
            className="about-app-card group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`${app.title}（App Store で開く）`}
          >
            <AppCardContents app={app} />
          </Link>
          {shelf}
        </div>
      </article>
    )
  }

  return (
    <article className="about-app-item">
      <div className={pocketClass}>
        <div className="about-app-card about-app-card--static">
          <AppCardContents app={app} />
        </div>
        {shelf}
      </div>
    </article>
  )
}
