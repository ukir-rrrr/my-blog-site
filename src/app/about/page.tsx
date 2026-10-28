import Image from 'next/image'
import Layout from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout
      mainClassName="mx-auto w-full max-w-none flex flex-1 flex-col px-6 py-6 md:px-12 md:py-8 lg:px-16"
    >
      <div className="about-quiet relative flex min-h-[calc(100dvh-11rem)] flex-1 flex-col justify-between gap-10 md:min-h-[calc(100dvh-10rem)] md:gap-0">
        <div className="flex flex-1 items-center justify-center md:pb-36 lg:pb-44">
          <Image
            src="/C5.png"
            alt="Ukir- character illustration"
            width={280}
            height={280}
            priority
            className="h-auto w-[220px] rounded-2xl sm:w-[260px] md:w-[280px]"
          />
        </div>

        <div className="max-w-xl pb-2 text-left md:absolute md:bottom-8 md:left-6 md:pb-0 lg:bottom-10 lg:left-10 lg:max-w-2xl">
          <p className="text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Getting better is the point.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-5 md:max-w-lg md:text-[0.95rem] md:leading-7">
            できないことができるようになる。知らなかったことを知って、さらに力をつける。エンジニアリングはまだまだ勉強中で、それでも学びながら、小さなプロダクトを積み上げています。
          </p>
        </div>
      </div>

      <span id="contact" className="sr-only" tabIndex={-1}>
        Contact
      </span>
    </Layout>
  )
}
