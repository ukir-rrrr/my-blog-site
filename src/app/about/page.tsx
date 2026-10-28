import Image from 'next/image'
import Layout from '@/components/layout'

function AboutBaseballBall() {
  return (
    <svg
      className="-mt-3 h-14 w-14 shrink-0"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="32" cy="32" r="27" fill="#ffffff" stroke="#0a0a0a" strokeWidth="2.5" />
      <path
        d="M14 32 C20 12 44 12 50 32"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="1.6 2.4"
      />
      <path
        d="M14 32 C20 52 44 52 50 32"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="1.6 2.4"
      />
      <path
        d="M32 7 C24 18 24 46 32 57"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="1.6 2.4"
      />
      <path
        d="M32 7 C40 18 40 46 32 57"
        stroke="#0a0a0a"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="1.6 2.4"
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
          <div className="about-quiet-bounce-arrow flex flex-col items-center">
            <AboutTripleChevron />
            <AboutBaseballBall />
          </div>
        </div>
      </div>

      <span id="contact" className="sr-only" tabIndex={-1}>
        Contact
      </span>
    </Layout>
  )
}
