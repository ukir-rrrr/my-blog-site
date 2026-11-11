'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
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

function AppShelf({ isLive }: { isLive: boolean }) {
  return (
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
}

function AppCardContents({
  app,
  titleRef,
}: {
  app: App
  titleRef: React.RefObject<HTMLHeadingElement>
}) {
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
        <h3 ref={titleRef} className="about-app-title">
          {app.title}
        </h3>
        <p className="about-app-desc">{app.description}</p>
      </div>
    </>
  )
}

function usePocketMetrics(
  pocketRef: React.RefObject<HTMLDivElement>,
  titleRef: React.RefObject<HTMLHeadingElement>,
  enabled: boolean,
) {
  useLayoutEffect(() => {
    if (!enabled) return
    const pocket = pocketRef.current
    const title = titleRef.current
    if (!pocket || !title) return

    const sync = () => {
      const titleGap = 6
      const pocketRect = pocket.getBoundingClientRect()
      const titleRect = title.getBoundingClientRect()
      const shelfTopPx = titleRect.bottom - pocketRect.top + titleGap
      pocket.style.setProperty('--about-app-shelf-top', `${shelfTopPx}px`)

      const desc = pocket.querySelector('.about-app-desc')
      const shelf = pocket.querySelector('.about-app-shelf-wrap')
      if (desc && shelf) {
        const restGap =
          desc.getBoundingClientRect().bottom -
          shelf.getBoundingClientRect().top
        const liftPx = Math.max(70.539, restGap + 14)
        pocket.style.setProperty('--about-app-lift', `${liftPx}px`)
      }
    }

    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(title)
    return () => ro.disconnect()
  }, [enabled, pocketRef, titleRef])
}

export default function AppCard({ app }: { app: App }) {
  const isLive = app.status === 'live' && app.href
  const pocketRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const pocketClass = cn(
    'about-app-pocket',
    app.status === 'coming-soon' && 'about-app-pocket--soon',
  )
  const shelf = <AppShelf isLive={!!isLive} />

  usePocketMetrics(pocketRef, titleRef, true)

  if (isLive) {
    return (
      <article className="about-app-item">
        <div ref={pocketRef} className={pocketClass}>
          <Link
            href={app.href!}
            target="_blank"
            rel="noopener noreferrer"
            className="about-app-card group outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`${app.title}（App Store で開く）`}
          >
            <AppCardContents app={app} titleRef={titleRef} />
          </Link>
          {shelf}
        </div>
      </article>
    )
  }

  return (
    <article className="about-app-item">
      <div ref={pocketRef} className={pocketClass}>
        <div className="about-app-card about-app-card--static">
          <AppCardContents app={app} titleRef={titleRef} />
        </div>
        {shelf}
      </div>
    </article>
  )
}
