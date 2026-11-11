'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const ROTATE_MS = 5500
const SWIPE_THRESHOLD = 48

type ProjectCarouselProps = {
  images: string[]
  alt: string
}

export default function ProjectCarousel({ images, alt }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const suppressClick = useRef(false)

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length)
    },
    [images.length],
  )

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || images.length <= 1) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, ROTATE_MS)

    return () => window.clearInterval(id)
  }, [paused, images.length])

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current
    const end = event.changedTouches[0]?.clientX
    touchStartX.current = null
    if (start == null || end == null) return
    const delta = end - start
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    suppressClick.current = true
    if (delta < 0) goNext()
    else goPrev()
    window.setTimeout(() => {
      suppressClick.current = false
    }, 300)
  }

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-muted/20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClickCapture={(event) => {
        if (suppressClick.current) {
          event.preventDefault()
          event.stopPropagation()
        }
      }}
    >
      {images.map((src, imageIndex) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — screenshot ${imageIndex + 1}`}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 50vw"
          className={cn(
            'absolute inset-0 object-cover object-top transition-opacity duration-700',
            imageIndex === index
              ? 'z-10 opacity-100'
              : 'pointer-events-none z-0 opacity-0 invisible',
          )}
          priority={imageIndex === 0}
        />
      ))}

      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex justify-center gap-1.5">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Show screenshot ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            className={cn(
              'pointer-events-auto h-1.5 w-1.5 rounded-full bg-foreground/25 transition-colors',
              dotIndex === index && 'bg-foreground/70',
            )}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setIndex(dotIndex)
            }}
          />
        ))}
      </div>
    </div>
  )
}
