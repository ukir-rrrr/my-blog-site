import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <div className={`relative min-h-dvh bg-background ${inter.className}`}>
      <Header />

      <main>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Image
            src="/C5.png"
            alt="Ukir character illustration"
            width={2000}
            height={2000}
            priority
            className="h-auto w-[min(18rem,58vw)] max-h-[42vh] rounded-[1.75rem] object-contain"
          />
        </div>

        <section className="absolute bottom-8 left-6 z-10 max-w-[min(36rem,calc(100%-3rem))] sm:bottom-12 sm:left-12">
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Getting better is the point.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground sm:max-w-lg sm:text-[15px]">
            できないことができるようになる。知らなかったことを知って、さらに力をつける。エンジニアリングはまだまだ勉強中で、それでも学びながら、小さなプロダクトを積み上げています。
          </p>
        </section>
      </main>
    </div>
  )
}
