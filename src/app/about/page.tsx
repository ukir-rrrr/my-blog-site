import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Layout from '@/components/layout'

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
          className="about-quiet-scroll-hint pointer-events-none absolute bottom-8 right-0 text-muted-foreground/55 md:bottom-10"
          aria-hidden
        >
          <ChevronDown className="about-quiet-bounce-arrow h-5 w-5 stroke-[1.75]" />
        </div>
      </div>

      <span id="contact" className="sr-only" tabIndex={-1}>
        Contact
      </span>
    </Layout>
  )
}
