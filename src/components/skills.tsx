export default function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'DynamoDB', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Git', 'GraphQL'
  ]

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full border border-emerald-600/30 bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-1 text-sm text-white shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

