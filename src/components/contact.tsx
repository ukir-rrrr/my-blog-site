import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">↓↓↓↓</p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:aba929559@gmail.com" className="text-orange-500 hover:text-orange-300">
          <Mail className="inline mr-1" size={24} />
          Email
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-300">
          <Linkedin className="inline mr-1" size={24} />
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-300">
          <Github className="inline mr-1" size={24} />
          GitHub
        </a>
      </div>
    </section>
  )
}

