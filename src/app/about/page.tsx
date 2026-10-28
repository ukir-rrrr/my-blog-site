import Image from 'next/image'
import Layout from '@/components/layout'

function AboutBaseballBall() {
  return (
    <svg
      className="h-14 w-14 shrink-0"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#000000" strokeWidth="4" />
      <path
        d="M 22 18 C 48 35, 48 65, 22 82"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 78 18 C 52 35, 52 65, 78 82"
        fill="none"
        stroke="#000000"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <g stroke="#000000" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M28 24 l6 4" />
        <path d="M32 30 l6 3" />
        <path d="M35 37 l6 2" />
        <path d="M36 44 l6 1" />
        <path d="M36 51 l6 -1" />
        <path d="M35 58 l6 -2" />
        <path d="M32 65 l6 -3" />
        <path d="M28 72 l6 -4" />
      </g>
      <g stroke="#000000" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M72 24 l-6 4" />
        <path d="M68 30 l-6 3" />
        <path d="M65 37 l-6 2" />
        <path d="M64 44 l-6 1" />
        <path d="M64 51 l-6 -1" />
        <path d="M65 58 l-6 -2" />
        <path d="M68 65 l-6 -3" />
        <path d="M72 72 l-6 -4" />
      </g>
    </svg>
  )
}

function AboutTripleChevron() {
  const chevrons = [
    { y: 10 },
    { y: 30 },
    { y: 50 },
  ]

  return (
    <svg
      className="h-[4.5rem] w-[3.5rem] shrink-0 text-black dark:text-black"
      viewBox="0 0 56 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {chevrons.map(({ y }) => (
        <path
          key={y}
          d={`M8 ${y + 6} L28 ${y + 18} L48 ${y + 6}`}
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

export default function AboutPage() {
  return (
    <Layout
      mainClassName="mx-auto w-full max-w-none flex flex-1 flex-col px-4 py-6 md:py-8"
    >
      <div className="about-quiet relative flex min-h-[calc(100dvh-11rem)] flex-1 flex-col justify-between gap-10 md:min-h-[calc(100dvh-10rem)] md:gap-0">
        <div className="flex flex-1 items-center justify-center md:pb-36 lg:pb-44">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/C5.png"
              alt="Ukir- character illustration"
              width={280}
              height={280}
              priority
              className="h-auto w-[220px] rounded-2xl sm:w-[260px] md:w-[280px]"
            />
            <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:mt-5 sm:text-4xl">
              Ukir←
            </p>
            <p className="mt-1 text-base text-muted-foreground sm:text-lg">
              Web Developer
            </p>
          </div>
        </div>

        <div className="about-quiet-copy max-w-[19rem] pb-2 text-left sm:max-w-[21rem] md:absolute md:bottom-8 md:left-0 md:max-w-[22rem] md:pb-0 lg:bottom-10 lg:max-w-[23rem]">
          <p className="text-[1.75rem] font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[1.875rem] md:text-[2rem]">
            Getting better is the point.
          </p>
          <p className="mt-2 text-[0.8125rem] leading-[1.45] text-muted-foreground sm:text-[0.84375rem] sm:leading-[1.5] md:mt-2.5">
            できないことができるようになる。知らなかったことを知って、さらに力をつける。エンジニアリングはまだまだ勉強中で、それでも学びながら、プロダクトを積み上げています。
          </p>
        </div>

        <div
          className="about-quiet-scroll-hint pointer-events-none absolute bottom-8 right-0 md:bottom-10"
          aria-hidden
        >
          <div className="about-quiet-bounce-arrow flex flex-col items-center gap-2.5">
            <AboutTripleChevron />
            <AboutBaseballBall />
          </div>
        </div>
      </div>

      <section
        className="about-featured-work border-t border-border/40 pb-24 pt-20 md:pb-32 md:pt-28"
        aria-label="Featured work"
      >
        <p className="text-center font-mono text-sm tracking-wide text-muted-foreground">
          /* Featured Work */
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {[0, 1].map((index) => (
            <article key={index} className="flex flex-col gap-4">
              <div
                className="aspect-[4/3] w-full rounded-xl border border-border/50 bg-muted/25"
                aria-hidden
              />
              <div className="space-y-3" aria-hidden>
                <div className="h-3 w-16 rounded-full bg-muted/70" />
                <div className="h-6 w-2/5 max-w-[12rem] rounded-md bg-muted/80" />
                <div className="space-y-2">
                  <div className="h-2.5 w-full max-w-md rounded bg-muted/45" />
                  <div className="h-2.5 w-4/5 max-w-sm rounded bg-muted/40" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <span id="contact" className="sr-only" tabIndex={-1}>
        Contact
      </span>
    </Layout>
  )
}
