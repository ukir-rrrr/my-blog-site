export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  href: string
  images: string[]
}

export const projects: Project[] = [
  {
    slug: 'youme-taiyo',
    title: '夢・太陽',
    description:
      '世田谷・三軒茶屋と下北沢の4店舗を案内する飲食グループ公式サイト。水彩イラストと店舗・地図情報をまとめた構成です。',
    tags: ['Website'],
    href: 'https://www.youme-taiyo.com/',
    images: [
      '/projects/youme-taiyo/01-hero.webp',
      '/projects/youme-taiyo/02-section.webp',
      '/projects/youme-taiyo/03-section.webp',
      '/projects/youme-taiyo/04-section.webp',
      '/projects/youme-taiyo/05-section.webp',
    ],
  },
  {
    slug: 'onnaton',
    title: '恩納豚',
    description:
      '沖縄・那覇の完全予約制しゃぶしゃぶ専門店の公式サイト。あぐー豚と特選石垣牛のコースや店舗情報を案内しています。',
    tags: ['Website'],
    href: 'https://www.onnaton.com/',
    images: [
      '/projects/onnaton/01-hero.webp',
      '/projects/onnaton/02-section.webp',
      '/projects/onnaton/03-section.webp',
      '/projects/onnaton/04-section.webp',
      '/projects/onnaton/05-section.webp',
    ],
  },
]
