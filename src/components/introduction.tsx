import Image from 'next/image'

export default function Introduction() {
  const description = [
    "2024年3月に名古屋のシステム開発会社に入社し、Webエンジニアとして新たな挑戦をスタートしました。",
    "フロントエンド開発を中心に、モダンな技術スタックを活用しながら",
    "世の中にインパクトを与えるサービスを提供できるエンジニアを目指しています。"
  ]
  return (
    <section className="text-center mb-16">
      <Image
        src="/C5.png"
        alt="Profile Picture"
        width={250}
        height={250}
        className="rounded-2xl mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Ukir-</h1>
      <p className="text-xl text-gray-600 mb-4">Web Developer</p>
      <div className="max-w-4xl mx-auto space-y-3">
        {description.map((line, index) => (
          <p key={index} className="mb-2">{line}</p>
        ))}
      </div>
    </section>
  )
}

