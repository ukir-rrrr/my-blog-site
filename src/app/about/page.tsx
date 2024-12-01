import Contact from '@/components/contact'
import CareerTimeline from '@/components/career'
import Introduction from '@/components/introduction'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Layout from '@/components/layout'



export default function Home() {
  return (
    <Layout>
      <Introduction />
      <div id="career">
        <CareerTimeline />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  )
}

