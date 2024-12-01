export default function CareerTimeline() {
  const careerItems = [
    {
      title: "Web Developer | 名古屋システム開発会社",
      period: "2024.3 - now"
    },
    {
      title: "ファッションアドバイザー | 紳士服専門店",
      period: "2016.4 - 2023.6"
    },
    {
      title: "高校卒業(高校野球に青春を捧げる)",
      period: "2016.3"
    }
  ]

  return (
    <section className="mb-16">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Career</h2>
        <ul className="space-y-3">
          {careerItems.map((item, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-base">
                {item.title}
                <span className="text-muted-foreground">({item.period})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

