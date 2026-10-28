import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
  mainClassName,
}: {
  children: React.ReactNode
  mainClassName?: string
}) {
  return (
    <div className={`min-h-screen flex flex-col bg-background ${inter.className}`}>
      <Header />
      <main
        className={cn('container mx-auto flex-1 px-4 py-8', mainClassName)}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

