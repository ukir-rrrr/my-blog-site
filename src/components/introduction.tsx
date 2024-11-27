import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="text-center mb-16">
      <Image
        src="/C5.png"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Ukir-</h1>
      <p className="text-xl text-gray-600 mb-4">Web Developer</p>
      <p className="max-w-2xl mx-auto">
        エンジニアになりました
      </p>
    </section>
  )
}

