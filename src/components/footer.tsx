import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center justify-between gap-4 py-10 px-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Ukir-. The source code is available on GitHub.
          </p>
        </div>
        <div className="flex items-center space-x-4 md:mr-16">
          <Link href="mailto:aba929559@gmail.com" className="text-gray-500 hover:text-gray-700">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          {/* <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link> */}
          <Link href="https://github.com/ukir-rrrr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

