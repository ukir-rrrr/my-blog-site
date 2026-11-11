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
      '/projects/youme-taiyo/02-shops.webp',
      '/projects/youme-taiyo/03-about.webp',
      '/projects/youme-taiyo/04-map.webp',
      '/projects/youme-taiyo/05-stores.webp',
    ],
  },
]
