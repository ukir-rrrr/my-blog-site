import Image from 'next/image'
import Layout from '@/components/layout'

function AboutFallingBaseball() {
  return (
    <svg
      className="h-9 w-9 shrink-0"
      viewBox="0 0 44 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 8 C12 14 13 20 14 26"
        stroke="#0a0a0a"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <path
        d="M16 6 C18 13 19 19 20 25"
        stroke="#0a0a0a"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M22 6 C22 13 22 19 22 25"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 6 C27 13 25 19 24 25"
        stroke="#0a0a0a"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M34 8 C32 14 30 20 28 26"
        stroke="#0a0a0a"
        strokeWidth="2.25"
        strokeLinecap="round"
      />

      <circle cx="22" cy="42" r="11.5" fill="#ffffff" stroke="#0a0a0a" strokeWidth="2" />
      <path
        d="M12.5 42 C15 34 19 30 22 30 C25 30 29 34 31.5 42"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M12.5 42 C15 50 19 54 22 54 C25 54 29 50 31.5 42"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M14 36 L15.2 37.4 M17 33.5 L18.1 35 M20.5 32 L21.4 33.6 M24 32 L24.9 33.6 M27 33.5 L28.1 35 M30 36 L31.2 37.4"
        stroke="#b91c1c"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M14 48 L15.2 46.6 M17 50.5 L18.1 49 M20.5 52 L21.4 50.4 M24 52 L24.9 50.4 M27 50.5 L28.1 49 M30 48 L31.2 46.6"
        stroke="#b91c1c"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
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
      className="h-[2.125rem] w-[2.125rem] shrink-0 text-black dark:text-black"
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
          <div className="about-quiet-bounce-arrow flex items-end gap-1.5 sm:gap-2">
            <AboutFallingBaseball />
            <AboutTripleChevron />
          </div>
        </div>
      </div>

      <span id="contact" className="sr-only" tabIndex={-1}>
        Contact
      </span>
    </Layout>
  )
}
